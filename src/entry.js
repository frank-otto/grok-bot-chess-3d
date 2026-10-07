import { start, hooks } from './main3d.js';
import { tickSkins, animateSkinPiece } from './skins.js';
import { initPieceLife } from './piecelife.js';
import { initTransformer } from './transformer.js';
import { initGiantBot } from './giantbot.js';
import { initReplay } from './replay.js';
import { initLook } from './look.js';
import { api } from './main3d.js';
import { giantExpr } from './giantbot.js';
import { startReplay, stopReplay, pickHighlights, recordingSupport, isReplaying } from './replay.js';
import { applySkin } from './look.js';
import { pieceSay } from './piecelife.js';
import { sfx, setMusic, getAudioStream } from './audio.js';
import { initCoach } from './coach.js';
import { initCoachChat } from './coachchat.js';

// phase-2 modules plug in once the 3D scene exists
window.addEventListener('gbc-ready', () => {
  try {
    hooks.frame.push((t, dt) => {
      tickSkins(t);
      for (const g of api.groups.values()) animateSkinPiece(g, t, dt);
      for (const g of api.extraGroups) animateSkinPiece(g, t, dt);
    });
    initPieceLife();
    initTransformer();
    initGiantBot();
    initReplay();
    initLook();
    api.syncGroups();
    api.renderHints();
    try { initCoach(); initCoachChat(); } catch (e) { console.warn('[GBC] Coach disabled:', e); }
    if (window.__gbc) window.__gbc.p2 = { giantExpr, startReplay, stopReplay, pickHighlights, recordingSupport, isReplaying, applySkin, pieceSay, api, audio: { sfx, setMusic, getAudioStream } };
  } catch (e) { console.warn('[GBC] Extra effects disabled:', e); }
}, { once: true });
start();
