// Replay-Kinotrailer: ~10s cinematic highlight replay + optional WebM recording
import * as THREE from 'three';
import { buildPiece } from './pieces3d.js';
import { api, hooks, cinematic, animateHop, explode, sqToWorld, TOP, extraPieceGroups, setTimeScale, BOTNAME, VALUE, addTween, clockNow } from './main3d.js';
import { sfx, getAudioStream } from './audio.js';
import { addIdentity } from './piecelife.js';
import { transformPiece, flyTo } from './transformer.js';

let rp = null; // running replay
const SQ = (r, c) => 'abcdefgh'[c] + (8 - r);

// ---------- highlight selection ----------
function timeline() {
  const hist = api.history.slice();
  const states = hist.concat([api.state]);
  const moves = [];
  for (let i = 1; i < states.length; i++) {
    const lm = states[i].lastMove;
    if (lm) moves.push({ i, before: states[i - 1], after: states[i], m: lm });
  }
  return moves;
}
export function pickHighlights() {
  const moves = timeline();
  if (!moves.length) return [];
  const last = moves[moves.length - 1];
  const status = window.GardenChess.gameStatus({ ...api.state, history: [] });
  const out = [];
  let best = null;
  for (const mv of moves) {
    if (mv === last && status.type === 'checkmate') continue;
    if (!mv.m.captured) continue;
    const v = VALUE[mv.m.captured.type] * 10 + mv.i * 0.01;
    if (!best || v > best.v) best = { ...mv, v };
  }
  if (!best) { // no capture: take the most dramatic check or a promotion, else a midgame move
    best = moves.filter(mv => mv !== last && (mv.m.promotion || mv.m.castle || window.GardenChess.isInCheck(mv.after.board, mv.after.turn))).pop() || (moves.length > 1 ? moves[Math.floor(moves.length / 2) - 0] : null);
    if (best === last) best = null;
  }
  if (best) out.push({ ...best, kind: best.m.captured ? 'capture' : 'move' });
  out.push({ ...last, kind: status.type === 'checkmate' ? 'mate' : 'final' });
  return out;
}
function captionFor(h) {
  const m = h.m, mover = BOTNAME[m.piece], promo = m.promotion ? ` → ${BOTNAME[m.promotion]}` : '';
  if (h.kind === 'mate') return { big: 'CHECKMATE!', small: `${mover} to ${SQ(m.tr, m.tc)}${promo}` };
  if (h.kind === 'final') return { big: 'THE FINAL MOVE', small: `${mover} to ${SQ(m.tr, m.tc)}` };
  if (m.captured) return { big: 'BIGGEST CAPTURE', small: `${mover} grabs the ${BOTNAME[m.captured.type]} (${SQ(m.tr, m.tc)})` };
  if (m.castle) return { big: 'DOCKING MANEUVER', small: 'Castling, space-style' };
  if (m.promotion) return { big: 'TRANSFORMATION', small: `${mover} becomes a ${BOTNAME[m.promotion]}` };
  return { big: 'KEY MOMENT', small: `${mover} to ${SQ(m.tr, m.tc)}` };
}

