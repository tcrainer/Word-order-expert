const fs = require('fs');

const hintSein = 'Präsens:\nich bin, du bist, er ist, wir sind, ihr seid, sie sind\n\nPräteritum:\nich war, du warst, er war, wir waren, ihr wart, sie waren\n\nKonditional:\nich wäre, du wärst, er wäre, wir wären, ihr wärt, sie wären';
const hintHaben = 'Präsens:\nich habe, du hast, er hat, wir haben, ihr habt, sie haben\n\nPräteritum:\nich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten\n\nKonditional:\nich hätte, du hättest, er hätte, wir hätten, ihr hättet, sie hätten';
const hintWerden = 'Präsens:\nich werde, du wirst, er wird, wir werden, ihr werdet, sie werden\n\nPräteritum:\nich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden\n\nKonditional:\nich würde, du würdest, er würde, wir würden, ihr würdet, sie würden';
const hintKoennen = 'Präsens:\nich kann, du kannst, er kann, wir können, ihr könnt, sie können\n\nPräteritum:\nich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten\n\nKonditional:\nich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten';
const hintAduso = 'Position 0: Does not count for word order';

const hints = {
  hintSein,
  hintHaben,
  hintWerden,
  hintKoennen,
  hintAduso
};

function parseCards(cardsArr) {
  const bank = [];
  const target = [];
  let idCounter = 1;
  let cCounter = 1;

  for (const cardStr of cardsArr) {
    const parts = cardStr.split('|');
    const text = parts[0];
    const cat = parts[1] || 'detail';
    const type = parts[2] || 'standard';

    let card = { cat, type };

    if (type === 'standard') {
      card.id = String(idCounter++);
      card.text = text;
      if (parts[3]) {
        card.hint = hints[parts[3]] ? `\${${parts[3]}}` : parts[3];
      }
      target.push(text);
    } else if (type === 'verb') {
      card.id = String(idCounter++);
      card.infinitive = parts[3] || text;
      if (parts[4]) {
        card.hint = hints[parts[4]] ? `\${${parts[4]}}` : parts[4];
      }
      target.push(text);
    } else if (type === 'dropdown') {
      card.id = String(idCounter++);
      card.base = parts[3];
      if (parts[4]) card.gender = parts[4];
      if (parts[5]) card.options = parts[5].split(',');
      target.push(text);
    } else if (type === 'punctuation') {
      card.id = `c${cCounter++}`;
      card.text = text;
      target.push(text);
    }

    bank.push(card);
  }

  return { bank, target };
}

function generateCategoryString(catName, sections) {
  let out = `  ${catName}: {\n`;
  for (const [sectionName, exercises] of Object.entries(sections)) {
    out += `    ${sectionName}: [\n`;
    const exStrings = exercises.map(ex => {
      const { bank, target } = parseCards(ex.cards);
      
      const bankStr = bank.map(c => {
        let props = [];
        props.push(`id: '${c.id}'`);
        if (c.text !== undefined) props.push(`text: '${c.text.replace(/'/g, "\\'")}'`);
        if (c.infinitive !== undefined) props.push(`infinitive: '${c.infinitive.replace(/'/g, "\\'")}'`);
        if (c.base !== undefined) props.push(`base: '${c.base.replace(/'/g, "\\'")}'`);
        if (c.options !== undefined) props.push(`options: [${c.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}]`);
        if (c.gender !== undefined) props.push(`gender: '${c.gender}'`);
        if (c.hint !== undefined) {
          if (c.hint.startsWith('${')) {
            props.push(`hint: ${c.hint.slice(2, -1)}`);
          } else {
            props.push(`hint: '${c.hint.replace(/'/g, "\\'")}'`);
          }
        }
        props.push(`type: '${c.type}'`);
        props.push(`cat: '${c.cat}'`);
        return `{ ${props.join(', ')} }`;
      }).join(',\n        ');

      const targetStr = target.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ');

      return `      {
        title: "${ex.title}",
        bank: [
          ${bankStr}
        ],
        steps: [
          {
            instruction: "${ex.instruction}",
            english: "${ex.english}",
            target: [${targetStr}]
          }
        ]
      }`;
    });
    out += exStrings.join(',\n') + '\n';
    out += `    ],\n`;
  }
  out += `  },\n`;
  return out;
}

module.exports = { generateCategoryString };
