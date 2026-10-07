// "Ask the coach": chat log + voice (STT/TTS via voice adapter) + offline intent-based answers in English.
// The coach is a separate persona ("Coach 🎓"); Grok Bot stays the opponent.
import { api, hooks, speak as botSpeak } from './main3d.js';
import { duckMusic } from './audio.js';
import { voice, voiceName } from './voice.js';
import { toFen, sanOf, uciToMove, sqName, gameMoves } from './fen.js';
import { analyseState, explain, scoreFor, candidatesFor, showCoachMoves, engine } from './coach.js';
import { vary, cap, np, moveText, moveLabel, moveVerb, evalText, dropWords, matWords, speakable, deSan } from './talk.js';
import { reasonText, hintText } from './reasons.js';
import PRESETS from './presets.json';

const GC = window.GardenChess;
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
const opp = c => (c === 'w' ? 'b' : 'w');
const sideName = c => (c === 'w' ? 'White' : (api.mode === 'bot' ? 'Grok Bot' : 'Black'));
const kids = () => !!api.settings.coachKids;
// who is "you"? vs Grok Bot: always White; in PvP: the side to move
const meColor = () => (api.mode === 'bot' ? 'w' : api.state.turn);
const oppOf = color => (kids() && api.mode !== 'bot' ? 'your opponent' : sideName(opp(color)));

// kid sentence for the first detected reason of a candidate
const kidWhy = it => reasonText(it.reasons[0] || { key: 'quiet' }, 'kid');

/** evaluation in words from `color`'s point of view (no numbers, nothing for the voice to stumble over) */
function evalWords(line, color) {
  if (!line) return 'Honestly, I can’t tell right now.';
  const st = api.state;
  const sign = st.turn === color ? 1 : -1;
  if (line.mate != null) return evalText(null, sign * line.mate, { opp: oppOf(color), kid: kids() });
  return evalText(sign * line.scoreCp, null, { opp: oppOf(color), kid: kids() });
}

// ---------------------------------------------------------------- intents
const norm = s => ' ' + String(s).toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ') + ' ';
const PIECE_WORDS = [['p', /pawns?\b/], ['n', /knights?|horses?/], ['b', /bishops?/], ['r', /rooks?|castle piece|towers?/], ['q', /queens?/], ['k', /kings?\b/]];
const RULE_WORDS = [['castle', /castl/], ['ep', /en passant|enpassant|in passing/], ['promo', /promot|pawn.*(end|last rank|other side)/], ['stalemate', /stalemate/], ['mate', /checkmate| mate /], ['check', / check /]];
const MOTIF_RE = /fork|pin|skewer|discover/;
export function detectIntent(text) {
  const t = norm(text);
  if (/ (show|tell|reveal|give)( me)? (the |your )?(move|answer|solution)| solution /.test(t)) return { intent: 'reveal' };
  if (/ how (does|do|can|is|are) (a |an |the )?\w+ (move|moves|work|works|capture|captures)| how does .* move| rules? | explain .*(piece|pawn|knight|horse|bishop|rook|queen|king)| what (is|are) (a |an )?(castling|en passant|stalemate|check|fork|pin|skewer|discovered)/.test(t)) {
    for (const [k, re] of RULE_WORDS) if (re.test(t)) return { intent: 'rule', topic: k };
    for (const [k, re] of PIECE_WORDS) if (re.test(t)) return { intent: 'piece', piece: k };
    if (MOTIF_RE.test(t)) return { intent: 'motif', motif: (t.match(MOTIF_RE) || [])[0] };
  }
  if (/ what (is|are|s) (a |an )?(fork|pin|skewer|discover)/.test(t)) return { intent: 'motif', motif: (t.match(MOTIF_RE) || [])[0] };
  if (/ (last|previous) move| was (that|this|my move|it) (a )?(mistake|blunder|bad|good|ok|okay)| why (was|is) (my|that|the) | did i (make a )?(mistake|blunder)| blunder| was that good /.test(t)) return { intent: 'lastMove' };
  if (/ threat| threaten| what (does|is) (my |the )?(opponent|bot|grok bot|other side) (want|plan|doing|threatening)| danger| what (is|are) (they|he|she|it) planning| what should i (watch|look) out for| watch out| careful /.test(t)) return { intent: 'threat' };
  if (/ (just )?(a |one )?(hint|tip|clue)| little help| without (giving|telling)| help me a (bit|little)/.test(t)) return { intent: 'hint' };
  if (/ who is (better|winning|ahead)| whos (better|winning|ahead)| evaluat| how (am i|are we|is it) (doing|standing)| am i (winning|losing|better|worse)| who leads| score /.test(t)) return { intent: 'eval' };
  if (/ best move| what (should|shall|do) i (play|move|do)| which move| what would you (play|do)| recommend| suggest| where should i (go|move)| your move /.test(t)) return { intent: 'best' };
  if (/ plan| strategy| what next| whats next| what now| how do i continue| idea /.test(t)) return { intent: 'plan' };
  if (/ opening| what is this called| whats this called| what are we playing/.test(t)) return { intent: 'opening' };
  if (/ (hello|hi|hey|good morning|good evening|howdy) /.test(t)) return { intent: 'hello' };
  if (/ (thanks|thank you|thx|cheers) /.test(t)) return { intent: 'thanks' };
  for (const [k, re] of PIECE_WORDS) if (re.test(t) && / (move|moves|go|goes|walk|jump|can)/.test(t)) return { intent: 'piece', piece: k };
  return { intent: 'unknown' };
}

