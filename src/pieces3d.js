// Procedural 3D chess pieces v3: smooth classic silhouettes first, bot details second.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const V = (x, y) => new THREE.Vector2(x, y);
const SEG = 72;

// ---------- geometry helpers ----------
const geoCache = {};
export function cached(key, fn) {
  if (!geoCache[key]) geoCache[key] = fn();
  return geoCache[key];
}

// Smooth lathe: flat bottom disc + Catmull-Rom spline through the silhouette (rounded = beveled look)
function smoothLathe(ctrl, divisions = 120) {
  const curve = new THREE.SplineCurve(ctrl);
  const pts = [V(0, 0), ...curve.getSpacedPoints(divisions)];
  const last = pts[pts.length - 1];
  if (last.x > 0.0005) pts.push(V(0, last.y));
  const g = new THREE.LatheGeometry(pts, SEG);
  g.computeVertexNormals();
  return g;
}

// Classic weighted base: wide foot, rounded edge, groove, step
const base = (r) => [
  V(r - 0.015, 0.0), V(r, 0.02), V(r, 0.055), V(r - 0.03, 0.085), V(r - 0.06, 0.105),
  V(r - 0.05, 0.13), V(r - 0.09, 0.16)
];

function pawnBody() {
  return smoothLathe([...base(0.33), V(0.19, 0.21), V(0.145, 0.31), V(0.12, 0.42), V(0.115, 0.47),
    V(0.2, 0.495), V(0.215, 0.52), V(0.18, 0.545), V(0.11, 0.56), V(0.04, 0.565), V(0.0, 0.566)]);
}
function rookBody() {
  return smoothLathe([...base(0.37), V(0.275, 0.21), V(0.255, 0.33), V(0.245, 0.5), V(0.25, 0.64),
    V(0.27, 0.7), V(0.315, 0.735), V(0.32, 0.8), V(0.318, 0.9), V(0.3, 0.925), V(0.24, 0.93),
    V(0.225, 0.9), V(0.15, 0.885), V(0.0, 0.884)]);
}
function bishopBody() {
  return smoothLathe([...base(0.34), V(0.2, 0.21), V(0.145, 0.34), V(0.12, 0.48), V(0.135, 0.535),
    V(0.225, 0.56), V(0.225, 0.595), V(0.14, 0.62), V(0.15, 0.66), V(0.19, 0.74), V(0.205, 0.82),
    V(0.185, 0.92), V(0.13, 1.01), V(0.06, 1.07), V(0.0, 1.085)]);
}
function queenBody() {
  return smoothLathe([...base(0.37), V(0.23, 0.21), V(0.165, 0.36), V(0.135, 0.55), V(0.14, 0.72),
    V(0.165, 0.775), V(0.245, 0.8), V(0.245, 0.84), V(0.17, 0.865), V(0.19, 0.93), V(0.25, 1.02),
    V(0.29, 1.07), V(0.285, 1.09), V(0.0, 1.09)]);
}
function kingBody() {
  return smoothLathe([...base(0.38), V(0.24, 0.21), V(0.175, 0.38), V(0.145, 0.6), V(0.15, 0.78),
    V(0.17, 0.835), V(0.255, 0.86), V(0.255, 0.9), V(0.18, 0.925), V(0.2, 0.99), V(0.245, 1.08),
    V(0.27, 1.14), V(0.255, 1.165), V(0.17, 1.18), V(0.14, 1.22), V(0.06, 1.245), V(0.0, 1.25)]);
}
function knightBase() {
  return smoothLathe([...base(0.36), V(0.255, 0.2), V(0.25, 0.24), V(0.2, 0.26), V(0.0, 0.262)]);
}

