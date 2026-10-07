// Coach mode: Stockfish 19 (lite, offline WASM in a Blob worker) + heuristic English explanations,
// 3D candidate arrows, "hint only", FEN/PGN export/import, practice positions, quick analysis.
import * as THREE from 'three';
import { api, hooks, loadState, setMode, speak } from './main3d.js';
import { sfx } from './audio.js';
import { toFen, parseFen, toPgn, parsePgn, sanOf, uciToMove, moveToUci, sqName, gameMoves } from './fen.js';
import PRESETS from './presets.json';
import { vary, cap, deSan as deSanT, moveText, moveLabel, evalText, inMoves, dropWords, np } from './talk.js';
import { reasonText, reasonsText, hintText } from './reasons.js';

const GC = window.GardenChess;
const V = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 };
const NOM = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
const ACC = NOM;
const den = t => 'the ' + ACC[t];
const der = t => 'the ' + NOM[t];
const dein = t => 'your ' + NOM[t];
const deinA = t => 'your ' + ACC[t];
const opp = c => (c === 'w' ? 'b' : 'w');
export const deSan = deSanT;
const $ = id => document.getElementById(id);

// ---------------------------------------------------------------- engine
const engine = { worker: null, ready: false, failed: false, loading: null, busy: false, queue: Promise.resolve(), name: 'Stockfish 19 (lite)' };

function loadScript(src) {
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('load ' + src)); document.head.appendChild(s); });
}
function initEngine() {
  if (engine.loading) return engine.loading;
  engine.loading = (async () => {
    try {
      if (!window.GBC_SF_SRC) await loadScript('js/stockfish-src.js');
      const url = URL.createObjectURL(new Blob([window.GBC_SF_SRC], { type: 'application/javascript' }));
      const w = new Worker(url);
      engine.worker = w;
      await new Promise((res, rej) => {
        const to = setTimeout(() => rej(new Error('timeout')), 20000);
        const onMsg = e => { if (String(e.data).startsWith('readyok')) { clearTimeout(to); w.removeEventListener('message', onMsg); res(); } };
        w.addEventListener('message', onMsg);
        w.addEventListener('error', e => { clearTimeout(to); rej(e); });
        w.postMessage('uci'); w.postMessage('setoption name Hash value 32'); w.postMessage('isready');
      });
      engine.ready = true;
    } catch (e) {
      console.info('[Coach] Stockfish unavailable – using built-in engine.', e && e.message);
      engine.failed = true; engine.name = 'Grok coach engine (built-in)';
      try { engine.worker && engine.worker.terminate(); } catch (_) {}
      engine.worker = null;
    }
    return engine.ready;
  })();
  return engine.loading;
}

// Analyse a FEN. Returns { lines: [{ uci, scoreCp, mate, pv }], depth } with scores from the side to move.
function analyse(fen, { multipv = 3, movetime = 1500, depth = null } = {}) {
  const job = engine.queue.then(() => new Promise(resolve => {
    const w = engine.worker;
    const lines = {}; let maxDepth = 0;
    const onMsg = e => {
      const s = String(e.data);
      if (s.startsWith('info') && s.includes(' pv ')) {
        const d = +(s.match(/ depth (\d+)/) || [])[1] || 0;
        const k = +(s.match(/ multipv (\d+)/) || [0, 1])[1];
        const cp = s.match(/ score cp (-?\d+)/), mt = s.match(/ score mate (-?\d+)/);
        const pv = s.split(' pv ')[1].trim().split(' ');
        if (s.includes('lowerbound') || s.includes('upperbound')) return;
        lines[k] = { uci: pv[0], pv, scoreCp: cp ? +cp[1] : null, mate: mt ? +mt[1] : null, depth: d };
        maxDepth = Math.max(maxDepth, d);
      } else if (s.startsWith('bestmove')) {
        w.removeEventListener('message', onMsg);
        const out = Object.keys(lines).sort((a, b) => a - b).map(k => lines[k]);
        if (!out.length) { const bm = s.split(' ')[1]; if (bm && bm !== '(none)') out.push({ uci: bm, pv: [bm], scoreCp: 0, mate: null }); }
        resolve({ lines: out, depth: maxDepth });
      }
    };
    w.addEventListener('message', onMsg);
    w.postMessage('ucinewgame'); w.postMessage(`setoption name MultiPV value ${multipv}`);
    w.postMessage('position fen ' + fen);
    w.postMessage(depth ? `go depth ${depth}` : `go movetime ${movetime}`);
  }));
  engine.queue = job.catch(() => {});
  return job;
}

