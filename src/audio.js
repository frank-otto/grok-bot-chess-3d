// Tiny WebAudio sound design + procedural synthwave loop (no audio files → works offline / file://)
let ctx = null, master = null, sfxBus = null, musicBus = null;
let sfxOn = true, musicOn = false;
let musicTimer = null, nextBarTime = 0, bar = 0;

let unlocked = false;
function ac() {
  if (!ctx && !unlocked) return null; // never create audio before a user gesture (no autoplay warnings)
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4;
    comp.connect(master);
    sfxBus = ctx.createGain(); sfxBus.gain.value = 1; sfxBus.connect(comp);
    musicBus = ctx.createGain(); musicBus.gain.value = 0; musicBus.connect(comp);
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

function env(g, t, a, peak, d) {
  g.gain.cancelScheduledValues(t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}
function tone(freq, dur, { type = 'sine', vol = 0.08, slide = 0, delay = 0, bus = null, attack = 0.005 } = {}) {
  const c = ac(); if (!c) return;
  const t = c.currentTime + delay;
  const o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
  env(g, t, attack, vol, dur);
  o.connect(g).connect(bus || sfxBus);
  o.start(t); o.stop(t + attack + dur + 0.05);
}
function noise(dur, { vol = 0.08, freq = 1200, q = 0.8, delay = 0, type = 'bandpass' } = {}) {
  const c = ac(); if (!c) return;
  const t = c.currentTime + delay;
  const len = Math.floor(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = c.createBufferSource(); src.buffer = buf;
  const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = c.createGain(); env(g, t, 0.004, vol, dur);
  src.connect(f).connect(g).connect(sfxBus);
  src.start(t);
}

export const sfx = {
  select() { if (!sfxOn) return; tone(880, 0.07, { type: 'triangle', vol: 0.05 }); tone(1320, 0.06, { type: 'sine', vol: 0.03, delay: 0.04 }); },
  deselect() { if (!sfxOn) return; tone(660, 0.06, { type: 'triangle', vol: 0.035, slide: -200 }); },
  hop(len = 1) { if (!sfxOn) return; tone(340, 0.16, { type: 'sine', vol: 0.06, slide: 260 + 60 * len }); },
  land(cap) { if (!sfxOn) return; tone(cap ? 140 : 190, 0.12, { type: 'triangle', vol: 0.09, slide: -60 }); noise(0.05, { vol: 0.05, freq: 2400 }); },
  scared() { if (!sfxOn) return; tone(900, 0.18, { type: 'square', vol: 0.025, slide: 500 }); tone(1100, 0.12, { type: 'square', vol: 0.02, delay: 0.1, slide: 700 }); },
  boom() {
    if (!sfxOn) return;
    tone(150, 0.45, { type: 'sawtooth', vol: 0.07, slide: -110 });
    noise(0.35, { vol: 0.12, freq: 900, q: 0.6, type: 'lowpass' });
    tone(1600, 0.12, { type: 'square', vol: 0.02, slide: -1100, delay: 0.05 });
    [1046, 1318, 1568].forEach((f, i) => tone(f, 0.08, { type: 'triangle', vol: 0.025, delay: 0.12 + i * 0.05 }));
  },
  check() { if (!sfxOn) return; [0, 0.16].forEach(d => tone(740, 0.1, { type: 'square', vol: 0.035, delay: d })); },
  castle() { if (!sfxOn) return; noise(0.5, { vol: 0.05, freq: 500, q: 0.4, type: 'lowpass' }); tone(220, 0.4, { type: 'sawtooth', vol: 0.03, slide: 220 }); },
  promote() { if (!sfxOn) return; [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.14, { type: 'triangle', vol: 0.045, delay: i * 0.07 })); },
  win() { if (!sfxOn) return; [523, 659, 784, 1046, 784, 1046, 1318].forEach((f, i) => tone(f, 0.2, { type: 'triangle', vol: 0.05, delay: i * 0.12 })); },
  lose() { if (!sfxOn) return; [392, 370, 349, 262].forEach((f, i) => tone(f, 0.3, { type: 'sine', vol: 0.05, delay: i * 0.22, slide: -10 })); },
  chirp() { // Grok Bot "speaks"
    if (!sfxOn) return;
    const n = 3 + ((Math.random() * 3) | 0);
    for (let i = 0; i < n; i++) tone(500 + Math.random() * 700, 0.05, { type: 'sine', vol: 0.025, delay: i * 0.065, slide: (Math.random() - 0.5) * 300 });
  },
  shutter() { if (!sfxOn) return; noise(0.06, { vol: 0.08, freq: 3000 }); noise(0.05, { vol: 0.06, freq: 1800, delay: 0.08 }); },
  whoosh() { if (!sfxOn) return; noise(0.6, { vol: 0.05, freq: 700, q: 0.5 }); },
  assemble() { if (!sfxOn) return; for (let i = 0; i < 8; i++) tone(300 + i * 90, 0.06, { type: 'square', vol: 0.02, delay: i * 0.1 }); }
};

// ---------- Music: soft synthwave loop, Am – F – C – G, 92 bpm ----------
const BPM = 92, BEAT = 60 / BPM, BAR = BEAT * 4;
const CHORDS = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]];
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);

