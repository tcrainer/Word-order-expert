const fs = require('fs');

const data = fs.readFileSync('src/data.ts', 'utf-8');

// We will replace the slice(0, 10) with slice(0, 6) in App.tsx
const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');
const newAppTsx = appTsx.replace('const selected = shuffled.slice(0, 10);', 'const selected = shuffled.slice(0, 6);');
fs.writeFileSync('src/App.tsx', newAppTsx);

console.log("Updated App.tsx to select 6 random exercises.");
