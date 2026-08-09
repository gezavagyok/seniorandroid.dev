function skillColor(percent) {
  if (percent < 20) return '#f79a9a';   // red
  if (percent < 40) return '#f9c08a';   // orange
  if (percent < 60) return '#f5e08a';   // yellow
  if (percent < 80) return '#d4e896';   // yellow-green
  return '#b8ecd9';                     // green
}

document.querySelectorAll('.skill-bar__fill').forEach(bar => {
  const percent = parseFloat(bar.style.width);
  bar.style.backgroundColor = skillColor(percent);
});
