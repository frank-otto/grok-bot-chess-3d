// Pieces with memory + bot personalities: stats decor, identity details, hover tooltips, speech bubbles
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { cached, SIDE, holoTex as holoTexOf } from './pieces3d.js';
import { api, hooks, onHover, BOTNAME, VALUE, clockNow, addTween, registry } from './main3d.js';
import { say } from './personality.js';

export const PERSONA = {
  p: { title: 'eager intern bot',
       threat: ['Is this … part of my onboarding?', 'I only started yesterday!', 'Wait, this wasn’t in my job description!', 'Help! Where is HR?', 'I’m just the intern!'],
       capture: ['Did it! Do I get a contract now?', 'That’s going on my résumé!', 'Did I do that right?!', 'First win! I’m calling my mom!'],
       neighbor: ['He was my onboarding buddy! 😢', 'I’ll take over all his tasks. All of them. Right now.', 'Who’s going to bring the coffee now?'] },
  n: { title: 'hyperactive drone bot',
       threat: ['Whoa whoa whoa! Evasive maneuvers! Bzzzz!', 'Too fast for you! I think!', 'Rotors to maximum!', 'I see you! I see EVERYTHING!'],
       capture: ['WHOOSH! L-shape, baby!', 'Zap, right over everyone! Did anyone film that?!', 'Bzzzt! Direct hit!', 'Loop! Landing! Applause!'],
       neighbor: ['NO! Rotor salute to my colleague! 🫡', 'I’ll fly a lap of honor for him!', 'Bzz … that was close …'] },
  b: { title: 'philosophical hologram monk',
       threat: ['A threat is only an illusion … I hope.', 'Om … diagonal … om …', 'Who threatens whom, in the grand scheme of things?'],
       capture: ['All things pass. Especially you.', 'I merely listened to the diagonal.', 'Enlightenment came at an angle.'],
       neighbor: ['He is now one with the cloud.', 'An ending is just a reboot.', 'I shall light an LED for him.'] },
  r: { title: 'grumpy server-rack bot',
       threat: ['Hey! Don’t rattle my fans.', 'I’m a server, not a target.', '99.9% uptime – and it stays that way.', 'Grmpf. What do you want?'],
       capture: ['Grmpf. Done. Now leave me alone.', 'Data deleted. No backup.', 'One more of those and I need a break.'],
       neighbor: ['Outage in the neighboring rack. Typical.', 'Never liked him anyway. Okay, maybe a little.', 'Grmpf. That means paperwork.'] },
  q: { title: 'cool commander',
       threat: ['Cute that you’re trying.', 'I’ve had worse for breakfast.', 'Threatening me? Bold.'],
       capture: ['Target neutralized. Next.', 'I don’t do this for fun. Okay, a little.', 'Commander to base: done.'],
       neighbor: ['Hold formation! We’ll get that back.', 'Noted. We’ll pay them back.', 'Stay calm, team. I’ve got this.'] },
  k: { title: 'nervous CEO bot',
       threat: ['Uhm … can someone handle this for me?', 'I have a meeting in a minute! Somewhere else!'],
       capture: ['Did I just do that myself?! Wow!', 'Executive decision! Done!'],
       check: ['CHECK?! Who approved this?!', 'Call security! And my rook!', 'I need a coffee. And cover.', 'This was not in the business plan!'],
       neighbor: ['Oh no, this means bad quarterly numbers!', 'Who’s doing the presentation now?!'] }
};

