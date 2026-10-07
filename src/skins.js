// Material skins: Neon gloss (default), Liquid chrome, Glass & circuits, Lava core
import * as THREE from 'three';
import { skinFactories, skinDecorators, addRim, SIDE, cached } from './pieces3d.js';

export const SKINS = [
  { id: 'neon', label: 'Neon gloss' },
  { id: 'chrome', label: 'Liquid chrome' },
  { id: 'glass', label: 'Glass & circuits' },
  { id: 'lava', label: 'Lava core' }
];

// ---- wobble (liquid chrome morph while moving) ----
const wobbleTime = { value: 0 };
export function tickSkins(t) { wobbleTime.value = t; }
function addWobble(mat) {
  const wobble = { value: 0 };
  mat.userData.wobble = wobble;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.uWobble = wobble;
    sh.uniforms.uTime = wobbleTime;
    sh.vertexShader = 'uniform float uWobble;\nuniform float uTime;\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       float wv = sin(position.y * 18.0 + uTime * 14.0) * cos(position.x * 11.0 - uTime * 9.0);
       transformed += normal * wv * 0.018 * uWobble;`);
  };
  const prevKey = mat.customProgramCacheKey ? mat.customProgramCacheKey.bind(mat) : () => '';
  mat.customProgramCacheKey = () => prevKey() + '|wobble';
  return mat;
}

skinFactories.chrome = color => {
  const m = new THREE.MeshPhysicalMaterial({
    color: color === 'w' ? 0xb9bfd0 : 0x2a2233, metalness: 1, roughness: color === 'w' ? 0.18 : 0.16,
    clearcoat: 0.2, clearcoatRoughness: 0.25, envMapIntensity: color === 'w' ? 0.72 : 1.5
  });
  addRim(m, SIDE[color].rim, color === 'w' ? 0.08 : 0.45);
  return addWobble(m);
};

skinFactories.glass = color => {
  const m = new THREE.MeshPhysicalMaterial({
    color: color === 'w' ? 0xeafcff : 0xffd6f0, metalness: 0, roughness: 0.04,
    transmission: 1, thickness: 0.55, ior: 1.42,
    attenuationColor: color === 'w' ? new THREE.Color(0x9ff3ff) : new THREE.Color(0x5a1a4a),
    attenuationDistance: color === 'w' ? 1.6 : 0.45,
    clearcoat: 0.7, clearcoatRoughness: 0.06, specularIntensity: 0.65, envMapIntensity: 0.85
  });
  addRim(m, SIDE[color].rim, color === 'w' ? 0.22 : 0.4);
  return m;
};

// Procedural crack texture (cellular cracks) for the lava core
let crackTex = null;
function cracks() {
  if (crackTex) return crackTex;
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  const pts = [];
  for (let i = 0; i < 22; i++) pts.push([Math.random() * S, Math.random() * S]);
  const img = g.getImageData(0, 0, S, S); const d = img.data;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let d1 = 1e9, d2 = 1e9;
    for (const [px, py] of pts) {
      for (const ox of [-S, 0, S]) {
        const dx = x - px - ox, dy = y - py; const dd = dx * dx + dy * dy;
        if (dd < d1) { d2 = d1; d1 = dd; } else if (dd < d2) d2 = dd;
      }
    }
    const edge = Math.sqrt(d2) - Math.sqrt(d1);
    const v = Math.max(0, 1 - edge / 3.2);
    const k = (y * S + x) * 4;
    const val = Math.pow(v, 1.6) * 255;
    d[k] = d[k + 1] = d[k + 2] = val; d[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  crackTex = new THREE.CanvasTexture(c);
  crackTex.wrapS = crackTex.wrapT = THREE.RepeatWrapping;
  crackTex.repeat.set(2, 1.5);
  return crackTex;
}
let rockTex = null;
function rock() {
  if (rockTex) return rockTex;
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  for (let i = 0; i < S * S; i++) { const v = 150 + Math.random() * 105; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
  g.putImageData(img, 0, 0);
  rockTex = new THREE.CanvasTexture(c);
  rockTex.wrapS = rockTex.wrapT = THREE.RepeatWrapping; rockTex.repeat.set(3, 2);
  return rockTex;
}
skinFactories.lava = color => {
  const glow = color === 'w' ? 0xffa21f : 0xff2a5a;
  const m = new THREE.MeshStandardMaterial({
    color: color === 'w' ? 0x57504a : 0x16100f, roughness: 0.92, metalness: 0.05,
    roughnessMap: rock(), bumpMap: rock(), bumpScale: 1.2,
    emissive: glow, emissiveMap: cracks(), emissiveIntensity: color === 'w' ? 2.6 : 3.6
  });
  m.userData.baseEmissive = new THREE.Color(glow);
  m.userData.baseEI = m.emissiveIntensity;
  addRim(m, glow, 0.12);
  return m;
};

// Glass skin: visible electronics inside (glowing core + circuit rings + chip)
const coreMats = {};
function coreMat(color) {
  if (!coreMats[color]) {
    const hex = SIDE[color].glow;
    coreMats[color] = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: color === 'w' ? 1.2 : 2.2, roughness: 0.4 });
  }
  return coreMats[color];
}
const chipMats = {};
function chipMat(color) { return chipMats[color] || (chipMats[color] = new THREE.MeshStandardMaterial({ color: SIDE[color].glow, emissive: SIDE[color].glow, emissiveIntensity: 1.6, wireframe: true })); }
const traceMat = new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffd166, emissiveIntensity: 1.6, roughness: 0.3, metalness: 0.6 });
const HEIGHT = { p: 0.62, n: 0.9, b: 0.95, r: 0.85, q: 1.0, k: 1.1 };
skinDecorators.glass = (g, type, color) => {
  const inner = g.userData.inner;
  const h = HEIGHT[type];
  const core = new THREE.Mesh(cached('core-' + type, () => new THREE.CylinderGeometry(0.035, 0.05, h - 0.12, 12)), coreMat(color));
  core.position.y = 0.06 + (h - 0.12) / 2;
  core.userData.noShadow = true; core.castShadow = false;
  inner.add(core);
  const chip = new THREE.Mesh(cached('chip', () => new THREE.IcosahedronGeometry(0.075, 0)), chipMat(color));
  chip.position.y = h * 0.62;
  chip.userData.spinChip = true;
  inner.add(chip);
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(cached('trace-' + i, () => new THREE.TorusGeometry(0.09 + i * 0.012, 0.006, 6, 32)), traceMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.2 + i * (h - 0.25) / 3;
    inner.add(ring);
  }
  g.userData.glassChip = chip;
};

// per-frame skin animation (called from main frame hook)
export function animateSkinPiece(g, t, dt) {
  const mat = g.userData.bodyMat;
  if (mat && mat.userData.wobble) {
    const target = g.userData.animating ? 1 : 0;
    mat.userData.wobble.value += (target - mat.userData.wobble.value) * Math.min(1, dt * (target ? 10 : 3));
  }
  if (g.userData.glassChip) g.userData.glassChip.rotation.y = t * 1.6 + (g.userData.phase || 0);
}