// ---------------------------------------------------------------- knowledge (rules for kids & adults)
const PIECE_RULES = {
  p: ['The pawn only ever moves forward, one square at a time. On its very first move it may go two squares. But it captures diagonally forward! When it reaches the far end, it transforms, usually into a queen.', 'The pawn moves one square forward, two on its first move. But it captures diagonally forward, which confuses almost everyone at first. Plus there are two special rules: en passant and promotion when it reaches the last rank.'],
  n: ['The knight, the horse, jumps in an L: two squares straight and one to the side. It’s the only piece that can jump over others!', 'The knight moves in an L: two squares straight, one to the side. It’s the only piece that can jump, and it changes square color every move. That’s exactly why it’s the king of forks.'],
  b: ['The bishop zooms diagonally across the board, as far as it likes. But it always stays on its own color.', 'The bishop moves diagonally as far as it wants and stays on its square color for life. If you have both bishops and the board is open, they’re really annoying for the opponent.'],
  r: ['The rook drives straight: forward, backward and sideways, as far as it likes. Together with the king it can castle.', 'The rook moves straight – forward, backward and sideways – as far as it wants. It feels most at home on open files or deep in enemy territory, on the seventh rank.'],
  q: ['The queen is the strongest piece: she can move straight AND diagonally, as far as she likes. Take good care of her!', 'The queen can do everything rook and bishop can: straight and diagonal, as far as she wants. She’s worth nine pawns. Little tip: don’t bring her out too early, or she’ll just get chased around.'],
  k: ['The king only ever moves one square, in any direction. He may never step onto a square that is attacked. If he’s caught, the game is over: checkmate!', 'The king moves one square in any direction, but never onto an attacked square. Once per game he may castle. And in the endgame, when the queens are gone, the nervous boss suddenly becomes a real fighter.']
};
const RULE_TEXT = {
  castle: ['Castling: king and rook move in one turn! The king moves two squares toward the rook, and the rook jumps over him. You can only do it if neither has moved yet, nothing is in between, and the king is not in check.', 'When castling, the king moves two squares toward the rook, and the rook hops over to the other side next to him. Only allowed if neither has moved, nothing is in between, and the king is not in check and doesn’t pass over an attacked square.'],
  ep: ['En passant means “in passing”: if a pawn jumps two squares and lands right next to your pawn, you may capture it as if it had moved only one square. But only immediately, on the very next move!', 'En passant means in passing. If a pawn advances two squares and lands right next to an enemy pawn, that pawn may capture it as if it had moved only one square. But only on the very next move – after that the chance is gone.'],
  promo: ['When your pawn reaches the other end, it may transform, usually into a queen. From tiny to huge!', 'If a pawn makes it to the last rank, it is promoted immediately – to a queen, rook, bishop or knight. Almost always you take the queen, of course.'],
  stalemate: ['Stalemate means: the player to move can’t make any move but is NOT in check. Then the game is a draw. So be careful when you have lots more pieces!', 'Stalemate means the side to move has no legal move but is not in check. Then the game is a draw. Annoying when you’re clearly winning – so keep your eyes open!'],
  mate: ['Checkmate: the king is attacked and can’t escape anymore. Then the game is won!', 'Checkmate is when the king is in check and nothing helps: no moving away, no blocking, no capturing the attacker. Then the game is over.'],
  check: ['Check means the king is attacked! You have to save him right away: move away, block, or capture the attacker.', 'Check means the king is under attack. You then have three options: move away, put something in between, or capture the attacker.']
};
const MOTIF_TEXT = {
  fork: ['A fork is when one piece attacks two enemy pieces at the same time. Your opponent can only save one – you grab the other!', 'A fork is a double attack: one piece hits two targets at once, and the opponent can only save one. The nastiest is the knight fork on king and queen.'],
  pin: ['In a pin, a piece is nailed down: if it moved away, a more valuable piece behind it – or even the king – would be exposed.', 'In a pin, a piece can’t move away because something more valuable stands behind it. If the king is behind it, it may not move at all. That’s called an absolute pin.'],
  skewer: ['In a skewer, the valuable piece is attacked and has to move, and then you grab the piece behind it.', 'A skewer is a reversed pin: the more valuable piece is in front, it has to step aside, and then the one behind it falls.'],
  discover: ['In a discovered attack, one piece moves aside and clears the way for another, which then attacks. Double danger!', 'In a discovered attack, a piece moves away and opens the line for another one. That creates two threats in one go, which is hard to defend.']
};
const OPENINGS = [
  ['e4 e5 Nf3 Nc6 Bc4 Nf6', 'Two Knights Defense', 'Black attacks e4 right away. Watch out for Ng5 – then f7 gets shaky!'],
  ['e4 e5 Nf3 Nc6 Bc4', 'ital'], ['e4 e5 Nf3 Nc6 Bb5', 'span'], ['e4 e5 Nf3 Nc6 d4', 'Scotch Game', 'White opens the center immediately with d4.'],
  ['e4 e5 Nf3 Nf6', 'Petrov Defense (Russian Game)', 'Black mirrors the attack on e4. Solid and nicely symmetrical.'],
  ['e4 e5 f4', 'King’s Gambit', 'White sacrifices a pawn for fast development and attack. Very sharp, not for the faint-hearted!'],
  ['e4 e5 Nf3 Nc6', 'Open Game (1.e4 e5)', 'Totally classic: both sides fight for the center and bring out their knights.'],
  ['e4 c5', 'sizi'], ['e4 e6', 'fra'], ['e4 c6', 'caro'], ['e4 d5', 'Scandinavian Defense', 'Black attacks e4 at once; after exd5 Qxd5 the queen is in the game early.'],
  ['d4 d5 c4', 'dg'], ['d4 d5 Nf3 Nf6 Bf4', 'lon'], ['d4 d5 Bf4', 'lon'], ['d4 Nf6 Bf4', 'lon'],
  ['d4 Nf6 c4 g6', 'King’s Indian / Grünfeld setup', 'Black lets White have the center and attacks it later.'],
  ['c4', 'engl'], ['e4 e5', 'Open Game (1.e4 e5)', 'Both sides occupy the center. Now: knights and bishops out, then castle.'],
  ['e4', 'King’s Pawn Opening (1.e4)', 'White occupies the center and opens lines for queen and bishop.'],
  ['d4', 'Queen’s Pawn Opening (1.d4)', 'White occupies the center; d4 is protected by the queen.']
];

