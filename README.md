# Grok Bot Chess 3D

Real 3D chess (Three.js / WebGL) against **Grok Bot** – or two players on one screen – with a built-in
**Stockfish coach**, hints, practice positions and post-game analysis. Every piece is a little bot character,
but still instantly recognizable as a classic chess piece.

**▶ Play in your browser: https://frank-otto.github.io/grok-bot-chess-3d/**

## About this public version

This is the public, standalone edition. My personal version is a bit different: it's connected to my own Grok Bot (my AI coach, which I can talk to while playing) and uses different voices. This public build runs fully in your browser, with no account, no API and no costs.

## Run locally (offline)
- Download / clone this repo and **double-click `index.html`**. It runs straight from `file://`, fully offline –
  classic scripts only, no build step, no server, no internet needed.
- Optional (macOS): double-click `start.command` – starts `python3 -m http.server` on port 8765 and opens the browser
  (needed only for the browser's speech recognition / microphone, which is usually blocked on `file://`).
- Or any static server: `python3 -m http.server` in the repo folder, then open http://localhost:8000.

## Features
- **3D bot pieces** – King = nervous CEO bot, Queen = cool commander, Rook = grumpy server rack, Bishop = hologram monk,
  Knight = drone horse, Pawns = eager intern bots. Pieces remember their captures and checks, speech bubbles, skins
  (neon, liquid chrome, glass, lava), promotion/castling "transformer" animations, highlight replay after the game.
- **Play vs Grok Bot** – easy / medium / hard (minimax + alpha-beta in a Web Worker), or player vs player.
- **Coach mode** – "best move?": Stockfish 19 (lite WASM) shows up to 3 candidate moves as **3D arrows** with a
  short explanation (fork, pin, skewer, discovered attack, hanging piece, mate threat, …) and an evaluation.
  The coach never moves for you.
- **Hint mode** – only the motif and the piece to look at; reveal the move on demand.
- **FEN / PGN** – copy the current position (FEN + PGN) and load any FEN or full PGN to continue from there.
- **25 preset positions** – openings, tactics and endgames with "show solution" and automatic "correct!" detection.
- **Post-game analysis** – evaluates every move and lists the 3 biggest mistakes with a better move.
- **Ask the coach** – type (or speak) questions like "What should I play?", "Who is better?", "What is threatened?";
  kids mode with simple words.
- Keyboard: **U** undo · **N** new game · **H** move hints · **Esc** deselect / stop replay. Drag = rotate, scroll = zoom.
- Screenshot / video export save **locally only** (downloads folder). Nothing is uploaded or posted.

## Source & build
- `index.html`, `css/grok3d.css` – page and styles
- `js/chess-engine.js` – rules (castling, en passant, promotion, mate/stalemate, 50-move rule, SAN)
- `js/ai.js` – Grok Bot (minimax + alpha-beta)
- `src/` – game source (ES modules): 3D scene, pieces, skins, coach, coach chat, FEN/PGN, presets, replay, audio, …
- `js/app3d.bundle.js`, `js/ai-worker-src.js`, `js/stockfish-src.js` – **generated** by `tools/build.mjs`
  (esbuild bundles `src/` + three.js into one classic script; Stockfish's WASM is embedded as base64 and run in a
  Blob worker so the game also works from `file://`).
- Rebuild: install `three@0.186`, `esbuild@0.28` and `stockfish@19` with npm in a sibling folder
  `../grok-bot-chess-build/` (or point `NODE_PATH` at your `node_modules`), then run `node tools/build.mjs`.

## Credits
Made with Grok Bot by [@Frank_AI_Lab](https://x.com/Frank_AI_Lab) (Frank Otto).

## License
- This project is licensed under the **GNU General Public License v3.0** – see [LICENSE](LICENSE).
  GPL-3.0 applies to the whole project because it bundles Stockfish.
- **Stockfish.js 19 lite** – GPL-3.0, © Chess.com, LLC and the Stockfish developers.
  Source: https://github.com/nmrugg/stockfish.js · https://github.com/official-stockfish/Stockfish
- **three.js** – MIT, © 2010-2026 three.js authors (bundled in `js/app3d.bundle.js`).
- License texts and notices: [`LICENSES/`](LICENSES/).

---

## Kurz auf Deutsch
Echtes 3D-Schach (Oberfläche auf Englisch) gegen Grok Bot (leicht / mittel / schwer) oder zu zweit – mit Stockfish-Coach (bester Zug mit
3D-Pfeilen + Begründung), Hinweis-Modus, FEN/PGN kopieren & laden, 25 Übungsstellungen und Kurzanalyse nach der Partie.
**Online spielen:** https://frank-otto.github.io/grok-bot-chess-3d/ · **Offline:** `index.html` doppelklicken.
Lizenz: GPL-3.0 (wegen Stockfish), three.js unter MIT.

**Hinweis:** Meine eigene Version ist etwas anders – sie ist mit meinem Grok Bot verbunden und nutzt andere Stimmen. Diese öffentliche Version läuft komplett im Browser, ohne Konto, API oder Kosten.
