/**
 * Garden Chess AI — minimax with alpha-beta, depth 2–3
 */
(function (global) {
  'use strict';

  const GC = global.GardenChess;
  const VALUES = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };

  // Piece-square tables (white perspective; flip for black)
  const PST = {
    p: [
      [0,0,0,0,0,0,0,0],
      [50,50,50,50,50,50,50,50],
      [10,10,20,30,30,20,10,10],
      [5,5,10,25,25,10,5,5],
      [0,0,0,20,20,0,0,0],
      [5,-5,-10,0,0,-10,-5,5],
      [5,10,10,-20,-20,10,10,5],
      [0,0,0,0,0,0,0,0]
    ],
    n: [
      [-50,-40,-30,-30,-30,-30,-40,-50],
      [-40,-20,0,0,0,0,-20,-40],
      [-30,0,10,15,15,10,0,-30],
      [-30,5,15,20,20,15,5,-30],
      [-30,0,15,20,20,15,0,-30],
      [-30,5,10,15,15,10,5,-30],
      [-40,-20,0,5,5,0,-20,-40],
      [-50,-40,-30,-30,-30,-30,-40,-50]
    ],
    b: [
      [-20,-10,-10,-10,-10,-10,-10,-20],
      [-10,0,0,0,0,0,0,-10],
      [-10,0,10,10,10,10,0,-10],
      [-10,5,5,10,10,5,5,-10],
      [-10,0,5,10,10,5,0,-10],
      [-10,5,5,5,5,5,5,-10],
      [-10,0,5,0,0,5,0,-10],
      [-20,-10,-10,-10,-10,-10,-10,-20]
    ],
    r: [
      [0,0,0,0,0,0,0,0],
      [5,10,10,10,10,10,10,5],
      [-5,0,0,0,0,0,0,-5],
      [-5,0,0,0,0,0,0,-5],
      [-5,0,0,0,0,0,0,-5],
      [-5,0,0,0,0,0,0,-5],
      [-5,0,0,0,0,0,0,-5],
      [0,0,0,5,5,0,0,0]
    ],
    q: [
      [-20,-10,-10,-5,-5,-10,-10,-20],
      [-10,0,0,0,0,0,0,-10],
      [-10,0,5,5,5,5,0,-10],
      [-5,0,5,5,5,5,0,-5],
      [0,0,5,5,5,5,0,-5],
      [-10,5,5,5,5,5,0,-10],
      [-10,0,5,0,0,0,0,-10],
      [-20,-10,-10,-5,-5,-10,-10,-20]
    ],
    k: [
      [-30,-40,-40,-50,-50,-40,-40,-30],
      [-30,-40,-40,-50,-50,-40,-40,-30],
      [-30,-40,-40,-50,-50,-40,-40,-30],
      [-30,-40,-40,-50,-50,-40,-40,-30],
      [-20,-30,-30,-40,-40,-30,-30,-20],
      [-10,-20,-20,-20,-20,-20,-20,-10],
      [20,20,0,0,0,0,20,20],
      [20,30,10,0,0,10,30,20]
    ]
  };

  function pst(type, r, c, color) {
    const table = PST[type];
    if (!table) return 0;
    const row = color === 'w' ? r : 7 - r;
    return table[row][c];
  }

  function evaluate(state) {
    const status = GC.gameStatus(state);
    if (status.type === 'checkmate') {
      return status.winner === 'w' ? 100000 : -100000;
    }
    if (status.type === 'stalemate' || status.type === 'draw') return 0;

    let score = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = state.board[r][c];
        if (!p) continue;
        const v = VALUES[p.type] + pst(p.type, r, c, p.color);
        score += p.color === 'w' ? v : -v;
      }
    }
    // Slight mobility bonus
    const moves = GC.legalMoves(state);
    const mobility = moves.length * 2;
    score += state.turn === 'w' ? mobility : -mobility;
    return score;
  }

  function orderMoves(moves) {
    return moves.slice().sort((a, b) => {
      const ca = (a.capture ? 10 : 0) + (a.givesCheck ? 5 : 0) + (a.promotion ? 8 : 0);
      const cb = (b.capture ? 10 : 0) + (b.givesCheck ? 5 : 0) + (b.promotion ? 8 : 0);
      return cb - ca;
    });
  }

  function minimax(state, depth, alpha, beta, maximizing) {
    if (depth === 0) return { score: evaluate(state) };
    const status = GC.gameStatus(state);
    if (status.type === 'checkmate') {
      return { score: status.winner === 'w' ? 100000 - (3 - depth) : -100000 + (3 - depth) };
    }
    if (status.type === 'stalemate' || status.type === 'draw') {
      return { score: 0 };
    }

    const moves = orderMoves(GC.legalMoves(state));
    let bestMove = null;

    if (maximizing) {
      let maxEval = -Infinity;
      for (const m of moves) {
        const next = GC.makeMove(state, m);
        if (!next) continue;
        const result = minimax(next, depth - 1, alpha, beta, false);
        if (result.score > maxEval) {
          maxEval = result.score;
          bestMove = m;
        }
        alpha = Math.max(alpha, maxEval);
        if (beta <= alpha) break;
      }
      return { score: maxEval, move: bestMove };
    } else {
      let minEval = Infinity;
      for (const m of moves) {
        const next = GC.makeMove(state, m);
        if (!next) continue;
        const result = minimax(next, depth - 1, alpha, beta, true);
        if (result.score < minEval) {
          minEval = result.score;
          bestMove = m;
        }
        beta = Math.min(beta, minEval);
        if (beta <= alpha) break;
      }
      return { score: minEval, move: bestMove };
    }
  }

  function chooseMove(state, depth) {
    depth = depth || 2;
    const maximizing = state.turn === 'w';
    // Prefer depth 3 midgame if few pieces; depth 2 early for speed
    let pieces = 0;
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++)
        if (state.board[r][c]) pieces++;
    if (pieces <= 12) depth = Math.max(depth, 3);

    const result = minimax(state, depth, -Infinity, Infinity, maximizing);
    if (!result.move) {
      const moves = GC.legalMoves(state);
      return moves.length ? moves[Math.floor(Math.random() * moves.length)] : null;
    }
    return result.move;
  }

  /**
   * Difficulty-aware entry point (Grok Bot):
   *  level 1 (Leicht): depth 1, picks randomly among near-best moves
   *  level 2 (Mittel): depth 2
   *  level 3 (Schwer): depth 3
   */
  function chooseMoveLevel(state, level) {
    const lite = Object.assign({}, state, { history: [] });
    const maximizing = lite.turn === 'w';
    const moves = orderMoves(GC.legalMoves(lite));
    if (!moves.length) return null;
    if (level <= 1) {
      const scored = moves.map(m => {
        const next = GC.makeMove(lite, m);
        return { m, s: next ? evaluate(next) : (maximizing ? -Infinity : Infinity) };
      });
      scored.sort((a, b) => maximizing ? b.s - a.s : a.s - b.s);
      const best = scored[0].s;
      const pool = scored.filter(x => Math.abs(x.s - best) <= 80);
      return pool[Math.floor(Math.random() * pool.length)].m;
    }
    const depth = level >= 3 ? 3 : 2;
    const result = minimax(lite, depth, -Infinity, Infinity, maximizing);
    return result.move || moves[Math.floor(Math.random() * moves.length)];
  }

  global.GardenAI = { chooseMove, chooseMoveLevel, evaluate };
})(typeof window !== 'undefined' ? window : globalThis);
