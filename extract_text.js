const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('site.html', 'utf8');
const $ = cheerio.load(html);

// Remove scripts, styles, etc.
$('script, style, noscript, svg').remove();

const content = [];

$('section, div.elementor-section').each((i, el) => {
  const texts = $(el)
    .find('h1, h2, h3, h4, h5, h6, p, ul li, span')
    .map((_, textEl) => $(textEl).text().trim())
    .get()
    .filter(t => t.length > 0);
  
  if (texts.length > 0) {
    // Only keeping unique strings per section to avoid tons of spans in paragraphs
    content.push({
      section: i,
      texts: [...new Set(texts)]
    });
  }
});

fs.writeFileSync('content.json', JSON.stringify(content, null, 2));
console.log('Text extracted to content.json');
