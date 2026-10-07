// reasons.js – turns detected move motifs (coach.js explain()) into human English sentences.
// Three voices: 'du' (your candidate move), 'they' (what the opponent threatens, N = their name), 'kid' (kids mode).
// Only data that explain() actually measured is used – no invented tactics.
import { vary, cap, np, pron, noun } from './talk.js';

const V = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 };
const two = (d, a = 'def', c = 'acc', kid = false) => `${np(d.t[0].type, c, a, kid)} on ${d.t[0].sq} and ${np(d.t[1].type, c, a, kid)} on ${d.t[1].sq}`;
const kidTwo = d => `${np(d.t[0].type, 'acc', 'def', true)} and ${np(d.t[1].type, 'acc', 'def', true)}`;
const defBy = d => (d.nd === 0 ? 'and nobody defends it' : d.nd === 1 && d.defenders && d.defenders[0] ? `and it’s only defended by the ${noun(d.defenders[0])}` : `and there are ${d.na} attackers against ${d.nd} defenders`);
const defByThey = d => (d.nd === 0 ? 'and it’s undefended' : d.nd === 1 ? 'and it’s only defended once' : `with ${d.na} attackers against ${d.nd} defenders`);

// R[key] = { du: [fn(d, ctx)], they: [...], kid: [...] }   ctx = { N: opponent name (they) / opp name (du) }
const R = {
  mate: {
    du: [() => 'And that’s checkmate! It doesn’t get better than that.', () => 'Checkmate! The king has nowhere left to go.', () => 'That’s mate on the spot. Enjoy the moment!'],
    they: [(d, c) => `${c.N} would have checkmate right away.`, (d, c) => `That would be instant mate for ${c.N}.`],
    kid: [() => 'The king is caught – checkmate! 🎉', () => 'Checkmate! The king can’t go anywhere anymore. Super!']
  },
  mateN: {
    du: [d => `This forces mate in ${d.nw}, no matter what the other side does.`, d => `From here, mate in ${d.nw} can’t be stopped.`, d => `This starts a forced mate in ${d.nw}.`],
    they: [(d, c) => `After that, ${c.N} would have mate in ${d.nw}.`, (d, c) => `With that, ${c.N} could force mate in ${d.nw}.`],
    kid: [() => 'With this you can catch the king very soon!', () => 'If you pay close attention now, the king will be caught soon!']
  },
  promo: {
    du: [d => d.promo === 'q' ? `Your pawn runs through and becomes a queen on ${d.to}. Huge upgrade!` : `The pawn becomes a ${noun(d.promo)} on ${d.to}. Sounds odd, but it’s exactly right here.`, d => d.promo === 'q' ? `The pawn turns into a queen on ${d.to}. It doesn’t get better.` : `Underpromotion: the pawn becomes a ${noun(d.promo)}, and that’s exactly what the position needs.`],
    they: [(d, c) => `${c.N} could promote the pawn on ${d.to} to a ${d.promo === 'q' ? 'queen' : noun(d.promo)}.`],
    kid: [() => 'Your pawn reaches the other side and becomes a queen! 👑', () => 'The little pawn makes it all the way and becomes a queen! 👑']
  },
  hanging: {
    du: [d => `${cap(np(d.cap))} on ${d.to} is undefended – you can simply take it.`, d => `${cap(np(d.cap))} on ${d.to} is just hanging there, completely undefended. Free material, grab it!`, d => `Grab the undefended ${noun(d.cap)} on ${d.to} – nobody defends it.`],
    they: [(d, c) => `${c.N} could simply take ${np(d.cap, 'acc', 'dein')} on ${d.to}, it’s undefended.`, (d, c) => `${cap(np(d.cap, 'nom', 'dein'))} on ${d.to} is undefended, and ${c.N} has surely noticed.`],
    kid: [() => 'There’s a piece with no protection at all. You can just take it!', d => `Oops, nobody is guarding ${np(d.cap, 'acc', 'def', true)} of your opponent. Grab it!`]
  },
  winMat: {
    du: [d => `${cap(np(d.mover, 'nom', 'dein'))} takes ${np(d.cap, 'acc')} on ${d.to}. It pays off even if they recapture.`, d => `You give less than you get: ${noun(d.mover)} for ${noun(d.cap)}. Good deal!`],
    they: [(d, c) => `${c.N} could take ${np(d.cap, 'acc', 'dein')} on ${d.to} with ${np(d.mover, 'dat')} and win material.`],
    kid: [() => 'You give a small piece and get a bigger one. Good trade!', () => 'Small piece for big piece – that’s a really good deal!']
  },
  trade: {
    du: [d => d.ahead ? `You trade ${np(d.cap, 'acc')} on ${d.to}. When you’re ahead, trading is exactly right.` : `A fair trade on ${d.to}: ${noun(d.cap)} for ${noun(d.cap)}.`, d => d.ahead ? 'Just trade. With your lead, every endgame gets easier.' : `You trade off ${np(d.cap, 'acc')}, which makes the board a bit simpler.`],
    they: [(d, c) => `${c.N} could trade ${np(d.cap, 'acc')} on ${d.to}.`],
    kid: [() => 'You trade pieces of equal strength. That’s fair.', () => 'Same for same – a fair trade.']
  },
  capture: {
    du: [d => `You take ${np(d.cap, 'acc')} on ${d.to}.`, d => `You capture ${np(d.cap, 'acc')} on ${d.to}.`],
    they: [(d, c) => `${c.N} could take ${np(d.cap, 'acc', 'dein')} on ${d.to}.`],
    kid: [d => `With this you capture ${np(d.cap, 'acc', 'def', true)}.`, d => `With this you grab ${np(d.cap, 'acc', 'def', true)}!`]
  },
  check: {
    du: [() => 'And it’s check, so the king has to respond first.', () => 'You give check, which takes away the other side’s tempo.', () => 'With check – so no time for counterattacks.'],
    they: [(d, c) => `That would be check from ${c.N}.`, () => 'And with check, too.'],
    kid: [() => 'Check! The king has to respond now.', () => 'You give check – the king has to move!']
  },
  fork: {
    du: [d => `${d.gabel ? 'Fork! ' : 'Double attack! '}${cap(np(d.piece, 'nom', 'dein'))} on ${d.from} attacks ${two(d)} at the same time.${d.safe ? ' They can’t save both.' : ''}`, d => `${cap(np(d.piece, 'nom', 'dein'))} on ${d.from} has ${two(d)} in its sights at once. ${d.gabel ? 'A classic fork.' : 'A nice double attack.'}${d.safe ? ' One of them will fall.' : ''}`],
    they: [(d, c) => `${c.N} would then have a ${d.gabel ? 'fork' : 'double attack'}: ${np(d.piece, 'nom')} on ${d.from} would attack ${two(d, 'dein')} at the same time.`],
    kid: [d => `Look, ${np(d.piece, 'nom', 'dein', true)} attacks two pieces at once: ${kidTwo(d)}! That’s called a fork.${d.safe ? ' You can grab one of them.' : ''}`, d => `Two at once! ${cap(np(d.piece, 'nom', 'dein', true))} attacks ${kidTwo(d)} at the same time. That’s a fork!`]
  },
  threat: {
    du: [d => d.na ? `This attacks ${d.tgt === 'p' ? 'the pawn on ' + d.sq : np(d.tgt, 'acc') + ' on ' + d.sq}, ${defBy(d)}.` : `This attacks ${np(d.tgt, 'acc')} on ${d.sq}.`, d => d.na ? `${cap(np(d.piece, 'nom', 'dein'))} targets ${d.sq}, ${defBy(d)}.` : `${cap(np(d.piece, 'nom', 'dein'))} takes aim at ${np(d.tgt, 'acc')} on ${d.sq}.`],
    they: [(d, c) => d.na ? `${c.N} would then attack ${d.sq}, ${defByThey(d)}.` : `${c.N} would attack ${np(d.tgt, 'acc', 'dein')} on ${d.sq}.`],
    kid: [d => `With this you attack ${np(d.tgt, 'acc', 'def', true)}. Let’s see if your opponent notices!`, d => `With this you threaten ${np(d.tgt, 'acc', 'def', true)}. Now your opponent has to be careful!`]
  },
  pin: {
    du: [d => d.abs ? `You pin ${np(d.pinned, 'acc')} on ${d.sq} to the king. It can’t move anymore.` : `You pin ${np(d.pinned, 'acc')} on ${d.sq} to ${np(d.behind, 'acc')}. If it moves away, ${np(d.behind)} is next.`, d => `Pin: ${np(d.pinned)} on ${d.sq} is stuck now, because ${np(d.behind)} stands behind it.`],
    they: [(d, c) => `${c.N} could pin ${np(d.pinned, 'acc', 'dein')} on ${d.sq} to ${d.abs ? 'your king' : np(d.behind, 'acc', 'dein')}.`],
    kid: [d => d.abs ? 'Your opponent’s piece is nailed down now, because their king is behind it. That’s called a pin.' : 'Your opponent’s piece is nailed down now. If it moves away, something valuable behind it is exposed. That’s called a pin.']
  },
  skewer: {
    du: [d => `Skewer! ${cap(np(d.front))} has to move, and then ${np(d.back)} behind it is next.`, d => `${cap(np(d.front))} is in the way and has to step aside. Behind it waits ${np(d.back)}. A classic skewer.`],
    they: [(d, c) => `${c.N} would have a skewer: ${np(d.front, 'nom', 'dein')} would have to move, and ${np(d.back, 'nom', 'dein')} behind it would be next.`],
    kid: [() => 'The valuable piece has to run away, and then you grab the one behind it. That’s a skewer!']
  },
  discCheck: {
    du: [d => d.double ? 'Double check! Only a king move can help now.' : `Discovered check! Your move opens the line for ${np(d.via, 'acc', 'dein')}.`, d => d.double ? 'Double check – two pieces give check at once. The king has to run.' : `You move away, and suddenly ${np(d.via, 'nom', 'dein')} gives check. Discovered check!`],
    they: [(d, c) => d.double ? `${c.N} would have a double check.` : `${c.N} would have a discovered check.`],
    kid: [() => 'When your piece steps aside, it clears the way, and another piece gives check. Discovered check!']
  },
  discovered: {
    du: [d => `Discovered attack: your move opens the line, and now ${np(d.via, 'nom', 'dein')} attacks ${np(d.tgt, 'acc')} on ${d.sq}.`, d => `Hidden attack! Behind your move, ${np(d.via, 'nom', 'dein')} is unleashed and targets ${np(d.tgt, 'acc')} on ${d.sq}.`],
    they: [(d, c) => `${c.N} would have a discovered attack on ${np(d.tgt, 'acc', 'dein')} on ${d.sq}.`],
    kid: [() => 'When your piece steps aside, another one can attack. Surprise!']
  },
  mateThreat: {
    du: [() => 'This threatens mate on the next move.', () => 'Now mate is threatened. The other side has to look very carefully.', () => 'And suddenly there’s a mate threat on the board.'],
    they: [(d, c) => `${c.N} would then threaten mate.`, (d, c) => `After that, ${c.N} threatens mate.`],
    kid: [() => 'With this you threaten to catch the king on the next move!']
  },
  rescue: {
    du: [d => `${cap(np(d.piece, 'nom', 'dein'))} was under attack. On ${d.to} it’s safe.`, d => `You bring ${np(d.piece, 'acc', 'dein')} to safety – nobody can get at it on ${d.to}.`],
    they: [(d, c) => `${c.N} would bring ${np(d.piece, 'acc')} to safety.`],
    kid: [() => 'Your piece was attacked. Here it’s safe again.', () => 'Phew, rescued! Nothing can happen to your piece here.']
  },
  defend: {
    du: [d => `This defends ${np(d.prot, 'acc', 'dein')} on ${d.psq}, which ${np(d.att)} on ${d.asq} is attacking right now.`, d => `${cap(np(d.prot))} on ${d.psq} is attacked by the ${noun(d.att)} on ${d.asq}. Now it’s defended.`],
    they: [(d, c) => `${c.N} would defend ${np(d.prot, 'acc')} on ${d.psq}.`],
    kid: [d => `With this you protect ${np(d.prot, 'acc', 'dein', true)} on ${d.psq}.`, d => `Now someone is looking after ${np(d.prot, 'acc', 'dein', true)}. Well done!`]
  },
  castle: {
    du: [() => 'Castling: your king gets to safety and the rook joins the game.', () => 'King into the corner. The rook becomes active at the same time.', () => 'First, get the king to safety. Castling is never wrong.'],
    they: [(d, c) => `${c.N} would castle.`],
    kid: [() => 'Castling! Your king hides behind its pawns, and the rook comes out.']
  },
  evade: {
    du: [d => d.king ? 'Your king steps out of check.' : 'This blocks the check.', d => d.king ? 'The king has to get out of check, and it’s okay here.' : 'The check is parried.'],
    they: [(d, c) => `${c.N} would parry the check.`],
    kid: [() => 'Your king is in check. You have to save it first!']
  },
  develop: {
    du: [d => `You bring ${np(d.piece, 'acc', 'dein')} into the game. In the opening, every active piece counts.`, () => 'Another piece off the back rank. That’s exactly how the opening should go.', d => `${cap(np(d.piece, 'nom', 'dein'))} comes out. Development first!`],
    they: [(d, c) => `${c.N} would develop ${np(d.piece, 'acc')}.`],
    kid: [d => `With this you bring ${np(d.piece, 'acc', 'dein', true)} into the game. At the start, all pieces should join in!`]
  },
  center: {
    du: [d => d.piece === 'p' ? `A pawn on ${d.to}, right in the center. Classic and strong.` : `The knight on ${d.to} is excellent – from the center it reaches eight squares.`, d => d.piece === 'p' ? `With ${d.to} you occupy the center and take important squares away from the other side.` : 'A knight is strongest in the center, and that’s exactly where it is now.'],
    they: [(d, c) => `${c.N} would occupy the center.`],
    kid: [() => 'You go to the middle of the board. The middle is super important!', () => 'Into the middle! From there your piece can do the most.']
  },
  passer: {
    du: [d => `Your passed pawn moves on to ${d.to}. No enemy pawn can stop it anymore.`, () => 'The passed pawn is marching. No enemy pawn can stop it now.'],
    they: [(d, c) => `${c.N} would push the passed pawn to ${d.to}.`],
    kid: [() => 'This pawn has a free road ahead! Run, little pawn!']
  },
  openFile: {
    du: [d => `The rook goes to the open ${d.file}-file. It can put real pressure on from there.`, d => `Open ${d.file}-file – that’s where rooks belong.`],
    they: [(d, c) => `${c.N} would take the open ${d.file}-file.`],
    kid: [() => 'Your rook moves onto an empty road. It can drive far from there!']
  },
  kingAct: {
    du: [() => 'No queens left on the board, so the king can join the fight.', () => 'In the endgame the king is a real fighting piece. Bring it forward.'],
    they: [(d, c) => `${c.N} would activate the king.`],
    kid: [() => 'Now, near the end, the king can bravely join in.']
  },
  active: {
    du: [d => `${cap(np(d.piece))} is much more active on ${d.to} – from there it controls ${d.n} squares instead of ${d.m}.`, d => `On ${d.to}, ${np(d.piece, 'nom', 'dein')} does more: ${d.n} squares instead of ${d.m}.`],
    they: [(d, c) => `${c.N} would improve ${np(d.piece, 'acc')} to ${d.to}.`],
    kid: [d => `There ${np(d.piece, 'nom', 'dein', true)} has much more room to move.`]
  },
  opens: {
    du: [d => `The pawn move clears the way for ${np(d.via, 'acc', 'dein')}.`, d => `Small pawn move, big effect: ${np(d.via, 'nom', 'dein')} gets free.`],
    they: [(d, c) => `${c.N} would make room for ${np(d.via, 'acc')}.`],
    kid: [d => `With this you clear the way for ${np(d.via, 'acc', 'dein', true)}.`]
  },
  quiet: {
    du: [() => 'Honestly, not a spectacular move, but it holds everything together.', () => 'Modest but solid. Sometimes the quiet move is the best one.', () => 'No fireworks, just a sensible move that keeps your position stable.'],
    they: [(d, c) => `Nothing wild – ${c.N} would just keep playing calmly.`],
    kid: [() => 'A calm, good move. Not every move has to be magic!', () => 'A good, safe move.']
  }
};
R.none = R.quiet;

