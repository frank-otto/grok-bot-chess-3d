// Riesen-Grok: giant procedural Grok Bot head behind the board (dim, toggleable)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { api, hooks, sqToWorld, saveSettings, getCamTurn } from './main3d.js';

let head = null, root = null, parts = {};
let expr = 'neutral', exprUntil = 0, placed = false;
const tmpDir = new THREE.Vector3(), tmpPos = new THREE.Vector3();
const R_BEHIND = 9.0;
const pol = { x: 0, y: 0, z: 0, s: 0 };
const MOUTH_N = 11;

function build() {
  root = new THREE.Group();
  root.name = 'giantGrok';
  root.rotation.order = 'YXZ';
  head = new THREE.Group();
  root.add(head);
  const shell = new THREE.MeshStandardMaterial({ color: 0x1a1d33, metalness: 0.75, roughness: 0.35, emissive: 0x0a0c1c, envMapIntensity: 0.6 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x2de2e6, emissive: 0x2de2e6, emissiveIntensity: 0.9, roughness: 0.4 });
  const visor = new THREE.MeshStandardMaterial({ color: 0x03040a, metalness: 0.2, roughness: 0.08, envMapIntensity: 1.2 });
  const eyeM = new THREE.MeshStandardMaterial({ color: 0x2de2e6, emissive: 0x2de2e6, emissiveIntensity: 1.75 });
  const pupilM = new THREE.MeshStandardMaterial({ color: 0x060814, emissive: 0x000000, roughness: 0.2 });
  const mouthM = new THREE.MeshStandardMaterial({ color: 0xff3da8, emissive: 0xff3da8, emissiveIntensity: 1.6 });
  const box = new THREE.Mesh(new RoundedBoxGeometry(4.6, 3.2, 2.4, 6, 0.6), shell); head.add(box);
  const scr = new THREE.Mesh(new RoundedBoxGeometry(3.8, 2.2, 0.2, 4, 0.18), visor); scr.position.set(0, -0.05, 1.16); head.add(scr);
  const band = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.05, 8, 64), trim); band.scale.set(2.05, 1.15, 1); band.position.set(0, -0.05, 1.26); head.add(band);
  // ears
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 32), shell); ear.rotation.z = Math.PI / 2; ear.position.set(s * 2.45, 0, 0); head.add(ear);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 8, 40), trim); ring.rotation.y = Math.PI / 2; ring.position.set(s * 2.67, 0, 0); head.add(ring);
  }
  // antenna
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.7, 12), shell); stalk.position.set(0, 1.9, 0); head.add(stalk);
  const tipM = new THREE.MeshStandardMaterial({ color: 0xff3da8, emissive: 0xff3da8, emissiveIntensity: 2.2 });
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 16), tipM); tip.position.set(0, 2.3, 0); head.add(tip);
  // eyes
  const eyes = [];
  for (const s of [-1, 1]) {
    const eg = new THREE.Group(); eg.position.set(s * 0.95, 0.3, 1.3);
    const white = new THREE.Mesh(new THREE.CircleGeometry(0.5, 40), eyeM); eg.add(white);
    const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.2, 32), pupilM); pupil.position.z = 0.01; eg.add(pupil);
    const glint = new THREE.Mesh(new THREE.CircleGeometry(0.06, 16), new THREE.MeshBasicMaterial({ color: 0xffffff })); glint.position.set(0.08, 0.08, 0.02); pupil.add(glint);
    const lid = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.6), visor); lid.position.set(0, 0.85, 0.03); eg.add(lid);
    head.add(eg); eyes.push({ g: eg, white, pupil, lid });
  }
  // mouth segments
  const segs = [];
  const segGeo = new RoundedBoxGeometry(0.16, 0.1, 0.05, 1, 0.03);
  for (let i = 0; i < MOUTH_N; i++) { const m = new THREE.Mesh(segGeo, mouthM); m.position.set((i - (MOUTH_N - 1) / 2) * 0.17, -0.6, 1.3); head.add(m); segs.push(m); }
  // sweat drops
  const sweatM = new THREE.MeshStandardMaterial({ color: 0x8fdcff, emissive: 0x2a8cff, emissiveIntensity: 1.2, transparent: true, opacity: 0.9 });
  const drops = [];
  for (let i = 0; i < 3; i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), sweatM); d.scale.set(1, 1.5, 1); d.visible = false; head.add(d); drops.push(d); }
  // celebration stars + thinking dots
  const starM = new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffd166, emissiveIntensity: 2.0 });
  const orbit = []; for (let i = 0; i < 6; i++) { const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), starM); s.visible = false; head.add(s); orbit.push(s); }
  root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; o.raycast = () => {}; } });
  parts = { eyes, segs, drops, orbit, tip, tipM, eyeM, mouthM, trim };
  api.scene.add(root);
}

