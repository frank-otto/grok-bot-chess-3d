// Voice adapter for the coach. Today: browser Web Speech API (SpeechRecognition + speechSynthesis).
// Later: a Grok realtime/STT adapter (needs an xAI API key + local server) can implement the same interface
// and be registered via setVoiceAdapter() – the coach UI only talks to this interface.
//
// interface VoiceAdapter {
//   name: string
//   sttAvailable(): { ok: boolean, reason?: string }
//   listen({ lang, onInterim(text), onFinal(text), onError(code, message), onEnd() }): () => void   // returns stop()
//   ttsAvailable(): boolean
//   speak(text, { lang, onStart, onEnd }): void
//   stopSpeaking(): void
// }

function pickEnglishVoice() {
  const ss = window.speechSynthesis; if (!ss) return null;
  const voices = ss.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang));
  if (!voices.length) return null;
  const score = v => {
    let s = 0; const n = v.name.toLowerCase();
    if (/en[-_]us/i.test(v.lang)) s += 5;
    if (/premium|enhanced|natural|neural|online/.test(n)) s += 6;          // macOS/Edge high-quality voices
    if (/google/.test(n)) s += 4;                                            // Chrome's online English voice
    if (/samantha|alex|ava|allison|susan|tom|zoe|evan|nathan|aria|jenny|guy/.test(n)) s += 3; // common built-in en-US voices
    if (v.localService) s += 1;
    return s;
  };
  return voices.sort((a, b) => score(b) - score(a))[0];
}

export const webSpeechAdapter = {
  name: 'Web Speech API (Browser)',
  sttAvailable() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return { ok: false, reason: 'unsupported' };
    if (location.protocol === 'file:') return { ok: true, reason: 'file' }; // may still be blocked – handled on error
    return { ok: true };
  },
  listen({ lang = 'en-US', onInterim, onFinal, onError, onEnd } = {}) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { onError && onError('unsupported', 'Speech recognition is not supported in this browser.'); onEnd && onEnd(); return () => {}; }
    const rec = new SR();
    rec.lang = lang; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
    let finalText = '';
    rec.onresult = e => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalText += r[0].transcript; else interim += r[0].transcript;
      }
      if (interim && onInterim) onInterim(finalText + interim);
    };
    rec.onerror = e => onError && onError(e.error || 'error', e.message || '');
    rec.onend = () => { if (finalText.trim() && onFinal) onFinal(finalText.trim()); onEnd && onEnd(); };
    try { rec.start(); } catch (err) { onError && onError('start', String(err && err.message || err)); onEnd && onEnd(); }
    return () => { try { rec.stop(); } catch (_) {} };
  },
  ttsAvailable() { return !!(window.speechSynthesis && window.SpeechSynthesisUtterance); },
  speak(text, { lang = 'en-US', rate = 1, onStart, onEnd } = {}) {
    if (!this.ttsAvailable()) { onEnd && onEnd(); return; }
    const ss = window.speechSynthesis;
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang; u.rate = rate; u.pitch = 1.0;
    const v = pickEnglishVoice(); if (v) u.voice = v;
    u.onstart = () => onStart && onStart();
    u.onend = u.onerror = () => onEnd && onEnd();
    ss.speak(u);
  },
  stopSpeaking() { if (window.speechSynthesis) window.speechSynthesis.cancel(); }
};

let adapter = webSpeechAdapter;
export function setVoiceAdapter(a) { adapter = a || webSpeechAdapter; }
export function voice() { return adapter; }
export function voiceName() { const v = pickEnglishVoice(); return v ? v.name : null; }
export const germanVoiceName = voiceName; // legacy alias
if (window.speechSynthesis) { try { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = () => {}; } catch (_) {} }