// ---------- camera-attached title cards ----------
function cardTexture(big, small, accent = '#2de2e6') {
  const W = 1024, H = 360, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = '900 108px -apple-system, "SF Pro Display", "Segoe UI", system-ui, sans-serif';
  const grd = g.createLinearGradient(W * 0.15, 0, W * 0.85, 0);
  grd.addColorStop(0, '#2de2e6'); grd.addColorStop(0.5, '#a855f7'); grd.addColorStop(1, '#ff3da8');
  g.shadowColor = 'rgba(0,0,0,0.85)'; g.shadowBlur = 24;
  g.fillStyle = grd;
  let fs = 108; while (g.measureText(big).width > W - 60 && fs > 50) { fs -= 6; g.font = `900 ${fs}px -apple-system, "SF Pro Display", "Segoe UI", system-ui, sans-serif`; }
  g.fillText(big, W / 2, small ? 140 : 180);
  if (small) {
    g.font = '700 46px -apple-system, "SF Pro Text", "Segoe UI", system-ui, sans-serif';
    let fs2 = 46; while (g.measureText(small).width > W - 60 && fs2 > 24) { fs2 -= 3; g.font = `700 ${fs2}px -apple-system, "SF Pro Text", "Segoe UI", system-ui, sans-serif`; }
    g.fillStyle = '#f5f7ff'; g.fillText(small, W / 2, 248);
    g.shadowBlur = 0; g.fillStyle = accent; g.fillRect(W / 2 - 90, 296, 180, 6);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function viewSize(dist) {
  const cam = api.camera;
  const h = 2 * dist * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
  return { w: h * cam.aspect, h };
}
function makeCard(big, small, accent) {
  const mat = new THREE.MeshBasicMaterial({ map: cardTexture(big, small, accent), transparent: true, depthTest: false, depthWrite: false, opacity: 0 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 360 / 1024), mat);
  mesh.renderOrder = 60;
  mesh.frustumCulled = false;
  const D = 2;
  const vs = viewSize(D);
  const w = Math.min(vs.w * 0.86, vs.h * 1.9);
  mesh.scale.setScalar(w);
  mesh.position.set(0, 0, -D);
  api.camera.add(mesh);
  rp.cards.push(mesh);
  return mesh;
}
function letterbox() {
  const D = 2.05, vs = viewSize(D);
  const mat = new THREE.MeshBasicMaterial({ color: 0x000000, depthTest: false, depthWrite: false, transparent: true, opacity: 1 });
  const bars = [];
  for (const s of [1, -1]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    m.scale.set(vs.w * 1.1, vs.h * 0.09, 1);
    m.position.set(0, s * (vs.h / 2 - vs.h * 0.045), -D);
    m.renderOrder = 59; m.frustumCulled = false;
    api.camera.add(m); bars.push(m);
  }
  rp.bars = { bars, vs };
}

// ---------- replay board ----------
function buildBoardFrom(st) {
  if (rp.group) { for (const g of rp.group.children) extraPieceGroups.delete(g); api.scene.remove(rp.group); }
  const grp = new THREE.Group();
  rp.group = grp; rp.at = new Map();
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const p = st.board[r][c]; if (!p) continue;
    const g = makePiece(p.type, p.color, r, c);
    grp.add(g);
  }
  api.scene.add(grp);
}
function makePiece(type, color, r, c) {
  const g = buildPiece(type, color);
  try { addIdentity(g); } catch (e) { /* optional */ }
  g.userData.phase = Math.random() * 6;
  g.userData.square = { r, c };
  g.userData.piece = { type, color };
  const w = sqToWorld(r, c); g.position.set(w.x, TOP, w.z);
  extraPieceGroups.add(g);
  rp.at.set(r + ',' + c, g);
  return g;
}
function playMove(m) {
  const mover = rp.at.get(m.fr + ',' + m.fc);
  const capSq = m.enPassant ? [m.fr, m.tc] : [m.tr, m.tc];
  const cap = m.captured ? rp.at.get(capSq[0] + ',' + capSq[1]) : null;
  rp.at.delete(m.fr + ',' + m.fc);
  if (cap) rp.at.delete(capSq[0] + ',' + capSq[1]);
  const jobs = [];
  if (!mover) return Promise.resolve();
  if (m.castle) {
    const [rf, rt] = m.castle === 'K' ? [7, 5] : [0, 3];
    const rook = rp.at.get(m.fr + ',' + rf);
    rp.at.delete(m.fr + ',' + rf);
    jobs.push(flyTo(mover, m.tr, m.tc, { dur: 1250, height: 0.8 }), flyTo(rook, m.fr, rt, { delay: 160, dur: 1250, height: 1.25 }));
    rp.at.set(m.tr + ',' + m.tc, mover); if (rook) rp.at.set(m.fr + ',' + rt, rook);
  } else {
    jobs.push(animateHop(mover, m.tr, m.tc, {
      dur: m.piece === 'n' ? 640 : 600, height: m.piece === 'n' ? 1.1 : 0.6,
      onLand: () => { sfx.land(!!cap); if (cap && cap.parent) { extraPieceGroups.delete(cap); explode(cap, m.captured); } }
    }).then(async () => {
      if (m.promotion) {
        const ng = await transformPiece(mover, m.promotion, m.color, sqToWorld(m.tr, m.tc), { parent: rp.group });
        mover.visible = false;
        rp.at.set(m.tr + ',' + m.tc, ng);
      }
    }));
    rp.at.set(m.tr + ',' + m.tc, mover);
  }
  mover.userData.square = { r: m.tr, c: m.tc };
  return Promise.all(jobs);
}

// ---------- camera paths ----------
function orbitPose(center, radius, height, ang) {
  return { pos: new THREE.Vector3(center.x + Math.sin(ang) * radius, height, center.z + Math.cos(ang) * radius), look: center.clone().setY(0.4) };
}
function setCam(pose) { api.camera.position.copy(pose.pos); api.camera.lookAt(pose.look); }
const smooth = k => k * k * (3 - 2 * k);

// ---------- run ----------
export function isReplaying() { return !!rp; }
export function startReplay({ record = false } = {}) {
  if (rp) return Promise.resolve(false);
  const hl = pickHighlights();
  if (!hl.length) { api.speak('Nothing to replay yet – play first!', 'think', true); return Promise.resolve(false); }
  const cam = api.camera;
  rp = {
    hl, cards: [], record, t0: performance.now(), saved: { pos: cam.position.clone(), target: api.controls.target.clone(), fov: cam.fov },
    group: null, at: new Map(), segments: [], done: null
  };
  const endP = new Promise(res => { rp.done = res; });
  api.hideEnd();
  document.body.classList.add('cinema');
  cinematic.active = true;
  if (!cam.parent) api.scene.add(cam);
  api.piecesGroup.visible = false; api.hintsGroup.visible = false;
  letterbox();

  // build segments (seconds of real time)
  const segs = [];
  const status = window.GardenChess.gameStatus({ ...api.state, history: [] });
  const resultBig = api.resultText ? api.resultText() : 'GG';
  segs.push({ kind: 'title', dur: 2.0 });
  for (const h of hl) segs.push({ kind: 'hl', h, dur: h.kind === 'mate' || h.kind === 'final' ? 3.6 : 3.0 });
  segs.push({ kind: 'result', dur: 2.2, big: resultBig, small: '„' + (api.lastQuote || 'GG!') + '“' });
  let acc = 0; for (const s of segs) { s.start = acc; acc += s.dur; }
  rp.total = acc; rp.segs = segs; rp.status = status;

  if (record) startRecording();
  sfx.whoosh && sfx.whoosh();
  enterSegment(0);
  return endP;
}

function enterSegment(i) {
  rp.idx = i;
  const s = rp.segs[i];
  for (const c of rp.cards) { c.parent && c.parent.remove(c); c.material.map.dispose(); c.material.dispose(); c.geometry.dispose(); }
  rp.cards = [];
  setTimeScale(1);
  if (s.kind === 'title') {
    const firstHl = rp.hl[0];
    buildBoardFrom(firstHl.before);
    s.card = makeCard('GROK BOT CHESS', 'Highlight-Replay', '#ff3da8');
    s.cam = k => setCam(orbitPose(new THREE.Vector3(0, 0, 0), 11 - k * 2, 3.2 + k * 2.8, -0.9 + k * 1.0));
  } else if (s.kind === 'hl') {
    const h = s.h;
    buildBoardFrom(h.before);
    const cap = captionFor(h);
    s.card = makeCard(cap.big, cap.small, h.kind === 'mate' ? '#ff3da8' : '#ffd166');
    const tgt = sqToWorld(h.m.tr, h.m.tc);
    const src = sqToWorld(h.m.fr, h.m.fc);
    const mid = tgt.clone().lerp(src, 0.35);
    const side = h.m.color === 'w' ? 1 : -1;
    const a0 = Math.atan2(side * 0.6, side) + (Math.random() - 0.5) * 0.6;
    s.cam = k => setCam(orbitPose(mid, 5.2 - k * 1.6, 3.4 - k * 1.2, a0 + k * 0.9));
    s.moveAt = 0.55; // seconds into the segment
    s.played = false;
    s.slowAt = h.m.captured || h.kind === 'mate' ? 0.55 + (h.m.piece === 'n' ? 0.45 : 0.32) : null;
  } else if (s.kind === 'result') {
    s.card = makeCard(s.big, s.small.length > 60 ? s.small.slice(0, 58) + '…“' : s.small, '#2de2e6');
    const fin = api.state;
    buildBoardFrom(fin);
    s.cam = k => setCam(orbitPose(new THREE.Vector3(0, 0, 0), 9 + k * 3, 7 + k * 4, 0.6 - k * 0.8));
    sfx.whoosh && sfx.whoosh();
  }
}

function frame() {
  if (!rp) return;
  const el = (performance.now() - rp.t0) / 1000;
  if (el >= rp.total) { stopReplay(); return; }
  let i = rp.idx;
  while (i < rp.segs.length - 1 && el >= rp.segs[i + 1].start) i++;
  if (i !== rp.idx) enterSegment(i);
  const s = rp.segs[rp.idx];
  const local = el - s.start, k = Math.min(1, local / s.dur);
  s.cam && s.cam(smooth(k));
  // card fade in/out (cards fade out during the action for highlights)
  if (s.card) {
    let o;
    if (s.kind === 'hl') o = local < 0.15 ? local / 0.15 : local < 0.5 ? 1 : Math.max(0, 1 - (local - 0.5) / 0.3);
    else o = Math.min(1, local / 0.3) * Math.min(1, (s.dur - local) / 0.3);
    s.card.material.opacity = o;
    s.card.position.y = s.kind === 'hl' ? 0.42 * viewSize(2).h / 2 : 0;
    const sc = s.card.scale.x; s.card.scale.setScalar(sc);
  }
  if (s.kind === 'hl') {
    if (!s.played && local >= s.moveAt) { s.played = true; playMove(s.h.m); }
    if (s.slowAt !== null && local >= s.slowAt && !s.slowed) { s.slowed = true; setTimeScale(0.3); }
    if (s.slowed && local >= s.slowAt + 1.3) setTimeScale(1);
    if (s.h.kind === 'mate' && local > 2.3 && !s.mateCard) {
      s.mateCard = true;
      const st = rp.status;
      const who = st.winner === 'w' ? 'White' : (api.mode === 'bot' ? 'Grok Bot' : 'Black');
      s.card2 = makeCard('MATE!', `${who} wins`, '#ff3da8');
      api.shake(0.18);
    }
    if (s.card2) s.card2.material.opacity = Math.min(1, (local - 2.3) / 0.25);
  }
}

export function stopReplay() {
  if (!rp) return;
  const r = rp;
  setTimeScale(1);
  for (const c of r.cards) { c.parent && c.parent.remove(c); c.material.map.dispose(); c.material.dispose(); c.geometry.dispose(); }
  if (r.bars) for (const b of r.bars.bars) { b.parent && b.parent.remove(b); }
  if (r.group) { for (const g of r.group.children) extraPieceGroups.delete(g); api.scene.remove(r.group); }
  // remove any leftover extra groups that belong to the replay
  for (const g of [...extraPieceGroups]) if (!g.parent || g.parent === r.group) extraPieceGroups.delete(g);
  api.piecesGroup.visible = true; api.hintsGroup.visible = true;
  const cam = api.camera;
  cam.position.copy(r.saved.pos); api.controls.target.copy(r.saved.target); cam.lookAt(r.saved.target);
  api.controls.update();
  cinematic.active = false;
  document.body.classList.remove('cinema');
  rp = null;
  if (r.recorder && r.recorder.state !== 'inactive') { try { r.recorder.stop(); } catch (e) { /* ignore */ } }
  if (api.isGameOver()) api.els.endOverlay.classList.add('open');
  r.done && r.done(true);
}

// ---------- recording ----------
export function recordingSupport() {
  const c = document.createElement('canvas');
  if (!window.MediaRecorder || !c.captureStream) return null;
  const types = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4;codecs=avc1', 'video/mp4'];
  for (const t of types) { try { if (MediaRecorder.isTypeSupported(t)) return t; } catch (e) { /* ignore */ } }
  return null;
}
function startRecording() {
  const type = recordingSupport();
  if (!type) return;
  try {
    const stream = api.renderer.domElement.captureStream(30);
    const aud = getAudioStream();
    if (aud) aud.getAudioTracks().forEach(t => stream.addTrack(t));
    const rec = new MediaRecorder(stream, { mimeType: type, videoBitsPerSecond: 6e6 });
    const chunks = [];
    rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = () => {
      const blob = new Blob(chunks, { type: type.split(';')[0] });
      const ext = type.includes('mp4') ? 'mp4' : 'webm';
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `grok-bot-chess-replay-${new Date().toISOString().slice(0, 10)}.${ext}`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 30000);
      window.__gbcLastVideo = { size: blob.size, type: blob.type };
      api.speak('Video saved! Locally on your device – you decide where it goes. 🎬', 'happy', true);
      stream.getVideoTracks().forEach(t => t.stop());
    };
    rec.start(250);
    rp.recorder = rec;
  } catch (e) { rp.recorder = null; }
}

