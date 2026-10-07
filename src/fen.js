// FEN / PGN helpers for the coach (export, validated import, PGN replay)
const GC = window.GardenChess;
const FILES = 'abcdefgh';
export const sqName = (r, c) => FILES[c] + (8 - r);

export function toFen(st) {
  const rows = [];
  for (let r = 0; r < 8; r++) {
    let row = '', e = 0;
    for (let c = 0; c < 8; c++) {
      const p = st.board[r][c];
      if (!p) { e++; continue; }
      if (e) { row += e; e = 0; }
      row += p.color === 'w' ? p.type.toUpperCase() : p.type;
    }
    if (e) row += e;
    rows.push(row);
  }
  const cr = st.castling || { w: {}, b: {} };
  let cs = (cr.w.K ? 'K' : '') + (cr.w.Q ? 'Q' : '') + (cr.b.K ? 'k' : '') + (cr.b.Q ? 'q' : '');
  // only list an en-passant square if a capture is actually possible (FIDE / lichess convention)
  let ep = '-';
  if (st.ep && GC.legalMoves({ ...st, history: [] }).some(m => m.enPassant)) ep = sqName(st.ep.r, st.ep.c);
  return `${rows.join('/')} ${st.turn} ${cs || '-'} ${ep} ${st.halfmove || 0} ${st.fullmove || 1}`;
}

// Parse + validate. Returns { state } or { error } (German, friendly)
export function parseFen(text) {
  const f = String(text || '').trim().replace(/\s+/g, ' ');
  if (!f) return { error: 'Please paste a FEN (e.g. from “Copy position” or from lichess).' };
  const parts = f.split(' ');
  if (parts.length < 2) return { error: 'The FEN is incomplete – at least the piece placement and side to move (w/b) are required.' };
  const [pos, turn, cast = '-', epS = '-', hm = '0', fm = '1'] = parts;
  const rows = pos.split('/');
  if (rows.length !== 8) return { error: `The position needs exactly 8 ranks (found: ${rows.length}).` };
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));
  const count = { w: { k: 0, p: 0, all: 0 }, b: { k: 0, p: 0, all: 0 } };
  for (let r = 0; r < 8; r++) {
    let c = 0;
    for (const ch of rows[r]) {
      if (/[1-8]/.test(ch)) { c += +ch; continue; }
      if (!/[prnbqkPRNBQK]/.test(ch)) return { error: `Unknown character “${ch}” in rank ${8 - r}.` };
      if (c > 7) return { error: `Rank ${8 - r} has more than 8 squares.` };
      const color = ch === ch.toUpperCase() ? 'w' : 'b', type = ch.toLowerCase();
      board[r][c++] = { color, type };
      count[color].all++; if (type === 'k') count[color].k++; if (type === 'p') count[color].p++;
      if (type === 'p' && (r === 0 || r === 7)) return { error: 'Pawns cannot stand on the 1st or 8th rank.' };
    }
    if (c !== 8) return { error: `Rank ${8 - r} has ${c} squares instead of 8.` };
  }
  if (count.w.k !== 1 || count.b.k !== 1) return { error: 'Each side needs exactly one king.' };
  if (count.w.p > 8 || count.b.p > 8 || count.w.all > 16 || count.b.all > 16) return { error: 'Too many pieces or pawns for a real game.' };
  if (turn !== 'w' && turn !== 'b') return { error: 'The side to move must be “w” (White) or “b” (Black).' };
  if (!/^(-|[KQkq]{1,4})$/.test(cast)) return { error: 'Invalid castling rights – allowed are e.g. “KQkq” or “-”.' };
  const at = (r, c, color, type) => board[r][c] && board[r][c].color === color && board[r][c].type === type;
  const castling = {
    w: { K: cast.includes('K') && at(7, 4, 'w', 'k') && at(7, 7, 'w', 'r'), Q: cast.includes('Q') && at(7, 4, 'w', 'k') && at(7, 0, 'w', 'r') },
    b: { K: cast.includes('k') && at(0, 4, 'b', 'k') && at(0, 7, 'b', 'r'), Q: cast.includes('q') && at(0, 4, 'b', 'k') && at(0, 0, 'b', 'r') }
  };
  let ep = null;
  if (epS !== '-') {
    if (!/^[a-h][36]$/.test(epS)) return { error: `En passant square “${epS}” is invalid.` };
    const c = FILES.indexOf(epS[0]), r = 8 - +epS[1];
    const ok = turn === 'w' ? (r === 2 && at(3, c, 'b', 'p')) : (r === 5 && at(4, c, 'w', 'p'));
    if (ok) ep = { r, c };
  }
  const st = { ...GC.createGame(), board, turn, castling, ep, halfmove: Math.max(0, parseInt(hm, 10) || 0), fullmove: Math.max(1, parseInt(fm, 10) || 1), history: [], lastMove: null, moveNumber: 0 };
  if (GC.isInCheck(board, turn === 'w' ? 'b' : 'w')) return { error: 'Invalid: the side NOT to move is in check.' };
  const status = GC.gameStatus(st);
  return { state: st, status };
}

