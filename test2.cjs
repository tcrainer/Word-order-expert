const rawText1 = `
1. Noob (A1/A2) - Basic Inversion & ADUSO
Present
Heute essen wir gern im Restaurant Pizza. (Today we gladly eat pizza in the restaurant.)
`;
const lines = rawText1.split('\n').map(l => l.trim()).filter(l => l);
const line = lines[2];
console.log(line);
const match = line.match(/^(.*?)\s*\((.*?)\)$/);
console.log(match);