// ---------- shared materials ----------
const gold = new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffb020, emissiveIntensity: 1.1, roughness: 0.3, metalness: 0.6 });
const crownMat = new THREE.MeshStandardMaterial({ color: 0xff3da8, emissive: 0xff3da8, emissiveIntensity: 2.0, roughness: 0.3 });
const scratchMats = { w: new THREE.MeshStandardMaterial({ color: 0x4a4560, roughness: 0.8 }), b: new THREE.MeshStandardMaterial({ color: 0xd8dbe8, roughness: 0.4, metalness: 0.6, emissive: 0x333344 }) };
const ledG = new THREE.MeshStandardMaterial({ color: 0x3dff8a, emissive: 0x3dff8a, emissiveIntensity: 2.6 });
const ledA = new THREE.MeshStandardMaterial({ color: 0xffb02e, emissive: 0xffb02e, emissiveIntensity: 2.6 });
const bladeMat = new THREE.MeshStandardMaterial({ color: 0xc9d2ff, metalness: 0.8, roughness: 0.25, transparent: true, opacity: 0.85 });
const darkMetal = new THREE.MeshStandardMaterial({ color: 0x30344a, metalness: 0.9, roughness: 0.3 });
const sweatMat = new THREE.MeshPhysicalMaterial({ color: 0x8fdcff, roughness: 0.05, transmission: 0.6, thickness: 0.1, emissive: 0x2288ff, emissiveIntensity: 0.6 });
const badgeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
const tieMats = { w: new THREE.MeshStandardMaterial({ color: 0x2de2e6, emissive: 0x0b6f73, roughness: 0.4 }), b: new THREE.MeshStandardMaterial({ color: 0xff3da8, emissive: 0x7a1050, roughness: 0.4 }) };
let holoMat = null, holoTex = null;
function holo() {
  if (holoMat) return holoMat;
  const c = document.createElement('canvas'); c.width = 4; c.height = 64;
  const g = c.getContext('2d');
  for (let y = 0; y < 64; y++) { g.fillStyle = y % 4 < 2 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.1)'; g.fillRect(0, y, 4, 1); }
  holoTex = new THREE.CanvasTexture(c); holoTex.wrapS = holoTex.wrapT = THREE.RepeatWrapping; holoTex.repeat.set(1, 3);
  holoMat = new THREE.MeshBasicMaterial({ color: 0x7fe9ff, map: holoTex, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  return holoMat;
}
function starGeo() {
  return cached('star', () => {
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 0.028 : 0.064;
      i ? s.lineTo(Math.cos(a) * r, -Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, -Math.sin(a) * r);
    }
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.004, bevelSegments: 2 });
    g.translate(0, 0, -0.006);
    return g;
  });
}
function crownGeo() {
  return cached('mini-crown', () => {
    const g = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16, 1, true);
    return g;
  });
}
const FRONT = { p: { y: 0.16, z: 0.29 }, n: { y: 0.16, z: 0.31 }, b: { y: 0.16, z: 0.3 }, r: { y: 0.16, z: 0.33 }, q: { y: 0.16, z: 0.33 }, k: { y: 0.16, z: 0.34 } };
const BODY_R = { p: 0.135, n: 0.16, b: 0.135, r: 0.225, q: 0.15, k: 0.16 };
const TOPY = { p: 1.0, n: 1.2, b: 1.32, r: 1.12, q: 1.48, k: 1.8 };

function rand(seed) { const x = Math.sin(seed * 9301 + 49297) * 233280; return x - Math.floor(x); }

