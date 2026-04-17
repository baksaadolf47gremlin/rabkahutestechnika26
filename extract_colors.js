const fs = require('fs');
const html = fs.readFileSync('site.html', 'utf8');

const regex = /#[0-9a-fA-F]{3,6}/g;
let match;
const colors = {};

while ((match = regex.exec(html)) !== null) {
  const color = match[0].toUpperCase();
  if (color.length === 4 || color.length === 7) {
    colors[color] = (colors[color] || 0) + 1;
  }
}

// Sort by frequency
const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
console.log('Top 20 Hex colors found:');
sorted.slice(0, 20).forEach(([color, count]) => {
  console.log(`${color}: ${count}`);
});