// Fallback engine (only if Stockfish can't start): iterative deepening alpha-beta + quiescence + MVV/LVA ordering, ~1.2 s
function fallbackAnalyse(st, { multipv = 3, ms = 1200 } = {}) {
  const PST_C = (r, c) => 3.5 - Math.max(Math.abs(3.5 - r), Math.abs(3.5 - c));
  const evalSide = s => { let v = 0; for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) { const p = s.board[r][c]; if (!p) continue; const pv = (p.type === 'k' ? 0 : V[p.type] * 100) + (p.type === 'n' || p.type === 'b' ? PST_C(r, c) * 6 : 0) + (p.type === 'p' ? (p.color === 'w' ? 6 - r : r - 1) * 6 : 0); v += p.color === s.turn ? pv : -pv; } return v; };
  const order = (s, ms_) => ms_.map(m => ({ m, k: (s.board[m.tr][m.tc] ? V[s.board[m.tr][m.tc].type] * 10 - V[s.board[m.fr][m.fc].type] : 0) + (m.promotion ? 80 : 0) + (m.givesCheck ? 5 : 0) })).sort((a, b) => b.k - a.k).map(x => x.m);
  const t0 = performance.now(); let stop = false;
  const lite = s => ({ ...s, history: [] });
  function q(s, a, b, d) {
    const stand = evalSide(s); if (stand >= b) return stand; if (stand > a) a = stand; if (d > 6) return stand;
    for (const m of order(s, GC.legalMoves(s).filter(m => m.capture || m.enPassant || m.promotion))) { const v = -q(lite(GC.makeMove(s, m)), -b, -a, d + 1); if (v >= b) return v; if (v > a) a = v; }
    return a;
  }
  function ab(s, depth, a, b, ply) {
    if ((performance.now() - t0) > ms) { stop = true; return 0; }
    const ms_ = GC.legalMoves(s);
    if (!ms_.length) return GC.isInCheck(s.board, s.turn) ? -100000 + ply : 0;
    if (depth <= 0) return q(s, a, b, 0);
    for (const m of order(s, ms_)) { const v = -ab(lite(GC.makeMove(s, m)), depth - 1, -b, -a, ply + 1); if (stop) return 0; if (v >= b) return v; if (v > a) a = v; }
    return a;
  }
  const root = lite(st); let best = order(root, GC.legalMoves(root)).map(m => ({ m, v: 0 })); let depthDone = 0;
  for (let d = 1; d <= 6 && !stop; d++) {
    const res = [];
    for (const { m } of best) { const v = -ab(lite(GC.makeMove(root, m)), d - 1, -1e9, 1e9, 1); if (stop) break; res.push({ m, v }); }
    if (stop) break;
    best = res.sort((a, b) => b.v - a.v); depthDone = d;
  }
  return { depth: depthDone, lines: best.slice(0, multipv).map(({ m, v }) => ({ uci: moveToUci(m), pv: [moveToUci(m)], scoreCp: Math.abs(v) > 90000 ? null : v, mate: Math.abs(v) > 90000 ? Math.sign(v) * Math.ceil((100000 - Math.abs(v)) / 2) : null })) };
}

async function analyseState(st, opts = {}) {
  await initEngine();
  if (engine.ready) return analyse(toFen(st), opts);
  return fallbackAnalyse(st, { multipv: opts.multipv || 3, ms: Math.min(1500, opts.movetime || 1200) });
}

// ---------------------------------------------------------------- board geometry helpers
const inB = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
const DIRS = { b: [[1, 1], [1, -1], [-1, 1], [-1, -1]], r: [[1, 0], [-1, 0], [0, 1], [0, -1]] };
DIRS.q = DIRS.b.concat(DIRS.r);
function attacksFrom(board, r, c) {
  const p = board[r][c]; if (!p) return [];
  const out = [];
  if (p.type === 'p') { const d = p.color === 'w' ? -1 : 1; for (const dc of [-1, 1]) if (inB(r + d, c + dc)) out.push([r + d, c + dc]); }
  else if (p.type === 'n') { for (const [dr, dc] of [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]) if (inB(r + dr, c + dc)) out.push([r + dr, c + dc]); }
  else if (p.type === 'k') { for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) if ((dr || dc) && inB(r + dr, c + dc)) out.push([r + dr, c + dc]); }
  else for (const [dr, dc] of DIRS[p.type]) { let nr = r + dr, nc = c + dc; while (inB(nr, nc)) { out.push([nr, nc]); if (board[nr][nc]) break; nr += dr; nc += dc; } }
  return out;
}
function attackers(board, r, c, color) {
  const out = [];
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { const p = board[i][j]; if (p && p.color === color && attacksFrom(board, i, j).some(([a, b]) => a === r && b === c)) out.push({ r: i, c: j, type: p.type }); }
  return out;
}
const attackedSet = (board, r, c) => new Set(attacksFrom(board, r, c).map(([a, b]) => a * 8 + b));
function materialOf(board, color) { let v = 0; for (const row of board) for (const p of row) if (p && p.type !== 'k') v += (p.color === color ? 1 : -1) * V[p.type]; return v; }