// ---------------------------------------------------------------- answers
const KID_THREAT = {
  mate: 'Then your king would be caught!', mateN: 'Then it gets really dangerous for your king!', mateThreat: 'Then it gets dangerous for your king!',
  hanging: 'Then one of your unprotected pieces would be gone.', fork: 'Then it would attack two of your pieces at once.', winMat: 'Then it would grab one of your valuable pieces.',
  capture: 'Then it would grab one of your pieces.', pin: 'That would be a sneaky trick against you.', skewer: 'That would be a sneaky trick against you.', discovered: 'That would be a sneaky trick against you.', discCheck: 'That would be a sneaky trick against you.',
  check: 'Then your king would be in check.', promo: 'Then it would get a new queen!', threat: 'Then it would attack one of your pieces.'
};

async function answer(intent, q) {
  const st = { ...api.state, history: [] }, me = meColor(), K = kids();
  const status = GC.gameStatus(st);
  const over = status.type === 'checkmate' || status.type === 'stalemate';
  const myTurn = api.mode !== 'bot' || st.turn === 'w';
  const N = sideName(opp(me));
  switch (intent.intent) {
    case 'hello': return K
      ? vary('hello-k', ['Hi! Great to have you here. Just ask me, for example: What should I play? 😊', 'Hi! I’m your chess coach. Whenever you’re stuck, just ask me! 😊'])
      : vary('hello', ['Hey! Great to have you here. Ask me anything: the best move, a tip, who’s better or what’s being threatened.', 'Hello! Happy to look over your shoulder. Just ask away.', 'Hi there! Need a tip, an assessment, or want to know if your last move was good?']);
    case 'thanks': return K
      ? vary('thanks-k', ['You’re welcome! You’re doing great! 🌟', 'Anytime! Keep it up! 🌟'])
      : vary('thanks', ['You’re welcome! Have fun.', api.mode === 'bot' ? 'Anytime. Now go show Grok Bot!' : 'Anytime. Good luck!', 'No problem. I’m here if you need me.']);
    case 'piece': return PIECE_RULES[intent.piece][K ? 0 : 1];
    case 'rule': return RULE_TEXT[intent.topic][K ? 0 : 1];
    case 'motif': return MOTIF_TEXT[intent.motif] ? MOTIF_TEXT[intent.motif][K ? 0 : 1] : 'Ask me about forks, pins, skewers or discovered attacks – I know those well!';
    case 'opening': return openingAnswer();
    case 'unknown': return K
      ? vary('unknown-k', ['Hmm, I didn’t understand that. Ask me, for example: What should I play?', 'Oh, that one’s too hard for me. Try: What is threatened? Or: How does the horse move?'])
      : vary('unknown', ['Hm, I’ll have to pass on that. Ask me, for example, “What should I play?”, “What is threatened?” or “Was my last move a mistake?”', 'Phew, that’s beyond me. I only really know my way around 64 squares. Ask me for the best move, a tip, the evaluation, a plan, the opening or how a piece moves.', 'Sorry, I didn’t get that. Try “Give me a tip”, “Who is better?” or “What’s the plan?”']);
  }
  if (over && intent.intent !== 'lastMove') {
    if (status.type === 'checkmate') return K ? 'The game is already over – checkmate! Shall we play a new one?' : vary('over', ['The game is already over – checkmate. If you like, we can look back with “Was my last move a mistake?” or the quick analysis.', 'That’s already checkmate. Fancy a rematch? Or let’s use the quick analysis to see what happened.']);
    return vary('stale', ['That’s stalemate, so a draw. Another round?', 'Stalemate! Nobody won. One more game?']);
  }
  if (!myTurn && (intent.intent === 'best' || intent.intent === 'hint' || intent.intent === 'reveal')) return vary('notTurn', ['It’s Grok Bot’s turn right now. Ask me again when it’s your move!', 'One moment, Grok Bot moves first. Then I’m happy to help.']);

  if (intent.intent === 'best' || intent.intent === 'hint' || intent.intent === 'reveal') {
    const res = await analyseState(st, { multipv: 3, movetime: 1300 });
    const items = candidatesFor(st, res);
    if (!items.length) return 'There are no legal moves left here.';
    const top = items[0]; const p = st.board[top.mv.fr][top.mv.fc];
    const hintFirst = intent.intent === 'hint' || (K && intent.intent === 'best' && !api.settings.kidsRevealed);
    if (hintFirst) {
      showCoachMoves(st, items, res.depth, true);
      const motif = (top.reasons[0] || { key: 'quiet' }).key;
      const sq = sqName(top.mv.fr, top.mv.fc);
      if (K) { api.settings.kidsRevealed = true; return `${hintText(p.type, sq, motif, true)} ${vary('k-reveal', ['Just say “Show the move” if you want to see it.', 'If you can’t find it, say “Show the move”.'])}`; }
      return hintText(p.type, sq, motif);
    }
    api.settings.kidsRevealed = false;
    showCoachMoves(st, items, res.depth, false);
    if (K) return vary('k-best', [`Try this: ${moveLabel(top.san, true)}! ${kidWhy(top)}`, `How about ${moveLabel(top.san, true)}? ${kidWhy(top)}`, `My tip for you: ${moveLabel(top.san, true)}. ${kidWhy(top)}`]);
    const m = moveText(top.san);
    const intro = vary('bestIntro', [`I would ${moveVerb(top.san)} here (${deSan(top.san)}).`, `My tip: ${m}.`, `I like ${m} best here.`, `How about ${m}?`]);
    const why = top.reasons.slice(0, 2).map(r => r.text).join(' ');
    const alts = items.slice(1).filter(i => scoreFor(top.l) - scoreFor(i.l) <= 80).map(i => moveText(i.san));
    const altS = alts.length ? vary('alt', [`Almost as good: ${alts.join(' or ')}.`, `Alternatively, ${alts.join(' or ')} works too.`, `${cap(alts.join(' or '))} would also be perfectly fine.`]) : '';
    return [intro, why, evalWords(top.l, me), altS].filter(Boolean).join(' ');
  }
  if (intent.intent === 'eval') {
    const res = await analyseState(st, { multipv: 1, movetime: 1000 });
    const l = res.lines[0];
    const ev = evalWords(l, me);
    if (K || !l) return ev;
    let mat = 0; for (const row of st.board) for (const x of row) if (x && x.type !== 'k') mat += (x.color === me ? 1 : -1) * ({ p: 1, n: 3, b: 3, r: 5, q: 9 })[x.type];
    if (l.mate != null) return ev + (mat ? (mat > 0 ? ` Material: you have ${matWords(mat)} more.` : ` Material: ${N} has ${matWords(-mat)} more.`) : '');
    const cpMe = (st.turn === me ? 1 : -1) * l.scoreCp;
    let ms;
    if (!mat) ms = Math.abs(cpMe) >= 70 ? 'Material is equal, so the difference is in the position.' : vary('matEq', ['Material is equal, too.', 'Material-wise everything is even as well.']);
    else if (mat > 0) ms = cpMe < 35 ? `You do have ${matWords(mat)} more, but ${N} has counterplay for it.` : `You have ${matWords(mat)} more.`;
    else ms = cpMe > -35 ? `${N} does have ${matWords(-mat)} more, but your position makes up for it.` : `${N} has ${matWords(-mat)} more.`;
    return `${ev} ${ms}`;
  }
  if (intent.intent === 'threat') return threatAnswer(st, me);
  if (intent.intent === 'lastMove') return lastMoveAnswer(me);
  if (intent.intent === 'plan') return planAnswer(st, me);
  return 'Hmm, nothing comes to mind right now.';
}