// Horse head: snout +x, y up. Smooth bezier outline with jaw, muzzle, forehead, poll, crest.
function knightHeadShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.27, 0.0);
  s.lineTo(0.25, 0.0);
  s.bezierCurveTo(0.27, 0.09, 0.17, 0.22, 0.12, 0.31);   // chest → throat
  s.bezierCurveTo(0.1, 0.37, 0.2, 0.395, 0.33, 0.415);   // jaw underside
  s.bezierCurveTo(0.43, 0.425, 0.5, 0.47, 0.505, 0.55);  // chin → muzzle tip
  s.bezierCurveTo(0.51, 0.62, 0.45, 0.665, 0.37, 0.68);  // muzzle top
  s.bezierCurveTo(0.27, 0.71, 0.19, 0.79, 0.15, 0.87);   // nose bridge → forehead
  s.bezierCurveTo(0.11, 0.95, 0.02, 0.97, -0.06, 0.935); // poll
  s.bezierCurveTo(-0.2, 0.87, -0.31, 0.67, -0.325, 0.44);// crest of neck
  s.bezierCurveTo(-0.335, 0.25, -0.3, 0.08, -0.27, 0.0);
  return s;
}
function knightHead() {
  const g = new THREE.ExtrudeGeometry(knightHeadShape(), {
    depth: 0.2, bevelEnabled: true, bevelThickness: 0.055, bevelSize: 0.045, bevelSegments: 6, curveSegments: 28
  });
  g.translate(0, 0, -0.1);
  g.computeVertexNormals();
  return g;
}

// ---------- materials ----------
export const SIDE = {
  w: { glow: 0x2de2e6, eye: 0x0a6cff, eyeIntensity: 0.9, accent: 0xffd166, rim: 0x7fe9ff, rimStrength: 0.32,
       body: { color: 0xd9d4ea, roughness: 0.36, metalness: 0.0, clearcoat: 0.85, clearcoatRoughness: 0.18, envMapIntensity: 0.8 } },
  b: { glow: 0xff3da8, eye: 0xff3da8, eyeIntensity: 4.6, accent: 0xffd166, rim: 0xff4fb6, rimStrength: 0.55,
       body: { color: 0x0e0c14, roughness: 0.22, metalness: 0.5, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 0.9 } }
};

