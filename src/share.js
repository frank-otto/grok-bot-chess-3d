// Share card composition: framed screenshot + title + result + Grok Bot quote
function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
function wrap(g, text, maxW) {
  const words = text.split(' '); const lines = []; let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}
export function drawAvatar(g, cx, cy, R, mood = 'happy') {
  g.save();
  // antenna
  g.strokeStyle = '#9aa3c7'; g.lineWidth = R * 0.06; g.lineCap = 'round';
  g.beginPath(); g.moveTo(cx, cy - R * 0.8); g.lineTo(cx, cy - R * 1.08); g.stroke();
  g.fillStyle = '#ff3da8'; g.shadowColor = '#ff3da8'; g.shadowBlur = R * 0.4;
  g.beginPath(); g.arc(cx, cy - R * 1.12, R * 0.1, 0, Math.PI * 2); g.fill();
  g.shadowBlur = 0;
  // ears
  g.fillStyle = '#2de2e6'; roundRect(g, cx - R * 1.02, cy - R * 0.2, R * 0.18, R * 0.44, R * 0.09); g.fill();
  g.fillStyle = '#ff3da8'; roundRect(g, cx + R * 0.84, cy - R * 0.2, R * 0.18, R * 0.44, R * 0.09); g.fill();
  // head
  const hg = g.createRadialGradient(cx - R * 0.3, cy - R * 0.5, R * 0.1, cx, cy, R * 1.1);
  hg.addColorStop(0, '#ffffff'); hg.addColorStop(0.6, '#d9d4ff'); hg.addColorStop(1, '#8f86d9');
  g.fillStyle = hg; roundRect(g, cx - R * 0.85, cy - R * 0.8, R * 1.7, R * 1.55, R * 0.6); g.fill();
  // visor
  g.fillStyle = '#0b0a20'; roundRect(g, cx - R * 0.66, cy - R * 0.42, R * 1.32, R * 0.78, R * 0.36); g.fill();
  const eye = mood === 'sad' ? '#ff3da8' : mood === 'think' ? '#ffd166' : mood === 'happy' ? '#b6ff3b' : '#2de2e6';
  g.fillStyle = eye; g.shadowColor = eye; g.shadowBlur = R * 0.25;
  for (const sx of [-1, 1]) { g.beginPath(); g.ellipse(cx + sx * R * 0.27, cy - R * 0.04, R * 0.14, R * (mood === 'sad' ? 0.1 : 0.17), 0, 0, Math.PI * 2); g.fill(); }
  g.shadowBlur = 0;
  // mouth
  g.strokeStyle = '#5b4fb3'; g.lineWidth = R * 0.07;
  g.beginPath();
  if (mood === 'sad') { g.moveTo(cx - R * 0.22, cy + R * 0.6); g.quadraticCurveTo(cx, cy + R * 0.45, cx + R * 0.22, cy + R * 0.6); }
  else { g.moveTo(cx - R * 0.26, cy + R * 0.48); g.quadraticCurveTo(cx, cy + R * 0.7, cx + R * 0.26, cy + R * 0.48); }
  g.stroke();
  g.restore();
}

export function composeShare(src, { result, sub, quote, mood }) {
  const W = 1600, pad = 48;
  const imgW = W - pad * 2;
  const imgH = Math.round(imgW * (src.height / src.width));
  const headH = 130, footH = 230;
  const H = headH + imgH + footH + pad;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  // background
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#1b1037'); bg.addColorStop(0.5, '#0c1124'); bg.addColorStop(1, '#071a24');
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  const glow1 = g.createRadialGradient(0, 0, 10, 0, 0, 900); glow1.addColorStop(0, 'rgba(255,61,168,.35)'); glow1.addColorStop(1, 'rgba(255,61,168,0)');
  g.fillStyle = glow1; g.fillRect(0, 0, W, H);
  const glow2 = g.createRadialGradient(W, H, 10, W, H, 900); glow2.addColorStop(0, 'rgba(45,226,230,.28)'); glow2.addColorStop(1, 'rgba(45,226,230,0)');
  g.fillStyle = glow2; g.fillRect(0, 0, W, H);
  // title
  const font = '"SF Pro Display", -apple-system, "Segoe UI", system-ui, sans-serif';
  g.font = `900 64px ${font}`;
  const tg = g.createLinearGradient(pad, 0, pad + 600, 0);
  tg.addColorStop(0, '#2de2e6'); tg.addColorStop(0.5, '#ff3da8'); tg.addColorStop(1, '#ffd166');
  g.fillStyle = tg; g.textBaseline = 'middle';
  g.shadowColor = 'rgba(255,61,168,.55)'; g.shadowBlur = 24;
  g.fillText('Grok Bot Chess', pad, headH / 2 + 6);
  g.shadowBlur = 0;
  const tw = g.measureText('Grok Bot Chess').width;
  g.save(); g.translate(pad + tw + 22, headH / 2 + 2); g.rotate(-0.07);
  const bdg = g.createLinearGradient(0, -20, 70, 20); bdg.addColorStop(0, '#b6ff3b'); bdg.addColorStop(1, '#2de2e6');
  g.fillStyle = bdg; roundRect(g, 0, -22, 72, 44, 10); g.fill();
  g.fillStyle = '#071018'; g.font = `900 30px ${font}`; g.fillText('3D', 14, 2); g.restore();
  g.font = `700 30px ${font}`; g.fillStyle = 'rgba(245,247,255,.9)'; g.textAlign = 'right';
  g.fillText(result, W - pad, headH / 2 - 14);
  g.font = `500 22px ${font}`; g.fillStyle = 'rgba(154,163,199,.95)';
  g.fillText(sub, W - pad, headH / 2 + 22);
  g.textAlign = 'left';
  // image with neon border
  g.save();
  roundRect(g, pad, headH, imgW, imgH, 28); g.clip();
  g.drawImage(src, pad, headH, imgW, imgH);
  g.restore();
  const bord = g.createLinearGradient(pad, headH, pad + imgW, headH + imgH);
  bord.addColorStop(0, '#2de2e6'); bord.addColorStop(0.5, '#a855f7'); bord.addColorStop(1, '#ff3da8');
  g.strokeStyle = bord; g.lineWidth = 4; g.shadowColor = 'rgba(168,85,247,.7)'; g.shadowBlur = 20;
  roundRect(g, pad, headH, imgW, imgH, 28); g.stroke(); g.shadowBlur = 0;
  // quote with avatar
  const fy = headH + imgH + 30;
  drawAvatar(g, pad + 80, fy + 95, 62, mood);
  const bx = pad + 175, bw = W - bx - pad, bh = 160;
  g.fillStyle = 'rgba(5,7,16,.78)'; g.strokeStyle = 'rgba(45,226,230,.55)'; g.lineWidth = 2;
  roundRect(g, bx, fy + 15, bw, bh, 22); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(bx, fy + 70); g.lineTo(bx - 18, fy + 88); g.lineTo(bx, fy + 100); g.closePath(); g.fill();
  g.font = `800 24px ${font}`; g.fillStyle = '#b6ff3b'; g.fillText('Grok Bot says:', bx + 26, fy + 52);
  g.font = `600 30px ${font}`; g.fillStyle = '#f5f7ff';
  const lines = wrap(g, '„' + quote + '“', bw - 52).slice(0, 3);
  lines.forEach((l, i) => g.fillText(l, bx + 26, fy + 96 + i * 38));
  return c;
}