const art = n => (/^(the |a |an )/i.test(n) ? '' : 'the ');
async function threatAnswer(st, me) {
  const K = kids();
  const them = opp(me), N = sideName(them);
  if (GC.isInCheck(st.board, st.turn)) return st.turn === me
    ? (K ? 'Your king is in check! Save him first: move away, block, or capture the attacker.' : vary('inCheck', ['You’re in check – deal with that right away.', 'First things first: you’re in check. Take care of that before anything else.']))
    : `${sideName(st.turn)} is in check and has to deal with that first.`;
  // threat = what the opponent would play if it were their move (null move: side to move swapped)
  const nullSt = st.turn === them ? st : { ...st, turn: them, ep: null };
  const thr = await analyseState(nullSt, { multipv: 1, movetime: 900 });
  const cur = st.turn === them ? null : await analyseState(st, { multipv: 1, movetime: 700 });
  const l = thr.lines[0]; if (!l) return 'I don’t see any threat right now.';
  const mv = uciToMove(l.uci); const san = sanOf(nullSt, mv); const why = explain(nullSt, mv, l, 'they', { N });
  const curForThem = cur && cur.lines[0] ? -scoreFor(cur.lines[0]) : scoreFor(l); // current eval from the opponent's view
  const gain = scoreFor(l) - curForThem;
  const serious = (l.mate != null && l.mate > 0) || why.some(r => ['mate', 'mateN', 'fork', 'hanging', 'winMat', 'skewer', 'pin', 'discovered', 'discCheck', 'mateThreat'].includes(r.key)) || gain > 120;
  const whyThey = why.slice(0, 2).map(r => r.text).join(' ');
  if (!serious) return K
    ? vary('k-calm', ['Nothing bad is threatened right now. You can calmly make your plan! 😊', 'All quiet! Nothing is threatening you right now.'])
    : vary('calm', [`Nothing serious is threatened right now. ${N} would probably like to play ${moveText(san)}, but that’s no reason to panic.`, `Relax, there’s no immediate threat. ${N}’s most active move would be ${moveText(san)}. ${whyThey}`]);
  const p = nullSt.board[mv.fr][mv.fc];
  if (K) return `Watch out! ${N} wants to move ${np(p.type, 'dat', 'def', true)} to ${sqName(mv.tr, mv.tc)}. ${KID_THREAT[(why[0] || {}).key] || 'That would be unpleasant for you.'} Protect yourself against it!`;
  const mateNote = l.mate > 0 && !why.some(r => r.key === 'mate' || r.key === 'mateN') ? ` That would even be mate in ${l.mate === 1 ? 'one move' : l.mate + ' moves'}.` : '';
  return vary('threat', [`Careful, ${N} threatens ${moveText(san)}. ${whyThey}${mateNote}`, `Watch out, ${N} wants to ${moveVerb(san)} (${deSan(san)}). ${whyThey}${mateNote}`]);
}