export function sanOf(st, mv) {
  const lm = GC.legalMoves({ ...st, history: [] }).find(m => m.fr === mv.fr && m.fc === mv.fc && m.tr === mv.tr && m.tc === mv.tc && (m.promotion || 'q') === (mv.promotion || 'q'));
  return lm ? GC.moveToSan({ ...st, history: [] }, lm) : '?';
}

// list of [snapshotBefore, move] for the whole game (works for loaded positions too)
export function gameMoves(st) {
  const out = [];
  const h = st.history || [];
  for (let i = 0; i < h.length; i++) {
    const mv = i + 1 < h.length ? h[i + 1].lastMove : st.lastMove;
    if (mv) out.push([h[i], mv]);
  }
  return out;
}

export function toPgn(st, { white = 'White', black = 'Black', result = '*' } = {}) {
  const moves = gameMoves(st);
  const start = moves.length ? moves[0][0] : st;
  const startFen = toFen(start);
  const std = startFen.startsWith('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -');
  const d = new Date(), p = n => String(n).padStart(2, '0');
  const tags = [['Event', 'Grok Bot Chess'], ['Site', 'Grok Bot Chess (offline)'], ['Date', `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`], ['White', white], ['Black', black], ['Result', result]];
  if (!std) tags.push(['SetUp', '1'], ['FEN', startFen]);
  let body = '';
  moves.forEach(([snap, mv], i) => {
    const san = sanOf(snap, mv);
    if (snap.turn === 'w') body += `${snap.fullmove}. ${san} `;
    else body += (i === 0 ? `${snap.fullmove}... ` : '') + san + ' ';
  });
  body += result;
  return tags.map(([k, v]) => `[${k} "${v}"]`).join('\n') + '\n\n' + wrap(body.trim(), 78);
}
function wrap(t, n) { const out = []; let line = ''; for (const w of t.split(' ')) { if ((line + ' ' + w).trim().length > n) { out.push(line.trim()); line = w; } else line += ' ' + w; } if (line.trim()) out.push(line.trim()); return out.join('\n'); }

// PGN import: replays SAN moves from the start (or [FEN] tag). Returns { state, sans } or { error }
export function parsePgn(text) {
  const t = String(text || '');
  const fenTag = t.match(/\[FEN\s+"([^"]+)"\]/);
  let st;
  if (fenTag) { const r = parseFen(fenTag[1]); if (r.error) return { error: 'FEN im PGN: ' + r.error }; st = r.state; } else st = GC.createGame();
  const body = t.replace(/\[[^\]]*\]/g, ' ').replace(/\{[^}]*\}/g, ' ').replace(/;[^\n]*/g, ' ');
  let depth = 0, clean = '';
  for (const ch of body) { if (ch === '(') depth++; else if (ch === ')') depth = Math.max(0, depth - 1); else if (!depth) clean += ch; }
  const toks = clean.replace(/\$\d+/g, ' ').replace(/\d+\.(\.\.)?/g, ' ').split(/\s+/).filter(x => x && !/^(1-0|0-1|1\/2-1\/2|\*)$/.test(x));
  if (!toks.length) return { error: 'No moves found in the PGN.' };
  const norm = s => s.replace(/[+#?!]/g, '').replace(/0/g, 'O').replace(/=/, '').replace(/^([NBRQK])/, '$1').replace(/e\.p\./, '');
  const sans = [];
  for (const tok of toks) {
    const want = norm(tok);
    const legal = GC.legalMoves(st);
    const hit = legal.find(m => norm(GC.moveToSan(st, m)) === want) ||
                legal.find(m => { const s = norm(GC.moveToSan(st, m)); return s.replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/, '$1$2') === want.replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/, '$1$2') && legal.filter(o => norm(GC.moveToSan(st, o)).replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/, '$1$2') === want.replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/, '$1$2')).length === 1; });
    if (!hit) return { error: `Move “${tok}” (no. ${Math.floor(sans.length / 2) + 1}) is not possible in this position.` };
    sans.push(GC.moveToSan(st, hit));
    st = GC.makeMove(st, hit);
    if (!st) return { error: `Move “${tok}” could not be played.` };
  }
  return { state: st, sans };
}

// UCI <-> move
export function uciToMove(uci) {
  if (!uci || uci.length < 4) return null;
  const m = { fc: FILES.indexOf(uci[0]), fr: 8 - +uci[1], tc: FILES.indexOf(uci[2]), tr: 8 - +uci[3] };
  if (uci[4]) m.promotion = uci[4];
  return m;
}
export function moveToUci(m) { return sqName(m.fr, m.fc) + sqName(m.tr, m.tc) + (m.promotion && m.promotion !== 'q' ? m.promotion : (m.promotion ? 'q' : '')); }