// ---------- identity details (once per group) ----------
function addIdentity(g) {
  if (g.userData.identity) return; // v4: identity details are sculpted in buildPiece
  return addIdentityLegacy(g);
}
function addIdentityLegacy(g) {
  const ud = g.userData, inner = ud.inner, type = ud.type, color = ud.color;
  ud.identity = {};
  if (type === 'r') {
    const leds = [];
    const geo = cached('led', () => new RoundedBoxGeometry(0.05, 0.022, 0.016, 1, 0.006));
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(geo, i % 2 ? ledA : ledG);
      m.position.set(-0.07 + (i % 2) * 0.14, 0.3 + Math.floor(i / 2) * 0.1, 0.25);
      if (i === 4) m.position.set(0, 0.62, 0.252);
      inner.add(m); leds.push(m);
    }
    for (let i = 0; i < 3; i++) { // vent slits
      const v = new THREE.Mesh(cached('vent', () => new RoundedBoxGeometry(0.15, 0.012, 0.012, 1, 0.004)), darkMetal);
      v.position.set(0, 0.25 + i * 0.03, 0.252); inner.add(v);
    }
    ud.identity.leds = leds;
  } else if (type === 'n') {
    const head = ud.knightHead || inner;
    const rotors = [];
    for (const z of [0.22, -0.22]) {
      const arm = new THREE.Mesh(cached('arm', () => new THREE.CylinderGeometry(0.012, 0.012, 0.12, 8)), darkMetal);
      arm.rotation.x = Math.PI / 2; arm.position.set(-0.2, 0.78, z * 0.78); head.add(arm);
      const rotor = new THREE.Group(); rotor.position.set(-0.2, 0.81, z);
      const hub = new THREE.Mesh(cached('hub', () => new THREE.CylinderGeometry(0.025, 0.025, 0.03, 12)), darkMetal);
      rotor.add(hub);
      for (let i = 0; i < 2; i++) {
        const blade = new THREE.Mesh(cached('blade', () => new RoundedBoxGeometry(0.26, 0.006, 0.04, 1, 0.003)), bladeMat);
        blade.rotation.y = i * Math.PI / 2; blade.position.y = 0.018; rotor.add(blade);
      }
      head.add(rotor); rotors.push(rotor);
    }
    ud.identity.rotors = rotors;
  } else if (type === 'b') {
    const shell = new THREE.Mesh(cached('holo', () => new THREE.CylinderGeometry(0.2, 0.24, 0.6, 40, 1, true)), holo());
    shell.position.y = 0.84; shell.userData.noShadow = true; shell.castShadow = false;
    shell.raycast = () => {};
    inner.add(shell);
    const halo = new THREE.Mesh(cached('halo', () => new THREE.TorusGeometry(0.11, 0.008, 8, 40)), new THREE.MeshStandardMaterial({ color: 0x4c3e1e, emissive: 0xffd166, emissiveIntensity: 0.9, roughness: 0.45 }));
    halo.rotation.x = Math.PI / 2; halo.position.y = 1.26; inner.add(halo);
    ud.identity.holo = shell; ud.identity.halo = halo;
  } else if (type === 'q') {
    const band = new THREE.Mesh(cached('headset', () => new THREE.TorusGeometry(0.205, 0.012, 8, 40, Math.PI)), darkMetal);
    band.position.y = 0.93; band.rotation.y = Math.PI / 2; band.rotation.z = 0; inner.add(band);
    const ear = new THREE.Mesh(cached('earpad', () => new THREE.CylinderGeometry(0.04, 0.04, 0.03, 16)), darkMetal);
    ear.rotation.z = Math.PI / 2; ear.position.set(0.2, 0.93, 0); inner.add(ear);
    const boom = new THREE.Mesh(cached('boom', () => new THREE.CylinderGeometry(0.008, 0.008, 0.16, 8)), darkMetal);
    boom.rotation.x = Math.PI / 2.4; boom.position.set(0.19, 0.88, 0.08); inner.add(boom);
    const mic = new THREE.Mesh(cached('mic', () => new THREE.SphereGeometry(0.02, 10, 8)), new THREE.MeshStandardMaterial({ color: SIDE[color].glow, emissive: SIDE[color].glow, emissiveIntensity: 2 }));
    mic.position.set(0.16, 0.84, 0.155); inner.add(mic);
    const insignia = new THREE.Mesh(starGeo(), gold); insignia.position.set(0, 0.62, 0.148); insignia.scale.setScalar(0.9); inner.add(insignia);
  } else if (type === 'k') {
    const s = new THREE.Shape();
    s.moveTo(-0.02, 0); s.lineTo(0.02, 0); s.lineTo(0.035, -0.17); s.lineTo(0, -0.21); s.lineTo(-0.035, -0.17); s.closePath();
    const tie = new THREE.Mesh(cached('tie', () => new THREE.ExtrudeGeometry(s, { depth: 0.01, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1 })), tieMats[color]);
    tie.position.set(0, 0.8, 0.152); tie.rotation.x = -0.12; inner.add(tie);
    const knot = new THREE.Mesh(cached('knot', () => new THREE.SphereGeometry(0.026, 12, 8)), tieMats[color]); knot.position.set(0, 0.81, 0.16); inner.add(knot);
    const drop = new THREE.Mesh(cached('drop', () => { const gg = new THREE.SphereGeometry(0.04, 16, 12); gg.scale(1, 1.4, 1); return gg; }), sweatMat);
    drop.position.set(0.2, 1.05, 0.14); drop.visible = false; inner.add(drop);
    ud.identity.sweat = drop;
  } else if (type === 'p') {
    const lan = new THREE.Mesh(cached('lanyard', () => new THREE.TorusGeometry(0.12, 0.006, 6, 30, Math.PI)), tieMats[color]);
    lan.rotation.z = Math.PI; lan.position.set(0, 0.6, 0.02); lan.rotation.x = -0.35; inner.add(lan);
    const badge = new THREE.Mesh(cached('badge', () => new RoundedBoxGeometry(0.075, 0.055, 0.01, 1, 0.006)), badgeMat);
    badge.position.set(0, 0.43, 0.148); badge.rotation.x = -0.25; inner.add(badge);
    const stripe = new THREE.Mesh(cached('stripe', () => new THREE.BoxGeometry(0.075, 0.014, 0.012)), tieMats[color]);
    stripe.position.set(0, 0.452, 0.152); stripe.rotation.x = -0.25; inner.add(stripe);
  }
}

