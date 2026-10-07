// Grok Bot Chess 3D v3 — scene, motion, Grok Bot personality, share, UX
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { buildPiece, SIDE, eyeMats, eyeMat, faceYaw } from './pieces3d.js';
import { say as line } from './personality.js';
import { sfx, setMusic, setSfx, suspendAudio, unlockAudio } from './audio.js';
import { composeShare } from './share.js';

const GC = window.GardenChess;
const AI = window.GardenAI;

export const NAMES = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
export const BOTNAME = { p: 'Pawn Bot', n: 'Knight Bot', b: 'Bishop Bot', r: 'Rook Bot', q: 'Queen Bot', k: 'King Bot' };
const GLYPH = { w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' }, b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' } };
export const VALUE = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };

// ---------- settings (persisted; localStorage may be unavailable on file:// in some browsers) ----------
const SETTINGS_KEY = 'gbc-settings-v3';
const settings = Object.assign({ hints: true, sfx: true, music: false, autoRotate: true, level: 2 }, loadSettings());
function loadSettings() { try { return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}'); } catch (e) { return {}; } }
export function saveSettings() { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ } }

// ---------- game state ----------
let state = GC.createGame();
let mode = 'bot';
let selected = null;
let legalHints = [];
let busy = false;
let aiThinking = false;
let moveSans = [];
let captured = { w: [], b: [] };
let pendingPromo = null;
let gameOverShown = false;
let lastQuote = '';
let lastMood = 'happy';

// Piece registry: persistent identity per piece (ids survive moves; snapshots for undo)
let reg = new Map();      // id -> { id, type, color, r, c, stats }
let regHistory = [];
let nextId = 1;

const $ = id => document.getElementById(id);
const els = {};

// ---------- three ----------
let renderer, scene, camera, controls, composer, bloom, timer, keyLight;
let boardGroup, piecesGroup, hintsGroup, fxGroup;
const groups = new Map();  // id -> THREE.Group
const pieceAt = new Map(); // "r,c" -> group
let checkKingGroup = null;
let camLights = null; // front/back lights follow the camera side (no specular hotspot in the rotated PvP view)
let thinkOrb = null;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const tweens = [];
let running = true;
// virtual clock (ms) so cinematics can run in slow motion
let vnow = 0, lastReal = performance.now();
export let timeScale = 1;
export function setTimeScale(s) { timeScale = s; }
export const clockNow = () => vnow;
export const extraPieceGroups = new Set();
let shadowDirty = true;

export const sqToWorld = (r, c) => new THREE.Vector3(c - 3.5, 0, r - 3.5);
export const TOP = 0.08;

export const hooks = { afterSync: [], afterMove: [], frame: [], beforeMove: [], explode: [], speak: null, end: null, newGame: null, stopCinematic: null, settings: [] }; // extension points (phase 2)

function initThree() {
  const host = els.stage;
  renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = BASE_EXPOSURE * look.brightness; // ACES, default 0.85 (was 0.95)
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);
  renderer.domElement.id = 'gl';
  renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); running = false; });
  renderer.domElement.addEventListener('webglcontextrestored', () => { running = true; shadowDirty = true; });

  scene = new THREE.Scene();
  scene.background = makeBackdrop();
  scene.fog = new THREE.Fog(0x0b0f1a, 22, 44);
  const pmrem = new THREE.PMREMGenerator(renderer);
  // anti-glare: cap the room's area lights (up to ~100 in HDR) so chrome/glass/clearcoat reflections
  // keep their shape but never blow out into bloom flares; overall env energy compensated below
  const room = new RoomEnvironment();
  room.traverse(o => { const m = o.material; if (m && m.emissiveIntensity > ENV_LIGHT_CAP) m.emissiveIntensity = ENV_LIGHT_CAP; });
  scene.environment = pmrem.fromScene(room, 0.04).texture;
  scene.environmentIntensity = ENV_INTENSITY;

  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  camera.position.set(0, 8.8, 11.0);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.0, 0.25);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 7;
  controls.maxDistance = 19;
  controls.minPolarAngle = 0.25;
  controls.maxPolarAngle = 1.18;
  controls.rotateSpeed = 0.6;

  scene.add(new THREE.HemisphereLight(0x9fb4ff, 0x140a1e, 0.42));
  keyLight = new THREE.DirectionalLight(0xfff4ec, 1.3);
  keyLight.position.set(-5, 11, 6);
  keyLight.castShadow = true;
  const sm = (window.devicePixelRatio || 1) >= 2 || Math.max(screen.width, screen.height) > 1600 ? 2048 : 1536;
  keyLight.shadow.mapSize.set(sm, sm);
  Object.assign(keyLight.shadow.camera, { left: -6.5, right: 6.5, top: 6.5, bottom: -6.5, near: 2, far: 28 });
  keyLight.shadow.bias = -0.0004;
  keyLight.shadow.normalBias = 0.02;
  scene.add(keyLight);
  const rimC = new THREE.PointLight(0x2de2e6, 12, 22, 2); rimC.position.set(-7, 3.5, -4);
  const rimM = new THREE.PointLight(0xff3da8, 18, 22, 2); rimM.position.set(7, 3.5, -4);
  const front = new THREE.PointLight(0xa855f7, 4.5, 24, 2); front.position.set(0, 7, 9);
  const back = new THREE.DirectionalLight(0x8fdcff, 0.6); back.position.set(0, 5, -9); // subtle rim from behind
  scene.add(rimC, rimM, front, back);
  camLights = { front, back };

  boardGroup = new THREE.Group(); piecesGroup = new THREE.Group(); hintsGroup = new THREE.Group(); fxGroup = new THREE.Group();
  scene.add(boardGroup, piecesGroup, hintsGroup, fxGroup);
  buildBoard();
  buildThinkOrb();

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.5, 0.25, BLOOM_THRESHOLD);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  applyLook();

  timer = new THREE.Timer();
  window.addEventListener('resize', resize);
  if (window.ResizeObserver) new ResizeObserver(() => resize()).observe(host);
  document.addEventListener('visibilitychange', () => {
    const hidden = document.hidden;
    suspendAudio(hidden);
    renderer.setAnimationLoop(hidden ? null : loop);
  });
  resize();
  setupPicking();
  renderer.setAnimationLoop(loop);
}

