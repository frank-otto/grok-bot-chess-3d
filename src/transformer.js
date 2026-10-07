// Transformer-Momente: promotion = disassemble/reassemble, castling = spaceship docking with thrusters
import * as THREE from 'three';
import { buildPiece, SIDE } from './pieces3d.js';
import { api, hooks, addTween, animateHop, clockNow, sqToWorld, TOP, extraPieceGroups, fxBudget, shake } from './main3d.js';
import { sfx } from './audio.js';
import { addIdentity } from './piecelife.js';

const ease = {
  inOutCubic: k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
  outCubic: k => 1 - Math.pow(1 - k, 3),
  inCubic: k => k * k * k,
  outBack: k => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); }
};

// ---------- shared thruster particle system ----------
let thr = null;
function thrusters() {
  if (thr) return thr;
  const N = 260;
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.075, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  pts.frustumCulled = false;
  thr = { N, pos, col, geo, pts, life: new Float32Array(N), vel: new Float32Array(N * 3), next: 0, last: 0 };
  for (let i = 0; i < N; i++) pos[i * 3 + 1] = -99;
  return thr;
}
function emit(p, color, n) {
  const T = thrusters();
  if (!T.pts.parent) api.fxGroup.add(T.pts);
  const c = new THREE.Color(color), hot = new THREE.Color(0xffd166);
  for (let j = 0; j < n; j++) {
    const i = T.next; T.next = (T.next + 1) % T.N;
    T.pos[i * 3] = p.x + (Math.random() - 0.5) * 0.12; T.pos[i * 3 + 1] = p.y; T.pos[i * 3 + 2] = p.z + (Math.random() - 0.5) * 0.12;
    T.vel[i * 3] = (Math.random() - 0.5) * 0.6; T.vel[i * 3 + 1] = -2.5 - Math.random() * 1.5; T.vel[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    T.life[i] = 1;
    const mix = Math.random() < 0.5 ? hot : c;
    T.col[i * 3] = mix.r; T.col[i * 3 + 1] = mix.g; T.col[i * 3 + 2] = mix.b;
  }
}
function stepThrusters() {
  const T = thr; if (!T) return;
  const now = clockNow(); const dt = Math.min(0.05, (now - T.last) / 1000); T.last = now;
  let alive = 0;
  for (let i = 0; i < T.N; i++) {
    if (T.life[i] <= 0) continue;
    alive++;
    T.life[i] -= dt * 2.2;
    T.pos[i * 3] += T.vel[i * 3] * dt; T.pos[i * 3 + 1] += T.vel[i * 3 + 1] * dt; T.pos[i * 3 + 2] += T.vel[i * 3 + 2] * dt;
    if (T.pos[i * 3 + 1] < TOP) { T.pos[i * 3 + 1] = TOP; T.vel[i * 3] *= 3; T.vel[i * 3 + 2] *= 3; T.vel[i * 3 + 1] = 0; }
    const f = Math.max(0, T.life[i]);
    if (f <= 0) T.pos[i * 3 + 1] = -99;
    T.col[i * 3] *= 0.985; T.col[i * 3 + 1] *= 0.975; T.col[i * 3 + 2] *= 0.985;
  }
  T.geo.attributes.position.needsUpdate = true; T.geo.attributes.color.needsUpdate = true;
  T.pts.visible = alive > 0;
}

function ringFlash(pos, color) {
  const m = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.32, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  m.rotation.x = -Math.PI / 2; m.position.set(pos.x, TOP + 0.02, pos.z);
  api.fxGroup.add(m);
  addTween({ t0: clockNow(), dur: 600, step: k => { m.scale.setScalar(1 + k * 3); m.material.opacity = 0.9 * (1 - k); }, done: () => { api.fxGroup.remove(m); m.geometry.dispose(); m.material.dispose(); } });
}

// spaceship flight: liftoff → hover-slide → docking
export function flyTo(group, tr, tc, { delay = 0, dur = 1250, height = 0.75 } = {}) {
  return new Promise(resolve => {
    if (!group) return resolve();
    const from = group.position.clone();
    const to = sqToWorld(tr, tc); to.y = TOP;
    const color = SIDE[group.userData.color].glow;
    const inner = group.userData.inner;
    const dir = to.clone().sub(from); dir.y = 0;
    const rate = fxBudget().particles > 50 ? 3 : 1;
    let started = false;
    addTween({
      t0: clockNow() + delay, dur,
      step: k => {
        if (!started) { started = true; group.userData.animating = true; sfx.whoosh && sfx.whoosh(); }
        let y, h;
        if (k < 0.28) { const e = ease.outCubic(k / 0.28); y = TOP + height * e; h = 0; inner.scale.set(1 + 0.06 * (1 - e), 1 - 0.06 * (1 - e), 1 + 0.06 * (1 - e)); }
        else if (k < 0.74) { y = TOP + height + Math.sin((k - 0.28) / 0.46 * Math.PI * 2) * 0.04; h = ease.inOutCubic((k - 0.28) / 0.46); inner.scale.set(1, 1, 1); }
        else { const e = (k - 0.74) / 0.26; y = TOP + height * (1 - ease.inCubic(e)); h = 1; }
        group.position.set(from.x + dir.x * h, y, from.z + dir.z * h);
        // bank into the slide (local tilt)
        const v = k > 0.28 && k < 0.74 ? Math.sin(((k - 0.28) / 0.46) * Math.PI) : 0;
        const yaw = group.rotation.y;
        const lx = dir.x * Math.cos(-yaw) - dir.z * Math.sin(-yaw);
        const lz = dir.x * Math.sin(-yaw) + dir.z * Math.cos(-yaw);
        inner.rotation.set(Math.sign(lz) * 0.18 * v, 0, -Math.sign(lx) * 0.18 * v);
        if (y > TOP + 0.03) emit(new THREE.Vector3(group.position.x, y - 0.02, group.position.z), color, rate);
        stepThrusters();
      },
      done: () => {
        group.position.copy(to); inner.rotation.set(0, 0, 0); inner.scale.set(1, 1, 1);
        group.userData.animating = false;
        ringFlash(to, color);
        // docking bounce
        addTween({ t0: clockNow(), dur: 300, step: k => inner.scale.set(1 + Math.sin(k * Math.PI) * 0.08, 1 - Math.sin(k * Math.PI) * 0.1, 1 + Math.sin(k * Math.PI) * 0.08), done: () => inner.scale.set(1, 1, 1) });
        resolve();
      }
    });
    // keep thrusters fading after the flight
    addTween({ t0: clockNow() + delay + dur, dur: 700, step: () => stepThrusters() });
  });
}

// ---------- promotion: disassemble → reassemble ----------
function partsOf(g) { return g.userData.inner ? [...g.userData.inner.children] : []; }
export function transformPiece(oldGroup, newType, color, pos, { dur = 1200, parent = null } = {}) {
  return new Promise(resolve => {
    const t0 = clockNow();
    const glow = SIDE[color].glow;
    // 1) old parts fly apart
    const oldParts = oldGroup ? partsOf(oldGroup).map(o => ({ o, p: o.position.clone(), r: o.rotation.clone(), s: o.scale.clone(), v: new THREE.Vector3((Math.random() - 0.5) * 0.9, 0.3 + Math.random() * 0.7, (Math.random() - 0.5) * 0.9), spin: (Math.random() - 0.5) * 8 })) : [];
    // 2) new piece builds up
    const ng = buildPiece(newType, color);
    try { addIdentity(ng); } catch (e) { /* decor optional */ }
    ng.userData.phase = Math.random() * 6;
    ng.userData.animating = true;
    ng.position.copy(pos); ng.position.y = TOP;
    ng.rotation.y = oldGroup ? oldGroup.rotation.y : 0;
    const newParts = partsOf(ng).map(o => {
      const tgt = { p: o.position.clone(), r: o.rotation.clone(), s: o.scale.clone() };
      const a = Math.random() * Math.PI * 2, rr = 0.6 + Math.random() * 0.6;
      const start = new THREE.Vector3(Math.cos(a) * rr, 0.6 + Math.random() * 1.2, Math.sin(a) * rr);
      o.position.copy(start); o.scale.setScalar(0.001);
      return { o, tgt, start, spin: (Math.random() - 0.5) * 10, delay: Math.random() * 0.25 };
    });
    (parent || api.piecesGroup).add(ng); extraPieceGroups.add(ng);
    // energy column
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 2.2, 32, 1, true), new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    col.position.set(pos.x, TOP + 1.1, pos.z);
    api.fxGroup.add(col);
    sfx.assemble && sfx.assemble();
    addTween({
      t0, dur,
      step: k => {
        // old: 0..0.45 scatter + shrink
        const ko = Math.min(1, k / 0.45);
        for (const q of oldParts) {
          q.o.position.set(q.p.x + q.v.x * ease.outCubic(ko), q.p.y + q.v.y * Math.sin(ko * Math.PI * 0.8) + ko * 0.2, q.p.z + q.v.z * ease.outCubic(ko));
          q.o.rotation.set(q.r.x + q.spin * ko, q.r.y + q.spin * ko * 0.5, q.r.z);
          q.o.scale.copy(q.s).multiplyScalar(Math.max(0.001, 1 - ease.inCubic(ko)));
        }
        // new: 0.3..1 converge with overshoot
        for (const q of newParts) {
          const kn = Math.max(0, Math.min(1, (k - 0.3 - q.delay * 0.4) / (0.6 - q.delay * 0.2)));
          const e = ease.outBack(kn);
          q.o.position.lerpVectors(q.start, q.tgt.p, Math.min(1.05, e));
          q.o.rotation.set(q.tgt.r.x + q.spin * (1 - kn), q.tgt.r.y + q.spin * (1 - kn), q.tgt.r.z);
          q.o.scale.copy(q.tgt.s).multiplyScalar(Math.max(0.001, Math.min(1.08, e)));
        }
        col.material.opacity = 0.35 * Math.sin(Math.min(1, k) * Math.PI);
        col.rotation.y = k * 6;
        col.scale.set(1 - k * 0.4, 0.4 + k * 0.6, 1 - k * 0.4);
      },
      done: () => {
        for (const q of newParts) { q.o.position.copy(q.tgt.p); q.o.rotation.copy(q.tgt.r); q.o.scale.copy(q.tgt.s); }
        api.fxGroup.remove(col); col.geometry.dispose(); col.material.dispose();
        ringFlash(pos, glow);
        shake(0.08);
        sfx.promote && sfx.promote();
        // hand over to the regular group (built by syncGroups); keep ng until then
        resolve(ng);
      }
    });
  });
}
const pendingTemps = [];
function dropTemp(ng) {
  if (!ng) return;
  extraPieceGroups.delete(ng);
  ng.parent && ng.parent.remove(ng);
  ng.userData.bodyMat && ng.userData.bodyMat.dispose();
}

