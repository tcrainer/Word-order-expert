const fs = require('fs');

const code = fs.readFileSync('app/create_data.cjs', 'utf8');
const lines = code.split('\n');
const processRawTextEnd = lines.findIndex(l => l.includes('processRawText(rawText2);'));

const newCode = lines.slice(0, processRawTextEnd + 1).join('\n') + '\nconsole.log(categories.noob.present.slice(0, 2));\n';

fs.writeFileSync('test_debug.cjs', newCode);