function makeBackdrop() {
  const c = document.createElement('canvas'); c.width = 16; c.height = 512;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 512);
  grd.addColorStop(0, '#1b1440'); grd.addColorStop(0.45, '#101732'); grd.addColorStop(1, '#06080f');
  g.fillStyle = grd; g.fillRect(0, 0, 16, 512);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function textTexture(text, { size = 64, color = '#ffffff', font = '800', w = 128, h = 128, glow = null } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.font = `${font} ${size}px "Apple Color Emoji", "Segoe UI Emoji", -apple-system, "Segoe UI", system-ui, sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  if (glow) { g.shadowColor = glow; g.shadowBlur = size * 0.35; }
  g.fillStyle = color;
  g.fillText(text, w / 2, h / 2 + size * 0.04);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function squareGlowTexture(rgb) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 10, 64, 64, 90);
  grd.addColorStop(0, `rgba(${rgb},0.05)`); grd.addColorStop(0.7, `rgba(${rgb},0.35)`); grd.addColorStop(1, `rgba(${rgb},0.75)`);
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = `rgba(${rgb},0.95)`; g.lineWidth = 5;
  g.beginPath(); g.roundRect ? g.roundRect(5, 5, 118, 118, 14) : g.rect(5, 5, 118, 118); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function buildBoard() {
  const slabMat = new THREE.MeshPhysicalMaterial({ color: 0x141a33, roughness: 0.5, metalness: 0.55, clearcoat: 0.3, clearcoatRoughness: 0.35, envMapIntensity: 0.6 });
  const slab = new THREE.Mesh(new RoundedBoxGeometry(9.6, 0.5, 9.6, 6, 0.18), slabMat);
  slab.position.y = -0.27; slab.receiveShadow = true; slab.castShadow = true;
  boardGroup.add(slab);
  const neon = new THREE.MeshStandardMaterial({ color: 0xff3da8, emissive: 0xff3da8, emissiveIntensity: 4.4 }); // pink needs more energy to cross the bloom threshold
  const neon2 = new THREE.MeshStandardMaterial({ color: 0x2de2e6, emissive: 0x2de2e6, emissiveIntensity: 2.2 });
  const edgeGeo = new RoundedBoxGeometry(8.38, 0.045, 0.045, 2, 0.02);
  for (let i = 0; i < 4; i++) {
    const e = new THREE.Mesh(edgeGeo, i % 2 ? neon : neon2);
    const a = (i * Math.PI) / 2;
    e.position.set(Math.sin(a) * 4.19, 0.0, Math.cos(a) * 4.19);
    e.rotation.y = a;
    boardGroup.add(e);
  }
  const lowRing = new THREE.Mesh(new THREE.BoxGeometry(9.7, 0.03, 9.7), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0xa855f7, emissiveIntensity: 1.2 }));
  lowRing.position.y = -0.5;
  boardGroup.add(lowRing);

  const tileGeo = new RoundedBoxGeometry(0.97, 0.16, 0.97, 4, 0.045);
  // anti-glare: rougher tiles, soft clearcoat, dimmer env reflections (no blown-out hotspot in the board centre)
  const lightMat = new THREE.MeshPhysicalMaterial({ color: 0x625e9c, roughness: 0.58, metalness: 0.08, clearcoat: 0.28, clearcoatRoughness: 0.42, envMapIntensity: 0.5 });
  const darkMat = new THREE.MeshPhysicalMaterial({ color: 0x1a1f40, roughness: 0.46, metalness: 0.3, clearcoat: 0.4, clearcoatRoughness: 0.3, envMapIntensity: 0.55 });
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const m = new THREE.Mesh(tileGeo, (r + c) % 2 === 0 ? lightMat : darkMat);
    const p = sqToWorld(r, c);
    m.position.set(p.x, 0, p.z);
    m.receiveShadow = true;
    m.userData.square = { r, c };
    boardGroup.add(m);
  }
  const plane = new THREE.PlaneGeometry(0.42, 0.42);
  const coordMat = txt => new THREE.MeshBasicMaterial({ map: textTexture(txt, { size: 70, color: '#c9d2ff' }), transparent: true, depthWrite: false });
  for (let i = 0; i < 8; i++) {
    const file = String.fromCharCode(97 + i);
    for (const z of [4.45, -4.45]) {
      const m = new THREE.Mesh(plane, coordMat(file));
      m.rotation.x = -Math.PI / 2; if (z < 0) m.rotation.z = Math.PI;
      m.position.set(i - 3.5, -0.015, z); boardGroup.add(m);
    }
    const rank = String(8 - i);
    for (const x of [-4.45, 4.45]) {
      const m = new THREE.Mesh(plane, coordMat(rank));
      m.rotation.x = -Math.PI / 2; if (x > 0) m.rotation.z = Math.PI;
      m.position.set(x, -0.015, i - 3.5); boardGroup.add(m);
    }
  }
  const floor = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.ShadowMaterial({ opacity: 0.45 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -0.53; floor.receiveShadow = true;
  scene.add(floor);
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 10, 128, 128, 128);
  grd.addColorStop(0, 'rgba(168,85,247,0.55)'); grd.addColorStop(0.5, 'rgba(45,226,230,0.18)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  const gt = new THREE.CanvasTexture(c); gt.colorSpace = THREE.SRGBColorSpace;
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(22, 22), new THREE.MeshBasicMaterial({ map: gt, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = -0.52;
  scene.add(glow);
}

function buildThinkOrb() {
  thinkOrb = new THREE.Group();
  const geo = new THREE.SphereGeometry(0.07, 16, 12);
  const cols = [0xff3da8, 0xffd166, 0x2de2e6];
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: cols[i], emissive: cols[i], emissiveIntensity: 3 }));
    thinkOrb.add(m);
  }
  thinkOrb.visible = false;
  scene.add(thinkOrb);
}

function resize() {
  const host = els.stage;
  const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, fxLevel === 'full' ? 2 : 1.25));
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  if (fxLevel !== 'full') bloom.setSize(Math.round(w * 0.5), Math.round(h * 0.5)); // reduced: half-res bloom
  camera.aspect = w / h;
  camera.fov = w / h < 0.85 ? 52 : 38;
  camera.updateProjectionMatrix();
}

// ---------- registry ----------
function freshStats() { return { captures: 0, moves: 0, survived: 0, checks: 0, attacked: 0, capturedTypes: [] }; }
function initRegistry() {
  reg = new Map(); regHistory = []; nextId = 1;
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const p = state.board[r][c];
    if (p) { const id = nextId++; reg.set(id, { id, type: p.type, color: p.color, r, c, stats: freshStats() }); }
  }
}
function snapshotRegistry() {
  return [...reg.values()].map(e => ({ ...e, stats: { ...e.stats, capturedTypes: e.stats.capturedTypes.slice() } }));
}
export function entryAt(r, c) { for (const e of reg.values()) if (e.r === r && e.c === c) return e; return null; }
export function registry() { return reg; }

function applyRegistryMove(move, capSq) {
  regHistory.push(snapshotRegistry());
  const mover = entryAt(move.fr, move.fc);
  const victim = capSq ? entryAt(capSq.r, capSq.c) : null;
  if (victim && victim !== mover) reg.delete(victim.id);
  if (mover) {
    mover.r = move.tr; mover.c = move.tc; mover.stats.moves++;
    if (victim) { mover.stats.captures++; mover.stats.capturedTypes.push(victim.type); }
    if (move.promotion) { mover.type = move.promotion; mover.promoted = true; }
  }
  if (move.castle) {
    const back = move.fr;
    const [rf, rt] = move.castle === 'K' ? [7, 5] : [0, 3];
    const rook = entryAt(back, rf);
    if (rook) { rook.r = back; rook.c = rt; rook.stats.moves++; }
  }
  // survival for everyone of the side that just moved
  for (const e of reg.values()) if (mover && e.color === mover.color) e.stats.survived++;
  return { mover, victim };
}
// after the board state is updated: checks given + newly threatened pieces
function updateThreats(moverEntry, moverColor) {
  if (moverEntry && GC.isInCheck(state.board, state.turn)) moverEntry.stats.checks++;
  const lite = { ...state, turn: moverColor, ep: null, history: [] };
  const attacked = new Set();
  for (const m of GC.legalMoves(lite)) if (m.capture) attacked.add(m.tr + ',' + m.tc);
  const newly = [];
  for (const e of reg.values()) {
    if (e.color === moverColor) continue;
    const key = e.r + ',' + e.c;
    const was = !!e.threatened;
    e.threatened = attacked.has(key);
    if (e.threatened && !was) { e.stats.attacked++; newly.push(e); }
  }
  return newly;
}

// Build/update groups from registry (persistent identity)
function syncGroups() {
  const alive = new Set(reg.keys());
  for (const [id, g] of groups) {
    if (!alive.has(id)) { piecesGroup.remove(g); disposeGroup(g); groups.delete(id); }
  }
  pieceAt.clear();
  for (const e of reg.values()) {
    let g = groups.get(e.id);
    if (g && (g.userData.type !== e.type || g.userData.skin !== currentSkinName())) { piecesGroup.remove(g); disposeGroup(g); g = null; groups.delete(e.id); }
    if (!g) {
      g = buildPiece(e.type, e.color);
      g.userData.skin = currentSkinName();
      g.userData.phase = Math.random() * Math.PI * 2;
      g.userData.id = e.id;
      g.rotation.y = faceYaw(e.color);
      g.traverse(o => { o.userData.pieceRoot = g; });
      piecesGroup.add(g);
      groups.set(e.id, g);
    }
    const w = sqToWorld(e.r, e.c);
    if (!g.userData.animating) g.position.set(w.x, TOP, w.z);
    g.userData.square = { r: e.r, c: e.c };
    g.userData.entry = e;
    g.userData.piece = { type: e.type, color: e.color };
    pieceAt.set(e.r + ',' + e.c, g);
  }
  updateCheckKing();
  shadowDirty = true;
  hooks.afterSync.forEach(f => f());
}
function disposeGroup(g) { if (g.userData.bodyMat) g.userData.bodyMat.dispose(); }
let skinNameFn = () => 'neon';
export function setSkinNameProvider(fn) { skinNameFn = fn; }
function currentSkinName() { return skinNameFn(); }
export function rebuildAllPieces() { for (const [id, g] of groups) { piecesGroup.remove(g); disposeGroup(g); } groups.clear(); syncGroups(); renderHints(); }

function resetEmissive(mat) {
  if (!mat || !mat.emissive) return;
  if (mat.userData.baseEmissive) { mat.emissive.copy(mat.userData.baseEmissive); mat.emissiveIntensity = mat.userData.baseEI; }
  else mat.emissive.setRGB(0, 0, 0);
}
function updateCheckKing() {
  checkKingGroup = null;
  if (GC.isInCheck(state.board, state.turn)) {
    for (const g of pieceAt.values()) if (g.userData.piece.type === 'k' && g.userData.piece.color === state.turn) checkKingGroup = g;
  }
  for (const g of groups.values()) {
    if (g === checkKingGroup) continue;
    resetEmissive(g.userData.bodyMat);
    if (!g.userData.animating && g.userData.inner) g.userData.inner.scale.set(1, 1, 1);
  }
}

// ---------- hints ----------
const hintGeo = new THREE.CylinderGeometry(0.21, 0.21, 0.04, 40);
const ringGeo = new THREE.TorusGeometry(0.4, 0.035, 12, 64);
const selGeo = new THREE.TorusGeometry(0.44, 0.03, 12, 64);
const lastGeo = new THREE.PlaneGeometry(0.97, 0.97);
const hintMat = new THREE.MeshStandardMaterial({ color: 0x2de2e6, emissive: 0x2de2e6, emissiveIntensity: 2.5, transparent: true, opacity: 0.9 });
const capMat = new THREE.MeshStandardMaterial({ color: 0xff3da8, emissive: 0xff3da8, emissiveIntensity: 2.8 });
const selMat = new THREE.MeshStandardMaterial({ color: 0xb6ff3b, emissive: 0xb6ff3b, emissiveIntensity: 2.6 });
let lastFromMat, lastToMat;
const checkMat = new THREE.MeshStandardMaterial({ color: 0xff2a4a, emissive: 0xff2a4a, emissiveIntensity: 3 });
let checkRing = null;

export function renderHints() {
  if (!lastFromMat) {
    lastFromMat = new THREE.MeshBasicMaterial({ map: squareGlowTexture('168,85,247'), transparent: true, opacity: 0.55, depthWrite: false });
    lastToMat = new THREE.MeshBasicMaterial({ map: squareGlowTexture('255,209,102'), transparent: true, opacity: 0.75, depthWrite: false });
  }
  while (hintsGroup.children.length) hintsGroup.remove(hintsGroup.children[0]);
  const lm = state.lastMove;
  if (lm) {
    for (const [r, c, mat] of [[lm.fr, lm.fc, lastFromMat], [lm.tr, lm.tc, lastToMat]]) {
      const m = new THREE.Mesh(lastGeo, mat);
      const w = sqToWorld(r, c);
      m.rotation.x = -Math.PI / 2; m.position.set(w.x, TOP + 0.004, w.z);
      hintsGroup.add(m);
    }
  }
  if (selected) {
    const w = sqToWorld(selected.r, selected.c);
    const s = new THREE.Mesh(selGeo, selMat);
    s.rotation.x = -Math.PI / 2; s.position.set(w.x, TOP + 0.02, w.z); s.userData.spin = true;
    hintsGroup.add(s);
  }
  if (settings.hints) for (const m of legalHints) {
    const w = sqToWorld(m.tr, m.tc);
    const isCap = m.capture || m.enPassant;
    const h = new THREE.Mesh(isCap ? ringGeo : hintGeo, isCap ? capMat : hintMat);
    if (isCap) h.rotation.x = -Math.PI / 2;
    h.position.set(w.x, TOP + 0.03, w.z);
    h.userData.square = { r: m.tr, c: m.tc };
    h.userData.pulse = true;
    hintsGroup.add(h);
  }
  checkRing = null;
  if (checkKingGroup) {
    const ring = new THREE.Mesh(ringGeo, checkMat);
    ring.rotation.x = -Math.PI / 2;
    const p = checkKingGroup.position;
    ring.position.set(p.x, TOP + 0.03, p.z);
    hintsGroup.add(ring); checkRing = ring;
  }
}

// ---------- picking ----------
let hoverCb = null;
export function onHover(cb) { hoverCb = cb; }
function setupPicking() {
  const dom = renderer.domElement;
  let down = null;
  dom.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; unlockAudio(); });
  dom.addEventListener('pointerup', e => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    down = null;
    if (moved > 6) return;
    onPick(e);
  });
  dom.addEventListener('pointermove', e => {
    const hit = pickAt(e);
    dom.style.cursor = hit && (hit.own || hit.target) ? 'pointer' : 'grab';
    if (hoverCb) hoverCb(hit, e);
  });
  dom.addEventListener('pointerleave', () => { if (hoverCb) hoverCb(null); });
}

function pickAt(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects([piecesGroup, hintsGroup, boardGroup], true);
  let first = null;
  for (const h of hits) {
    let sq = null;
    const root = h.object.userData.pieceRoot;
    if (root) sq = root.userData.square;
    else if (h.object.userData.square) sq = h.object.userData.square;
    if (!sq) continue;
    const p = state.board[sq.r][sq.c];
    const info = { ...sq, own: p && p.color === state.turn, target: legalHints.some(m => m.tr === sq.r && m.tc === sq.c), group: root || pieceAt.get(sq.r + ',' + sq.c) || null };
    if (info.target) return info;
    if (!first) first = info;
  }
  return first;
}

function humanCanMove() {
  if (busy || aiThinking || pendingPromo || isGameOver()) return false;
  if (mode === 'bot' && state.turn === 'b') return false;
  return true;
}

function onPick(e) {
  if (!humanCanMove() || camTurn || cinematic.active) return;
  const hit = pickAt(e);
  if (!hit) { if (selected) sfx.deselect(); selected = null; legalHints = []; renderHints(); return; }
  const { r, c } = hit;
  if (selected && legalHints.some(m => m.tr === r && m.tc === c)) { tryMove(selected.r, selected.c, r, c); return; }
  if (hit.own) {
    if (selected && selected.r === r && selected.c === c) { selected = null; legalHints = []; sfx.deselect(); }
    else { selected = { r, c }; legalHints = GC.movesFrom(state, r, c); sfx.select(); }
  } else { if (selected) sfx.deselect(); selected = null; legalHints = []; }
  renderHints();
}

function tryMove(fr, fc, tr, tc, promotion) {
  const cands = GC.movesFrom(state, fr, fc).filter(m => m.tr === tr && m.tc === tc);
  if (!cands.length) return;
  if (cands.some(m => m.promotion) && !promotion) {
    pendingPromo = { fr, fc, tr, tc, color: state.board[fr][fc].color };
    showPromo(pendingPromo.color);
    return;
  }
  const mv = promotion ? (cands.find(m => m.promotion === promotion) || cands[0]) : (cands.find(m => !m.promotion) || cands[0]);
  executeMove(mv);
}

// ---------- motion ----------
const ease = {
  inOutCubic: k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
  outBack: k => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); },
  outElastic: k => (k === 0 || k === 1 ? k : Math.pow(2, -10 * k) * Math.sin((k * 10 - 0.75) * (2 * Math.PI) / 3) + 1)
};
export function addTween(tw) { tweens.push(tw); return tw; }

// Hop with anticipation (crouch), stretch in flight, squash + elastic settle on landing
export function animateHop(group, tr, tc, { dur = 520, height = 0.5, delay = 0, onLand = null } = {}) {
  return new Promise(resolve => {
    if (!group) return resolve();
    group.userData.animating = true;
    const inner = group.userData.inner || group;
    const from = group.position.clone(); from.y = TOP;
    const to = sqToWorld(tr, tc); to.y = TOP;
    const dir = to.clone().sub(from); dir.y = 0;
    const dist = dir.length(); if (dist > 0) dir.normalize();
    const A = 0.18, L = 0.8; // anticipation end, landing start
    let landed = false;
    tweens.push({
      t0: clockNow() + delay, dur,
      step: k => {
        // lean direction in piece-local frame
        const yaw = group.rotation.y;
        const lx = dir.x * Math.cos(-yaw) - dir.z * Math.sin(-yaw);
        const lz = dir.x * Math.sin(-yaw) + dir.z * Math.cos(-yaw);
        if (k < A) {
          const a = Math.sin((k / A) * Math.PI / 2);
          inner.scale.set(1 + 0.1 * a, 1 - 0.16 * a, 1 + 0.1 * a);
          inner.rotation.set(-lz * 0.12 * a, 0, lx * 0.12 * a); // lean back before jumping
          group.position.copy(from);
        } else if (k < L) {
          const f = (k - A) / (L - A);
          const e = ease.inOutCubic(f);
          group.position.lerpVectors(from, to, e);
          group.position.y = TOP + Math.sin(Math.PI * f) * height;
          const st = Math.sin(Math.PI * f);
          inner.scale.set(1 - 0.05 * st, 1 + 0.1 * st, 1 - 0.05 * st);
          inner.rotation.set(lz * 0.18 * st, 0, -lx * 0.18 * st); // lean into travel
        } else {
          if (!landed) { landed = true; onLand && onLand(); }
          const f = (k - L) / (1 - L);
          group.position.copy(to);
          const sq = 1 - 0.2 * (1 - ease.outElastic(f));
          inner.scale.set(1 + (1 - sq) * 0.6, sq, 1 + (1 - sq) * 0.6);
          inner.rotation.set(0, 0, 0);
        }
      },
      done: () => { inner.scale.set(1, 1, 1); inner.rotation.set(0, 0, 0); group.position.copy(to); group.userData.animating = false; shadowDirty = true; resolve(); }
    });
  });
}

// Victim reaction: big eyes, shiver, lean away from the attacker
function scaredReaction(group, attackerGroup, dur) {
  if (!group) return;
  group.userData.scared = true;
  sfx.scared();
  const inner = group.userData.inner || group;
  const base = group.position.clone();
  tweens.push({
    t0: clockNow(), dur,
    step: k => {
      const a = Math.min(1, k * 3);
      (group.userData.eyes || []).forEach(e => e.scale.setScalar(1 + 0.6 * a));
      group.position.x = base.x + (Math.random() - 0.5) * 0.03 * a;
      group.position.z = base.z + (Math.random() - 0.5) * 0.03 * a;
      group.position.y = TOP + Math.abs(Math.sin(k * 30)) * 0.03 * a;
      if (attackerGroup) {
        const d = group.position.clone().sub(attackerGroup.position); d.y = 0; d.normalize();
        const yaw = group.rotation.y;
        const lx = d.x * Math.cos(-yaw) - d.z * Math.sin(-yaw);
        const lz = d.x * Math.sin(-yaw) + d.z * Math.cos(-yaw);
        inner.rotation.set(lz * 0.25 * a, 0, -lx * 0.25 * a);
      }
    },
    done: () => {}
  });
}

// ---------- capture FX ----------
const EMOJI = ['💥', '✨', '🤖', '⚡', '🌀', '😵', '🔥', '⭐', '🧠', '📵', '🎉', '💫'];
const FX_TEXT = ['RATE LIMITED', 'HALLUCINATED', '429', 'OFFLINE', 'TOKEN-LIMIT', 'GG', 'BUFFERING…', 'Ctrl+Z?', '404', 'TIMEOUT'];
const emojiTexCache = {};
function emojiTex(e) { return emojiTexCache[e] || (emojiTexCache[e] = textTexture(e, { size: 96 })); }

export function explode(group, piece) {
  const pos = group.getWorldPosition(new THREE.Vector3());
  if (group.parent) group.parent.remove(group);
  const glowHex = SIDE[piece.color].glow;
  hooks.explode.forEach(f => f(pos, piece));
  const N = fxBudget().particles;
  const geo = new THREE.BufferGeometry();
  const posArr = new Float32Array(N * 3);
  const vel = [];
  for (let i = 0; i < N; i++) {
    posArr[i * 3] = pos.x; posArr[i * 3 + 1] = pos.y + 0.5; posArr[i * 3 + 2] = pos.z;
    const a = Math.random() * Math.PI * 2, s = 1.5 + Math.random() * 3;
    vel.push(new THREE.Vector3(Math.cos(a) * s, 2 + Math.random() * 4, Math.sin(a) * s));
  }
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: glowHex, size: 0.09, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  fxGroup.add(pts);
  const t0 = clockNow();
  let last = t0;
  tweens.push({
    t0, dur: 1300,
    step: k => {
      const now = clockNow(); const dt = Math.min(0.05, (now - last) / 1000); last = now;
      for (let i = 0; i < N; i++) {
        vel[i].y -= 9 * dt;
        posArr[i * 3] += vel[i].x * dt; posArr[i * 3 + 1] = Math.max(TOP, posArr[i * 3 + 1] + vel[i].y * dt); posArr[i * 3 + 2] += vel[i].z * dt;
      }
      geo.attributes.position.needsUpdate = true;
      pts.material.opacity = 1 - k;
    },
    done: () => { fxGroup.remove(pts); geo.dispose(); pts.material.dispose(); }
  });
  const ne = fxBudget().emoji;
  for (let i = 0; i < ne; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTex(EMOJI[(Math.random() * EMOJI.length) | 0]), transparent: true, depthWrite: false }));
    sp.scale.set(0.5, 0.5, 0.5);
    const a = (i / ne) * Math.PI * 2;
    const v = new THREE.Vector3(Math.cos(a) * 1.6, 2.4 + Math.random() * 1.4, Math.sin(a) * 1.6);
    fxGroup.add(sp);
    tweens.push({
      t0, dur: 1100,
      step: k => { sp.position.set(pos.x + v.x * k, pos.y + 0.6 + v.y * k - 2.4 * k * k, pos.z + v.z * k); sp.material.opacity = 1 - k * k; sp.material.rotation = k * 3 * (i % 2 ? 1 : -1); },
      done: () => { fxGroup.remove(sp); sp.material.dispose(); }
    });
  }
  const txt = FX_TEXT[(Math.random() * FX_TEXT.length) | 0];
  const label = new THREE.Sprite(new THREE.SpriteMaterial({
    map: textTexture(txt, { size: 54, w: 512, h: 128, color: '#ffffff', glow: piece.color === 'w' ? '#2de2e6' : '#ff3da8' }),
    transparent: true, depthWrite: false, depthTest: false
  }));
  label.scale.set(2.4, 0.6, 1);
  label.renderOrder = 10;
  fxGroup.add(label);
  tweens.push({
    t0, dur: 1600,
    step: k => {
      const pop = k < 0.15 ? ease.outBack(k / 0.15) : 1;
      label.position.set(pos.x, pos.y + 1.3 + k * 1.1, pos.z);
      label.material.opacity = k < 0.7 ? 1 : 1 - (k - 0.7) / 0.3;
      label.scale.set(2.4 * pop, 0.6 * pop, 1);
    },
    done: () => { fxGroup.remove(label); label.material.map.dispose(); label.material.dispose(); }
  });
  const flash = new THREE.PointLight(glowHex, 60, 6, 2);
  flash.position.copy(pos).add(new THREE.Vector3(0, 0.8, 0));
  fxGroup.add(flash);
  tweens.push({ t0, dur: 500, step: k => { flash.intensity = 60 * (1 - k); }, done: () => fxGroup.remove(flash) });
  // neighbours flinch
  for (const g of [...groups.values(), ...extraPieceGroups]) {
    if (g === group || !g.parent) continue;
    const d = g.position.distanceTo(pos);
    if (d < 1.6) { const inner = g.userData.inner; tweens.push({ t0, dur: 400, step: k => { inner.position.y = Math.sin(k * Math.PI) * 0.06; }, done: () => { inner.position.y = 0; } }); }
  }
  shake(0.12);
  sfx.boom();
}
let fxLevel = 'full';
// ---- Helligkeit / Glow (Look & Effekte sliders, persisted in settings) ----
const BASE_EXPOSURE = 1.0, BLOOM_THRESHOLD = 1.15, ENV_LIGHT_CAP = 8, ENV_INTENSITY = 0.5;
const look = { brightness: 0.85, glow: 0.6 };
export function setLook({ brightness, glow } = {}) {
  if (brightness !== undefined) look.brightness = Math.min(1.2, Math.max(0.6, +brightness || 0.85));
  if (glow !== undefined) look.glow = Math.min(1, Math.max(0, +glow));
  applyLook();
}
export function getLook() { return { ...look, exposure: renderer ? renderer.toneMappingExposure : null, bloom: bloom ? { enabled: bloom.enabled, strength: bloom.strength, radius: bloom.radius, threshold: bloom.threshold } : null }; }
function applyLook() {
  if (!renderer) return;
  renderer.toneMappingExposure = BASE_EXPOSURE * look.brightness;
  if (!bloom) return;
  const reduced = fxLevel !== 'full';
  const g = look.glow * (reduced ? 0.45 : 1);
  bloom.enabled = g > 0.01;
  bloom.strength = 0.85 * g;          // default 0.51 (was 0.65)
  bloom.radius = 0.12 + 0.22 * look.glow; // default 0.25 (was 0.4)
  bloom.threshold = BLOOM_THRESHOLD;  // linear HDR luminance: LEDs/eyes/neon edges only (was 1.9 but speculars dominated)
}
export function setFxLevel(l) {
  fxLevel = l;
  if (!renderer) return;
  applyLook();
  const size = l === 'full' ? ((window.devicePixelRatio || 1) >= 2 ? 2048 : 1536) : 1024;
  if (keyLight.shadow.mapSize.x !== size) {
    keyLight.shadow.mapSize.set(size, size);
    if (keyLight.shadow.map) { keyLight.shadow.map.dispose(); keyLight.shadow.map = null; }
  }
  resize();
  shadowDirty = true;
}
export function getFxLevel() { return fxLevel; }
export function fxBudget() { return fxLevel === 'full' ? { particles: 90, emoji: 9 } : { particles: 36, emoji: 4 }; }

let shakeAmt = 0;
export function shake(a) { shakeAmt = Math.max(shakeAmt, a); }

// ---------- move execution ----------
function executeMove(move) {
  busy = true;
  const mover = state.board[move.fr][move.fc];
  const capSq = move.enPassant ? { r: move.fr, c: move.tc } : { r: move.tr, c: move.tc };
  const capPiece = state.board[capSq.r][capSq.c];
  const isCapture = !!(capPiece && capPiece.color !== mover.color);
  const san = GC.moveToSan(state, move);
  const moverGroup = pieceAt.get(move.fr + ',' + move.fc);
  const capGroup = isCapture ? pieceAt.get(capSq.r + ',' + capSq.c) : null;
  const ctx = { move, mover, capPiece: isCapture ? capPiece : null, moverGroup, capGroup, by: state.turn, prevState: state };
  selected = null; legalHints = [];
  renderHints();

  const dist = Math.hypot(move.tr - move.fr, move.tc - move.fc);
  const dur = mover.type === 'n' ? 640 : 520 + Math.min(180, dist * 25);
  const anims = [];
  if (capGroup) scaredReaction(capGroup, moverGroup, dur * 0.8);
  sfx.hop(dist);

  const helpers = { dur, explodeCap: () => { if (capGroup && capGroup.parent) explode(capGroup, capPiece); }, land: () => sfx.land(isCapture) };
  const custom = hooks.beforeMove.map(f => f(ctx, helpers)).find(Boolean); // phase-2 cinematic overrides (castling/promotion)
  if (custom) anims.push(custom);
  else {
    anims.push(animateHop(moverGroup, move.tr, move.tc, {
      dur, height: mover.type === 'n' ? 1.1 : 0.42 + 0.07 * dist,
      onLand: () => { sfx.land(isCapture); if (capGroup) explode(capGroup, capPiece); }
    }));
    if (move.castle) {
      const back = move.fr;
      const [rf, rt] = move.castle === 'K' ? [7, 5] : [0, 3];
      anims.push(animateHop(pieceAt.get(back + ',' + rf), back, rt, { dur: 560, height: 0.9, delay: 140 }));
    }
  }
  Promise.all(anims).then(() => {
    if (capGroup && capGroup.parent) explode(capGroup, capPiece);
    const next = GC.makeMove(state, move);
    if (!next) { busy = false; syncGroups(); renderHints(); return; }
    state = next;
    moveSans.push(san);
    if (isCapture) captured[mover.color].push(capPiece.type);
    const { mover: moverEntry, victim } = applyRegistryMove(move, isCapture ? capSq : null);
    ctx.moverEntry = moverEntry; ctx.victimEntry = victim;
    ctx.newlyThreatened = updateThreats(moverEntry, mover.color);
    syncGroups();
    renderHints();
    busy = false;
    afterMove(ctx);
  });
}

// ---------- camera ----------
let camTurn = null;
function camAzimuth() { if (!camera) return 0; return Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z); }
function turnCameraTo(color) {
  const off = camera.position.clone().sub(controls.target);
  const sph = new THREE.Spherical().setFromVector3(off);
  const to = color === 'w' ? 0 : Math.PI;
  let d = to - sph.theta; d = Math.atan2(Math.sin(d), Math.cos(d));
  if (Math.abs(d) < 0.01) return;
  camTurn = { from: sph.theta, to: sph.theta + d, t0: performance.now(), dur: 1100, tz0: controls.target.z, tz1: color === 'w' ? Math.abs(controls.target.z) : -Math.abs(controls.target.z) };
}
function resetCamera() {
  camTurn = null;
  const blackView = mode === 'pvp' && settings.autoRotate && state.turn === 'b';
  camera.position.set(0, 8.8, blackView ? -11.0 : 11.0);
  controls.target.set(0, 1.0, blackView ? -0.25 : 0.25);
  controls.update();
}
export function getCamTurn() { return camTurn; }

// ---------- loop ----------
const tmpV = new THREE.Vector3();
const tmpW = new THREE.Vector3();
function loop() {
  if (!running) return;
  timer.update();
  const t = timer.getElapsed();
  const dt = Math.min(0.05, timer.getDelta());
  const real = performance.now();
  vnow += Math.min(100, real - lastReal) * timeScale; lastReal = real;
  const now = vnow;
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i];
    if (now < tw.t0) continue;
    const k = Math.min(1, (now - tw.t0) / tw.dur);
    tw.step(k);
    if (k >= 1) { tweens.splice(i, 1); tw.done && tw.done(); }
  }
  if (camTurn) {
    const k = Math.min(1, (real - camTurn.t0) / camTurn.dur);
    const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    const off = camera.position.clone().sub(controls.target);
    const sph = new THREE.Spherical().setFromVector3(off);
    sph.theta = camTurn.from + (camTurn.to - camTurn.from) * e;
    if (camTurn.tz1 !== undefined) controls.target.z = camTurn.tz0 + (camTurn.tz1 - camTurn.tz0) * e;
    camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(sph));
    if (k >= 1) camTurn = null;
  }
  if (!cinematic.active) controls.update();

  // look target for eyes: selected piece, else last moved piece
  let lookAt = null;
  if (selected) lookAt = sqToWorld(selected.r, selected.c);
  else if (state.lastMove) lookAt = sqToWorld(state.lastMove.tr, state.lastMove.tc);
  const camAz = camAzimuth();
  if (camLights) {
    camLights.front.position.set(Math.sin(camAz) * 9, 7, Math.cos(camAz) * 9);
    camLights.back.position.set(-Math.sin(camAz) * 9, 5, -Math.cos(camAz) * 9);
  }
  if (scene.environmentRotation) scene.environmentRotation.y = camAz; // env reflections identical from every side (PvP rotation)

  for (const g of [...groups.values(), ...extraPieceGroups]) {
    if (!g.parent) continue;
    const ud = g.userData;
    if (!ud.square) ud.square = { r: -1, c: -1 };
    // v4: every piece faces the opponent (no billboarding) → knights look forward, faces stay consistent
    let d = faceYaw(ud.color) - g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
    g.rotation.y += d * 0.12;
    const isSel = selected && ud.square.r === selected.r && ud.square.c === selected.c;
    if (!ud.animating && !ud.scared) {
      const targetY = isSel ? TOP + 0.14 + Math.sin(t * 4) * 0.05 : TOP;
      g.position.y += (targetY - g.position.y) * 0.25;
      // idle bob + breathing on inner (doesn't disturb picking)
      const inner = ud.inner;
      if (inner && !isSel) {
        inner.position.y = Math.sin(t * 1.7 + ud.phase) * 0.012;
        inner.rotation.z = Math.sin(t * 0.9 + ud.phase) * 0.012;
      }
    }
    // eyes: blink + glance
    const blinkPhase = (t * 0.45 + ud.phase) % 4.2;
    const blink = blinkPhase < 0.12 ? 0.12 : 1;
    if (ud.eyes && !ud.scared) {
      let gx = 0;
      if (lookAt) {
        tmpW.copy(lookAt).sub(g.position); tmpW.y = 0;
        const len = tmpW.length();
        if (len > 0.3) {
          tmpW.normalize();
          const yaw = g.rotation.y;
          gx = tmpW.x * Math.cos(-yaw) - tmpW.z * Math.sin(-yaw);
        }
      }
      for (const e of ud.eyes) {
        e.scale.set(1, blink, 1);
        if (ud.type !== 'n') e.position.x += (gx * 0.022 - e.position.x) * 0.15;
      }
    }
    if (ud.antennas) ud.antennas.forEach((a, i) => { a.rotation.x = Math.sin(t * 3 + ud.phase + i) * 0.08; });
  }

  // Grok Bot thinking: its army's eyes pulse + orbiting dots above its king
  const em = eyeMats.b;
  if (em) em.emissiveIntensity = aiThinking ? em.userData.base * (0.55 + 0.75 * (0.5 + 0.5 * Math.sin(t * 9))) : em.userData.base;
  if (thinkOrb) {
    thinkOrb.visible = aiThinking;
    if (aiThinking) {
      let king = null;
      for (const g of groups.values()) if (g.userData.piece.type === 'k' && g.userData.piece.color === 'b') king = g;
      if (king) thinkOrb.position.set(king.position.x, king.position.y + 1.95, king.position.z);
      thinkOrb.children.forEach((m, i) => {
        const a = t * 4 + (i * Math.PI * 2) / 3;
        m.position.set(Math.cos(a) * 0.3, Math.sin(t * 6 + i) * 0.06, Math.sin(a) * 0.3);
      });
    }
  }
  if (checkKingGroup) {
    const k = (Math.sin(t * 7) + 1) / 2;
    const mat = checkKingGroup.userData.bodyMat;
    if (mat.userData.baseEmissive) mat.emissiveIntensity = mat.userData.baseEI * (1.2 + 3 * k); // lava cracks flare up
    else if (mat.emissive) mat.emissive.setRGB(0.9 * k, 0.05 * k, 0.12 * k);
    checkKingGroup.userData.inner.scale.setScalar(1 + k * 0.05);
    if (checkRing) checkRing.scale.setScalar(1 + k * 0.15);
  }
  hintsGroup.children.forEach(h => {
    if (h.userData.pulse) h.scale.setScalar(1 + Math.sin(t * 5) * 0.1);
    if (h.userData.spin) h.rotation.z = t * 1.5;
  });
  hooks.frame.forEach(f => f(t, dt));

  // shadows only when something moved (big win on laptops)
  if (shadowDirty || tweens.length || selected || checkKingGroup) { renderer.shadowMap.needsUpdate = true; shadowDirty = false; }

  if (shakeAmt > 0.001) {
    tmpV.set((Math.random() - 0.5) * shakeAmt, (Math.random() - 0.5) * shakeAmt, 0);
    camera.position.add(tmpV); composer.render(); camera.position.sub(tmpV);
    shakeAmt *= 0.88;
  } else composer.render();
}
export const cinematic = { active: false };

// ---------- game flow ----------
function isGameOver() {
  const s = GC.gameStatus(state);
  return s.type === 'checkmate' || s.type === 'stalemate' || s.type === 'draw';
}
function material(color, st = state) {
  let s = 0;
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) { const p = st.board[r][c]; if (p && p.color === color) s += VALUE[p.type]; }
  return s;
}
function canRecapture(st, r, c) { return GC.legalMoves(st).some(m => m.tr === r && m.tc === c); }
function forkTargets(st, r, c, color) {
  const lite = { ...st, turn: color, ep: null, history: [] };
  let n = 0;
  for (const m of GC.legalMoves(lite)) {
    if (m.fr !== r || m.fc !== c || !m.capture) continue;
    const p = st.board[m.tr][m.tc];
    if (p && (p.type === 'k' || VALUE[p.type] >= 3)) n++;
  }
  return n;
}

function afterMove(ctx) {
  const { move, mover, capPiece, by } = ctx;
  const status = GC.gameStatus(state);
  updateUI();
  const sq = GC.algebraic(move.tr, move.tc);
  const botMoved = mode === 'bot' && by === 'b';
  const humanVsBot = mode === 'bot' && by === 'w';
  const ev = { status, botMoved, humanVsBot, sq };
  if (status.type === 'check') sfx.check();
  hooks.afterMove.forEach(f => f(ctx, ev));

  if (status.type === 'checkmate') {
    if (mode === 'bot') {
      const botWon = status.winner === 'b';
      botWon ? sfx.lose() : sfx.win();
      speak(line(botWon ? 'botWins' : 'botLoses'), botWon ? 'happy' : 'sad');
    } else { sfx.win(); speak(line('pvpMate', { side: status.winner === 'w' ? 'White' : 'Black' }), 'happy'); }
    setTimeout(showEnd, 1100);
    return;
  }
  if (status.type === 'stalemate' || status.type === 'draw') { speak(line('draw'), 'think'); setTimeout(showEnd, 1100); return; }

  // ---- reactions (priority order) ----
  const moverName = BOTNAME[move.promotion || mover.type];
  const capName = capPiece ? BOTNAME[capPiece.type] : '';
  const recapturable = capPiece ? canRecapture(state, move.tr, move.tc) : false;
  const forks = (mover.type === 'n' || mover.type === 'q' || mover.type === 'b' || mover.type === 'r' || mover.type === 'p') ? forkTargets(state, move.tr, move.tc, mover.color) : 0;
  let said = false;
  const S = (key, mood, vars) => { if (!said) { speak(line(key, vars), mood); said = true; } };

  if (mode === 'bot') {
    if (move.promotion) S(botMoved ? 'botPromotes' : 'playerPromotes', botMoved ? 'happy' : 'think', { piece: BOTNAME[move.promotion] });
    if (move.castle) { sfx.castle(); S(botMoved ? 'botCastles' : 'playerCastles', botMoved ? 'happy' : 'think'); }
    if (move.enPassant) S('enPassant', 'happy');
    if (capPiece && VALUE[capPiece.type] >= 5 && !recapturable) S(botMoved ? 'playerBlunder' : 'botBlunder', botMoved ? 'happy' : 'shock', { piece: capName });
    if (capPiece && VALUE[mover.type] >= VALUE[capPiece.type] + 2 && recapturable) S(botMoved ? 'botSacrifice' : 'playerSacrifice', 'think');
    if (forks >= 2) S(botMoved ? 'botFork' : 'playerFork', botMoved ? 'happy' : 'shock', { piece: moverName });
    if (status.type === 'check') S(botMoved ? 'botGivesCheck' : 'botInCheck', botMoved ? 'happy' : 'sad');
    if (capPiece) S(botMoved ? 'botCaptures' : 'playerCaptures', botMoved ? 'happy' : 'sad', { piece: capName });
    if (botMoved && !said) {
      const diff = material('b') - material('w');
      if (diff >= 4 && Math.random() < 0.5) S('botWinning', 'happy');
      else if (diff <= -4 && Math.random() < 0.5) S('botLosing', 'sad');
      else S('botMoves', 'idle', { piece: moverName, sq });
    }
    if (humanVsBot) scheduleBot();
  } else {
    if (move.promotion) S('playerPromotes', 'happy', { piece: BOTNAME[move.promotion] });
    if (move.castle) { sfx.castle(); S('playerCastles', 'think'); }
    if (move.enPassant) S('enPassant', 'happy');
    if (forks >= 2) S('playerFork', 'happy');
    if (status.type === 'check') S('pvpCheck', 'happy');
    if (capPiece) S('pvpCapture', 'happy', { piece: capName });
    if (!said && Math.random() < 0.25) S('pvpIdle', 'idle');
    if (settings.autoRotate) setTimeout(() => turnCameraTo(state.turn), 350);
  }
}

// ---------- Grok Bot AI (worker + verified fallback) ----------
let worker = null, workerReqId = 0, workerOk = false;
function initWorker() {
  try {
    if (!window.GBC_WORKER_SRC || !window.Worker) return;
    const url = URL.createObjectURL(new Blob([window.GBC_WORKER_SRC], { type: 'text/javascript' }));
    worker = new Worker(url);
    worker.onerror = () => { worker = null; workerOk = false; };
    // self-test: ask for a move on the start position
    const id = ++workerReqId;
    const t = setTimeout(() => { if (!workerOk) worker = null; }, 5000);
    const onMsg = ev => { if (ev.data && ev.data.id === id) { workerOk = !!ev.data.move; clearTimeout(t); worker && worker.removeEventListener('message', onMsg); if (!workerOk) worker = null; } };
    worker.addEventListener('message', onMsg);
    worker.postMessage({ id, state: { ...GC.createGame(), history: [] }, level: 1 });
  } catch (e) { worker = null; }
}
function computeBotMove(snapshot, lvl) {
  return new Promise(resolve => {
    const lite = { ...snapshot, history: [] };
    const local = () => setTimeout(() => resolve(AI.chooseMoveLevel(lite, lvl)), 30);
    if (!worker) return local();
    const id = ++workerReqId;
    let settled = false;
    const timeout = setTimeout(() => { if (!settled) { settled = true; worker = null; local(); } }, 20000);
    const onMsg = ev => {
      if (!ev.data || ev.data.id !== id) return;
      worker && worker.removeEventListener('message', onMsg);
      if (settled) return;
      settled = true; clearTimeout(timeout);
      if (ev.data.move) resolve(ev.data.move); else local();
    };
    worker.addEventListener('message', onMsg);
    try { worker.postMessage({ id, state: lite, level: lvl }); } catch (e) { settled = true; clearTimeout(timeout); worker = null; local(); }
  });
}
function scheduleBot() {
  if (mode !== 'bot' || state.turn !== 'b' || isGameOver()) return;
  aiThinking = true;
  updateUI();
  setAvatarMood('think');
  if (Math.random() < 0.4) speak(line('thinking'), 'think', true);
  const snap = state;
  const started = performance.now();
  computeBotMove(snap, settings.level).then(mv => {
    const wait = Math.max(0, 700 - (performance.now() - started));
    setTimeout(() => {
      aiThinking = false;
      if (state !== snap || mode !== 'bot') { updateUI(); return; }
      if (!mv) { updateUI(); return; }
      const legal = GC.legalMoves(state).find(m => m.fr === mv.fr && m.fc === mv.fc && m.tr === mv.tr && m.tc === mv.tc && (m.promotion || null) === (mv.promotion || null));
      executeMove(legal || mv);
    }, wait);
  });
}

// ---------- UI ----------
function updateUI() {
  const s = GC.gameStatus(state);
  const turnName = state.turn === 'w' ? 'White' : (mode === 'bot' ? 'Grok Bot (Black)' : 'Black');
  let txt = `${turnName} to move`, cls = state.turn === 'w' ? 'white' : 'black';
  if (s.type === 'check') { txt = `Check! ${turnName} to move`; cls += ' check'; }
  if (s.type === 'checkmate') { txt = `Checkmate – ${s.winner === 'w' ? 'White' : (mode === 'bot' ? 'Grok Bot' : 'Black')} wins`; cls = 'check'; }
  if (s.type === 'stalemate') { txt = 'Stalemate – draw'; cls = ''; }
  if (s.type === 'draw') { txt = 'Draw (50-move rule)'; cls = ''; }
  if (aiThinking) txt = 'Grok Bot is thinking…';
  els.turn.textContent = txt;
  els.turn.className = 'turn ' + cls;
  els.dot.className = 'turn-dot ' + (state.turn === 'w' ? 'w' : 'b') + (aiThinking ? ' thinking' : '');
  els.capByW.innerHTML = captured.w.map(t => `<span>${GLYPH.b[t]}</span>`).join('');
  els.capByB.innerHTML = captured.b.map(t => `<span>${GLYPH.w[t]}</span>`).join('');
  const adv = material('w') - material('b');
  els.adv.textContent = adv === 0 ? 'Material: equal' : `Material: ${adv > 0 ? 'White' : (mode === 'bot' ? 'Grok Bot' : 'Black')} +${Math.abs(adv)}`;
  let list = '';
  for (let i = 0; i < moveSans.length; i += 2) list += `<div class="pair"><span class="num">${i / 2 + 1}.</span><span>${moveSans[i]}</span><span>${moveSans[i + 1] || ''}</span></div>`;
  els.moves.innerHTML = list || '<span class="muted">No moves yet</span>';
  els.moves.scrollTop = els.moves.scrollHeight;
  els.undo.disabled = !state.history.length || busy || aiThinking;
  els.levelRow.style.display = mode === 'bot' ? '' : 'none';
  els.rotateRow.style.display = mode === 'pvp' ? '' : 'none';
}

let sayTimer = null;
export function speak(text, mood = 'idle', quiet = false) {
  if (!text) return;
  els.bubble.textContent = text;
  els.bubble.classList.remove('pop'); void els.bubble.offsetWidth; els.bubble.classList.add('pop');
  if (!quiet) { lastQuote = text; lastMood = mood === 'shock' ? 'sad' : mood; }
  setAvatarMood(mood);
  sfx.chirp();
  clearTimeout(sayTimer);
  sayTimer = setTimeout(() => setAvatarMood(aiThinking ? 'think' : 'idle'), 2800);
  hooks.speak && hooks.speak(mood, text);
}
function setAvatarMood(m) { els.avatar.dataset.mood = m; }

function resultText() {
  const s = GC.gameStatus(state);
  if (s.type === 'checkmate') {
    if (mode === 'bot') return s.winner === 'w' ? 'Victory over Grok Bot! 🏆' : 'Grok Bot wins';
    return (s.winner === 'w' ? 'White' : 'Black') + ' wins 🏆';
  }
  if (s.type === 'stalemate') return 'Stalemate – draw';
  if (s.type === 'draw') return 'Draw';
  return mode === 'bot' ? 'Human vs Grok Bot' : 'Player vs Player';
}
function subText() {
  const n = moveSans.length;
  const caps = captured.w.length + captured.b.length;
  const lvl = ['', 'Easy', 'Medium', 'Hard'][settings.level];
  const zn = Math.ceil(n / 2);
  return `${zn} ${zn === 1 ? 'move' : 'moves'} · ${caps} ${caps === 1 ? 'capture' : 'captures'}${mode === 'bot' ? ' · Level ' + lvl : ''}`;
}

function showEnd() {
  if (gameOverShown || !isGameOver()) return; // a pending end-card timer must not fire after a new position was loaded
  gameOverShown = true;
  const s = GC.gameStatus(state);
  let title = 'Draw';
  if (s.type === 'checkmate') title = mode === 'bot' ? (s.winner === 'w' ? 'You won!' : 'Grok Bot wins!') : 'Checkmate!';
  else if (s.type === 'stalemate') title = 'Stalemate!';
  els.endTitle.textContent = title;
  els.endResult.textContent = subText();
  els.endQuote.textContent = '“' + (lastQuote || 'GG!') + '”';
  els.endAvatar.dataset.mood = lastMood;
  els.endOverlay.classList.add('open');
  hooks.end && hooks.end(s);
}

function showPromo(color) {
  els.promoChoices.innerHTML = ['q', 'r', 'b', 'n'].map(t => `<button type="button" data-p="${t}"><span class="g">${GLYPH[color][t]}</span><span class="l">${NAMES[t][0].toUpperCase() + NAMES[t].slice(1)}</span></button>`).join('');
  els.promoOverlay.classList.add('open');
  els.promoChoices.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    const p = pendingPromo; pendingPromo = null;
    els.promoOverlay.classList.remove('open');
    if (p) tryMove(p.fr, p.fc, p.tr, p.tc, b.dataset.p);
  }));
}

function clearFx() { tweens.length = 0; while (fxGroup.children.length) fxGroup.remove(fxGroup.children[0]); }

function newGame() {
  if (cinematic.active && hooks.stopCinematic) hooks.stopCinematic();
  state = GC.createGame();
  selected = null; legalHints = []; moveSans = []; captured = { w: [], b: [] };
  pendingPromo = null; busy = false; aiThinking = false; gameOverShown = false;
  clearFx();
  for (const g of groups.values()) { piecesGroup.remove(g); disposeGroup(g); }
  groups.clear();
  initRegistry();
  els.endOverlay.classList.remove('open');
  els.promoOverlay.classList.remove('open');
  syncGroups(); renderHints(); updateUI();
  turnCameraTo('w');
  speak(line(mode === 'bot' ? 'start' : 'pvpStart'), 'happy');
  hooks.newGame && hooks.newGame();
}

let setModeImpl = null;
export function setMode(m, fresh = true) { if (setModeImpl) setModeImpl(m, fresh); }
// Coach: load a full game state (FEN / PGN / practice position). Keeps the current mode; bot replies if it's Black's turn in bot mode.
export function loadState(st, { sans = [], quiet = false } = {}) {
  if (cinematic.active && hooks.stopCinematic) hooks.stopCinematic();
  state = { ...GC.createGame(), ...st, history: st.history || [], moveNumber: (st.history || []).length };
  selected = null; legalHints = []; moveSans = sans.slice(); captured = { w: [], b: [] };
  for (const h of [...state.history.slice(1).map(x => x.lastMove), state.history.length ? state.lastMove : null]) if (h && h.captured) captured[h.color].push(h.captured.type);
  pendingPromo = null; busy = false; aiThinking = false; gameOverShown = false;
  clearFx();
  for (const g of groups.values()) { piecesGroup.remove(g); disposeGroup(g); }
  groups.clear();
  initRegistry();
  els.endOverlay.classList.remove('open');
  els.promoOverlay.classList.remove('open');
  syncGroups(); renderHints(); updateUI();
  if (mode === 'pvp' && settings.autoRotate) turnCameraTo(state.turn); else turnCameraTo('w');
  hooks.newGame && hooks.newGame();
  if (!quiet) speak(line(['Position loaded. {side} to move.', 'All set up! {side} to move.', 'There we go, the position is ready. {side} to move.'], { side: state.turn === 'w' ? 'White' : 'Black' }), 'think');
  if (mode === 'bot' && state.turn === 'b' && !isGameOver()) scheduleBot();
}

// test/debug hook: load an arbitrary position (used by the headless tests)
function setPosition(board, turn = 'w', castling = null) {
  newGame();
  state = { ...GC.createGame(), board: GC.cloneBoard(board), turn, castling: castling || { w: { K: false, Q: false }, b: { K: false, Q: false } } };
  for (const g of groups.values()) { piecesGroup.remove(g); disposeGroup(g); }
  groups.clear();
  initRegistry();
  syncGroups(); renderHints(); updateUI();
}

function undo() {
  if (cinematic.active) return;
  if (busy || aiThinking || !state.history.length) return;
  const steps = (mode === 'bot' && state.turn === 'w' && state.history.length >= 2) ? 2 : 1;
  let regMissing = false;
  for (let i = 0; i < steps; i++) {
    state = GC.undo(state); moveSans.pop();
    const snap = regHistory.pop();
    if (snap) { reg = new Map(snap.map(e => [e.id, { ...e, stats: { ...e.stats, capturedTypes: e.stats.capturedTypes.slice() } }])); }
    else regMissing = true;
  }
  if (regMissing) { const keep = regHistory; initRegistry(); regHistory = keep; } // positions loaded via PGN have no registry snapshots
  captured = { w: [], b: [] };
  const chain = [...state.history.slice(1).map(h => h.lastMove), state.lastMove];
  for (const lm of chain) if (lm && lm.captured) captured[lm.color].push(lm.captured.type);
  selected = null; legalHints = []; gameOverShown = false;
  els.endOverlay.classList.remove('open');
  clearFx();
  syncGroups(); renderHints(); updateUI();
  if (mode === 'pvp' && settings.autoRotate) turnCameraTo(state.turn);
  speak(line('undo'), 'think');
}

function shareScreenshot() {
  composer.render();
  const card = composeShare(renderer.domElement, { result: resultText(), sub: subText(), quote: lastQuote || 'I’m ready for my fan poster.', mood: lastMood });
  card.toBlob(blob => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    const d = new Date(), p = n => String(n).padStart(2, '0');
    a.download = `grok-bot-chess-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }, 'image/png');
  sfx.shutter();
  flashStage();
  if (!els.endOverlay.classList.contains('open')) speak(line('screenshot'), 'happy', true);
}
function flashStage() { els.stage.classList.remove('flash'); void els.stage.offsetWidth; els.stage.classList.add('flash'); }