/** render one reason { key, data } -> sentence */
export function reasonText(r, voice = 'du', ctx = {}) {
  const T = R[r.key] || R.quiet;
  const list = T[voice] || T.du;
  return vary(`r-${r.key}-${voice}`, list, r.data || {}, { N: ctx.N || 'your opponent' });
}
export const reasonsText = (reasons, voice = 'du', ctx = {}, max = 2) => reasons.slice(0, max).map(r => reasonText(r, voice, ctx)).join(' ');

// ---------------------------------------------------------------- hints (piece to look at + nudge, no move given away)
const HINT = {
  mate: () => ['It can deliver checkmate right away!', 'There’s a mate in there. Can you find it?'],
  mateN: () => ['You can force mate with it. Calculate carefully!', 'There’s a forced mate hidden here.'],
  promo: () => ['It wants to become a queen!', 'That pawn has big plans.'],
  hanging: () => ['Something of your opponent’s is undefended.', 'Something is hanging on your opponent’s side. Eyes open!'],
  winMat: () => ['There’s material to win.', 'You can win material there.'],
  fork: () => ['It can attack two things at once.', 'Keyword: fork.'],
  pin: () => ['You can pin something with it.', 'Think about a pin.'],
  skewer: () => ['There’s a skewer in there.', 'Two enemy pieces stand on one line. Skewer?'],
  discCheck: () => ['When it moves, a line opens up. Keyword: discovered check!'],
  discovered: () => ['When it moves, a line opens for another piece.'],
  mateThreat: () => ['You can threaten mate with it.', 'A mate threat is possible.'],
  check: () => ['A check is really useful here.'],
  threat: () => ['It can attack something valuable.', 'You can put on pressure with it.'],
  rescue: () => ['It’s under fire. Bring it to safety.'],
  defend: () => ['One of your pieces needs support right now.'],
  castle: () => ['Think about your king’s safety.'],
  evade: () => ['First you have to get out of check.'],
  develop: () => ['It finally wants to join the game.', 'It’s still sitting on the bench.'],
  center: () => ['The center is calling!', 'The middle is waiting for you.'],
  passer: () => ['The passed pawn wants to run.'],
  openFile: () => ['There’s an open file available.'],
  kingAct: () => ['In the endgame the king is a really strong piece.'],
  trade: () => ['A trade is on offer.'],
  capture: () => ['It can capture something.'],
  active: () => ['It would be much more effective somewhere else.'],
  opens: () => ['One small pawn move, and another piece gets free.'],
  quiet: () => ['It has a good, calm move.', 'Nothing wild, but there’s a solid move.']
};
const KIDHINT = {
  mate: () => 'it can catch the king!',
  mateN: () => 'with it you can catch the king soon!',
  promo: () => 'it wants to reach the other side and become a queen!',
  hanging: () => 'your opponent has a piece with no protection at all!',
  winMat: () => 'with it you can grab a bigger piece!',
  fork: () => 'it can attack two pieces at once!',
  check: () => 'with it you can give check!',
  threat: () => 'it can attack a valuable piece!',
  rescue: () => 'it’s being attacked. Bring it to safety!',
  castle: () => 'it wants to get to safety. Do you know castling?',
  evade: () => 'it’s in check. Save it!',
  develop: () => 'it wants to play too!',
  center: () => 'it wants to go to the middle!',
  defend: () => 'it can help another piece!'
};
export function hintText(t, sq, motif, kid = false) {
  if (kid) {
    const tail = (KIDHINT[motif] || (() => 'it has a really good move!'))(t);
    return vary('k-hint', [`Look at ${np(t, 'acc', 'dein', true)} on ${sq} – ${tail}`, `Look, ${np(t, 'nom', 'dein', true)} on ${sq}: ${tail}`]);
  }
  const nudge = vary(`h-${motif}`, (HINT[motif] || HINT.quiet)(t));
  return vary('hint', [`Take a look at ${np(t, 'acc', 'dein')} on ${sq}. ${nudge}`, `Little tip: ${np(t, 'nom', 'dein')} on ${sq}. ${nudge}`, `I won’t give it all away, but look at ${np(t, 'acc', 'dein')} on ${sq}. ${nudge}`]);
}
export { V };
