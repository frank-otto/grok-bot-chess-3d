#!/bin/bash
# Grok Bot Chess 3D — optional starter (normally a double-click on index.html is enough).
# Starts a tiny local web server and opens the game in the default browser.
cd "$(dirname "$0")"
PORT=8765
echo "Grok Bot Chess is running at http://localhost:$PORT  (keep this window open, Ctrl+C to stop)"
( sleep 1; open "http://localhost:$PORT/index.html" ) &
python3 -m http.server "$PORT" --bind 127.0.0.1
