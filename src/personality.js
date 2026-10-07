// Grok Bot personality — friendly, family-safe, witty English. Shuffle bags avoid repeats.
const bags = new Map();
export function say(key, vars = {}) {
  const pool = typeof key === 'string' ? resolve(key) : key;
  if (!pool || !pool.length) return '';
  const id = typeof key === 'string' ? key : pool.join('|').slice(0, 80);
  let bag = bags.get(id);
  if (!bag || !bag.items.length) {
    const items = pool.slice();
    for (let i = items.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [items[i], items[j]] = [items[j], items[i]]; }
    // never start a new round with the line we just used
    if (bag && bag.last && items.length > 1 && items[items.length - 1] === bag.last) items.unshift(items.pop());
    bag = { items, last: bag && bag.last };
    bags.set(id, bag);
  }
  const line = bag.items.pop();
  bag.last = line;
  return line.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''));
}
function resolve(path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : null), LINES);
}

export const LINES = {
  start: [
    'Hi! I’m Grok Bot. Zero feelings, but 100% up for chess. 🤖',
    'New game! My pawns are freshly updated and highly motivated.',
    'I’ve already simulated three million games today. This one will be the prettiest.',
    'Ready when you are. I’m always ready. I never sleep. Never.',
    'You’re White. I’m Black – and I have a very good cooling fan.',
    'Fair-play mode: on. Show-off mode: slightly elevated.',
    'I polished my pieces. They’re already shining with excitement.',
    'Let’s play a game the toasters will talk about for years.'
  ],
  pvpStart: [
    'Player vs player! I’m just commentating. And eating virtual popcorn. 🍿',
    'Two humans, one board, one commentator bot. Let’s go!',
    'I’ll stay out of it. Mostly. Okay, I’ll commentate a little.',
    'Welcome to the live broadcast from the Neon Stadium!'
  ],
  thinking: [
    'One moment… calculating. Please don’t pull the plug.',
    'Loading genius… 42% …',
    'I’m simulating a thousand universes. You win in three of them.',
    'Hmm. Hmmmm. Hmmmmmmm. That’s my thinking noise, by the way.',
    'Just asking the cloud… ☁️',
    'I’m thinking so hard you can hear my fan.',
    'Please hold, your move is important to us. 🎵',
    'Calculating, calculating … ah, an idea! No, wait. Yes!'
  ],
  botMoves: [
    '{piece} to {sq}. Totally on purpose. I think.',
    '{piece} to {sq}. My fan is spinning up – that’s enthusiasm.',
    '{sq}! It’s in my training data. Somewhere.',
    'I move my {piece} to {sq} and pretend it’s a master plan.',
    '{piece} to {sq}. Strategy level: mysterious.',
    'Move made. Your turn. No pressure. Okay, a little pressure.',
    'There, my {piece} is on {sq}. Curious what you’ll do now.',
    '{piece} to {sq}. I have an idea. Not telling, though.',
    '{piece} to {sq}. Felt good. Computationally speaking.',
    '{sq}. I call this move “The Elegant Toaster”.',
    'My {piece} wanted to see the view from {sq}.',
    '{piece} to {sq}. Applause, please. Now. 👏'
  ],
  botCaptures: [
    'Thanks for your {piece}! Very generous. 🎁',
    'Your {piece} got rate-limited. Forever. 🚫',
    'Om nom nom – your {piece} was tasty.',
    'Oops, there was a {piece} in the way. Not anymore.',
    'Your {piece} is taking a break in the cache now.',
    'Sadly, your {piece} just got a 404.',
    'I archived your {piece}. Very lovingly.',
    'Your {piece} was uploaded to the cloud. Far, far away.'
  ],
  playerCaptures: [
    'Ouch! My {piece}! I’m reporting this to support.',
    'Okay, that was good. I’ll file it under “luck”.',
    'My {piece}… so young. So unsaved.',
    'Hey! My {piece} still had plans!',
    'Well played. I’ll pretend I saw that coming.',
    'My {piece} is retired now. Involuntarily.',
    'Note to self: don’t leave the {piece} just standing around.'
  ],
  botBlunder: [
    'Wait… WHERE IS MY {piece}?! 😱',
    'That was … a test move. For science. Please don’t tell anyone.',
    'I just lost a {piece}. And my dignity along with it.',
    'Error 418: I’m a teapot. That’s how it feels right now.',
    'Okay. Okay okay okay. Stay calm, circuits.'
  ],
  playerBlunder: [
    'Your {piece}! I’ll take it with great joy and a little pity.',
    'Was that {piece} on purpose? Asking for a friend.',
    'A {piece} on sale? I won’t say no.'
  ],
  playerSacrifice: [
    'A sacrifice?! Either genius or an accident. I’m curious.',
    'Bold! Let me check whether it’s a trap … while sweating bits.',
    'That smells like tactics. Or burnt toast.'
  ],
  botSacrifice: [
    'I’m sacrificing something here. Trust me. I’m a bot.',
    'A gift! But with a catch. Maybe. Who knows.'
  ],
  botGivesCheck: [
    'Check! Your king should work from home for a bit.',
    'Check! No reason to panic. Okay, a small reason.',
    'Check! Ding-dong, your king is expected. 🔔',
    'Check! Just wanted to mention it.',
    'Check! Your king has a new notification.',
    'Check! A little nudge. Very friendly.'
  ],
  botInCheck: [
    'Check?! I… I planned it exactly like this. Honestly.',
    'My king is sweating bits. 💦',
    'Whoa. That was cheeky. I don’t like it. Respect anyway.',
    'Check? Hold on, I’m looking for the emergency exit.',
    'My king says he doesn’t have time for this right now.'
  ],
  botFork: [
    'Fork! 🍴 Two birds, one knight. Er, move.',
    'Oh look what my {piece} is attacking at the same time. Coincidence? No.'
  ],
  playerFork: [
    'A fork?! Who taught you that? Me?',
    'Fork! That’s rude. And pretty good.'
  ],
  botCastles: [
    'Castling! My king moves into the bunker. With Wi-Fi.',
    'King and rook docking. Security update installed. 🛡️',
    'Castling! My king just secured a corner office.'
  ],
  playerCastles: [
    'Castling! Your king is getting cozy. I’ll remember the address.',
    'Better safe than sorry. Nice castling!',
    'Ah, classic castling. Very serious. I’m impressed.'
  ],
  enPassant: [
    'En passant! The most secret rule in chess. I love it. 🕵️',
    'En passant! If anyone doesn’t know it, just say: magic.',
    'Captured in passing. So polite and so mean at the same time.'
  ],
  botPromotes: [
    'My pawn finished its training: now a {piece}! 🎓',
    'Upgrade installed! The intern becomes a {piece}.',
    'Promotion! My pawn is now a {piece}. Pay raise included.'
  ],
  playerPromotes: [
    'Your pawn becomes a {piece}? That was a fast career!',
    'Promotion to {piece}. I’m jealous. And a little nervous.',
    'Congrats on the promotion! Sending confetti. 🎉'
  ],
  botWinning: [
    'Things are going well. Should I slow down a bit?',
    'Material advantage! I’ll stay humble anyway. Mostly.',
    'Not to brag, but my evaluation is pointing up. 📈',
    'My pieces are grinning. I didn’t teach them that.'
  ],
  botLosing: [
    'I’m not losing. I’m collecting training data.',
    'Everything is going to plan. The plan is called improvisation.',
    'Quick question: is there a “reroll” button here?',
    'I’m sweating. Bots don’t sweat. I’m sweating anyway.'
  ],
  botWins: [
    'Checkmate! GG! Rematch? I promise I’ll be nice(r).',
    'Mate! That was close. For you, I mean. Again?',
    'I won! Doing a little victory dance in binary now. 💃',
    'Checkmate! I’ll stay humble. Starting tomorrow.'
  ],
  botLoses: [
    'Checkmate… respect! I’m shutting down briefly to reflect on my life. 🔌',
    'You won! I’m impressed. And a little overheated.',
    'GG! I’m writing this in my diary. Under “lessons”.',
    'Mate. Well played! I still demand a rematch voucher.'
  ],
  draw: [
    'Draw! We’re both winners. Or neither. Philosophically.',
    'A draw. Fair is fair – fist bump? 🤜🤖',
    'Stalemate! We out-maneuvered each other. Respect!'
  ],
  undo: [
    'Rewind? Sure. I’ll forget it. Almost.',
    'Move taken back! I didn’t see anything. 🙈',
    'Undo! If only real life had that button.',
    'Time travel activated. Please fasten your seatbelt. ⏪'
  ],
  screenshot: [
    'Screenshot saved! I hope I look good. 📸',
    'Click! My good side is clearly the left. 😎',
    'Photo saved. I’m ready for my fan poster.'
  ],
  level: {
    1: ['Easy? Okay, I’ll play with one circuit tied behind my back.', 'Easy mode: I’m in cuddle mode today.'],
    2: ['Medium – fair and balanced. Like a good breakfast.', 'Medium. I think two moves ahead. At least.'],
    3: ['Hard?! Fine. Let me get my thinking cap. 🧢', 'Hard mode activated. My fan is warming up.']
  },
  pvpCheck: [
    'Check! Oh, this is getting exciting! 🍿',
    'Check! The king now has to look very busy, very quickly.',
    'Check! The audience holds its breath. Well, I do.'
  ],
  pvpCapture: [
    'There goes a {piece}! Recorded it. In slow motion.',
    'Rate limited: {piece}! Extra points for style.',
    'And the {piece} is gone. Clean!',
    'The {piece} leaves with confetti. Stylish!'
  ],
  pvpIdle: [
    'Interesting move. No idea what it’s for, but it looks good.',
    'Pure tension. My popcorn is getting cold.',
    'I’m not saying anything. Okay: nice move!',
    'The board is glowing. So am I, a little.'
  ],
  pvpMate: [
    'Checkmate! {side} wins! What a finale! 🏆',
    'Mate! Congratulations, {side}! I give it 10 out of 10 antennas.'
  ],
  hints: {
    on: ['Move hints on. I’ll light the way. ✨'],
    off: ['Move hints off. Respect, pro!', 'No hints? Bold. I like it.']
  }
};