function toggleHints(v) {
  settings.hints = v; saveSettings();
  els.chkHints.checked = v;
  renderHints();
}

// ---------- boot ----------
function bindUI() {
  ['stage', 'turn', 'dot', 'capByW', 'capByB', 'adv', 'moves', 'undo', 'levelRow', 'rotateRow', 'bubble', 'avatar',
    'endOverlay', 'endTitle', 'endResult', 'endQuote', 'endAvatar', 'promoOverlay', 'promoChoices', 'chkHints', 'tooltip'].forEach(id => { els[id] = $(id); });
  $('btnNew').addEventListener('click', newGame);
  $('btnEndNew').addEventListener('click', newGame);
  $('btnEndShot').addEventListener('click', shareScreenshot);
  $('btnEndClose').addEventListener('click', () => els.endOverlay.classList.remove('open'));
  els.undo.addEventListener('click', undo);
  $('btnShot').addEventListener('click', shareScreenshot);
  $('btnCam').addEventListener('click', resetCamera);
  const btnMute = $('btnMute'), btnMusic = $('btnMusic');
  const syncAudioBtns = () => {
    btnMute.textContent = settings.sfx ? '🔊 Sound on' : '🔇 Sound off'; btnMute.classList.toggle('active', settings.sfx);
    btnMusic.textContent = settings.music ? '🎵 Music on' : '🎵 Music off'; btnMusic.classList.toggle('active', settings.music);
  };
  setSfx(settings.sfx); syncAudioBtns();
  btnMute.addEventListener('click', () => { settings.sfx = !settings.sfx; setSfx(settings.sfx); saveSettings(); syncAudioBtns(); });
  btnMusic.addEventListener('click', () => { settings.music = !settings.music; setMusic(settings.music); saveSettings(); syncAudioBtns(); });
  // music needs a user gesture; resume on first interaction if it was on
  const firstGesture = () => { unlockAudio(); if (settings.music) setMusic(true); window.removeEventListener('pointerdown', firstGesture); window.removeEventListener('keydown', firstGesture); };
  window.addEventListener('pointerdown', firstGesture); window.addEventListener('keydown', firstGesture);

  setModeImpl = (m, fresh = true) => { mode = m; $('btnBot').classList.toggle('active', m === 'bot'); $('btnPvp').classList.toggle('active', m === 'pvp'); if (fresh) newGame(); else updateUI(); };
  const setMode = m => setModeImpl(m);
  $('btnBot').addEventListener('click', () => setMode('bot'));
  $('btnPvp').addEventListener('click', () => setMode('pvp'));
  document.querySelectorAll('[data-level]').forEach(b => {
    b.classList.toggle('active', +b.dataset.level === settings.level);
    b.addEventListener('click', () => {
      settings.level = +b.dataset.level; saveSettings();
      document.querySelectorAll('[data-level]').forEach(x => x.classList.toggle('active', x === b));
      speak(line('level.' + settings.level), 'happy');
    });
  });
  const rot = $('chkRotate');
  rot.checked = settings.autoRotate;
  rot.addEventListener('change', () => { settings.autoRotate = rot.checked; saveSettings(); if (settings.autoRotate) turnCameraTo(state.turn); });
  els.chkHints.checked = settings.hints;
  els.chkHints.addEventListener('change', () => { toggleHints(els.chkHints.checked); speak(line(settings.hints ? 'hints.on' : 'hints.off'), 'happy', true); });

  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || cinematic.active) return;
    if (/input|textarea|select/i.test((e.target && e.target.tagName) || '')) return;
    const k = e.key.toLowerCase();
    if (k === 'u') { e.preventDefault(); undo(); }
    else if (k === 'n') { e.preventDefault(); newGame(); }
    else if (k === 'h') { e.preventDefault(); toggleHints(!settings.hints); }
    else if (k === 'escape') {
      if (els.endOverlay.classList.contains('open')) els.endOverlay.classList.remove('open');
      else if (selected) { selected = null; legalHints = []; renderHints(); sfx.deselect(); }
    }
  });
}