function mouthTarget(e, i, t) {
  const x = (i - (MOUTH_N - 1) / 2) / ((MOUTH_N - 1) / 2); // -1..1
  switch (e) {
    case 'grin': return { x: x * 1.05, y: -0.75 + 0.42 * x * x, s: 1.25 - 0.3 * x * x };
    case 'celebrate': return { x: x * 1.0, y: -0.85 + 0.5 * x * x + Math.sin(t * 12 + i) * 0.03, s: 1.4 };
    case 'shock': { const a = (i / MOUTH_N) * Math.PI * 2; return { x: Math.cos(a) * 0.36, y: -0.72 + Math.sin(a) * 0.32, s: 0.9 }; }
    case 'sweat': return { x: x * 0.8, y: -0.6 - 0.18 * (1 - x * x) + Math.sin(t * 9 + i * 1.3) * 0.035, s: 0.9 };
    case 'sad': return { x: x * 0.8, y: -0.55 - 0.3 * (1 - x * x), s: 0.9 };
    case 'thinking': return { x: x * 0.55 + 0.25, y: -0.65 + x * 0.08 + Math.sin(t * 3 + i) * 0.02, s: 0.8 };
    default: return { x: x * 0.85, y: -0.62 + 0.16 * x * x, s: 1 };
  }
}

function setExpr(e, ms = 2600) { expr = e; exprUntil = performance.now() + ms; }

