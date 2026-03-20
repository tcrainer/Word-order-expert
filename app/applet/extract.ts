import fs from 'fs';

const dataContent = fs.readFileSync('./src/data.ts', 'utf8');

const words = new Set();

const textRegex = /text:\s*'([^']+)'/g;
const infinitiveRegex = /infinitive:\s*'([^']+)'/g;
const baseRegex = /base:\s*'([^']+)'/g;
const optionsRegex = /options:\s*\[([^\]]+)\]/g;

let match;
while ((match = textRegex.exec(dataContent)) !== null) {
  words.add(match[1]);
}
while ((match = infinitiveRegex.exec(dataContent)) !== null) {
  words.add(match[1]);
}
while ((match = baseRegex.exec(dataContent)) !== null) {
  if (match[1]) words.add(match[1]);
}
while ((match = optionsRegex.exec(dataContent)) !== null) {
  const opts = match[1].split(',').map(s => s.trim().replace(/'/g, ''));
  opts.forEach(o => { if (o) words.add(o); });
}

console.log(Array.from(words).sort().join('\n'));