// ---------- UI (end card buttons) ----------
function addButtons() {
  const box = document.getElementById('endExtra');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  box.innerHTML = '<button type="button" id="btnReplay" class="btn primary">🎬 Highlight-Replay</button>' +
    '<button type="button" id="btnVideo" class="btn">💾 Save video</button>' +
    '<div class="end-note" id="videoNote" hidden></div>';
  document.getElementById('btnReplay').addEventListener('click', () => startReplay());
  const vb = document.getElementById('btnVideo');
  const sup = recordingSupport();
  if (!sup) vb.title = 'Your browser does not support recording video from the canvas.';
  vb.addEventListener('click', () => {
    if (!recordingSupport()) {
      const n = document.getElementById('videoNote');
      n.hidden = false;
      n.textContent = 'Video export is not supported in this browser. Tip: start the replay and capture it with a screen recording (macOS: ⇧⌘5).';
      return;
    }
    startReplay({ record: true });
  });
}

export function initReplay() {
  addButtons();
  hooks.frame.push(frame);
  const prevStop = hooks.stopCinematic;
  hooks.stopCinematic = () => { prevStop && prevStop(); stopReplay(); };
  window.addEventListener('keydown', e => { if (rp && (e.key === 'Escape' || e.key === ' ')) { e.preventDefault(); stopReplay(); } });
  const prevEnd = hooks.end;
  hooks.end = s => { prevEnd && prevEnd(s); addButtons(); const v = document.getElementById('btnVideo'); if (v) v.classList.toggle('muted-btn', !recordingSupport()); };
}
