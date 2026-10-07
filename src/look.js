// Look & effects panel: skins, effect level, giant bot, bubbles (all persisted)
import { setSkin } from './pieces3d.js';
import { api, saveSettings, setSkinNameProvider, rebuildAllPieces, setFxLevel, setLook, speak } from './main3d.js';
import { SKINS } from './skins.js';
import { setGiant } from './giantbot.js';
import { sfx } from './audio.js';

const SKIN_LINES = {
  neon: 'Neon gloss: classic, loud, irresistible. ✨',
  chrome: 'Liquid chrome! We wobble when we move. Totally professional.',
  glass: 'Glass & circuits – now you can see what I’m thinking. Hopefully nothing embarrassing.',
  lava: 'Lava core activated. Things get really hot on check. 🌋'
};

export function initLook() {
  const s = api.settings;
  if (!SKINS.some(k => k.id === s.skin)) s.skin = 'neon';
  if (s.fx !== 'reduced' && s.fx !== 'full') s.fx = (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) ? 'reduced' : 'full';
  if (s.giant === undefined) s.giant = true;
  if (s.bubbles === undefined) s.bubbles = true;
  setSkin(s.skin);
  setSkinNameProvider(() => s.skin);
  if (!(s.brightness >= 60 && s.brightness <= 120)) s.brightness = 85;
  if (!(s.glow >= 0 && s.glow <= 100)) s.glow = 60;
  setLook({ brightness: s.brightness / 100, glow: s.glow / 100 });
  setFxLevel(s.fx);

  const skinBtns = [...document.querySelectorAll('[data-skin]')];
  const fxBtns = [...document.querySelectorAll('[data-fx]')];
  const mark = () => {
    skinBtns.forEach(b => b.classList.toggle('active', b.dataset.skin === s.skin));
    fxBtns.forEach(b => b.classList.toggle('active', b.dataset.fx === s.fx));
  };
  mark();
  skinBtns.forEach(b => b.addEventListener('click', () => {
    if (s.skin === b.dataset.skin) return;
    applySkin(b.dataset.skin);
    mark();
    sfx.select();
    speak(SKIN_LINES[s.skin], 'happy', true);
  }));
  fxBtns.forEach(b => b.addEventListener('click', () => {
    s.fx = b.dataset.fx; setFxLevel(s.fx); saveSettings(); mark(); sfx.select();
    speak(s.fx === 'full' ? 'Effects on full – sparkle budget approved!' : 'Effects reduced. Your battery says thanks.', 'idle', true);
  }));
  // Brightness (60–120 %, default 85 %) and Glow (0–100 %, default 60 %), persisted
  const slider = (id, outId, key, apply) => {
    const r = document.getElementById(id), o = document.getElementById(outId);
    if (!r) return;
    r.value = s[key]; if (o) o.textContent = s[key] + '%';
    let saveT = 0;
    r.addEventListener('input', () => {
      s[key] = +r.value; if (o) o.textContent = s[key] + '%'; apply();
      clearTimeout(saveT); saveT = setTimeout(saveSettings, 150);
    });
    r.addEventListener('keydown', e => e.stopPropagation()); // arrow keys adjust the slider, not the game
  };
  slider('rngBright', 'outBright', 'brightness', () => setLook({ brightness: s.brightness / 100 }));
  slider('rngGlow', 'outGlow', 'glow', () => setLook({ glow: s.glow / 100 }));
  const g = document.getElementById('chkGiant');
  if (g) { g.checked = s.giant; g.addEventListener('change', () => { setGiant(g.checked); speak(g.checked ? 'Giant Grok is watching again. 👀' : 'Okay, I’ll look away. Promise. Almost.', 'idle', true); }); }
  const bb = document.getElementById('chkBubbles');
  if (bb) { bb.checked = s.bubbles; bb.addEventListener('change', () => { s.bubbles = bb.checked; saveSettings(); }); }
}

export function applySkin(name) {
  const s = api.settings;
  s.skin = name; setSkin(name); saveSettings();
  rebuildAllPieces();
}