// ---------- memory decor (rebuilt when stats change) ----------
function applyMemory(g) {
  const e = g.userData.entry; if (!e) return;
  const s = e.stats;
  const sig = `${s.captures}|${s.checks}|${Math.min(4, s.attacked)}`;
  if (g.userData.memSig === sig) return;
  g.userData.memSig = sig;
  if (g.userData.memGroup) g.userData.inner.remove(g.userData.memGroup);
  const mg = new THREE.Group();
  g.userData.inner.add(mg);
  g.userData.memGroup = mg;
  const type = g.userData.type, color = g.userData.color, f = FRONT[type];
  // stars (captures) + mini crowns (checks) in a row on the base front
  const icons = [];
  for (let i = 0; i < Math.min(5, s.captures); i++) icons.push('star');
  for (let i = 0; i < Math.min(3, s.checks); i++) icons.push('crown');
  const n = Math.min(6, icons.length);
  for (let i = 0; i < n; i++) {
    const a = (i - (n - 1) / 2) * 0.36;
    const x = Math.sin(a) * f.z, z = Math.cos(a) * f.z;
    let m;
    if (icons[i] === 'star') { m = new THREE.Mesh(starGeo(), gold); m.position.set(x, f.y + 0.02, z); m.rotation.y = a; }
    else {
      m = new THREE.Group();
      const band = new THREE.Mesh(crownGeo(), crownMat); m.add(band);
      for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(cached('crown-spike', () => new THREE.ConeGeometry(0.015, 0.045, 6)), crownMat); sp.position.set((k - 1) * 0.032, 0.036, 0.03); m.add(sp); }
      m.position.set(x, f.y + 0.02, z); m.rotation.y = a;
    }
    mg.add(m);
  }
  // battle scratches when attacked (deterministic per piece id)
  const sc = Math.min(4, s.attacked);
  const R = BODY_R[type];
  for (let i = 0; i < sc; i++) {
    const seed = e.id * 31 + i * 7;
    const ang = (rand(seed) - 0.5) * 1.3;
    const y = (type === 'n' ? 0.5 : 0.3) + rand(seed + 1) * 0.22;
    const m = new THREE.Mesh(cached('scratch', () => new RoundedBoxGeometry(0.075, 0.009, 0.008, 1, 0.003)), scratchMats[color]);
    if (type === 'n') m.position.set((rand(seed + 2) - 0.5) * 0.16, y, 0.15);
    else m.position.set(Math.sin(ang) * (R + 0.005), y, Math.cos(ang) * (R + 0.005));
    m.rotation.set(0, type === 'n' ? 0 : ang, (rand(seed + 3) - 0.5) * 1.6);
    mg.add(m);
  }
  // rising glow with experience
  const mat = g.userData.bodyMat;
  if (mat && mat.userData.rimStrength) {
    if (mat.userData.rimBase === undefined) mat.userData.rimBase = mat.userData.rimStrength.value;
    mat.userData.rimStrength.value = mat.userData.rimBase + Math.min(0.6, s.captures * 0.15 + s.checks * 0.08);
  }
}

