// talk.js – human, warm English phrasing for the coach (short sentences, a bit of humour).
// Everything here only *words* facts that coach.js has actually detected; it never invents tactics.

// ---------------------------------------------------------------- variety: random, but never the same line twice in a row
const lastPick = new Map();
export function vary(id, list, ...args) {
  if (!list || !list.length) return '';
  let i = Math.floor(Math.random() * list.length);
  const prev = lastPick.get(id);
  if (list.length > 1 && i === prev) i = (i + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length;
  lastPick.set(id, i);
  const v = list[i];
  return typeof v === 'function' ? v(...args) : v;
}
export const cap = s => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// ---------------------------------------------------------------- piece grammar
const NOUN = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
const KIDNOUN = { ...NOUN, n: 'horse' };
const ART = { def: 'the', dein: 'your', ein: 'a', their: 'their' };
// (case arguments are kept for API compatibility with the original German version; English ignores them)
export const noun = (t, kid = false, c = 'nom') => (kid ? KIDNOUN : NOUN)[t];
/** np('n', 'acc', 'dein') -> "your knight"; kid=true -> "your horse" */
export const np = (t, c = 'nom', a = 'def', kid = false) => `${ART[a] || 'the'} ${noun(t, kid, c)}`;
/** pronoun for a piece: "it" */
export const pron = (t, c = 'nom', kid = false) => 'it';
export const pieceNoun = (t, kid = false) => (kid ? KIDNOUN : NOUN)[t];

// ---------------------------------------------------------------- moves in words
const SANP = { N: 'n', B: 'b', R: 'r', Q: 'q', K: 'k' };
/** notation shown to the player: standard English SAN (kept as a function for API compatibility) */
export const deSan = san => String(san);
/** parse an English SAN into facts */
export function moveObj(san) {
  const s = String(san);
  const o = { san: s, castle: null, type: 'p', to: '', capture: false, promo: null, check: /\+$/.test(s), mate: /#$/.test(s) };
  if (s.startsWith('O-O-O')) { o.castle = 'long'; o.type = 'k'; return o; }
  if (s.startsWith('O-O')) { o.castle = 'short'; o.type = 'k'; return o; }
  const m = s.match(/^([NBRQK])?([a-h]?[1-8]?)(x)?([a-h][1-8])(=([NBRQ]))?([+#])?/);
  if (!m) return o;
  o.type = m[1] ? SANP[m[1]] : 'p'; o.capture = !!m[3]; o.to = m[4]; o.promo = m[6] ? SANP[m[6]] : null;
  return o;
}
/** "knight to g5", "bishop takes on f7", "castles kingside", "pawn to e8, promoting to a queen" (+ ", with check") */
export function moveLabel(san, kid = false) {
  const o = moveObj(san);
  let t;
  if (o.castle) t = o.castle === 'long' ? 'castles queenside' : 'castles kingside';
  else if (!o.to) return deSan(san);
  else t = `${pieceNoun(o.type, kid)} ${o.capture ? 'takes on' : 'to'} ${o.to}${o.promo ? `, promoting to a ${pieceNoun(o.promo, kid)}` : ''}`;
  if (o.mate) t += ', checkmate'; else if (o.check) t += ', with check';
  return t;
}
/** text version shows both words and notation: "knight to g5 (Ng5)"; kids get words only */
export const moveText = (san, kid = false) => (kid ? moveLabel(san, true) : `${moveLabel(san)} (${deSan(san)})`);
/** verb phrase: "move the knight to g5", "take on f7 with the bishop", "castle kingside" */
export function moveVerb(san, kid = false) {
  const o = moveObj(san);
  if (o.castle) return o.castle === 'long' ? 'castle queenside' : 'castle kingside';
  if (!o.to) return `play ${deSan(san)}`;
  if (o.promo) return `push the pawn to ${o.to} and promote it to a ${pieceNoun(o.promo, kid)}`;
  return o.capture ? `take on ${o.to} with ${np(o.type, 'dat', 'def', kid)}` : `move ${np(o.type, 'acc', 'def', kid)} to ${o.to}`;
}

// ---------------------------------------------------------------- numbers in words
const NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
export const inMoves = n => (n === 1 ? 'one move' : `${NUMW[n] || n} moves`);
export const numWord = n => NUMW[n] || String(n);
export const pawnWords = cp => { const a = Math.abs(cp); return a < 90 ? 'half a pawn' : a < 150 ? 'about a pawn' : a < 190 ? 'a pawn and a half' : a < 260 ? 'about two pawns' : a < 450 ? 'about a whole piece' : a < 800 ? 'about a rook' : 'basically the whole game'; };
export const matWords = n => (n === 1 ? 'a pawn' : n === 2 ? 'two pawns' : n === 3 ? 'three points, so about a minor piece' : n === 5 ? 'five points, so about a rook' : n === 9 ? 'nine points, as much as a queen' : `${n} points`);

// ---------------------------------------------------------------- evaluation in words
/** cpMe: centipawns from "your" view (positive = good for you). mateMe: >0 you mate, <0 you get mated. opp: name of the other side. */
export function evalText(cpMe, mateMe, { opp = 'your opponent', kid = false } = {}) {
  const O = cap(opp);
  if (mateMe != null && mateMe !== 0) {
    const n = Math.abs(mateMe);
    if (kid) return mateMe > 0 ? vary('k-mate+', ['There’s a checkmate for you! Can you find it? 🎯', 'You can catch the king soon! 🎯']) : vary('k-mate-', ['Careful, your king is in big danger!', 'Watch your king closely, it’s in danger!']);
    return mateMe > 0
      ? vary('mate+', [`There’s a mate in ${inMoves(n)} for you!`, `You have a forced mate in ${inMoves(n)}. Don’t let go now!`, `Mate in ${inMoves(n)} for you. That smells like victory!`])
      : vary('mate-', [`Careful, ${opp} has a mate in ${inMoves(n)} on the board.`, `Honestly, it looks bad: ${opp} has a mate in ${inMoves(n)}.`, `Watch out! ${O} can checkmate in ${inMoves(n)}.`]);
  }
  const cp = cpMe || 0, a = Math.abs(cp), good = cp > 0;
  if (kid) {
    if (a < 35) return vary('k-eq', ['You’re about even. Everything is still open!', 'It’s a tie! Every move counts now.', 'It’s still wide open, nobody is really ahead.']);
    if (a < 120) return good ? vary('k-g1', ['You’re a tiny bit better. 🙂', 'You’re a little bit ahead!']) : vary('k-b1', [`${O} is a tiny bit better. You can catch up!`, `${O} is a little ahead. But there’s still a lot to play for!`]);
    if (a < 300) return good ? vary('k-g2', ['You’re better! Keep it up! 💪', 'This looks good for you! 💪']) : vary('k-b2', [`${O} is better. Be careful and look for chances!`, `${O} is ahead. Look closely, maybe you’ll find a trick!`]);
    return good ? vary('k-g3', ['You’re much better. Now finish the game calmly! 🏆', 'Great, you’re way ahead! Just don’t give anything away. 🏆']) : vary('k-b3', ['This is tough right now. But keep fighting, everyone makes mistakes!', 'Phew, this is tricky. Don’t give up, even pros turn games around!']);
  }
  if (a < 35) return vary('eq', ['You’re about even.', 'The position is pretty balanced.', 'Nobody is really ahead right now.', 'Everything is in balance, anything can still happen.']);
  if (good) {
    if (a < 70) return vary('g1', ['You’re a touch better.', 'You’re slightly ahead, about half a pawn.', 'A little bit better for you, about half a pawn.']);
    if (a < 150) return vary('g2', ['You’re somewhat better, about a pawn.', 'You’re a bit ahead, roughly a pawn’s worth.', 'Slight advantage for you, about a pawn.']);
    if (a < 260) return vary('g3', [`You’re clearly better, that’s ${pawnWords(cp)}.`, `You have a solid advantage, ${pawnWords(cp)}.`, `This is going well for you: roughly ${pawnWords(cp)} ahead.`]);
    if (a < 450) return vary('g4', ['You’re much better, about a whole piece.', 'This looks really good for you, about a piece ahead.']);
    return vary('g5', ['This is as good as won.', 'This should be winning. Now just bring it home cleanly.', 'Honestly: this is pretty much done.']);
  }
  if (a < 70) return vary('b1', [`${O} is a touch better.`, `${O} is slightly ahead, about half a pawn.`]);
  if (a < 150) return vary('b2', [`${O} is somewhat better, about a pawn.`, `${O} is a bit ahead, about a pawn.`]);
  if (a < 260) return vary('b3', [`${O} is clearly better, roughly ${pawnWords(cp)}.`, `Here ${opp} has a solid advantage, ${pawnWords(cp)}.`]);
  if (a < 450) return vary('b4', [`${O} is much better, about a whole piece.`, `This looks difficult, ${opp} is about a piece ahead.`]);
  return vary('b5', [`Honestly, it looks grim, ${opp} is winning. But no giving up!`, `${O} is pretty much winning. Look for tricks, sometimes things still happen!`]);
}
/** how much a move cost, in words */
export const dropWords = d => pawnWords(d);

// ---------------------------------------------------------------- speech: strip symbols, make notation speakable
const SPN = { K: 'King', Q: 'Queen', R: 'Rook', B: 'Bishop', N: 'Knight' };
export function speakable(text) {
  let t = String(text);
  t = t.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '');
  // parentheses: drop notation/number content, keep words
  t = t.replace(/\s*\(([^()]*)\)/g, (m, inner) => (/[+−±-]?\d|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8]|O-O/.test(inner) ? '' : `, ${inner},`));
  t = t.replace(/[+−±]\s?\d+(?:[.,]\d+)?/g, '');
  // runs of notation ("3.d4 cxd4 4.Nxd4") get commas so the voice pauses between moves
  const TOK = '(?:\\d+\\.(?:\\.\\.|…)?\\s*)?(?:O-O(?:-O)?|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?)[+#]?[!?]*';
  t = t.replace(new RegExp(`(?<![\\w])${TOK}(?:\\s+${TOK})+(?![\\w])`, 'g'), m => m.trim().split(/\s+(?=(?:\d+\.)?[KQRBNa-hO])/).join(', '));
  t = t.replace(/\b\d+\.(?:\.\.|…)?\s*(?=[KQRBNa-hO])/g, '');
  t = t.replace(/\bO-O-O\b/g, 'castles queenside').replace(/\bO-O\b/g, 'castles kingside');
  t = t.replace(/\b([a-h][1-8])\s*[–-]\s*([a-h][1-8])\b/g, '$1 to $2');
  t = t.replace(/\b([KQRBN])([a-h]?[1-8]?)(x?)([a-h][1-8])(?:=([QRBN]))?([+#])?(?![a-z])/g, (m, p, dis, x, sq, pr, ch) => `${SPN[p]} ${x ? 'takes on' : 'to'} ${sq}${pr ? ', promoting to ' + SPN[pr] : ''}${ch === '#' ? ', checkmate' : ch === '+' ? ', check' : ''}`);
  t = t.replace(/\b([a-h])x([a-h][1-8])(?:=([QRBN]))?([+#])?/g, (m, f, sq, pr, ch) => `pawn takes on ${sq}${pr ? ', promoting to ' + SPN[pr] : ''}${ch === '#' ? ', checkmate' : ch === '+' ? ', check' : ''}`);
  t = t.replace(/\b([a-h][1-8])=([QRBN])/g, (m, sq, pr) => `${sq}, promoting to ${SPN[pr]}`);
  t = t.replace(/\b([a-h][1-8])([+#])/g, (m, sq, ch) => `${sq}${ch === '#' ? ', checkmate' : ', check'}`);
  t = t.replace(/[→←↑↓⇒⟶]/g, ', ').replace(/\s[–—]\s/g, ', ').replace(/[·•]/g, '. ').replace(/…/g, ' ').replace(/[„“”"«»‚*_#~^<>|\\/]/g, '').replace(/[+±−]/g, ' ');
  t = t.replace(/\s+([,.!?;:])/g, '$1').replace(/,\s*([:;.!?])/g, '$1').replace(/([.!?:;])\s*,/g, '$1').replace(/([,.!?;:])\1+/g, '$1').replace(/\s{2,}/g, ' ').replace(/^[,.\s]+/, '').trim();
  return t;
}