async function lastMoveAnswer(me) {
  const st = api.state; const moves = gameMoves(st);
  let idx = -1; for (let i = moves.length - 1; i >= 0; i--) if (moves[i][0].turn === me) { idx = i; break; }
  if (idx < 0) return kids() ? 'You haven’t made a move yet. Go for it! 😊' : 'You haven’t moved in this game yet. Go ahead!';
  const [snap, mv] = moves[idx];
  const played = sanOf(snap, mv);
  const before = await analyseState({ ...snap, history: [] }, { multipv: 1, movetime: 900 });
  const afterSt = GC.makeMove({ ...snap, history: [] }, GC.legalMoves({ ...snap, history: [] }).find(m => m.fr === mv.fr && m.fc === mv.fc && m.tr === mv.tr && m.tc === mv.tc && (m.promotion || 'q') === (mv.promotion || 'q')));
  const st2 = GC.gameStatus({ ...afterSt, history: [] });
  const after = st2.type === 'checkmate' ? { lines: [{ mate: 0, scoreCp: null }] } : st2.type === 'stalemate' ? { lines: [{ scoreCp: 0, mate: null }] } : await analyseState({ ...afterSt, history: [] }, { multipv: 1, movetime: 900 });
  const b = before.lines[0]; const a = after.lines[0];
  const bestScore = b ? scoreFor(b) : 0;
  const afterScore = st2.type === 'checkmate' ? 100000 : (a ? -scoreFor(a) : 0);
  const clamp = v => Math.max(-1500, Math.min(1500, v));
  const drop = clamp(bestScore) - clamp(afterScore);
  const bestMv = b && uciToMove(b.uci); const bestSan = bestMv ? sanOf(snap, bestMv) : null;
  const K = kids(); const N = sideName(opp(me));
  const P = cap(moveText(played, K)), B = bestSan ? moveText(bestSan, K) : '';
  if (st2.type === 'checkmate') return K ? `${P} was checkmate. Great job! 🏆` : vary('lmMate', [`${P} was checkmate. It doesn’t get better than that!`, `Checkmate with ${moveText(played)}. What else can I say? Perfect.`]);
  if (!bestSan || bestSan === played) return K ? vary('k-lmTop', [`${P} was a really good move! 👍`, `Great, ${moveLabel(played, true)} was exactly right! 👍`]) : vary('lmTop', [`${P} was really good – exactly what I would have played.`, `Top! ${P} was the best move in the position.`, `Nothing to complain about: ${moveText(played)} was the first choice.`]);
  if (drop < 40) return K ? vary('k-lmOk', [`${P} was a good move! 👍`, `${P} was great! 👍`]) : vary('lmOk', [`${P} was perfectly fine. ${cap(B)} would have been a hair more precise, but that’s splitting hairs.`, `Fine! ${P} was good. ${cap(B)} was marginally better, but hardly worth mentioning.`]);
  const snapL = { ...snap, history: [] };
  if (K) return `${P} was ${drop >= 120 ? 'unfortunately not so good' : 'okay, but there was something better'}. Better would have been ${B}. ${kidWhy({ reasons: explain(snapL, bestMv, b, 'kid') })} ${vary('k-lmEnd', ['It’ll work next time! 💪', 'Chin up, that’s how you learn the most! 💪'])}`;
  const whyBest = explain(snapL, bestMv, b, 'du', { N }).slice(0, 2).map(r => r.text).join(' ');
  // what does the opponent do now against it? (explains WHY it was bad)
  const refut = a && a.uci ? (() => { const m = uciToMove(a.uci); return m ? moveText(sanOf({ ...afterSt, history: [] }, m)) : null; })() : null;
  const refS = refut ? ' ' + vary('refut', [`Now ${N} has a strong reply with ${refut}.`, `The problem: ${N} can now play ${refut}.`]) : '';
  if (drop < 120) return vary('lmSmall', [`${P} was okay, but not quite precise. ${cap(B)} was stronger, by ${dropWords(drop)}. ${whyBest}`, `Almost! ${P} wasn’t bad, but ${B} was a bit stronger. ${whyBest}`]);
  const label = drop >= 300 ? 'a blunder' : 'a mistake';
  const opener = drop >= 300 ? vary('oops3', ['Ouch.', 'Oof.', 'Oh dear.']) : vary('oops2', ['Hmm.', 'Honestly:', 'Well.']);
  return `${opener} ${P} was unfortunately ${label} – it cost ${dropWords(drop)}. Better would have been ${B}. ${whyBest}${refS}`;
}