// ---------- speech bubbles ----------
let bubble = null;
let lastBubbleAt = -1e9;
const pieceCooldown = new Map();
function bubbleTexture(text, color) {
  const W = 640, H = 200, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.font = '700 34px -apple-system, "SF Pro Text", "Segoe UI", system-ui, sans-serif';
  const words = text.split(' '); const lines = []; let line = '';
  for (const w of words) { const t = line ? line + ' ' + w : w; if (g.measureText(t).width > W - 70 && line) { lines.push(line); line = w; } else line = t; }
  lines.push(line);
  const L = lines.slice(0, 2);
  const bw = Math.min(W - 10, Math.max(...L.map(l => g.measureText(l).width)) + 56), bh = 40 + L.length * 44;
  const x = (W - bw) / 2, y = 6;
  g.fillStyle = 'rgba(7,9,20,0.92)'; g.strokeStyle = color === 'w' ? '#2de2e6' : '#ff3da8'; g.lineWidth = 5;
  g.beginPath(); g.roundRect ? g.roundRect(x, y, bw, bh, 26) : g.rect(x, y, bw, bh);
  g.fill(); g.stroke();
  g.beginPath(); g.moveTo(W / 2 - 18, y + bh - 2); g.lineTo(W / 2, y + bh + 30); g.lineTo(W / 2 + 18, y + bh - 2); g.closePath();
  g.fill(); g.stroke();
  g.fillRect(W / 2 - 15, y + bh - 6, 30, 8);
  g.fillStyle = '#f5f7ff'; g.textAlign = 'center'; g.textBaseline = 'middle';
  L.forEach((l, i) => g.fillText(l, W / 2, y + 26 + 22 + i * 44));
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
export function pieceSay(group, text, { force = false } = {}) {
  if (!api.settings.bubbles || !group || !group.parent || !text) return false;
  const now = clockNow();
  const id = group.userData.id;
  if (!force && (now - lastBubbleAt < 2600 || (pieceCooldown.get(id) || -1e9) > now - 9000)) return false;
  lastBubbleAt = now; pieceCooldown.set(id, now);
  window.__gbcBubbles = (window.__gbcBubbles || 0) + 1; window.__gbcLastBubble = text;
  if (bubble) { bubble.parent && bubble.parent.remove(bubble); bubble.material.map.dispose(); bubble.material.dispose(); }
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, group.userData.color), transparent: true, depthTest: false, depthWrite: false }));
  sp.renderOrder = 20;
  sp.center.set(0.5, 0.0);
  api.fxGroup.add(sp);
  bubble = sp;
  const top = TOPY[group.userData.type];
  addTween({
    t0: now, dur: 2900,
    step: k => {
      const p = group.getWorldPosition(new THREE.Vector3());
      sp.position.set(p.x, p.y + top + 0.05, p.z);
      const pop = k < 0.1 ? k / 0.1 : 1;
      const s = 2.6 * (k < 0.1 ? 0.6 + 0.4 * pop + Math.sin(pop * Math.PI) * 0.15 : 1);
      sp.scale.set(s, s * 200 / 640, 1);
      sp.material.opacity = k < 0.85 ? 1 : 1 - (k - 0.85) / 0.15;
    },
    done: () => { if (bubble === sp) bubble = null; sp.parent && sp.parent.remove(sp); sp.material.map.dispose(); sp.material.dispose(); }
  });
  return true;
}
function pickLine(type, ev) {
  const arr = PERSONA[type][ev] || [];
  return say(arr); // shuffle bag: no line twice in a row
}