// ---------------------------------------------------------------- explanations
// Returns [{ key, data, text }] – derived only from concrete features of the move / resulting position.
// `data` holds the measured facts (pieces, squares, counts); reasons.js words them (du / they / kid voice).
function explain(st, mv, line, voice = 'du', ctx = {}) {
  const me = st.turn, them = opp(me);
  const legal = GC.legalMoves({ ...st, history: [] }).find(m => m.fr === mv.fr && m.fc === mv.fc && m.tr === mv.tr && m.tc === mv.tc && (m.promotion || 'q') === (mv.promotion || 'q'));
  if (!legal) return [{ key: 'none', data: {}, text: reasonText({ key: 'none' }, voice, ctx) }];
  const piece = st.board[mv.fr][mv.fc];
  const next = GC.makeMove({ ...st, history: [] }, legal);
  const B0 = st.board, B = next.board;
  const SQ = (r, c) => String.fromCharCode(97 + c) + (8 - r);
  const to = SQ(mv.tr, mv.tc);
  const out = []; const add = (key, data = {}) => { if (!out.some(o => o.key === key)) out.push({ key, data }); };
  const fin = list => list.map(o => ({ ...o, text: reasonText(o, voice, ctx) }));
  const status = GC.gameStatus({ ...next, history: [] });
  if (status.type === 'checkmate') return fin([{ key: 'mate', data: { to } }]);
  if (line && line.mate > 1) add('mateN', { n: line.mate, nw: inMoves(line.mate) });
  if (legal.promotion) add('promo', { promo: legal.promotion, to });
  const capT = legal.enPassant ? 'p' : (B0[mv.tr][mv.tc] && B0[mv.tr][mv.tc].type);
  const moverT = piece.type;
  const after = legal.promotion || moverT;
  if (capT) {
    const recapture = attackers(B, mv.tr, mv.tc, them).length > 0;
    if (!recapture) add('hanging', { cap: capT, to });
    else if (V[capT] > V[moverT]) add('winMat', { mover: moverT, cap: capT, to });
    else if (V[capT] === V[moverT]) add('trade', { cap: capT, to, ahead: materialOf(B0, me) >= 2 });
    else add('capture', { cap: capT, to });
  }
  // fork / double attack by the moved piece
  const tgt = [];
  for (const [r, c] of attacksFrom(B, mv.tr, mv.tc)) {
    const p = B[r][c]; if (!p || p.color !== them) continue;
    const defended = attackers(B, r, c, them).length > 0;
    if (p.type === 'k' || V[p.type] > V[after] || (!defended && V[p.type] >= 3)) tgt.push({ type: p.type, sq: SQ(r, c) });
  }
  const moverSafe = (() => { const a = attackers(B, mv.tr, mv.tc, them); if (!a.length) return true; if (a.some(x => V[x.type] < V[after])) return false; return attackers(B, mv.tr, mv.tc, me).length > 0; })();
  const tgtHasK = tgt.some(x => x.type === 'k');
  if (tgt.length >= 2 && (moverSafe || tgtHasK)) {
    const t = tgt.slice().sort((a, b) => V[b.type] - V[a.type]).slice(0, 2);
    add('fork', { piece: after, from: to, t, gabel: tgtHasK || after === 'n' || after === 'p', safe: moverSafe });
  } else if (tgt.length === 1 && tgt[0].type !== 'k' && moverSafe && !capT) add('threat', { piece: after, tgt: tgt[0].type, sq: tgt[0].sq });
  else if (!tgt.length && moverSafe && !capT) {
    // newly over-attacked enemy unit: more of my attackers than its defenders (counted, not guessed)
    for (const [r, c] of attacksFrom(B, mv.tr, mv.tc)) {
      const p = B[r][c]; if (!p || p.color !== them || p.type === 'k') continue;
      const defs = attackers(B, r, c, them);
      const na = attackers(B, r, c, me).length, nd = defs.length;
      const b0 = B0[r][c]; const na0 = b0 && b0.color === them ? attackers(B0, r, c, me).length : 0, nd0 = b0 ? attackers(B0, r, c, them).length : 0;
      if (na > nd && na >= 2 && !(na0 > nd0)) { add('threat', { piece: after, tgt: p.type, sq: SQ(r, c), na, nd, defenders: defs.map(x => x.type) }); break; }
    }
  }
  // check only as its own reason if the fork doesn't already include the king
  if (legal.givesCheck && status.type === 'check' && !(out.some(o => o.key === 'fork') && tgtHasK)) add('check');
  // pins / skewers created by a moved line piece
  if (DIRS[after]) for (const [dr, dc] of DIRS[after]) {
    let r = mv.tr + dr, c = mv.tc + dc, first = null;
    while (inB(r, c)) {
      const p = B[r][c];
      if (p) {
        if (!first) { if (p.color !== them) break; first = { ...p, r, c }; }
        else {
          if (p.color === them) {
            if (p.type === 'k' && first.type !== 'k') add('pin', { pinned: first.type, sq: SQ(first.r, first.c), behind: 'k', abs: true });
            else if (first.type !== 'k' && V[p.type] > V[first.type] && V[p.type] >= 5 && V[first.type] < V[after]) add('pin', { pinned: first.type, sq: SQ(first.r, first.c), behind: p.type, abs: false });
            else if ((first.type === 'k' || first.type === 'q') && first.type !== p.type && V[first.type] > V[p.type] && V[p.type] >= 3 && (attackers(B, r, c, them).length === 0 || V[p.type] > V[after]))
              add('skewer', { front: first.type, back: p.type, sq: SQ(r, c) });
          }
          break;
        }
      }
      r += dr; c += dc;
    }
  }
  // discovered attack / check by another line piece
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const p = B[r][c]; if (!p || p.color !== me || !DIRS[p.type] || (r === mv.tr && c === mv.tc)) continue;
    const before = attackedSet(B0, r, c), now = attacksFrom(B, r, c);
    for (const [a, b] of now) {
      const t = B[a][b]; if (!t || t.color !== them || before.has(a * 8 + b)) continue;
      if (t.type === 'k') add('discCheck', { via: p.type });
      else if (V[t.type] >= 3 && (V[t.type] > V[p.type] || attackers(B, a, b, them).length === 0)) add('discovered', { via: p.type, tgt: t.type, sq: SQ(a, b) });
    }
  }
  if (out.some(o => o.key === 'check') && out.some(o => o.key === 'discCheck')) { out.splice(out.findIndex(o => o.key === 'check'), 1); out.find(o => o.key === 'discCheck').data.double = true; }
  // mate threat (what if the opponent passed?)
  if (status.type !== 'check' && !out.some(o => o.key === 'mateN')) {
    const nullSt = { ...next, turn: me, ep: null, history: [] };
    if (!GC.isInCheck(nullSt.board, them) && GC.legalMoves(nullSt).some(m => { const n2 = GC.makeMove(nullSt, m); return n2 && GC.gameStatus({ ...n2, history: [] }).type === 'checkmate'; })) add('mateThreat');
  }
  // rescue: piece was attacked and is safe now
  const wasAttacked = attackers(B0, mv.fr, mv.fc, them);
  if (moverT !== 'k' && wasAttacked.length && (wasAttacked.some(a => V[a.type] < V[moverT]) || attackers(B0, mv.fr, mv.fc, me).length === 0) && attackers(B, mv.tr, mv.tc, them).length === 0 && !capT)
    add('rescue', { piece: moverT, to });
  // defend: the moved piece newly covers one of my pieces that the opponent attacks and that was under-defended
  if (!capT && !legal.castle) {
    const mine = new Set(attacksFrom(B, mv.tr, mv.tc).map(([a, b]) => a * 8 + b));
    let best = null;
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
      const p = B[r][c]; if (!p || p.color !== me || p.type === 'k' || (r === mv.tr && c === mv.tc) || !mine.has(r * 8 + c)) continue;
      const att = attackers(B, r, c, them); if (!att.length) continue;
      const att0 = attackers(B0, r, c, them); if (!att0.length) continue;
      const def0 = attackers(B0, r, c, me).filter(x => !(x.r === mv.fr && x.c === mv.fc));
      if (attackers(B0, r, c, me).some(x => x.r === mv.fr && x.c === mv.fc)) continue; // it already defended it before
      if (def0.length >= att0.length) continue;
      const a = att.slice().sort((x, y) => V[x.type] - V[y.type])[0];
      if (!best || V[p.type] > V[best.prot]) best = { prot: p.type, psq: SQ(r, c), att: a.type, asq: SQ(a.r, a.c) };
    }
    if (best) add('defend', best);
  }
  if (legal.castle) add('castle', { long: mv.tc < mv.fc });
  if (GC.isInCheck(B0, me) && !capT) add('evade', { king: moverT === 'k' });
  const backRank = me === 'w' ? 7 : 0;
  if ((moverT === 'n' || moverT === 'b') && mv.fr === backRank && st.fullmove <= 15) add('develop', { piece: moverT, to });
  if ((moverT === 'p' || moverT === 'n') && mv.tr >= 3 && mv.tr <= 4 && mv.tc >= 3 && mv.tc <= 4) add('center', { piece: moverT, to });
  if (moverT === 'p' && !capT) {
    const dir = me === 'w' ? -1 : 1; let passed = true;
    for (let r = mv.tr + dir; inB(r, 0); r += dir) for (const dc of [-1, 0, 1]) { const q = inB(r, mv.tc + dc) && B[r][mv.tc + dc]; if (q && q.type === 'p' && q.color === them) passed = false; }
    if (passed && (me === 'w' ? mv.tr <= 3 : mv.tr >= 4)) add('passer', { to });
  }
  if (moverT === 'r' && mv.fc !== mv.tc) { let pawns = 0; for (let r = 0; r < 8; r++) { const q = B[r][mv.tc]; if (q && q.type === 'p') pawns++; } if (!pawns) add('openFile', { file: String.fromCharCode(97 + mv.tc) }); }
  if (moverT === 'k' && !legal.castle && !GC.isInCheck(B0, me)) { let heavy = 0; for (const row of B) for (const q of row) if (q && (q.type === 'q')) heavy++; if (!heavy) add('kingAct'); }
  // quiet improvements (counted squares, no guessing)
  if (!capT && !legal.castle && !legal.promotion) {
    if (moverT === 'p') {
      let bestV = null;
      for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
        const p = B[r][c]; if (!p || p.color !== me || !DIRS[p.type] || p.type === 'r') continue;
        const gain = attacksFrom(B, r, c).length - attacksFrom(B0, r, c).length;
        if (gain >= 2 && (!bestV || (p.type === 'b' && bestV.via !== 'b'))) bestV = { via: p.type, gain };
      }
      if (bestV) add('opens', bestV);
    } else if (moverT !== 'k') {
      const m0 = attacksFrom(B0, mv.fr, mv.fc).length, n1 = attacksFrom(B, mv.tr, mv.tc).length;
      if (n1 >= m0 + 2) add('active', { piece: moverT, to, n: n1, m: m0 });
    }
  }
  if (!out.length) add('quiet');
  out.sort((x, y) => PRIO.indexOf(x.key) - PRIO.indexOf(y.key));
  return fin(out.slice(0, 3));
}