async function planAnswer(st, me) {
  const K = kids(); const tips = [];
  const back = me === 'w' ? 7 : 0;
  let undeveloped = 0; for (let c = 0; c < 8; c++) { const x = st.board[back][c]; if (x && x.color === me && (x.type === 'n' || x.type === 'b')) undeveloped++; }
  const k = (() => { for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) { const x = st.board[r][c]; if (x && x.color === me && x.type === 'k') return { r, c }; } return null; })();
  const castled = k && k.r === back && (k.c === 6 || k.c === 2);
  let pieces = 0, queens = 0; for (const row of st.board) for (const x of row) if (x && x.type !== 'k' && x.type !== 'p') { pieces++; if (x.type === 'q') queens++; }
  const endgame = pieces <= 4 || (queens === 0 && pieces <= 6);
  if (endgame) tips.push(K ? 'It’s the endgame now! Bring your king to the middle and push your pawns forward.' : vary('planEnd', ['We’re in the endgame. Now the king belongs in the center, passed pawns want to run, and rooks are best placed behind them.', 'Endgame time! Activate your king, push passed pawns and put the rooks behind them.']));
  else {
    if (undeveloped >= 2) tips.push(K ? 'First bring out your horses and bishops. All pieces should join in!' : vary('planDev', [`You still have ${undeveloped} minor pieces on the back rank. Bring them out before you attack.`, `Develop first: ${undeveloped} knights and bishops are still waiting for action.`]));
    if (!castled && st.castling[me] && (st.castling[me].K || st.castling[me].Q)) tips.push(K ? 'Castle soon so your king is safe.' : vary('planCastle', ['And think about your king: castling soon would be good.', 'Your king is still in the center. Castling would do him good.']));
    const center = [[3, 3], [3, 4], [4, 3], [4, 4]].filter(([r, c]) => st.board[r][c] && st.board[r][c].color === me && st.board[r][c].type === 'p').length;
    if (center === 0) tips.push(K ? 'Put a pawn in the middle of the board!' : `A pawn in the center, on ${me === 'w' ? 'd4 or e4' : 'd5 or e5'}, would give you more space.`);
    if (!tips.length) tips.push(K ? 'Look for enemy pieces that nobody is guarding, and put your rooks on empty roads.' : vary('planMid', ['Find your worst piece and improve it. Rooks belong on open files, and keep an eye out for undefended pieces and weak pawns.', 'The basic idea now: make your pieces more active, take open files and look for weaknesses on the other side.']));
  }
  const myTurn = api.mode !== 'bot' || st.turn === 'w';
  if (myTurn && !GC.gameStatus(st).type.match(/checkmate|stalemate/)) {
    const res = await analyseState(st, { multipv: 1, movetime: 900 });
    const items = candidatesFor(st, res);
    if (items[0]) tips.push(K ? `A good next step would be ${moveLabel(items[0].san, true)}.` : `${vary('planNext', ['Concretely, next I would play', 'As my next move I would play'])} ${moveText(items[0].san)}. ${items[0].reasons[0] ? items[0].reasons[0].text : ''}`.trim());
  }
  return tips.slice(0, 3).join(' ');
}