// ---------- event wiring ----------
function onAfterMove(ctx, ev) {
  if (!api.settings.bubbles) return;
  const gOf = e => e && api.groups.get(e.id);
  // 1) king in check
  if (ev.status.type === 'check') {
    let king = null;
    for (const g of api.groups.values()) if (g.userData.type === 'k' && g.userData.color === api.state.turn) king = g;
    if (king && pieceSay(king, pickLine('k', 'check'))) return;
  }
  // 2) capturer brags
  if (ctx.capPiece && ctx.moverEntry && Math.random() < 0.75) {
    if (pieceSay(gOf(ctx.moverEntry), pickLine(ctx.moverEntry.type, 'capture'))) return;
  }
  // 3) neighbour of the victim mourns
  if (ctx.capPiece && ctx.victimEntry && Math.random() < 0.6) {
    const v = ctx.victimEntry;
    let best = null;
    for (const e of registry().values()) {
      if (e.color !== v.color) continue;
      const d = Math.max(Math.abs(e.r - v.r), Math.abs(e.c - v.c));
      if (d === 1 && (!best || VALUE[e.type] > VALUE[best.type])) best = e;
    }
    if (best && pieceSay(gOf(best), pickLine(best.type, 'neighbor'))) return;
  }
  // 4) newly threatened (most valuable)
  if (ctx.newlyThreatened && ctx.newlyThreatened.length && Math.random() < 0.55) {
    const e = ctx.newlyThreatened.slice().sort((a, b) => (VALUE[b.type] || 10) - (VALUE[a.type] || 10))[0];
    pieceSay(gOf(e), pickLine(e.type, 'threat'));
  }
}

// ---------- tooltip ----------
function tooltip(hit, ev) {
  const tt = api.els.tooltip;
  if (!hit || !hit.group || !hit.group.userData.entry || !ev) { tt.hidden = true; return; }
  const e = hit.group.userData.entry, s = e.stats;
  const side = e.color === 'w' ? 'White' : (api.mode === 'bot' ? 'Grok Bot' : 'Black');
  const caps = `${s.captures} ${s.captures === 1 ? 'capture' : 'captures'}`;
  const extra = [];
  if (s.checks) extra.push(`gave check ${s.checks}×`);
  if (s.attacked) extra.push(`threatened ${s.attacked}×`);
  if (e.promoted) extra.push('promoted 🎓');
  tt.innerHTML = `<b>${BOTNAME[e.type]}</b> <span class="tt-sub">(${side})</span><br>${caps}, survived ${s.survived} moves${s.moves ? ` · moved ${s.moves}×` : ''}` +
    `<br><span class="tt-sub">${PERSONA[e.type].title}${extra.length ? ' · ' + extra.join(' · ') : ''}</span>`;
  const rect = api.els.stage.getBoundingClientRect();
  tt.style.left = (ev.clientX - rect.left) + 'px';
  tt.style.top = (ev.clientY - rect.top) + 'px';
  tt.hidden = false;
}

// ---------- per-frame identity animation ----------
function frame(t, dt) {
  const st = api.state;
  for (const g of api.groups.values()) {
    const id = g.userData.identity; if (!id) continue;
    if (id.leds) id.leds.forEach((m, i) => { m.visible = Math.sin(t * (3 + i * 1.7) + g.userData.phase * 5 + i) > -0.3; });
    if (id.rotors) id.rotors.forEach((r, i) => { r.rotation.y += dt * (g.userData.animating ? 60 : 22) * (i ? -1 : 1); });
    if (id.holo) { id.holo.rotation.y = t * 0.6; id.holo.material.opacity = 0.08 + 0.05 * Math.sin(t * 7 + g.userData.phase); const ht = holoTexOf(); if (ht) ht.offset.y = -t * 0.35; }
    if (id.halo) { id.halo.position.y = 1.26 + Math.sin(t * 2 + g.userData.phase) * 0.025; id.halo.rotation.z = t * 0.8; }
    if (id.sweat) {
      const nervous = (api.checkKingGroup === g) || g.userData.scared;
      id.sweat.visible = nervous;
      if (nervous) { const k = (t * 0.9 + g.userData.phase) % 1; id.sweat.position.y = 1.1 - k * 0.3; id.sweat.scale.setScalar(1 - k * 0.4); }
    }
  }
}

export function initPieceLife() {
  hooks.afterSync.push(() => {
    for (const g of api.groups.values()) {
      if (!g.userData.identity) addIdentity(g);
      applyMemory(g);
    }
  });
  hooks.afterMove.push(onAfterMove);
  hooks.frame.push(frame);
  onHover(tooltip);
}
export { addIdentity };