function boot() {
  bindUI();
  try { initThree(); }
  catch (e) {
    console.error(e);
    $('stage').innerHTML = '<div class="nogl">WebGL could not be started. Please use a current browser (Safari/Chrome/Firefox).</div>';
    return;
  }
  initWorker();
  initRegistry();
  syncGroups(); renderHints(); updateUI();
  speak(line('start'), 'happy');
  window.__gbc = {
    get state() { return state; }, executeMove, GC, renderer, camera, controls, resize, newGame, undo,
    setLevel: l => { settings.level = l; }, mode: () => mode, workerActive: () => !!worker && workerOk,
    fxCount: () => fxGroup.children.length, registry: () => reg, groups, shareScreenshot, isBusy: () => busy || aiThinking,
    scene, hooks, settings, setPosition, loadState, setMode, cinematic, camTurn: () => !!getCamTurn(), getLook: () => getLook(), setLook: (o) => setLook(o), get busyFlag() { return busy; }
  };
  window.dispatchEvent(new Event('gbc-ready'));
  document.body.classList.add('ready');
}

// API for phase-2 modules
export const api = {
  get state() { return state; }, get mode() { return mode; }, get selected() { return selected; }, get aiThinking() { return aiThinking; },
  get busy() { return busy; }, set busy(v) { busy = v; },
  get scene() { return scene; }, get camera() { return camera; }, get controls() { return controls; }, get renderer() { return renderer; },
  get composer() { return composer; }, get piecesGroup() { return piecesGroup; }, get fxGroup() { return fxGroup; }, get boardGroup() { return boardGroup; },
  get keyLight() { return keyLight; }, get bloom() { return bloom; }, get moveSans() { return moveSans; }, get captured() { return captured; },
  get lastQuote() { return lastQuote; }, get lastMood() { return lastMood; }, get checkKingGroup() { return checkKingGroup; }, get hintsGroup() { return hintsGroup; }, get extraGroups() { return extraPieceGroups; },
  material: (c) => material(c), camAzimuth: () => camAzimuth(),
  groups, pieceAt, settings, els, tweens, speak, resultText, subText, shake, setShadowDirty: () => { shadowDirty = true; },
  markDirty: () => { shadowDirty = true; }, turnCameraTo, resetCamera, newGame,
  syncGroups: () => syncGroups(), renderHints: () => renderHints(), updateUI: () => updateUI(), isGameOver: () => isGameOver(),
  get history() { return state.history; }, get regHistory() { return regHistory; }, showEnd: () => showEnd(), hideEnd: () => els.endOverlay.classList.remove('open')
};

export function start() {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}