function openingAnswer() {
  const st = api.state; const K = kids();
  const moves = gameMoves(st);
  const start = moves.length ? moves[0][0] : st;
  const isStd = toFen(start).startsWith('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w');
  const fenBoard = toFen(st).split(' ')[0];
  const preset = PRESETS.find(p => p.group === 'Openings' && (p.fen.split(' ')[0] === fenBoard || moves.some(([s]) => toFen(s).split(' ')[0] === p.fen.split(' ')[0])));
  let hit = null;
  if (isStd) {
    const seq = moves.map(([s, m]) => sanOf(s, m).replace(/[+#]/g, '')).join(' ');
    for (const o of OPENINGS) if (seq === o[0] || seq.startsWith(o[0] + ' ')) { hit = o; break; }
  }
  const presetById = id => PRESETS.find(p => p.id === id);
  const intro = name => vary('openIntro', [`This is ${art(name)}${name}.`, `A classic! This is ${art(name)}${name}.`, `This is called ${art(name)}${name}.`]);
  const kidOpen = name => `This is ${art(name)}${name}! A really well-known start. What matters now: bring out your pieces, take the middle and get the king to safety by castling.`;
  if (hit) {
    const ps = presetById(hit[1]);
    const name = ps ? ps.title : hit[1], text = ps ? ps.explain : hit[2];
    return K ? kidOpen(name) : `${intro(name)} ${text}`;
  }
  if (preset) return K ? kidOpen(preset.title) : `${intro(preset.title)} ${preset.explain}`;
  if (!moves.length && isStd) return K ? 'We’re right at the start. A great first move is e4 or d4 – that takes you to the middle!' : 'Nothing has been played yet. Popular starts are 1.e4, open and active, 1.d4, more positional, 1.c4, the English, or 1.Nf3, nice and flexible.';
  return K ? 'I don’t know the name of this opening. But the rules are always the same: bring out your pieces, take the middle, castle!' : 'I can’t match this position to a known opening. But the basic rules always apply: occupy the center, develop quickly, get the king to safety and don’t bring the queen out too early.';
}

// ---------------------------------------------------------------- chat UI + voice
let stopListen = null, speaking = false, lastSpoken = '';
function addMsg(who, text, cls = '') {
  const log = $('coachLog'); if (!log) return null;
  const d = document.createElement('div'); d.className = `msg ${who} ${cls}`;
  d.innerHTML = `<span class="who">${who === 'coach' ? 'Coach 🎓' : who === 'user' ? 'You' : ''}</span><span class="txt">${esc(text)}</span>`;
  log.appendChild(d); log.scrollTop = log.scrollHeight;
  return d;
}
function speakAnswer(text) {
  if (!api.settings.coachSpeak) return;
  const v = voice(); if (!v.ttsAvailable()) return;
  const clean = speakable(text); // no emojis, arrows, parentheses or +0.4 – and moves as words ("Knight to g5")
  lastSpoken = clean;
  v.speak(clean, { lang: 'en-US', rate: kids() ? 0.95 : 1.02, onStart: () => { speaking = true; duckMusic(true); $('btnStopVoice').hidden = false; }, onEnd: () => { speaking = false; duckMusic(false); $('btnStopVoice').hidden = true; } });
}
export async function ask(text) {
  const q = String(text || '').trim(); if (!q) return null;
  addMsg('user', q);
  const thinking = addMsg('coach', kids() ? vary('k-think', ['One moment, let me look …', 'Wait a sec, I’m checking …']) : vary('think', ['One moment, let me take a look …', 'Let me think for a second …', 'Let me have a look …']), 'pending');
  const intent = detectIntent(q);
  let reply;
  try { reply = await answer(intent, q); } catch (e) { console.warn('[Coach-Chat]', e); reply = 'Oops, something went wrong on my end. Please ask me again.'; }
  if (thinking) thinking.remove();
  addMsg('coach', reply);
  speakAnswer(reply);
  if (api.mode === 'bot' && Math.random() < 0.35 && ['best', 'hint', 'threat'].includes(intent.intent)) setTimeout(() => botSpeak(vary('botTease', ['Are you two whispering about me? 👀', 'The coach can talk all it wants. I have a plan. I think.', 'Coach and human against me? Unfair! I love it.', 'I’m listening in. Just so you know.']), 'think', true), 1600);
  return { intent: intent.intent, reply };
}

function micUnavailableMsg(reason) {
  if (reason === 'unsupported') return 'Voice input isn’t available in this browser (e.g. Firefox). Just type your question below, or use Chrome, Edge or Safari.';
  if (reason === 'not-allowed' || reason === 'service-not-allowed') return location.protocol === 'file:' ? 'The microphone is blocked because the game was opened as a file (file://). Open it via a local server (e.g. start.command → http://localhost) or the online version in Chrome or Safari and allow the microphone. Or just type your question.' : 'The microphone is blocked. Allow access via the lock icon in the address bar, or just type your question.';
  if (reason === 'network') return 'Speech recognition in Chrome needs internet because it runs on Google’s servers. Without a connection, please type your question.';
  if (reason === 'no-speech') return 'I didn’t hear anything. Press 🎙️ again and just start talking.';
  if (reason === 'audio-capture') return 'I can’t find a microphone. Please type your question.';
  return 'Voice input didn’t work just now. Just type your question.';
}
function toggleMic() {
  const btn = $('btnMic'); const v = voice();
  if (stopListen) { stopListen(); stopListen = null; return; }
  const av = v.sttAvailable();
  if (!av.ok) { addMsg('coach', micUnavailableMsg(av.reason), 'note'); return; }
  if (speaking) v.stopSpeaking();
  const input = $('coachQ'); input.value = ''; input.placeholder = 'Listening … 🎙️';
  btn.classList.add('listening'); btn.textContent = '⏺️ Listening …';
  stopListen = v.listen({
    lang: 'en-US',
    onInterim: t => { input.value = t; },
    onFinal: t => { input.value = ''; ask(t); },
    onError: code => { if (code !== 'aborted') addMsg('coach', micUnavailableMsg(code), 'note'); },
    onEnd: () => { stopListen = null; btn.classList.remove('listening'); btn.textContent = '🎙️ Ask by voice'; input.placeholder = 'Ask the coach … e.g. “What is threatened?”'; }
  });
}

export function initCoachChat() {
  const s = api.settings;
  if (s.coachSpeak === undefined) s.coachSpeak = true;
  if (s.coachKids === undefined) s.coachKids = false;
  const save = () => { try { localStorage.setItem('gbc-settings-v3', JSON.stringify(s)); } catch (e) {} };
  $('chkSpeak').checked = s.coachSpeak; $('chkKids').checked = s.coachKids;
  $('chkSpeak').addEventListener('change', () => { s.coachSpeak = $('chkSpeak').checked; if (!s.coachSpeak) voice().stopSpeaking(); save(); });
  $('chkKids').addEventListener('change', () => {
    s.coachKids = $('chkKids').checked; s.kidsRevealed = false; save();
    const ho = $('chkHintOnly');
    if (ho && s.coachKids) { s.hintBeforeKids = ho.checked; if (!ho.checked) { ho.checked = true; ho.dispatchEvent(new Event('change')); } }
    else if (ho && !s.coachKids && s.hintBeforeKids === false && ho.checked) { ho.checked = false; ho.dispatchEvent(new Event('change')); }
    addMsg('coach', s.coachKids ? 'Kids mode on! I’ll explain everything simply and always give you a little tip first. 😊' : 'Kids mode off. From now on I’ll use proper chess terms again.', 'note');
  });
  $('btnAsk').addEventListener('click', () => { const q = $('coachQ').value; $('coachQ').value = ''; ask(q); });
  $('coachQ').addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); const q = $('coachQ').value; $('coachQ').value = ''; ask(q); } });
  $('btnMic').addEventListener('click', toggleMic);
  $('btnStopVoice').addEventListener('click', () => { voice().stopSpeaking(); speaking = false; duckMusic(false); $('btnStopVoice').hidden = true; });
  for (const b of document.querySelectorAll('[data-ask]')) b.addEventListener('click', () => ask(b.dataset.ask));
  const av = voice().sttAvailable();
  if (!av.ok) { $('btnMic').title = 'Voice input isn’t available here, please type'; $('btnMic').classList.add('unavail'); }
  addMsg('coach', kids() ? 'Hi! I’m your coach. Just ask me – typed or spoken with 🎙️!' : 'Hi, I’m your coach! Ask me anything, by 🎙️ or typing. For example “What is threatened?” or “Was my last move a mistake?”', 'note');
  if (window.__gbc) window.__gbc.coachChat = { ask, detectIntent, speakable, lastSpoken: () => lastSpoken, voiceName: () => voiceName(), adapterName: () => voice().name };
}
