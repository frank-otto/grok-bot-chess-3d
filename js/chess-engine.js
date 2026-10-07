/**
 * Garden Chess — self-contained chess engine (standard FIDE rules)
 */
(function (global) {
  'use strict';

  const EMPTY = null;
  const WHITE = 'w';
  const BLACK = 'b';

  const PIECES = {
    P: 'p', N: 'n', B: 'b', R: 'r', Q: 'q', K: 'k'
  };

  function piece(color, type) {
    return { color, type };
  }

  function clonePiece(p) {
    return p ? { color: p.color, type: p.type } : null;
  }

  function cloneBoard(board) {
    return board.map(row => row.map(clonePiece));
  }

  function initialBoard() {
    const b = Array.from({ length: 8 }, () => Array(8).fill(null));
    const back = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
    for (let c = 0; c < 8; c++) {
      b[0][c] = piece(BLACK, back[c]);
      b[1][c] = piece(BLACK, 'p');
      b[6][c] = piece(WHITE, 'p');
      b[7][c] = piece(WHITE, back[c]);
    }
    return b;
  }

  function inBounds(r, c) {
    return r >= 0 && r < 8 && c >= 0 && c < 8;
  }

  function opposite(color) {
    return color === WHITE ? BLACK : WHITE;
  }

  function findKing(board, color) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (p && p.color === color && p.type === 'k') return { r, c };
      }
    }
    return null;
  }

  function isSquareAttacked(board, r, c, byColor) {
    // Pawns
    const pr = byColor === WHITE ? r + 1 : r - 1;
    for (const dc of [-1, 1]) {
      if (inBounds(pr, c + dc)) {
        const p = board[pr][c + dc];
        if (p && p.color === byColor && p.type === 'p') return true;
      }
    }
    // Knights
    const kn = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (const [dr, dc] of kn) {
      const nr = r + dr, nc = c + dc;
      if (inBounds(nr, nc)) {
        const p = board[nr][nc];
        if (p && p.color === byColor && p.type === 'n') return true;
      }
    }
    // King
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nr = r + dr, nc = c + dc;
        if (inBounds(nr, nc)) {
          const p = board[nr][nc];
          if (p && p.color === byColor && p.type === 'k') return true;
        }
      }
    }
    // Sliding: bishop/queen diagonals
    const diags = [[-1,-1],[-1,1],[1,-1],[1,1]];
    for (const [dr, dc] of diags) {
      let nr = r + dr, nc = c + dc;
      while (inBounds(nr, nc)) {
        const p = board[nr][nc];
        if (p) {
          if (p.color === byColor && (p.type === 'b' || p.type === 'q')) return true;
          break;
        }
        nr += dr; nc += dc;
      }
    }
    // Sliding: rook/queen orthogonals
    const orgs = [[-1,0],[1,0],[0,-1],[0,1]];
    for (const [dr, dc] of orgs) {
      let nr = r + dr, nc = c + dc;
      while (inBounds(nr, nc)) {
        const p = board[nr][nc];
        if (p) {
          if (p.color === byColor && (p.type === 'r' || p.type === 'q')) return true;
          break;
        }
        nr += dr; nc += dc;
      }
    }
    return false;
  }

  function isInCheck(board, color) {
    const k = findKing(board, color);
    if (!k) return true;
    return isSquareAttacked(board, k.r, k.c, opposite(color));
  }

  function pushMove(moves, fr, fc, tr, tc, extras) {
    moves.push(Object.assign({ fr, fc, tr, tc }, extras || {}));
  }

  function generatePseudoMoves(board, color, castling, ep) {
    const moves = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p || p.color !== color) continue;
        switch (p.type) {
          case 'p': genPawn(board, r, c, color, ep, moves); break;
          case 'n': genKnight(board, r, c, color, moves); break;
          case 'b': genSlide(board, r, c, color, [[-1,-1],[-1,1],[1,-1],[1,1]], moves); break;
          case 'r': genSlide(board, r, c, color, [[-1,0],[1,0],[0,-1],[0,1]], moves); break;
          case 'q': genSlide(board, r, c, color, [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]], moves); break;
          case 'k': genKing(board, r, c, color, castling, moves); break;
        }
      }
    }
    return moves;
  }

  function genPawn(board, r, c, color, ep, moves) {
    const dir = color === WHITE ? -1 : 1;
    const start = color === WHITE ? 6 : 1;
    const promo = color === WHITE ? 0 : 7;
    const nr = r + dir;
    if (inBounds(nr, c) && !board[nr][c]) {
      if (nr === promo) {
        for (const pr of ['q', 'r', 'b', 'n']) {
          pushMove(moves, r, c, nr, c, { promotion: pr });
        }
      } else {
        pushMove(moves, r, c, nr, c);
        if (r === start && !board[r + 2 * dir][c]) {
          pushMove(moves, r, c, r + 2 * dir, c);
        }
      }
    }
    for (const dc of [-1, 1]) {
      const nc = c + dc;
      if (!inBounds(nr, nc)) continue;
      const target = board[nr][nc];
      if (target && target.color !== color) {
        if (nr === promo) {
          for (const pr of ['q', 'r', 'b', 'n']) {
            pushMove(moves, r, c, nr, nc, { promotion: pr, capture: true });
          }
        } else {
          pushMove(moves, r, c, nr, nc, { capture: true });
        }
      }
      if (ep && ep.r === nr && ep.c === nc) {
        pushMove(moves, r, c, nr, nc, { capture: true, enPassant: true });
      }
    }
  }

  function genKnight(board, r, c, color, moves) {
    const kn = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (const [dr, dc] of kn) {
      const nr = r + dr, nc = c + dc;
      if (!inBounds(nr, nc)) continue;
      const t = board[nr][nc];
      if (!t) pushMove(moves, r, c, nr, nc);
      else if (t.color !== color) pushMove(moves, r, c, nr, nc, { capture: true });
    }
  }

  function genSlide(board, r, c, color, dirs, moves) {
    for (const [dr, dc] of dirs) {
      let nr = r + dr, nc = c + dc;
      while (inBounds(nr, nc)) {
        const t = board[nr][nc];
        if (!t) {
          pushMove(moves, r, c, nr, nc);
        } else {
          if (t.color !== color) pushMove(moves, r, c, nr, nc, { capture: true });
          break;
        }
        nr += dr; nc += dc;
      }
    }
  }

  function genKing(board, r, c, color, castling, moves) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nr = r + dr, nc = c + dc;
        if (!inBounds(nr, nc)) continue;
        const t = board[nr][nc];
        if (!t) pushMove(moves, r, c, nr, nc);
        else if (t.color !== color) pushMove(moves, r, c, nr, nc, { capture: true });
      }
    }
    // Castling
    if (isInCheck(board, color)) return;
    const rights = castling[color];
    const back = color === WHITE ? 7 : 0;
    if (r !== back || c !== 4) return;
    // Kingside
    if (rights.K) {
      if (!board[back][5] && !board[back][6]) {
        if (!isSquareAttacked(board, back, 5, opposite(color)) &&
            !isSquareAttacked(board, back, 6, opposite(color))) {
          pushMove(moves, r, c, back, 6, { castle: 'K' });
        }
      }
    }
    // Queenside
    if (rights.Q) {
      if (!board[back][1] && !board[back][2] && !board[back][3]) {
        if (!isSquareAttacked(board, back, 3, opposite(color)) &&
            !isSquareAttacked(board, back, 2, opposite(color))) {
          pushMove(moves, r, c, back, 2, { castle: 'Q' });
        }
      }
    }
  }

  function applyMove(state, move) {
    const board = cloneBoard(state.board);
    const p = board[move.fr][move.fc];
    const captured = move.enPassant
      ? board[move.fr][move.tc]
      : board[move.tr][move.tc];
    const capturedPiece = clonePiece(captured);

    if (move.enPassant) {
      board[move.fr][move.tc] = null;
    }

    board[move.tr][move.tc] = p;
    board[move.fr][move.fc] = null;

    if (move.promotion) {
      board[move.tr][move.tc] = piece(p.color, move.promotion);
    }

    if (move.castle === 'K') {
      const back = move.fr;
      board[back][5] = board[back][7];
      board[back][7] = null;
    } else if (move.castle === 'Q') {
      const back = move.fr;
      board[back][3] = board[back][0];
      board[back][0] = null;
    }

    // Castling rights
    const castling = {
      w: { K: state.castling.w.K, Q: state.castling.w.Q },
      b: { K: state.castling.b.K, Q: state.castling.b.Q }
    };
    if (p.type === 'k') {
      castling[p.color].K = false;
      castling[p.color].Q = false;
    }
    if (p.type === 'r') {
      if (move.fr === 7 && move.fc === 0) castling.w.Q = false;
      if (move.fr === 7 && move.fc === 7) castling.w.K = false;
      if (move.fr === 0 && move.fc === 0) castling.b.Q = false;
      if (move.fr === 0 && move.fc === 7) castling.b.K = false;
    }
    if (capturedPiece && capturedPiece.type === 'r') {
      if (move.tr === 7 && move.tc === 0) castling.w.Q = false;
      if (move.tr === 7 && move.tc === 7) castling.w.K = false;
      if (move.tr === 0 && move.tc === 0) castling.b.Q = false;
      if (move.tr === 0 && move.tc === 7) castling.b.K = false;
    }

    // En passant target
    let ep = null;
    if (p.type === 'p' && Math.abs(move.tr - move.fr) === 2) {
      ep = { r: (move.fr + move.tr) / 2, c: move.fc };
    }

    const halfmove = (p.type === 'p' || capturedPiece) ? 0 : state.halfmove + 1;
    const fullmove = state.turn === BLACK ? state.fullmove + 1 : state.fullmove;

    return {
      board,
      turn: opposite(state.turn),
      castling,
      ep,
      halfmove,
      fullmove,
      moveNumber: state.moveNumber + 1,
      lastMove: {
        ...move,
        piece: p.type,
        color: p.color,
        captured: capturedPiece
      }
    };
  }

  function legalMoves(state) {
    const pseudo = generatePseudoMoves(state.board, state.turn, state.castling, state.ep);
    const legal = [];
    for (const m of pseudo) {
      const next = applyMove(state, m);
      if (!isInCheck(next.board, state.turn)) {
        // Mark check on opponent
        m.givesCheck = isInCheck(next.board, next.turn);
        legal.push(m);
      }
    }
    return legal;
  }

  function movesFrom(state, r, c) {
    return legalMoves(state).filter(m => m.fr === r && m.fc === c);
  }

  function gameStatus(state) {
    const moves = legalMoves(state);
    const inCheck = isInCheck(state.board, state.turn);
    if (moves.length === 0) {
      if (inCheck) return { type: 'checkmate', winner: opposite(state.turn) };
      return { type: 'stalemate' };
    }
    if (state.halfmove >= 100) return { type: 'draw', reason: '50-move' };
    if (inCheck) return { type: 'check' };
    return { type: 'ok' };
  }

  function createGame() {
    return {
      board: initialBoard(),
      turn: WHITE,
      castling: { w: { K: true, Q: true }, b: { K: true, Q: true } },
      ep: null,
      halfmove: 0,
      fullmove: 1,
      moveNumber: 0,
      lastMove: null,
      history: []
    };
  }

  function makeMove(state, move) {
    const legal = legalMoves(state);
    const match = legal.find(m =>
      m.fr === move.fr && m.fc === move.fc &&
      m.tr === move.tr && m.tc === move.tc &&
      (move.promotion ? m.promotion === move.promotion : !m.promotion || m.promotion === 'q')
    );
    if (!match) return null;
    // Default promotion to queen if not specified
    if (!match.promotion && move.promotion) match.promotion = move.promotion;
    const snapshot = {
      board: cloneBoard(state.board),
      turn: state.turn,
      castling: {
        w: { ...state.castling.w },
        b: { ...state.castling.b }
      },
      ep: state.ep ? { ...state.ep } : null,
      halfmove: state.halfmove,
      fullmove: state.fullmove,
      moveNumber: state.moveNumber,
      lastMove: state.lastMove
    };
    const next = applyMove(state, match);
    next.history = state.history.concat([snapshot]);
    return next;
  }

  function undo(state) {
    if (!state.history.length) return state;
    const prev = state.history[state.history.length - 1];
    return {
      ...prev,
      board: cloneBoard(prev.board),
      history: state.history.slice(0, -1)
    };
  }

  function algebraic(r, c) {
    return String.fromCharCode(97 + c) + (8 - r);
  }

  function moveToSan(state, move) {
    // Simplified SAN for display
    const piece = state.board[move.fr][move.fc];
    let san = '';
    if (move.castle === 'K') return 'O-O';
    if (move.castle === 'Q') return 'O-O-O';
    if (piece.type !== 'p') san += piece.type.toUpperCase();
    if (piece.type !== 'p' && piece.type !== 'k') { // disambiguation (Nbd2, R1e1)
      const others = legalMoves(state).filter(m => m.tr === move.tr && m.tc === move.tc && !(m.fr === move.fr && m.fc === move.fc) && state.board[m.fr][m.fc].type === piece.type);
      if (others.length) {
        const sameFile = others.some(m => m.fc === move.fc), sameRank = others.some(m => m.fr === move.fr);
        if (!sameFile) san += String.fromCharCode(97 + move.fc);
        else if (!sameRank) san += String(8 - move.fr);
        else san += String.fromCharCode(97 + move.fc) + (8 - move.fr);
      }
    }
    if (move.capture || move.enPassant) {
      if (piece.type === 'p') san += String.fromCharCode(97 + move.fc);
      san += 'x';
    }
    san += algebraic(move.tr, move.tc);
    if (move.promotion) san += '=' + move.promotion.toUpperCase();
    if (move.givesCheck) {
      const next = applyMove(state, move);
      const st = gameStatus(Object.assign({}, next, { history: [] }));
      san += st.type === 'checkmate' ? '#' : '+';
    }
    return san;
  }

  global.GardenChess = {
    WHITE, BLACK, EMPTY,
    createGame,
    legalMoves,
    movesFrom,
    makeMove,
    undo,
    gameStatus,
    isInCheck,
    algebraic,
    moveToSan,
    cloneBoard
  };
})(typeof window !== 'undefined' ? window : globalThis);
