const https = require('https');
const fs = require('fs');

const url = 'https://rabkahutestechnika.hu/';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('site.html', data);
    console.log('HTML saved to site.html. Length: ' + data.length);
    
    // Quick regex to extract image URLs, background images, etc.
    const regex = /(?:src|href|url)\s*=\s*['"]?([^'"\s>]*\.(?:png|jpg|jpeg|webp|svg|gif)[^'"\s>]*)['"]?/gi;
    let match;
    const images = [];
    while ((match = regex.exec(data)) !== null) {
      images.push(match[1]);
    }
    
    fs.writeFileSync('images.json', JSON.stringify([...new Set(images)], null, 2));
    console.log('Extracted ' + [...new Set(images)].length + ' unique images/assets.');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