// Fresnel rim light injected into the standard/physical shader (stays below bloom threshold)
export function addRim(mat, color, strength) {
  const rim = { value: new THREE.Color(color) };
  const rimStrength = { value: strength };
  mat.userData.rim = rim;
  mat.userData.rimStrength = rimStrength;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.rimColor = rim;
    sh.uniforms.rimStrength = rimStrength;
    sh.fragmentShader = 'uniform vec3 rimColor;\nuniform float rimStrength;\n' + sh.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
       float gbcRim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.6);
       totalEmissiveRadiance += rimColor * gbcRim * rimStrength;`);
  };
  const prevKey = mat.customProgramCacheKey ? mat.customProgramCacheKey.bind(mat) : () => '';
  mat.customProgramCacheKey = () => prevKey() + '|gbcRim';
  return mat;
}

// Skin hook (phase 2 extends this). Returns a fresh body material per piece.
export const skinFactories = {
  neon(color) {
    const s = SIDE[color];
    return addRim(new THREE.MeshPhysicalMaterial({ ...s.body, emissive: 0x000000 }), s.rim, s.rimStrength);
  }
};
export const skinDecorators = {};
export let currentSkin = 'neon';
export function setSkin(name) { if (skinFactories[name]) currentSkin = name; }
export function getSkin() { return currentSkin; }
function bodyMat(color) { return (skinFactories[currentSkin] || skinFactories.neon)(color); }

const glowMats = {};
// soft accent glow: dim base colour so lit diffuse + emission stays below the bloom threshold (no crown/halo flares)
const softMats = {};
export function softGlow(hex, intensity = 0.9) {
  const k = hex + ':' + intensity;
  if (!softMats[k]) softMats[k] = new THREE.MeshStandardMaterial({ color: new THREE.Color(hex).multiplyScalar(0.3), emissive: hex, emissiveIntensity: intensity, roughness: 0.45 });
  return softMats[k];
}
export function glowMat(hex, intensity = 3.2) {
  const k = hex + ':' + intensity;
  if (!glowMats[k]) glowMats[k] = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: intensity, roughness: 0.3 });
  return glowMats[k];
}
// Per-side eye materials (shared → whole army's eyes can pulse while Grok Bot thinks)
export const eyeMats = {};
export function eyeMat(color) {
  if (!eyeMats[color]) {
    const s = SIDE[color];
    eyeMats[color] = new THREE.MeshStandardMaterial({ color: s.eye, emissive: s.eye, emissiveIntensity: s.eyeIntensity, roughness: 0.15 });
    eyeMats[color].userData.base = s.eyeIntensity;
  }
  return eyeMats[color];
}
const ringMats = {};
function ringMat(color) {
  if (!ringMats[color]) {
    const hex = SIDE[color].glow;
    ringMats[color] = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: color === 'w' ? 1.6 : 3.0, roughness: 0.3 });
  }
  return ringMats[color];
}
const metalMat = new THREE.MeshStandardMaterial({ color: 0xaab3d6, metalness: 0.95, roughness: 0.22 });
const pupilMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

// ---------- shared detail materials (identical for every skin) ----------
export const detailMats = {
  dark: new THREE.MeshStandardMaterial({ color: 0x1c2033, metalness: 0.85, roughness: 0.28 }),
  visor: new THREE.MeshPhysicalMaterial({ color: 0x05060d, metalness: 0.3, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 0.7 }),
  ledG: new THREE.MeshStandardMaterial({ color: 0x3dff8a, emissive: 0x3dff8a, emissiveIntensity: 2.6 }),
  ledA: new THREE.MeshStandardMaterial({ color: 0xffb02e, emissive: 0xffb02e, emissiveIntensity: 2.6 }),
  blade: new THREE.MeshStandardMaterial({ color: 0xc9d2ff, metalness: 0.8, roughness: 0.25, transparent: true, opacity: 0.85 }),
  gold: new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffb020, emissiveIntensity: 0.9, metalness: 0.7, roughness: 0.38 }),
  sweat: new THREE.MeshPhysicalMaterial({ color: 0x8fdcff, roughness: 0.05, transmission: 0.6, thickness: 0.1, emissive: 0x2288ff, emissiveIntensity: 0.6 }),
  badge: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
  nostril: new THREE.MeshStandardMaterial({ color: 0x05060c, roughness: 0.6 })
};
const sideMatCache = {};
function sideMat(kind, color) {
  const k = kind + color;
  if (sideMatCache[k]) return sideMatCache[k];
  const glow = SIDE[color].glow;
  let m;
  if (kind === 'accent') m = new THREE.MeshStandardMaterial({ color: color === 'w' ? 0x22c4cc : 0xd42a8a, emissive: color === 'w' ? 0x0b5e63 : 0x6a0c44, roughness: 0.35, metalness: 0.2 });
  else if (kind === 'cape') m = new THREE.MeshPhysicalMaterial({ color: color === 'w' ? 0x1aa9b3 : 0xa0145f, emissive: glow, emissiveIntensity: 0.25, roughness: 0.3, metalness: 0.3, side: THREE.DoubleSide, clearcoat: 0.6 });
  else if (kind === 'collar') m = new THREE.MeshStandardMaterial({ color: color === 'w' ? 0xf7f8ff : 0x2a2436, roughness: 0.45 });
  else if (kind === 'spike') m = new THREE.MeshStandardMaterial({ color: new THREE.Color(glow).multiplyScalar(0.55), emissive: glow, emissiveIntensity: color === 'w' ? 0.9 : 1.8, roughness: 0.6, metalness: 0, transparent: true, opacity: 0.9 }); // below bloom threshold: crown must not flare
  sideMatCache[k] = m;
  return m;
}
let holoTexture = null, holoMaterial = null;
export function holoTex() { return holoTexture; }
function holoMat() {
  if (holoMaterial) return holoMaterial;
  const c = document.createElement('canvas'); c.width = 4; c.height = 64;
  const g = c.getContext('2d');
  for (let y = 0; y < 64; y++) { g.fillStyle = y % 4 < 2 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.1)'; g.fillRect(0, y, 4, 1); }
  holoTexture = new THREE.CanvasTexture(c); holoTexture.wrapS = holoTexture.wrapT = THREE.RepeatWrapping; holoTexture.repeat.set(1, 3);
  holoMaterial = new THREE.MeshBasicMaterial({ color: 0x7fe9ff, map: holoTexture, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  return holoMaterial;
}

// ---------- bot details ----------
// Eyes live in their own group: blink (scale.y), glance (position.x), scared (scale up). Always on the FRONT (+z).
function addEyes(g, color, y, z, spread, size, owner = g) {
  const eyes = new THREE.Group();
  eyes.position.set(0, y, z);
  const geo = cached('eye', () => new THREE.SphereGeometry(1, 24, 16));
  const glint = cached('glint', () => new THREE.SphereGeometry(1, 10, 8));
  for (const sx of [-1, 1]) {
    const e = new THREE.Mesh(geo, eyeMat(color));
    e.scale.set(size, size * 1.3, size * 0.55);
    e.position.x = sx * spread;
    const gl = new THREE.Mesh(glint, pupilMat);
    gl.scale.setScalar(size * 0.28);
    gl.position.set(sx * spread + size * 0.3, size * 0.4, size * 0.45);
    eyes.add(e, gl);
  }
  eyes.userData.baseZ = z;
  g.add(eyes);
  owner.userData.eyes = owner.userData.eyes || [];
  owner.userData.eyes.push(eyes);
  return eyes;
}

function addAntenna(g, color, y, x = 0, tilt = 0, len = 0.16, owner = g, z = 0) {
  const stick = new THREE.Mesh(cached('ant-' + len, () => new THREE.CylinderGeometry(0.011, 0.014, len, 10)), metalMat);
  const piv = new THREE.Group();
  piv.position.set(x, y, z);
  piv.rotation.z = tilt;
  stick.position.y = len / 2;
  const tip = new THREE.Mesh(cached('ant-tip', () => new THREE.SphereGeometry(0.034, 18, 12)), glowMat(SIDE[color].glow));
  tip.position.y = len + 0.02;
  piv.add(stick, tip);
  piv.userData.antenna = true;
  g.add(piv);
  owner.userData.antennas = owner.userData.antennas || [];
  owner.userData.antennas.push(piv);
}

function addGlowRing(g, color, y, r, tube = 0.012) {
  const ring = new THREE.Mesh(cached('ring-' + r + '-' + tube, () => new THREE.TorusGeometry(r, tube, 10, 64)), ringMat(color));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y;
  g.add(ring);
  return ring;
}

function mesh(geo, mat) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.userData.body = true;
  return m;
}
function part(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  return m;
}
// front arc band (visor/collar) centred on +z
function frontBand(key, r, h, arc) {
  return cached(key, () => new THREE.CylinderGeometry(r, r, h, 40, 1, true, -arc / 2, arc));
}
const sphere = () => cached('unit-sphere', () => new THREE.SphereGeometry(1, 40, 28));

// ---------- per-type sculpts (front = +z, faces the opponent) ----------
function sculptPawn(inner, g, color, mat) {
  // eager intern: round head, baseball cap with forward brim, headset + badge
  inner.add(mesh(cached('pawn', pawnBody), mat));
  const head = mesh(cached('pawn-head', () => new THREE.SphereGeometry(0.168, 48, 32)), mat);
  head.position.y = 0.705; inner.add(head);
  const capM = sideMat('accent', color);
  const cap = part(cached('cap-dome', () => new THREE.SphereGeometry(0.176, 40, 20, 0, Math.PI * 2, 0, Math.PI * 0.42)), capM, 0, 0.72, -0.005, -0.12);
  const brim = part(cached('cap-brim', () => { const gg = new THREE.CylinderGeometry(0.15, 0.15, 0.016, 32, 1, false, -Math.PI / 2, Math.PI); gg.scale(1, 1, 0.9); return gg; }), capM, 0, 0.8, 0.08, 0.16);
  const button = part(cached('cap-btn', () => new THREE.SphereGeometry(0.022, 12, 8)), glowMat(SIDE[color].glow, 2), 0, 0.88, -0.02);
  inner.add(cap, brim, button);
  addEyes(inner, color, 0.71, 0.15, 0.058, 0.032, g);
  // headset: ear pad + mic boom to the front
  const pad = part(cached('pad', () => new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16)), detailMats.dark, 0.168, 0.7, 0, 0, 0, Math.PI / 2);
  const boom = part(cached('boom-p', () => new THREE.CylinderGeometry(0.007, 0.007, 0.13, 8)), detailMats.dark, 0.135, 0.635, 0.07, 1.25, 0, 0.35);
  const mic = part(cached('mic', () => new THREE.SphereGeometry(0.018, 10, 8)), glowMat(SIDE[color].glow, 2), 0.09, 0.62, 0.13);
  inner.add(pad, boom, mic);
  // lanyard + badge on the chest
  const lan = part(cached('lanyard', () => new THREE.TorusGeometry(0.11, 0.006, 6, 30, Math.PI)), capM, 0, 0.56, 0.03, -0.35, 0, Math.PI);
  const badge = part(cached('badge', () => new RoundedBoxGeometry(0.075, 0.055, 0.01, 1, 0.006)), detailMats.badge, 0, 0.42, 0.135, -0.22);
  const stripe = part(cached('stripe', () => new THREE.BoxGeometry(0.075, 0.014, 0.012)), capM, 0, 0.442, 0.139, -0.22);
  inner.add(lan, badge, stripe);
  addGlowRing(inner, color, 0.105, 0.305);
}

function sculptRook(inner, g, color, mat, ident) {
  // grumpy server rack: square tower, cornice, 8 battlements, LED rack panel, display strip with eyes
  inner.add(mesh(cached('rook-plinth', () => smoothLathe([...base(0.37), V(0.3, 0.2), V(0.29, 0.225), V(0.0, 0.226)])), mat));
  const tower = mesh(cached('rook-tower', () => new RoundedBoxGeometry(0.44, 0.62, 0.44, 4, 0.05)), mat); tower.position.y = 0.53; inner.add(tower);
  const cornice = mesh(cached('rook-cornice', () => new RoundedBoxGeometry(0.56, 0.1, 0.56, 3, 0.03)), mat); cornice.position.y = 0.87; inner.add(cornice);
  const merC = cached('mer-c', () => new RoundedBoxGeometry(0.15, 0.14, 0.15, 3, 0.025));
  const merM = cached('mer-m', () => new RoundedBoxGeometry(0.11, 0.14, 0.09, 3, 0.022));
  for (const [x, z, geo, ry] of [[-0.205, -0.205, merC, 0], [0.205, -0.205, merC, 0], [-0.205, 0.205, merC, 0], [0.205, 0.205, merC, 0],
    [0, 0.225, merM, 0], [0, -0.225, merM, 0], [0.225, 0, merM, Math.PI / 2], [-0.225, 0, merM, Math.PI / 2]]) {
    const m = mesh(geo, mat); m.position.set(x, 0.985, z); m.rotation.y = ry; inner.add(m);
  }
  // front: display strip with LED eyes
  inner.add(part(cached('rook-disp', () => new RoundedBoxGeometry(0.32, 0.1, 0.02, 2, 0.01)), detailMats.visor, 0, 0.74, 0.222));
  addEyes(inner, color, 0.74, 0.236, 0.075, 0.032, g);
  // front rack panel with blinking LED rows
  inner.add(part(cached('rook-rack', () => new RoundedBoxGeometry(0.32, 0.36, 0.016, 2, 0.008)), detailMats.dark, 0, 0.45, 0.222));
  const ledGeo = cached('led', () => new RoundedBoxGeometry(0.045, 0.02, 0.014, 1, 0.005));
  const slotGeo = cached('slot', () => new RoundedBoxGeometry(0.17, 0.018, 0.012, 1, 0.004));
  ident.leds = [];
  for (let row = 0; row < 4; row++) {
    const y = 0.33 + row * 0.08;
    inner.add(part(slotGeo, detailMats.visor, -0.045, y, 0.232));
    for (let i = 0; i < 2; i++) {
      const l = part(ledGeo, (row + i) % 2 ? detailMats.ledA : detailMats.ledG, 0.075 + i * 0.055, y, 0.233);
      inner.add(l); ident.leds.push(l);
    }
  }
  // rack ears (side handles) + rear vents
  for (const s of [-1, 1]) inner.add(part(cached('rack-ear', () => new RoundedBoxGeometry(0.03, 0.3, 0.06, 1, 0.01)), detailMats.dark, s * 0.232, 0.5, 0.17));
  for (let i = 0; i < 4; i++) inner.add(part(cached('vent', () => new RoundedBoxGeometry(0.26, 0.014, 0.012, 1, 0.004)), detailMats.dark, 0, 0.36 + i * 0.07, -0.224));
  addGlowRing(inner, color, 0.105, 0.342);
}

function sculptKnight(inner, g, color, mat, ident) {
  // drone horse: real 3D volume (neck, skull, muzzle), front visor with LED eyes, ears, LED mane, mini rotors
  inner.add(mesh(cached('knight-base', knightBase), mat));
  const head = new THREE.Group();
  head.position.y = 0.24;
  inner.add(head);
  const S = sphere();
  const blob = (sx, sy, sz, x, y, z, rx = 0) => { const m = mesh(S, mat); m.scale.set(sx, sy, sz); m.position.set(x, y, z); m.rotation.x = rx; head.add(m); return m; };
  const neck = mesh(cached('kn-neck', () => new THREE.CylinderGeometry(0.125, 0.2, 0.56, 36, 1)), mat);
  neck.scale.set(0.82, 1, 1); neck.position.set(0, 0.27, -0.045); neck.rotation.x = -0.2; head.add(neck);
  blob(0.17, 0.12, 0.2, 0, 0.06, 0.02);              // chest
  blob(0.145, 0.15, 0.185, 0, 0.6, -0.02, 0.45);     // skull
  blob(0.112, 0.1, 0.19, 0, 0.5, 0.17, 0.62);        // muzzle
  blob(0.1, 0.07, 0.13, 0, 0.42, 0.12, 0.3);         // jaw
  blob(0.09, 0.075, 0.07, 0, 0.44, 0.31, 0.6);       // nose tip
  for (const s of [-1, 1]) {
    head.add(part(cached('kn-nos', () => new THREE.SphereGeometry(0.02, 12, 8)), detailMats.nostril, s * 0.042, 0.43, 0.37));
    const ear = mesh(cached('kn-ear', () => new THREE.ConeGeometry(0.045, 0.16, 16)), mat);
    ear.position.set(s * 0.075, 0.78, -0.07); ear.rotation.set(-0.2, 0, -s * 0.22); head.add(ear);
    const inEar = part(cached('kn-inear', () => new THREE.ConeGeometry(0.022, 0.1, 10)), glowMat(SIDE[color].glow, 1.8), s * 0.075, 0.77, -0.05, -0.2, 0, -s * 0.22);
    head.add(inEar);
  }
  // front visor band across the face, LED eyes on it (facing forward)
  const visor = part(cached('kn-visor', () => { const gg = new RoundedBoxGeometry(0.25, 0.075, 0.06, 2, 0.025); return gg; }), detailMats.visor, 0, 0.615, 0.14, 0.42);
  head.add(visor);
  const eyes = addEyes(head, color, 0.622, 0.172, 0.058, 0.028, g);
  eyes.rotation.x = 0.42;
  // LED mane fins along the back of the neck
  const fin = cached('kn-fin', () => new RoundedBoxGeometry(0.035, 0.1, 0.08, 2, 0.015));
  const crest = new THREE.CubicBezierCurve(V(0.70, -0.12), V(0.62, -0.2), V(0.4, -0.27), V(0.1, -0.25));
  for (let i = 0; i < 7; i++) {
    const t = i / 6, p = crest.getPoint(t), tan = crest.getTangent(t);
    const f = new THREE.Mesh(fin, glowMat(SIDE[color].glow, 2.4));
    f.position.set(0, p.x, p.y - 0.02);
    f.rotation.x = Math.atan2(tan.x, -tan.y);
    head.add(f);
  }
  // mini rotors on side arms (drone!)
  ident.rotors = [];
  for (const s of [-1, 1]) {
    head.add(part(cached('kn-arm', () => new THREE.CylinderGeometry(0.011, 0.011, 0.14, 8)), detailMats.dark, s * 0.2, 0.66, -0.06, 0, 0, Math.PI / 2));
    const rotor = new THREE.Group(); rotor.position.set(s * 0.27, 0.69, -0.06);
    rotor.add(new THREE.Mesh(cached('hub', () => new THREE.CylinderGeometry(0.022, 0.022, 0.03, 12)), detailMats.dark));
    for (let i = 0; i < 2; i++) rotor.add(part(cached('blade', () => new RoundedBoxGeometry(0.2, 0.006, 0.035, 1, 0.003)), detailMats.blade, 0, 0.018, 0, 0, i * Math.PI / 2));
    head.add(rotor); ident.rotors.push(rotor);
  }
  g.userData.knightHead = head;
  addGlowRing(inner, color, 0.105, 0.335);
}

function sculptBishop(inner, g, color, mat, ident) {
  // philosophical hologram monk: robe, mitre with glowing slit, floating halo, scanline shell, prayer beads
  const S = SIDE[color];
  inner.add(mesh(cached('bishop', bishopBody), mat));
  const top = mesh(cached('bishop-top', () => new THREE.SphereGeometry(0.052, 24, 16)), mat); top.position.y = 1.12; inner.add(top);
  const slit = new THREE.Mesh(cached('slit', () => new RoundedBoxGeometry(0.032, 0.3, 0.43, 2, 0.012)), glowMat(S.glow));
  slit.position.set(0, 0.89, 0); slit.rotation.z = -0.65; inner.add(slit);
  // hood shadow behind the eyes
  inner.add(part(frontBand('b-hood', 0.152, 0.07, 1.7), detailMats.visor, 0, 0.75, 0));
  addEyes(inner, color, 0.752, 0.175, 0.056, 0.03, g);
  // prayer beads on the chest
  const bead = cached('bead', () => new THREE.SphereGeometry(0.016, 10, 8));
  for (let i = 0; i < 9; i++) {
    const a = -0.9 + i * 0.225;
    inner.add(part(bead, i === 4 ? glowMat(S.accent, 1.6) : detailMats.gold, Math.sin(a) * 0.16, 0.5 - Math.cos(a) * 0.05 + 0.05, Math.cos(a) * 0.16 * 0.95 + 0.0));
  }
  const shell = new THREE.Mesh(cached('holo', () => new THREE.CylinderGeometry(0.2, 0.24, 0.6, 40, 1, true)), holoMat());
  shell.position.y = 0.84; shell.userData.noShadow = true; shell.raycast = () => {};
  inner.add(shell);
  const halo = part(cached('halo', () => new THREE.TorusGeometry(0.11, 0.009, 8, 40)), softGlow(0xffd166, 0.9), 0, 1.26, -0.02, Math.PI / 2 - 0.25);
  inner.add(halo);
  ident.holo = shell; ident.halo = halo;
  addGlowRing(inner, color, 0.578, 0.226);
  addGlowRing(inner, color, 0.105, 0.312);
}

function sculptQueen(inner, g, color, mat) {
  // cool commander: tall crown of light spikes, commander visor, headset, cape fin at the back
  const S = SIDE[color];
  inner.add(mesh(cached('queen', queenBody), mat));
  const spike = cached('q-lspike', () => new THREE.ConeGeometry(0.03, 0.22, 12));
  const pearl = cached('pearl', () => new THREE.SphereGeometry(0.032, 18, 12));
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const tall = i % 3 === 0 ? 1.25 : 1;
    const sp = part(spike, sideMat('spike', color), Math.sin(a) * 0.245, 1.17 + (tall - 1) * 0.11, Math.cos(a) * 0.245, Math.cos(a) * 0.3, 0, -Math.sin(a) * 0.3);
    sp.scale.y = tall; inner.add(sp);
    inner.add(part(pearl, i % 3 === 0 ? softGlow(S.accent, 0.95) : softGlow(S.glow, color === 'w' ? 1.0 : 2.0), Math.sin(a) * 0.235, 1.105, Math.cos(a) * 0.235));
  }
  const dome = mesh(cached('q-dome', () => new THREE.SphereGeometry(0.15, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2)), mat); dome.position.y = 1.08; inner.add(dome);
  inner.add(part(cached('q-orb', () => new THREE.SphereGeometry(0.06, 24, 16)), softGlow(S.accent, 0.95), 0, 1.28, 0));
  // commander visor band + eyes in front of it
  inner.add(part(frontBand('q-visor', 0.158, 0.075, 2.2), detailMats.visor, 0, 0.935, 0));
  addEyes(inner, color, 0.935, 0.17, 0.06, 0.032, g);
  // headset
  inner.add(part(cached('earpad', () => new THREE.CylinderGeometry(0.038, 0.038, 0.03, 16)), detailMats.dark, 0.16, 0.935, 0, 0, 0, Math.PI / 2));
  inner.add(part(cached('boom-q', () => new THREE.CylinderGeometry(0.007, 0.007, 0.15, 8)), detailMats.dark, 0.15, 0.885, 0.07, 1.2, 0, 0.3));
  inner.add(part(cached('mic', () => new THREE.SphereGeometry(0.018, 10, 8)), glowMat(S.glow, 2), 0.115, 0.855, 0.14));
  // insignia star on the chest
  inner.add(part(cached('q-star', () => { const s = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 0.02 : 0.045; i ? s.lineTo(Math.cos(a) * r, -Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, -Math.sin(a) * r); } return new THREE.ExtrudeGeometry(s, { depth: 0.01, bevelEnabled: false }); }), detailMats.gold, 0, 0.6, 0.142));
  // cape / fin flaring out at the back
  const cape = part(cached('q-cape', () => new THREE.CylinderGeometry(0.19, 0.33, 0.62, 32, 1, true, Math.PI - 0.95, 1.9)), sideMat('cape', color), 0, 0.5, -0.02);
  cape.castShadow = true; inner.add(cape);
  addGlowRing(inner, color, 0.82, 0.246);
  addGlowRing(inner, color, 0.105, 0.342);
}

function sculptKing(inner, g, color, mat, ident) {
  // nervous CEO: tallest, crown band, cross antenna with blinking gem, collar + tie, glasses, sweat drop
  const S = SIDE[color];
  inner.add(mesh(cached('king', kingBody), mat));
  const tooth = cached('k-tooth', () => new RoundedBoxGeometry(0.07, 0.07, 0.05, 2, 0.015));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const t = mesh(tooth, mat); t.position.set(Math.sin(a) * 0.25, 1.19, Math.cos(a) * 0.25); t.rotation.y = a; inner.add(t);
  }
  const vert = mesh(cached('k-v', () => new RoundedBoxGeometry(0.085, 0.36, 0.085, 3, 0.02)), mat); vert.position.y = 1.42;
  const hor = mesh(cached('k-h', () => new RoundedBoxGeometry(0.25, 0.085, 0.085, 3, 0.02)), mat); hor.position.y = 1.47;
  inner.add(vert, hor);
  const gem = part(cached('k-gem', () => new THREE.OctahedronGeometry(0.045)), softGlow(S.accent, 1.0), 0, 1.47, 0.05); inner.add(gem);
  addAntenna(inner, color, 1.6, 0, 0, 0.1, g);  // antenna sprouting from the cross
  // glasses (CEO look) around the eyes
  addEyes(inner, color, 1.0, 0.19, 0.068, 0.034, g);
  for (const s of [-1, 1]) inner.add(part(cached('k-glass', () => new THREE.TorusGeometry(0.05, 0.008, 8, 28)), detailMats.dark, s * 0.068, 1.0, 0.198));
  inner.add(part(cached('k-bridge', () => new THREE.CylinderGeometry(0.006, 0.006, 0.04, 6)), detailMats.dark, 0, 1.005, 0.205, 0, 0, Math.PI / 2));
  // shirt collar + tie
  for (const s of [-1, 1]) inner.add(part(cached('k-collar', () => new RoundedBoxGeometry(0.1, 0.06, 0.02, 1, 0.008)), sideMat('collar', color), s * 0.055, 0.83, 0.175, -0.25, s * 0.35, s * 0.45));
  const ts = new THREE.Shape();
  ts.moveTo(-0.02, 0); ts.lineTo(0.02, 0); ts.lineTo(0.035, -0.17); ts.lineTo(0, -0.21); ts.lineTo(-0.035, -0.17); ts.closePath();
  inner.add(part(cached('tie', () => new THREE.ExtrudeGeometry(ts, { depth: 0.01, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1 })), sideMat('accent', color), 0, 0.8, 0.158, -0.1));
  inner.add(part(cached('knot', () => new THREE.SphereGeometry(0.024, 12, 8)), sideMat('accent', color), 0, 0.805, 0.17));
  const drop = part(cached('drop', () => { const gg = new THREE.SphereGeometry(0.035, 16, 12); gg.scale(1, 1.4, 1); return gg; }), detailMats.sweat, 0.17, 1.05, 0.14);
  drop.visible = false; inner.add(drop); ident.sweat = drop;
  addGlowRing(inner, color, 0.88, 0.256);
  addGlowRing(inner, color, 0.105, 0.352);
}

// ---------- builders ----------
export function faceYaw(color) { return color === 'w' ? Math.PI : 0; } // white looks toward black (−z) and vice versa
export function buildPiece(type, color) {
  const g = new THREE.Group();
  const mat = bodyMat(color);
  g.userData.bodyMat = mat;
  g.userData.type = type;
  g.userData.color = color;
  const inner = new THREE.Group(); // animated child (squash/lean) — group itself carries position/yaw
  g.add(inner);
  g.userData.inner = inner;
  const ident = {};
  g.userData.identity = ident;
  if (type === 'p') sculptPawn(inner, g, color, mat, ident);
  else if (type === 'r') sculptRook(inner, g, color, mat, ident);
  else if (type === 'n') sculptKnight(inner, g, color, mat, ident);
  else if (type === 'b') sculptBishop(inner, g, color, mat, ident);
  else if (type === 'q') sculptQueen(inner, g, color, mat, ident);
  else if (type === 'k') sculptKing(inner, g, color, mat, ident);
  g.rotation.y = faceYaw(color);
  g.traverse(o => { if (o.isMesh && !o.userData.noShadow) o.castShadow = true; });
  const deco = skinDecorators[currentSkin];
  if (deco) deco(g, type, color);
  return g;
}

export const PIECE_HEIGHT = { p: 0.93, n: 1.12, b: 1.2, r: 1.06, q: 1.42, k: 1.72 };