let lookTarget = new THREE.Vector3();
function frame(t, dt) {
  if (!root) return;
  const on = api.settings.giant !== false;
  root.visible = on;
  if (!on) return;
  // v4: fit the whole head into the free band between the far rank's piece tops and the top of the view,
  // centred behind the far rank. Hides gracefully while the camera turns (PvP rotation) or if there is no room.
  const cam = api.camera, tgt = api.controls.target;
  const hx = cam.position.x - tgt.x, hz = cam.position.z - tgt.z;
  const camH = Math.hypot(hx, hz) || 1;
  const fx = -hx / camH, fz = -hz / camH;             // horizontal direction "away from the camera"
  const farX = fx * 3.5, farZ = fz * 3.5;              // centre of the far rank
  const sx = -fz, sz = fx;                             // sideways
  let bandBottom = -1;
  for (const [ox, h] of [[0, 1.85], [1.5, 1.6], [-1.5, 1.6], [3.5, 1.25], [-3.5, 1.25]]) {
    tmpPos.set(farX + sx * ox, h, farZ + sz * ox).project(cam);
    bandBottom = Math.max(bandBottom, tmpPos.y);
  }
  bandBottom += 0.03;
  const bandTop = 0.97;
  const band = bandTop - bandBottom;
  const turning = !!getCamTurn();
  const fits = band > 0.12 && !turning;
  // world distance: on the ray through the band centre, R_BEHIND beyond the board centre
  tmpDir.set(0, (bandBottom + bandTop) / 2, 0.5).unproject(cam).sub(cam.position).normalize();
  const dirH = Math.max(0.2, Math.hypot(tmpDir.x, tmpDir.z));
  const dist = (camH + R_BEHIND) / dirH;
  const tanH = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
  const worldBand = Math.max(0, band) * dist * tanH;   // NDC height → world height at that distance
  const HEAD_H = 4.25, HEAD_BOTTOM = 1.7;              // local bbox: y −1.7 … +2.55 (incl. antenna)
  const targetScale = fits ? Math.min(1.15, (worldBand * 0.9) / HEAD_H) : 0;
  // anchor: bbox bottom sits on the band bottom (+5% margin)
  const bottomNdc = bandBottom + band * 0.05;
  tmpDir.set(0, bottomNdc, 0.5).unproject(cam).sub(cam.position).normalize();
  tmpPos.copy(cam.position).addScaledVector(tmpDir, (camH + R_BEHIND) / Math.max(0.2, Math.hypot(tmpDir.x, tmpDir.z)));
  const jump = Math.hypot(tmpPos.x - pol.x, tmpPos.z - pol.z) > 5; // camera jumped (reset, replay cut)
  if (!placed || turning || jump) { pol.x = tmpPos.x; pol.y = tmpPos.y; pol.z = tmpPos.z; placed = true; }
  const f = Math.min(1, dt * 5);
  pol.x += (tmpPos.x - pol.x) * f; pol.y += (tmpPos.y - pol.y) * f; pol.z += (tmpPos.z - pol.z) * f;
  pol.s += (targetScale - pol.s) * Math.min(1, dt * (targetScale > pol.s ? 4 : 10));
  root.visible = pol.s > 0.02;
  root.scale.setScalar(Math.max(0.001, pol.s));
  root.position.set(pol.x, pol.y + HEAD_BOTTOM * pol.s + Math.sin(t * 0.7) * 0.02 * pol.s, pol.z);
  const az = Math.atan2(cam.position.x - root.position.x, cam.position.z - root.position.z);
  root.rotation.y = az;
  const pitchTo = Math.atan2(cam.position.y - root.position.y, Math.hypot(cam.position.x - root.position.x, cam.position.z - root.position.z));
  root.rotation.x = -pitchTo * 0.6;
  if (!root.visible) return;

  // base expression
  const now = performance.now();
  let e = expr;
  if (now > exprUntil) {
    e = 'neutral';
    if (api.aiThinking) e = 'thinking';
    else {
      const grok = api.mode === 'bot' ? 'b' : (api.state.turn === 'w' ? 'b' : 'w');
      const diff = api.material(grok) - api.material(grok === 'w' ? 'b' : 'w');
      if (diff <= -3) e = 'sweat';
    }
  }

  // eyes track selected piece / last move / thinking glance
  const sel = api.selected, lm = api.state.lastMove;
  if (sel) lookTarget.copy(sqToWorld(sel.r, sel.c));
  else if (lm) lookTarget.copy(sqToWorld(lm.tr, lm.tc));
  else lookTarget.set(0, 0, 0);
  const local = head.worldToLocal(lookTarget.clone());
  const dir = local.normalize();
  let px = THREE.MathUtils.clamp(dir.x * 0.55, -0.25, 0.25), py = THREE.MathUtils.clamp(dir.y * 0.55, -0.25, 0.25);
  if (e === 'thinking') { px = 0.18 + Math.sin(t * 2) * 0.05; py = 0.2; }
  const eyeScaleY = e === 'grin' || e === 'celebrate' ? 0.45 : e === 'shock' ? 1.3 : e === 'sad' || e === 'sweat' ? 0.85 : 1;
  const eyeScale = e === 'shock' ? 1.25 : 1;
  const blink = ((t + 1.3) % 5.1) < 0.12 ? 0.08 : 1;
  for (const [i, ey] of parts.eyes.entries()) {
    ey.pupil.position.x += (px - ey.pupil.position.x) * 0.12;
    ey.pupil.position.y += (py - ey.pupil.position.y) * 0.12;
    const sy = eyeScaleY * blink;
    ey.g.scale.x += (eyeScale - ey.g.scale.x) * 0.2;
    ey.g.scale.y += (sy * eyeScale - ey.g.scale.y) * 0.3;
    // worried brows: tilt lids
    const tilt = e === 'sweat' || e === 'sad' ? (i ? -0.3 : 0.3) : e === 'thinking' ? (i ? 0.15 : 0) : 0;
    ey.lid.rotation.z += (tilt - ey.lid.rotation.z) * 0.15;
    ey.lid.position.y += ((e === 'sweat' || e === 'sad' ? 0.68 : 0.85) - ey.lid.position.y) * 0.15;
  }
  // gentle head motion toward target
  head.rotation.y += (THREE.MathUtils.clamp(dir.x * 0.3, -0.25, 0.25) - head.rotation.y) * 0.05;
  head.rotation.x += ((e === 'thinking' ? -0.08 : -dir.y * 0.15 + 0.12) - head.rotation.x) * 0.05;
  head.rotation.z = e === 'celebrate' ? Math.sin(t * 8) * 0.08 : e === 'thinking' ? Math.sin(t * 1.5) * 0.04 : head.rotation.z * 0.9;
  head.position.y = e === 'celebrate' ? Math.abs(Math.sin(t * 6)) * 0.3 : head.position.y * 0.9;
  // mouth
  parts.segs.forEach((m, i) => {
    const g = mouthTarget(e, i, t);
    m.position.x += (g.x - m.position.x) * 0.18;
    m.position.y += (g.y - m.position.y) * 0.18;
    const s = g.s; m.scale.x += (s - m.scale.x) * 0.2; m.scale.y += (s - m.scale.y) * 0.2;
  });
  // sweat
  parts.drops.forEach((dr, i) => {
    dr.visible = e === 'sweat' || e === 'shock';
    if (dr.visible) { const k = (t * 0.6 + i * 0.37) % 1; dr.position.set((i % 2 ? 1 : -1) * (1.9 + i * 0.1), 1.1 - k * 1.6, 1.2); dr.scale.set(1 - k * 0.3, 1.5 * (1 - k * 0.3), 1); }
  });
  // orbiting stars (celebrate) / thinking dots
  parts.orbit.forEach((s, i) => {
    const show = e === 'celebrate' || (e === 'thinking' && i < 3);
    s.visible = show;
    if (!show) return;
    const a = t * (e === 'celebrate' ? 2.4 : 3.2) + (i / (e === 'celebrate' ? 6 : 3)) * Math.PI * 2;
    if (e === 'celebrate') { s.position.set(Math.cos(a) * 3.1, 1.6 + Math.sin(a * 2) * 0.4, Math.sin(a) * 1.4); s.rotation.set(t * 3, t * 2, 0); s.scale.setScalar(1); }
    else { s.position.set(1.4 + Math.cos(a) * 0.4, 2.3 + i * 0.35, 0.8); s.scale.setScalar(0.5 + i * 0.15); }
  });
  parts.tipM.emissiveIntensity = (api.aiThinking ? 1.2 + Math.abs(Math.sin(t * 9)) * 1.8 : 1.6 + Math.sin(t * 2) * 0.4);
  parts.mouthM.emissive.setHex(e === 'sweat' || e === 'sad' ? 0x6aa8ff : e === 'shock' ? 0xffd166 : 0xff3da8);
}

export function setGiant(on) { api.settings.giant = on; saveSettings(); if (root) root.visible = on; }
export function giantExpr(e, ms) { setExpr(e, ms); }

export function initGiantBot() {
  build();
  hooks.frame.push(frame);
  const prevSpeak = hooks.speak;
  hooks.speak = (mood, text) => {
    prevSpeak && prevSpeak(mood, text);
    if (mood === 'happy') setExpr('grin', 2600);
    else if (mood === 'shock') setExpr('shock', 2600);
    else if (mood === 'sad') setExpr('sad', 2600);
  };
  const prevEnd = hooks.end;
  hooks.end = s => {
    prevEnd && prevEnd(s);
    const grokLost = api.mode === 'bot' && s && s.type === 'checkmate' && s.winner === 'w';
    if (s && s.type === 'checkmate' && !grokLost) setExpr('celebrate', 1e9);
    else if (grokLost) setExpr('sad', 1e9);
    else setExpr('thinking', 4000);
  };
  const prevNew = hooks.newGame;
  hooks.newGame = () => { prevNew && prevNew(); setExpr('grin', 1800); };
}
