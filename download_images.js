const fs = require('fs');
const https = require('https');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let images = JSON.parse(fs.readFileSync('images.json', 'utf8'));

// Filter out duplicates nicely and ensure full URL
images = images.map(url => {
  if (url.startsWith('/')) {
    return 'https://rabkahutestechnika.hu' + url;
  }
  return url;
});
images = [...new Set(images)];

async function downloadAndConvert(url) {
  const fileName = path.basename(url, path.extname(url)) || 'image';
  const outPath = path.join(outDir, fileName + '.webp');
  
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to get ${url} (${res.statusCode})`);
        resolve(); // resolve anyway to continue
        return;
      }
      
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        try {
          await sharp(buffer)
            .webp({ quality: 85 })
            .toFile(outPath);
          console.log(`Converted and saved: ${outPath}`);
        } catch (err) {
          console.error(`Error converting ${url}: ${err.message}`);
        }
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Request error for ${url}: ${err.message}`);
      resolve();
    });
  });
}

async function processAll() {
  for (const url of images) {
    await downloadAndConvert(url);
  }
  console.log('All image processing complete.');
}

processAll();