function scheduleBar(t, chord) {
  const c = ctx;
  // pad: two detuned saws through a lowpass
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.7;
  const pg = c.createGain();
  pg.gain.setValueAtTime(0.0001, t); pg.gain.exponentialRampToValueAtTime(0.05, t + 0.6);
  pg.gain.setValueAtTime(0.05, t + BAR - 0.4); pg.gain.exponentialRampToValueAtTime(0.0001, t + BAR + 0.2);
  lp.connect(pg).connect(musicBus);
  for (const n of chord) for (const det of [-7, 7]) {
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(n); o.detune.value = det;
    o.connect(lp); o.start(t); o.stop(t + BAR + 0.3);
  }
  // bass on beats 1 & 3
  for (const b of [0, 2]) {
    const o = c.createOscillator(), g = c.createGain(); o.type = 'triangle'; o.frequency.value = mtof(chord[0] - 12);
    const s = t + b * BEAT; g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.09, s + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s + BEAT * 1.6);
    o.connect(g).connect(musicBus); o.start(s); o.stop(s + BEAT * 1.7);
  }
  // arpeggio pluck in 8ths
  const arp = [0, 1, 2, 1, 2, 0, 1, 2];
  arp.forEach((ix, i) => {
    const s = t + i * BEAT / 2;
    const o = c.createOscillator(), g = c.createGain(); o.type = 'triangle'; o.frequency.value = mtof(chord[ix] + 12);
    g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.03, s + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.28);
    o.connect(g).connect(musicBus); o.start(s); o.stop(s + 0.3);
  });
  // soft hat on offbeats
  for (let i = 0; i < 4; i++) {
    const s = t + i * BEAT + BEAT / 2;
    const len = Math.floor(c.sampleRate * 0.04), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let k = 0; k < len; k++) d[k] = (Math.random() * 2 - 1) * (1 - k / len);
    const src = c.createBufferSource(); src.buffer = buf;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
    const g = c.createGain(); g.gain.value = 0.012;
    src.connect(f).connect(g).connect(musicBus); src.start(s);
  }
}
function musicTick() {
  if (!ctx || !musicOn) return;
  while (nextBarTime < ctx.currentTime + 1.2) {
    scheduleBar(nextBarTime, CHORDS[bar % CHORDS.length]);
    nextBarTime += BAR; bar++;
  }
}
export function setMusic(on) {
  musicOn = on;
  const c = ac(); if (!c) return;
  musicBus.gain.cancelScheduledValues(c.currentTime);
  musicBus.gain.setTargetAtTime(on ? 0.55 : 0, c.currentTime, 0.4);
  if (on) {
    if (!musicTimer) { nextBarTime = c.currentTime + 0.1; musicTimer = setInterval(musicTick, 250); musicTick(); }
  } else if (musicTimer) {
    setTimeout(() => { if (!musicOn && musicTimer) { clearInterval(musicTimer); musicTimer = null; } }, 1500);
  }
}
export function setSfx(on) { sfxOn = on; }
export function isMusic() { return musicOn; }
export function isSfx() { return sfxOn; }
export function suspendAudio(hidden) {
  if (!ctx) return;
  if (hidden) ctx.suspend().catch(() => {});
  else ctx.resume().catch(() => {});
}
export function unlockAudio() { const first = !ctx; unlocked = true; ac(); if (first && musicOn && ctx) setMusic(true); }
if (typeof window !== 'undefined') {
  const u = () => { unlockAudio(); window.removeEventListener('pointerdown', u, true); window.removeEventListener('keydown', u, true); };
  window.addEventListener('pointerdown', u, true); window.addEventListener('keydown', u, true);
}
// Tap for video recording (MediaRecorder): returns a MediaStream of the master mix, or null
let streamDest = null;
export function getAudioStream() {
  try {
    const c = ac(); if (!c || !c.createMediaStreamDestination) return null;
    if (!streamDest) { streamDest = c.createMediaStreamDestination(); master.connect(streamDest); }
    return streamDest.stream;
  } catch (e) { return null; }
}

// Voice coach: lower the music while the coach speaks (ducking)
let ducked = false;
export function duckMusic(on) {
  ducked = !!on;
  if (!ctx || !musicBus || !musicOn) return;
  musicBus.gain.cancelScheduledValues(ctx.currentTime);
  musicBus.gain.setTargetAtTime(ducked ? 0.12 : 0.55, ctx.currentTime, 0.15);
}
export function isDucked() { return ducked; }