export const PRIO = ['mate', 'mateN', 'fork', 'skewer', 'pin', 'discCheck', 'discovered', 'hanging', 'winMat', 'promo', 'mateThreat', 'threat', 'check', 'rescue', 'defend', 'evade', 'castle', 'trade', 'capture', 'passer', 'openFile', 'kingAct', 'develop', 'center', 'opens', 'active', 'quiet', 'none'];

// ---------------------------------------------------------------- 3D arrows / highlights
let arrowGroup = null;
const ARROW_COLS = [0xb6ff3b, 0x2de2e6, 0xff6ad5];
const ARROW_EI = [2.4, 1.2, 1.0];
const ARROW_OP = [0.95, 0.82, 0.72];
function clearArrows() { if (!arrowGroup) return; for (const ch of [...arrowGroup.children]) { arrowGroup.remove(ch); ch.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); } }
function arrowMesh(fr, fc, tr, tc, i) {
  const x0 = fc - 3.5, z0 = fr - 3.5, x1 = tc - 3.5, z1 = tr - 3.5;
  const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz);
  const w = [0.16, 0.12, 0.11][i], hw = w * 2.2, hl = 0.36, s0 = 0.18, s1 = L - 0.12;
  const sh = new THREE.Shape();
  sh.moveTo(s0, -w / 2); sh.lineTo(s1 - hl, -w / 2); sh.lineTo(s1 - hl, -hw / 2); sh.lineTo(s1, 0); sh.lineTo(s1 - hl, hw / 2); sh.lineTo(s1 - hl, w / 2); sh.lineTo(s0, w / 2); sh.closePath();
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.035, bevelEnabled: false }); geo.rotateX(-Math.PI / 2);
  const col = ARROW_COLS[i];
  const mat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: ARROW_EI[i], transparent: true, opacity: ARROW_OP[i], roughness: 0.4, depthWrite: false });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = 5;
  const g = new THREE.Group(); g.add(m);
  g.position.set(x0, 0.105 + (2 - i) * 0.012, z0); g.rotation.y = Math.atan2(-dz, dx);
  // number badge at the arrow head
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.fillStyle = '#' + col.toString(16).padStart(6, '0'); x.beginPath(); x.arc(32, 32, 28, 0, Math.PI * 2); x.fill();
  x.fillStyle = '#0b0f1a'; x.font = '900 40px system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(i + 1), 32, 35);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.scale.set(0.34, 0.34, 1); sp.position.set(x0 + dx * 0.55, 0.5, z0 + dz * 0.55); sp.renderOrder = 6;
  const holder = new THREE.Group(); holder.add(g, sp);
  return holder;
}
function ringAt(r, c, col = 0xb6ff3b) {
  const m = new THREE.Mesh(new THREE.RingGeometry(0.36, 0.46, 40), new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2.2, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.set(c - 3.5, 0.1, r - 3.5); m.renderOrder = 5; m.userData.pulse = true;
  return m;
}

// ---------------------------------------------------------------- UI helpers
const fmtEval = (line, turn) => {
  if (!line) return '–';
  if (line.mate != null) { const forWhite = (line.mate > 0) === (turn === 'w'); return `Mate in ${Math.abs(line.mate)} for ${forWhite ? 'White' : 'Black'}`; }
  const cpW = (turn === 'w' ? 1 : -1) * line.scoreCp / 100;
  return (cpW > 0 ? '+' : cpW < 0 ? '−' : '±') + Math.abs(cpW).toFixed(1);
};
// who is "du" in the coach panel? always the side to move (vs Grok Bot that is you as White; in PvP whoever is on move)
const oppName = (turn, kid = false) => (api.mode === 'bot' ? 'Grok Bot' : kid ? 'your opponent' : (turn === 'w' ? 'Black' : 'White'));
/** natural-language verdict for the side to move (no numbers) */
const evalVerdict = (line, turn, kid = false) => {
  if (!line) return '';
  return evalText(line.mate != null ? null : line.scoreCp, line.mate, { opp: oppName(turn, kid), kid });
};
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
const scoreFor = (line) => line.mate != null ? (line.mate > 0 ? 100000 - line.mate : -100000 - line.mate) : line.scoreCp;

const BOT_QUIPS = {
  bot: ['You’re asking the coach? I thought we were friends. 🥲', 'The coach is telling you my plans? That’s industrial espionage!', 'Okay, coach, whisper away. I’m not listening anyway. Fine, I am.', 'Getting help is allowed. Winning still isn’t. 😏', 'My lawyer is checking whether this is fair.', 'You two are whispering about me, aren’t you?'],
  pvp: ['Coach alert! The other side, please look away for a moment. 👀', 'I’m staying out of it. But the coach is usually right.', 'Psst, the coach is talking!']
};

// ---------------------------------------------------------------- state
let coachKey = null, lastResult = null, activePreset = null, presetStartFen = null, analysing = false, pulseT = 0;

function stateKey(st) { return toFen(st) + '|' + (st.history ? st.history.length : 0); }

async function askCoach() {
  const st = api.state;
  if (analysing) return;
  if (GC.gameStatus({ ...st, history: [] }).type === 'checkmate' || GC.gameStatus({ ...st, history: [] }).type === 'stalemate') { setOut(`<p class="coach-msg">${esc(vary('over', ['The game is already over. Fancy a new one? Or let’s look back with the quick analysis. 😉', 'There’s nothing left to move, the game is done. How about a quick analysis?']))}</p>`); return; }
  const hintOnly = $('chkHintOnly') && $('chkHintOnly').checked;
  analysing = true; const btn = $('btnCoach'); if (btn) { btn.disabled = true; btn.textContent = '🧠 Coach is thinking …'; }
  setOut(`<p class="coach-msg">${esc(vary('busy', ['One moment, let me take a look …', 'Let me think for a second …', 'Okay, I’m looking at the position …']))}</p>`);
  const key = stateKey(st);
  if (Math.random() < 0.7) setTimeout(() => { const L = BOT_QUIPS[api.mode === 'bot' ? 'bot' : 'pvp']; speak(vary('quip-' + api.mode, L), api.mode === 'bot' ? 'think' : 'happy', true); }, 250);
  try {
    const res = await analyseState(st, { multipv: 3, movetime: 1400 });
    if (stateKey(api.state) !== key) { setOut('<p class="coach-msg">Oh, the position just changed. Just ask me again.</p>'); return; }
    const best = res.lines[0] ? scoreFor(res.lines[0]) : 0;
    const cands = res.lines.map(l => ({ l, mv: uciToMove(l.uci) })).filter(x => x.mv)
      .filter((x, i) => i === 0 || best - scoreFor(x.l) <= 250); // only sensible alternatives
    const items = cands.map((x, i) => ({ ...x, san: sanOf(st, x.mv), reasons: explain(st, x.mv, x.l, 'du', { N: oppName(st.turn) }), i }));
    lastResult = { key, items, depth: res.depth, turn: st.turn };
    coachKey = key;
    render(items, res.depth, st.turn, hintOnly);
    sfx.chirp && sfx.chirp();
  } catch (e) {
    console.warn('[Coach]', e); setOut('<p class="coach-msg">Oops, I got tangled up there. Please try again.</p>');
  } finally {
    analysing = false; if (btn) { btn.disabled = false; btn.textContent = '🎓 Best move?'; }
  }
}

function render(items, depth, turn, hintOnly) {
  clearArrows();
  if (!items.length) { setOut('<p class="coach-msg">There are no legal moves left here.</p>'); return; }
  const top = items[0];
  const kidsMode = !!api.settings.coachKids;
  // big line = words only; the precise number lives in the small engine line
  const evalLine = kidsMode
    ? `<div class="coach-eval"><b>${esc(evalVerdict(top.l, turn, true))}</b></div>`
    : `<div class="coach-eval"><b>${esc(evalVerdict(top.l, turn))}</b><small>${esc(fmtEval(top.l, turn))} · ${esc(engine.name)} · depth ${depth || '?'}</small></div>`;
  if (hintOnly) {
    const st = api.state, p = st.board[top.mv.fr][top.mv.fc];
    const motif = top.reasons[0] ? top.reasons[0].key : 'quiet';
    const txt = hintText(p.type, sqName(top.mv.fr, top.mv.fc), motif, kidsMode);
    arrowGroup.add(ringAt(top.mv.fr, top.mv.fc));
    setOut(evalLine + `<p class="coach-hint">💡 ${esc(txt)}</p><button type="button" class="btn small" id="btnRevealMove">Show move</button>`);
    $('btnRevealMove').addEventListener('click', () => render(items, depth, turn, false));
    return;
  }
  items.forEach((it, i) => arrowGroup.add(arrowMesh(it.mv.fr, it.mv.fc, it.mv.tr, it.mv.tc, i)));
  const ctx = { N: oppName(turn) };
  const list = items.map((it, i) => {
    const why = kidsMode ? reasonText(it.reasons[0] || { key: 'quiet' }, 'kid') : it.reasons.slice(0, 2).map(r => r.text).join(' ');
    const head = kidsMode ? esc(cap(moveLabel(it.san, true))) : `${esc(cap(moveLabel(it.san)))} <span class="san">(${esc(deSan(it.san))})</span>`;
    return `<li class="cand c${i}"><span class="dot"></span><b>${head}</b> ${kidsMode ? '' : `<em>${esc(fmtEval(it.l, turn))}</em>`}<br><span class="why">${esc(why)}</span></li>`;
  }).join('');
  setOut(evalLine + `<ol class="coach-list">${list}</ol>`);
}
function setOut(html) { const o = $('coachOut'); if (o) { o.innerHTML = html; o.hidden = false; } }

// ---------------------------------------------------------------- FEN / PGN dialog
function copyText(text) {
  const fallback = () => {
    const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; } ta.remove(); return ok;
  };
  if (navigator.clipboard && window.isSecureContext !== false) return navigator.clipboard.writeText(text).then(() => true).catch(() => fallback());
  return Promise.resolve(fallback());
}
function openDialog(id) { const o = $(id); if (o) o.classList.add('open'); }
function closeDialog(id) { const o = $(id); if (o) o.classList.remove('open'); }
function flash(el, msg) { if (!el) return; const old = el.dataset.label || el.textContent; el.dataset.label = old; el.textContent = msg; setTimeout(() => { el.textContent = old; }, 1400); }