function beforeMove(ctx, helpers) {
  const { move, moverGroup, mover } = ctx;
  if (!moverGroup) return null;
  if (move.promotion) {
    return (async () => {
      await animateHop(moverGroup, move.tr, move.tc, { dur: helpers.dur, height: 0.5, onLand: () => { helpers.land(); helpers.explodeCap(); } });
      helpers.explodeCap();
      const pos = sqToWorld(move.tr, move.tc);
      const ng = await transformPiece(moverGroup, move.promotion, mover.color, pos);
      moverGroup.visible = false;
      // release the temp in the very sync that builds the real promoted piece (same tick → no flicker, no leak)
      pendingTemps.push(ng);
    })();
  }
  if (move.castle) {
    const back = move.fr;
    const [rf, rt] = move.castle === 'K' ? [7, 5] : [0, 3];
    const rookGroup = api.pieceAt.get(back + ',' + rf);
    return Promise.all([
      flyTo(moverGroup, move.tr, move.tc, { dur: 1250, height: 0.8 }),
      flyTo(rookGroup, back, rt, { delay: 160, dur: 1250, height: 1.25 })
    ]);
  }
  return null;
}

export function initTransformer() {
  hooks.beforeMove.push(beforeMove);
  hooks.afterSync.push(() => { while (pendingTemps.length) dropTemp(pendingTemps.pop()); });
}