function exportPosition() {
  const st = api.state;
  const s = GC.gameStatus({ ...st, history: [] });
  const res = s.type === 'checkmate' ? (s.winner === 'w' ? '1-0' : '0-1') : (s.type === 'stalemate' || s.type === 'draw') ? '1/2-1/2' : '*';
  const fen = toFen(st), pgn = toPgn(st, { white: api.mode === 'bot' ? 'You' : 'White', black: api.mode === 'bot' ? 'Grok Bot' : 'Black', result: res });
  $('fenOut').value = fen; $('pgnOut').value = pgn;
  openDialog('fenOverlay');
  copyText(fen + '\n\n' + pgn).then(ok => { $('copyStatus').textContent = ok ? '✅ FEN + PGN copied to the clipboard.' : 'Clipboard blocked (file://) – please select and copy below.'; });
}
function importPosition() {
  const raw = $('fenIn').value.trim(); const err = $('fenErr'); err.textContent = '';
  if (!raw) { err.textContent = 'Please paste a FEN or a PGN first.'; return; }
  const looksPgn = /\[\w+\s+"/.test(raw) || /^\s*1\.\s*\S/.test(raw) || /\d+\.\s*[a-hNBRQKO]/.test(raw) && raw.split('/').length < 8;
  if (looksPgn) {
    const r = parsePgn(raw);
    if (r.error) { err.textContent = '⚠️ ' + r.error; return; }
    closeDialog('loadOverlay'); activePreset = null; clearCoach();
    loadState(r.state, { sans: r.sans });
    speak(vary('pgnLoaded', [`Game loaded, ${r.sans.length} half-moves. ${r.state.turn === 'w' ? 'White' : 'Black'} to move.`, `Got the game, ${r.sans.length} half-moves. Now it’s ${r.state.turn === 'w' ? 'White' : 'Black'} to move.`]), 'happy');
    return;
  }
  const r = parseFen(raw);
  if (r.error) { err.textContent = '⚠️ ' + r.error; return; }
  closeDialog('loadOverlay'); activePreset = null; clearCoach();
  loadState(r.state);
  if (r.status && (r.status.type === 'checkmate' || r.status.type === 'stalemate')) speak(r.status.type === 'checkmate' ? 'Loaded. But that’s already checkmate. 😅' : 'Loaded. That’s already stalemate, though.', 'think');
}

// ---------------------------------------------------------------- presets
function presetMenuHtml() {
  const groups = {};
  for (const p of PRESETS) (groups[p.group] = groups[p.group] || []).push(p);
  return Object.entries(groups).map(([g, list]) => `<div class="preset-group"><h4>${esc(g)}</h4>${list.map(p => `<button type="button" class="preset" data-preset="${p.id}"><b>${esc(p.title)}</b><span>${esc(p.task)}</span></button>`).join('')}</div>`).join('');
}
function loadPreset(id) {
  const p = PRESETS.find(x => x.id === id); if (!p) return;
  const r = parseFen(p.fen); if (r.error) { console.warn('preset', id, r.error); return; }
  closeDialog('presetOverlay'); clearCoach();
  if (r.state.turn === 'b' && api.mode === 'bot') setMode('pvp', false); // the bot always plays Black → Black-to-move puzzles run in player-vs-player mode
  loadState(r.state, { quiet: true });
  activePreset = p; presetStartFen = toFen(r.state);
  speak(vary('presetIntro', [`New puzzle: ${p.title}. ${p.task}`, `${p.title}! ${p.task} You can do it.`, `Okay, ${p.title}. ${p.task}`]), 'think');
  setOut(`<div class="preset-card"><div class="preset-title">📚 ${esc(p.group)} · ${esc(p.title)}</div><p class="preset-task">${esc(p.task)}</p><div class="modal-row left"><button type="button" class="btn small" id="btnSolution">Show solution</button></div><p class="preset-sol" id="presetSol" hidden></p><p class="preset-fb" id="presetFb"></p></div>`);
  $('btnSolution').addEventListener('click', () => showSolution(p));
}
function showSolution(p) {
  const el = $('presetSol'); if (!el) return;
  el.hidden = false; el.textContent = `The solution is ${moveText(p.solution[0])}${p.solution.length > 1 ? ' ' + p.solution.slice(1).map(deSan).join(' ') : ''}. ${p.explain}`;
  // arrow for the solution move from the start position
  const r = parseFen(p.fen); if (r.error) return;
  const lm = GC.legalMoves(r.state).find(m => GC.moveToSan(r.state, m).replace(/[+#]/g, '') === p.solution[0].replace(/[+#]/g, ''));
  if (lm && toFen(api.state) === presetStartFen) { clearArrows(); arrowGroup.add(arrowMesh(lm.fr, lm.fc, lm.tr, lm.tc, 0)); }
}
function checkPresetMove(ctx, ev) {
  if (!activePreset) return;
  const st = api.state; const h = st.history || [];
  if (!h.length || toFen(h[0]) !== presetStartFen || h.length !== 1) { if (h.length > 1) return; }
  if (h.length !== 1) return;
  const san = GC.moveToSan({ ...h[0], history: [] }, GC.legalMoves({ ...h[0], history: [] }).find(m => m.fr === ctx.move.fr && m.fc === ctx.move.fc && m.tr === ctx.move.tr && m.tc === ctx.move.tc && (m.promotion || 'q') === (ctx.move.promotion || 'q')) || ctx.move);
  const norm = s => String(s).replace(/[+#?!]/g, '');
  const ok = activePreset.accept.some(a => norm(a) === norm(san)) || (activePreset.anyMate && ev.status.type === 'checkmate');
  const fb = $('presetFb');
  const kid = !!api.settings.coachKids;
  if (ok) {
    const cheer = vary('presetOk', ['Correct!', 'Bullseye!', 'Exactly!', 'Nicely solved!']);
    if (fb) fb.innerHTML = `✅ <b>${esc(cheer)}</b> ${esc(moveText(san, kid))} is exactly the move. ${esc(activePreset.explain)}`;
    speak(vary('presetOkSay', [`${cheer} ${cap(moveLabel(san, kid))} – exactly what I was looking for. 🎉`, `${cheer} With ${moveLabel(san, kid)} you’ve cracked it. 🎉`, `${cheer} That was the solution, great job! 🎉`]), 'happy'); sfx.win && sfx.win();
  } else {
    if (fb) fb.innerHTML = `❌ ${esc(vary('presetNo', [`${cap(moveText(san, kid))} isn’t quite what I was looking for.`, `Hmm, ${moveText(san, kid)} isn’t the solution here.`, `Close: ${moveText(san, kid)} isn’t the move we’re looking for.`]))} Take it back with <kbd>U</kbd> and try again, or show the solution.`;
    setTimeout(() => speak(vary('presetNoSay', ['Hmm, that wasn’t the move I meant. Take it back with U and try again!', 'Almost! But there’s something better. Press U and try again.', 'Not quite. No stress, you can take it back with U.']), 'think'), 900);
  }
}

// ---------------------------------------------------------------- quick analysis
async function quickAnalysis() {
  const st = api.state; const moves = gameMoves(st);
  if (moves.length < 2) { setOut('<p class="coach-msg">For a quick analysis I need at least two moves. Play a little first!</p>'); return; }
  const btn = $('btnAnalyse'); if (btn) { btn.disabled = true; btn.textContent = '⏳ Analyzing …'; }
  try {
    const N = Math.min(moves.length, 80);
    const evals = []; // score from side-to-move perspective before each move, plus final
    const snaps = moves.slice(0, N).map(m => m[0]).concat([moves[N] ? moves[N][0] : st]);
    for (let i = 0; i < snaps.length; i++) {
      setOut(`<p class="coach-msg">Going through the game … position ${i + 1} of ${snaps.length}</p>`);
      const s = snaps[i]; const stt = GC.gameStatus({ ...s, history: [] });
      if (stt.type === 'checkmate') { evals.push({ score: -100000, best: null }); continue; }
      if (stt.type === 'stalemate') { evals.push({ score: 0, best: null }); continue; }
      const r = await analyseState(s, { multipv: 1, movetime: 250, depth: engine.ready ? 11 : null });
      const l = r.lines[0]; evals.push({ score: l ? scoreFor(l) : 0, best: l ? l.uci : null, line: l });
    }
    const mistakes = [];
    for (let i = 0; i < N; i++) {
      const [snap, mv] = moves[i];
      const before = evals[i].score, after = -evals[i + 1].score;
      const clamp = v => Math.max(-1500, Math.min(1500, v));
      const drop = clamp(before) - clamp(after);
      const played = sanOf(snap, mv);
      const bestMv = evals[i].best && uciToMove(evals[i].best);
      const bestSan = bestMv ? sanOf(snap, bestMv) : null;
      if (bestSan && bestSan !== played) mistakes.push({ i, snap, played, bestSan, bestMv, bestLine: evals[i].line, drop, side: snap.turn, no: snap.fullmove });
    }
    const top = mistakes.filter(m => m.drop >= 60).sort((a, b) => b.drop - a.drop).slice(0, 3);
    const kid = !!api.settings.coachKids;
    if (!top.length) { setOut(`<div class="coach-eval"><b>Quick analysis</b></div><p class="coach-msg">${esc(vary('noMistakes', ['No big blunders found. Cleanly played! 👏', 'I can’t find anything bad. A really solid game! 👏', 'Nothing to complain about. Well played! 👏']))}</p>`); return; }
    const label = d => kid ? (d >= 300 ? 'Ouch' : d >= 120 ? 'Not so good' : 'Could be better') : (d >= 300 ? 'Blunder' : d >= 120 ? 'Mistake' : 'Inaccuracy');
    const isBot = side => api.mode === 'bot' && side === 'b';
    const html = top.map(m => {
      let why;
      if (isBot(m.side)) why = vary('anaBot', [`Here Grok Bot should have played ${moveText(m.bestSan, kid)}. I already told it.`, `Grok Bot should have played ${moveText(m.bestSan, kid)}. Psst, don’t tell anyone.`]);
      else {
        const r = m.bestMv ? explain({ ...m.snap, history: [] }, m.bestMv, m.bestLine, kid ? 'kid' : 'du')[0] : null;
        const who = api.mode === 'bot' ? '' : (m.side === 'w' ? 'White: ' : 'Black: ');
        const cost = kid ? '' : (m.drop >= 1200 ? ' That basically cost the game.' : ` That cost ${dropWords(m.drop)}.`);
        why = `${who}${vary('anaBetter', [`Better was ${moveText(m.bestSan, kid)}.`, `Stronger was ${moveText(m.bestSan, kid)}.`, `Here ${moveText(m.bestSan, kid)} was possible.`])}${r ? ' ' + r.text : ''}${cost}`;
      }
      return `<li><b>${m.no}${m.side === 'w' ? '.' : '…'} ${esc(deSan(m.played))}</b> <em>${label(m.drop)}${kid ? '' : ` · −${(m.drop / 100).toFixed(1)}`}</em><br><span class="why">${esc(why)}</span></li>`;
    }).join('');
    setOut(`<div class="coach-eval"><b>Quick analysis</b> <span>${top.length === 1 ? 'The one spot where it tipped' : `The ${top.length} spots where it tipped the most`}</span><small>${esc(engine.name)}</small></div><ol class="coach-list analysis">${html}</ol>`);
  } finally { if (btn) { btn.disabled = false; btn.textContent = '📊 Quick analysis'; } }
}

// ---------------------------------------------------------------- wiring
function clearCoach() { clearArrows(); coachKey = null; lastResult = null; }

export function initCoach() {
  arrowGroup = new THREE.Group(); arrowGroup.name = 'coachArrows';
  api.scene.add(arrowGroup);
  $('btnCoach').addEventListener('click', askCoach);
  $('chkHintOnly').checked = !!api.settings.coachHint;
  $('chkHintOnly').addEventListener('change', () => {
    api.settings.coachHint = $('chkHintOnly').checked; try { localStorage.setItem('gbc-settings-v3', JSON.stringify(api.settings)); } catch (e) {}
    if (lastResult && lastResult.key === stateKey(api.state)) render(lastResult.items, lastResult.depth, lastResult.turn, $('chkHintOnly').checked);
  });
  $('btnExport').addEventListener('click', exportPosition);
  $('btnImport').addEventListener('click', () => { $('fenErr').textContent = ''; openDialog('loadOverlay'); setTimeout(() => $('fenIn').focus(), 50); });
  $('btnPresets').addEventListener('click', () => openDialog('presetOverlay'));
  $('btnAnalyse').addEventListener('click', quickAnalysis);
  $('presetList').innerHTML = presetMenuHtml();
  $('presetList').addEventListener('click', e => { const b = e.target.closest('[data-preset]'); if (b) loadPreset(b.dataset.preset); });
  $('btnFenLoad').addEventListener('click', importPosition);
  $('btnCopyFen').addEventListener('click', e => copyText($('fenOut').value).then(ok => flash(e.target, ok ? 'Copied ✓' : 'Please copy manually')));
  $('btnCopyPgn').addEventListener('click', e => copyText($('pgnOut').value).then(ok => flash(e.target, ok ? 'Copied ✓' : 'Please copy manually')));
  for (const b of document.querySelectorAll('[data-close]')) b.addEventListener('click', () => closeDialog(b.dataset.close));
  for (const id of ['fenOverlay', 'loadOverlay', 'presetOverlay']) $(id).addEventListener('click', e => { if (e.target.id === id) closeDialog(id); });
  for (const el of document.querySelectorAll('#fenOverlay textarea, #loadOverlay textarea')) el.addEventListener('keydown', e => e.stopPropagation()); // typing doesn't trigger game shortcuts
  document.addEventListener('keydown', e => { if (e.key === 'Escape') ['fenOverlay', 'loadOverlay', 'presetOverlay'].forEach(closeDialog); });
  hooks.afterMove.push((ctx, ev) => { const had = !!lastResult; clearCoach(); if (had && !activePreset) setOut(`<p class="coach-msg">${esc(vary('newPos', ['New position. Feel free to ask me again!', 'On we go. If you want, I’ll take another look.', 'New situation on the board. I’m ready when you need me.']))}</p>`); checkPresetMove(ctx, ev); });
  const prevNew = hooks.newGame; hooks.newGame = () => { prevNew && prevNew(); clearCoach(); };
  let lastState = api.state;
  hooks.frame.push(t => {
    if (api.state !== lastState) { lastState = api.state; if (coachKey && coachKey !== stateKey(api.state)) clearCoach(); if (activePreset && (api.state.history || []).length === 0 && toFen(api.state) !== presetStartFen) { activePreset = null; } }
    pulseT = t;
    if (arrowGroup && arrowGroup.children.length) arrowGroup.traverse(o => { if (o.userData && o.userData.pulse) { const k = 0.5 + 0.5 * Math.sin(t * 5); o.material.opacity = 0.55 + 0.4 * k; o.scale.setScalar(1 + 0.08 * k); } });
  });
  // warm up the engine in the background after the scene is up (keeps the first click snappy)
  setTimeout(() => { initEngine(); }, 2500);
  if (window.__gbc) window.__gbc.coach = { askCoach, explain, analyseState, toFen, parseFen, toPgn, parsePgn, loadPreset, presets: PRESETS, engine, quickAnalysis, get lastResult() { return lastResult; }, get activePreset() { return activePreset; }, arrows: () => arrowGroup.children.length };
}

// ---------------------------------------------------------------- shared with the voice/chat coach (coachchat.js)
export function showCoachMoves(st, items, depth, hintOnly) {
  const key = stateKey(st);
  lastResult = { key, items, depth, turn: st.turn }; coachKey = key;
  render(items, depth, st.turn, hintOnly);
}
export function candidatesFor(st, res, maxDrop = 250) {
  const best = res.lines[0] ? scoreFor(res.lines[0]) : 0;
  return res.lines.map(l => ({ l, mv: uciToMove(l.uci) })).filter(x => x.mv).filter((x, i) => i === 0 || best - scoreFor(x.l) <= maxDrop)
    .map((x, i) => ({ ...x, san: sanOf(st, x.mv), reasons: explain(st, x.mv, x.l, 'du', { N: oppName(st.turn) }), i }));
}
export { V, NOM, ACC, den, der, dein, deinA, engine, analyseState, explain, fmtEval, evalVerdict, oppName, scoreFor, clearCoach, stateKey };
