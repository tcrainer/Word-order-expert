const fs = require('fs');

const rawText = `
1. Noob (A1/A2) - Basic Inversion & ADUSO
Present
Heute essen wir gern im Restaurant Pizza.
Manchmal gehen meine Freunde in den Park, aber ich bleibe zu Hause.
Morgens trinkt er gern im Cafe Tee.
Abends sehen wir zu Hause fern, und wir lesen Bücher.
Jeden Tag lernt sie in der Schule Deutsch, denn es ist wichtig.
Ich trinke keinen Kaffee, sondern ich trinke Tee.
Normalerweise fahren wir am Wochenende an den Strand.
Oft besichtigen sie gern in der Stadt die Sehenswürdigkeiten.
Er spielt Fußball, oder er geht schwimmen.
Vielleicht haben meine Freunde heute Zeit.

Past
Gestern habe ich gern im Garten gearbeitet.
Letzte Woche war er im Ausland, aber heute ist er hier.
Früher hatte ich ein Auto, und ich bin zur Arbeit gefahren.
Vor zwei Jahren waren wir am Wochenende am Strand.
Gestern hat es morgens regnet, denn das Wetter war schlecht.
Er hat die Hausaufgaben gemacht, oder er hat Fußball gespielt.
Dann sind wir ins Restaurant gegangen.
Ich habe die Sehenswürdigkeiten fotografiert, aber ich habe kein Buch gekauft.
Letzte Woche haben wir im Cafe Pizza gegessen.
Früher war sie in der Schule jünger.

Future
Morgen werde ich in der Stadt die Sehenswürdigkeiten besichtigen.
Nächste Woche werden wir in die Berge fahren.
Er wird lernen, denn die Prüfung wird schwer sein.
Dann werden wir gern im Garten sitzen.
Morgen wirst du nach Hause kommen, und wir werden essen.
Ich werde nicht Fußball spielen, sondern ich werde arbeiten.
Vielleicht wird es am Wochenende regnen.
Nächste Woche werden meine Freunde im Ausland sein.
Wir werden die Pizza kaufen, oder wir werden kochen.
Bald werde ich mehr Zeit haben.

Conditional
Vielleicht wäre es heute besser.
Heute hätte ich gern im Cafe Zeit.
Am Wochenende würden wir gern an den Strand fahren.
Morgen wäre sie gern zu Hause.
Ich hätte gern ein Auto, aber ich habe kein Geld.
Dann würden wir gern in den Bergen wandern.
Vielleicht hättet ihr morgen Zeit.
Er wäre gern jünger, denn Sport macht Spaß.
Heute würden meine Freunde gern im Park spielen.
Wir hätten gern mehr Zeit, oder wir hätten gern Urlaub.

2. Pro (B1) - Inversion + Subordinate Clauses
Present
Ich freue mich, weil wir am Wochenende in den Park gehen.
Er lernt Deutsch, obwohl die Prüfung schwer ist.
Ich bin der Ansicht, dass das Wetter heute schön ist.
Wir gehen ins Restaurant, wenn wir Hunger haben.
Ich denke, dass es sich lohnt, im Ausland zu leben.
Er bleibt zu Hause, weil er krank ist.
Wir besichtigen die Stadt, obwohl es regnet.
Ich weiß, dass er Recht hat.
Wir spielen Fußball, wenn wir Zeit haben.
Sie fotografiert die Sehenswürdigkeiten, weil sie schön sind.

Past
Ich war müde, weil ich gestern viel gearbeitet hatte.
Er hat das Buch gelesen, obwohl es langweilig war.
Ich dachte, dass meine Freunde im Kino waren.
Wir sind an den Strand gegangen, wenn das Wetter toll war.
Sie war der Ansicht, dass die Prüfung schwer war.
Er hat Pizza gegessen, weil er Hunger hatte.
Wir waren im Cafe, obwohl wir keinen Kaffee getrunken haben.
Ich wusste, dass das Auto teuer war.
Er ist nach Hause gegangen, weil es regnete.
Wir haben die Kamera gesucht, wenn wir fotografiert haben.

Future
Ich werde lernen, weil die Prüfung wichtig sein wird.
Wir werden fahren, obwohl es regnen wird.
Er denkt, dass wir morgen Zeit haben werden.
Ich werde mich freuen, wenn wir im Ausland sein werden.
Sie wird arbeiten, weil sie ein Auto kaufen wird.
Wir glauben, dass das Wetter am Wochenende schön sein wird.
Er wird wandern, obwohl er müde sein wird.
Ich werde schlafen, wenn ich zu Hause sein werde.
Meine Freunde sagen, dass sie im Cafe sein werden.
Es wird toll sein, wenn wir in der Stadt wohnen werden.

Conditional
Ich würde lernen, weil es wichtig wäre.
Wir würden wandern, obwohl es regnen würde.
Er dächte, dass ich heute Zeit hätte.
Ich würde mich freuen, wenn wir am Strand wären.
Sie würde Pizza essen, weil sie Hunger hätte.
Wir fänden es toll, dass ihr hier wärt.
Er würde das Buch kaufen, obwohl es langweilig wäre.
Ich ginge ins Kino, wenn der Film interessant wäre.
Meine Freundin wäre froh, dass ich da wäre.
Es wäre besser, wenn wir mehr Zeit hätten.

3. Expert (B2) - zu-Infinitives
Present
Wir fahren in die Berge, um zu wandern.
Es ist schön, im Garten zu sitzen.
Ich finde es wichtig, jeden Tag Deutsch zu lernen.
Er geht ins Cafe, um einen Tee zu trinken.
Es ist langweilig, Hausaufgaben zu machen.
Ich finde es toll, die Sehenswürdigkeiten zu besichtigen.
Wir gehen in den Park, um Fußball zu spielen.
Es ist schwer, immer Recht zu haben.
Ich finde es interessant, Bücher zu lesen.
Er braucht Zeit, um die Kamera zu finden.

Past
Wir sind in die Stadt gefahren, um Pizza zu essen.
Es war schön, am Strand zu sein.
Ich fand es wichtig, viel zu arbeiten.
Er ist nach Hause gegangen, um zu schlafen.
Es war schwer, die Prüfung zu machen.
Ich fand es toll, meine Freunde zu besuchen.
Wir waren im Cafe, um Kaffee zu trinken.
Es war langweilig, nirgendwo hin zu gehen.
Ich fand es interessant, im Ausland zu leben.
Sie hat gelernt, um in der Schule besser zu sein.

Future
Ich werde Zeit brauchen, um die Hausaufgaben zu machen.
Es wird wichtig sein, Deutsch zu lernen.
Er wird in die Stadt fahren, um seine Freundin zu besuchen.
Wir werden gehen, um Sport zu machen.
Es wird toll sein, überall zu fotografieren.
Ich werde versuchen, die Pizza zu essen.
Er wird kommen, um uns zu besuchen.
Es wird schwer sein, das Auto zu kaufen.
Ich werde es interessant finden, im Ausland zu leben.
Wir werden Zeit haben, um im Park zu spielen.

Conditional
Ich würde kommen, um zu helfen.
Es wäre schön, mehr Zeit zu haben.
Ich fände es toll, im Ausland zu arbeiten.
Wir würden gehen, um die Stadt zu besichtigen.
Es wäre langweilig, zu Hause zu bleiben.
Ich fände es wichtig, die Hausaufgaben zu machen.
Er würde fahren, um seine Freundin zu sehen.
Es wäre schwer, keinen Kaffee zu trinken.
Ich fände es interessant, ein Buch zu lesen.
Wir würden wandern, um fit zu sein.

4. God Tier (C1) - Subordinate First
da (since/because)
Da es regnet, bleiben wir heute zu Hause.
Da ich krank bin, gehe ich nicht zur Arbeit.
Da wir Hunger haben, essen wir im Restaurant Pizza.
Da die Prüfung schwer ist, lernt sie jeden Tag.
Da das Wetter toll ist, gehen wir an den Strand.
Da er kein Auto hat, fährt er nicht.
Da meine Freunde da sind, haben wir viel Spaß.
Da ich müde bin, gehe ich jetzt schlafen.
Da es wichtig ist, machen wir die Hausaufgaben.
Da die Stadt interessant ist, besichtigen wir die Sehenswürdigkeiten.

wenn / als
Als ich jünger war, spielte ich oft Fußball.
Wenn das Wetter schön ist, sitzen wir im Garten.
Als wir im Ausland waren, haben wir viel fotografiert.
Wenn ich Zeit habe, lese ich gern ein Buch.
Als er in der Schule war, hat er Deutsch gelernt.
Wenn es regnet, sehen wir zu Hause fern.
Als wir am Strand waren, war es toll.
Wenn ich Hunger habe, esse ich eine Pizza.
Als er das Auto hatte, ist er zur Arbeit gefahren.
Wenn sie im Cafe sind, trinken sie Tee.

nachdem (with Pluperfect)
Nachdem wir gelernt hatten, machten wir die Prüfung.
Nachdem er gearbeitet hatte, war er sehr müde.
Nachdem sie Pizza gegessen hatten, waren sie satt.
Nachdem wir die Sehenswürdigkeiten besucht hatten, gingen wir ins Cafe.
Nachdem ich das Buch gelesen hatte, war ich der Ansicht, dass es toll war.
Nachdem es regnet hatte, war das Wetter schön.
Nachdem wir Fußball gespielt hatten, sind wir nach Hause gegangen.
Nachdem er die Hausaufgaben gemacht hatte, hatte er mehr Zeit.
Nachdem sie im Park fotografiert hatte, ging sie in die Stadt.
Nachdem wir im Restaurant gewesen waren, hatten wir Spaß.

Mixture
Obwohl es schwer ist, lerne ich jeden Tag Deutsch.
Weil wir im Ausland sind, besichtigen wir die Stadt.
Wenn das Wetter schön wäre, würden wir heute wandern.
Da ich keine Zeit hatte, habe ich nicht gearbeitet.
Nachdem wir Pizza gegessen hatten, sind wir ins Kino gegangen.
Als ich jünger war, war ich oft am Strand.
Obwohl ich müde bin, mache ich die Hausaufgaben.
Dass er Recht hat, finde ich sehr wichtig.
Weil es regnet, bleiben wir heute im Haus.
Nachdem ich gelernt habe, werde ich schlafen.
`;

const categories = {
  noob: { present: [], past: [], future: [], conditional: [] },
  pro: { present: [], past: [], future: [], conditional: [] },
  expert: { present: [], past: [], future: [], conditional: [] },
  god: { da: [], wenn_als: [], nachdem: [], mixture: [] }
};

let currentCat = '';
let currentTense = '';

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);

for (const line of lines) {
  if (line.startsWith('1. Noob')) { currentCat = 'noob'; continue; }
  if (line.startsWith('2. Pro')) { currentCat = 'pro'; continue; }
  if (line.startsWith('3. Expert')) { currentCat = 'expert'; continue; }
  if (line.startsWith('4. God Tier')) { currentCat = 'god'; continue; }
  
  if (line === 'Present') { currentTense = 'present'; continue; }
  if (line === 'Past') { currentTense = 'past'; continue; }
  if (line === 'Future') { currentTense = 'future'; continue; }
  if (line === 'Conditional') { currentTense = 'conditional'; continue; }
  if (line === 'da (since/because)') { currentTense = 'da'; continue; }
  if (line === 'wenn / als') { currentTense = 'wenn_als'; continue; }
  if (line === 'nachdem (with Pluperfect)') { currentTense = 'nachdem'; continue; }
  if (line === 'Mixture') { currentTense = 'mixture'; continue; }
  
  if (currentCat && currentTense) {
    categories[currentCat][currentTense].push(line);
  }
}

function processSentence(sentence) {
  let cleanSentence = sentence.replace(/([.,])/g, ' $1 ');
  let words = cleanSentence.split(/\s+/).filter(w => w);
  
  const phrases = [
    "meine Freunde", "mein Freund", "das Wetter", "die Sehenswürdigkeiten",
    "zu Hause", "in den Park", "im Restaurant", "an den Strand", "in der Schule",
    "in der Stadt", "im Cafe", "im Garten", "im Ausland", "zur Arbeit", "in die Berge",
    "nach Hause", "ins Kino", "im Haus", "Jeden Tag", "Letzte Woche", "Vor zwei Jahren",
    "Nächste Woche", "Am Wochenende", "der Ansicht", "ein Auto", "ein Buch", "die Hausaufgaben",
    "die Prüfung", "die Pizza", "einen Tee", "viel Spaß", "keinen Kaffee", "kein Buch", "kein Auto",
    "kein Geld", "mehr Zeit"
  ];
  
  let text = words.join(' ');
  for (const phrase of phrases) {
    const regex = new RegExp('\\b' + phrase + '\\b', 'gi');
    text = text.replace(regex, match => match.replace(/ /g, '_'));
  }
  
  words = text.split(' ').map(w => w.replace(/_/g, ' '));
  
  const bank = [];
  const target = [];
  let idCounter = 1;
  let cCounter = 1;
  
  const subjects = new Set(['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'meine Freunde', 'mein Freund', 'das Wetter', 'das']);
  const subjunctions = new Set(['aber', 'und', 'denn', 'sondern', 'oder', 'weil', 'obwohl', 'dass', 'wenn', 'um', 'zu', 'da', 'als', 'nachdem']);
  const times = new Set(['Heute', 'Manchmal', 'Morgens', 'Abends', 'Jeden Tag', 'Normalerweise', 'Oft', 'Vielleicht', 'Gestern', 'Letzte Woche', 'Früher', 'Vor zwei Jahren', 'Dann', 'Morgen', 'Nächste Woche', 'Bald', 'Am Wochenende', 'Jetzt', 'immer', 'oft']);
  const verbs = new Set(['essen', 'gehen', 'trinkt', 'trinke', 'sehen', 'lesen', 'lernt', 'lerne', 'fahren', 'besichtigen', 'spielt', 'haben', 'gearbeitet', 'war', 'hatte', 'bin', 'gefahren', 'waren', 'regnet', 'hat', 'gemacht', 'gespielt', 'sind', 'gegangen', 'fotografiert', 'gekauft', 'gegessen', 'werde', 'werden', 'wird', 'wirst', 'sitzen', 'kommen', 'arbeiten', 'regnen', 'kochen', 'wäre', 'hätte', 'würden', 'hättest', 'wärt', 'macht', 'freue', 'lernt', 'bin', 'gehen', 'denke', 'bleibt', 'besichtigen', 'weiß', 'spielen', 'fotografiert', 'dachte', 'wusste', 'regnete', 'gesucht', 'glauben', 'sagen', 'wohnen', 'dächte', 'fänden', 'ginge', 'fahren', 'ist', 'finde', 'geht', 'braucht', 'gefahren', 'fand', 'versuchen', 'helfen', 'bleiben', 'machten', 'gewesen', 'lohnt', 'leben', 'sind', 'war', 'waren', 'hatte', 'hatten', 'wird', 'werden', 'wäre', 'wären', 'hätte', 'hätten', 'würde', 'würden']);
  
  for (const word of words) {
    if (word === ',' || word === '.') {
      bank.push({ id: `c${cCounter++}`, text: word, type: 'standard', cat: 'punctuation' });
      target.push(word);
      continue;
    }
    
    let cat = 'detail';
    let type = 'standard';
    let lowerWord = word.toLowerCase();
    
    if (subjects.has(lowerWord) || subjects.has(word)) cat = 'subject';
    else if (subjunctions.has(lowerWord)) cat = 'subjunction';
    else if (times.has(word) || times.has(lowerWord)) cat = 'time';
    else if (verbs.has(lowerWord)) { cat = 'verb'; type = 'verb'; }
    else if (word.startsWith('im ') || word.startsWith('in ') || word.startsWith('an ') || word.startsWith('zu ') || word.startsWith('nach ') || word.startsWith('auf ') || word === 'überall' || word === 'hier' || word === 'da') cat = 'place';
    else if (lowerWord === 'gern' || lowerWord === 'nicht' || lowerWord === 'sehr') cat = 'adverb';
    else if (lowerWord === 'schön' || lowerWord === 'schwer' || lowerWord === 'krank' || lowerWord === 'müde' || lowerWord === 'toll' || lowerWord === 'besser' || lowerWord === 'wichtig' || lowerWord === 'interessant' || lowerWord === 'langweilig' || lowerWord === 'jünger' || lowerWord === 'schlecht' || lowerWord === 'teuer' || lowerWord === 'froh' || lowerWord === 'satt' || lowerWord === 'falsch') cat = 'adjective';
    
    let card = { id: String(idCounter++), text: word, type, cat };
    if (type === 'verb') {
      card.infinitive = word;
    }
    
    bank.push(card);
    target.push(word);
  }
  
  return { bank, target };
}

let output = `import { Categories } from './types';

const hintSein = 'Präsens:\\nich bin, du bist, er ist, wir sind, ihr seid, sie sind\\n\\nPräteritum:\\nich war, du warst, er war, wir waren, ihr wart, sie waren\\n\\nKonditional:\\nich wäre, du wärst, er wäre, wir wären, ihr wärt, sie wären';
const hintHaben = 'Präsens:\\nich habe, du hast, er hat, wir haben, ihr habt, sie haben\\n\\nPräteritum:\\nich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten\\n\\nKonditional:\\nich hätte, du hättest, er hätte, wir hätten, ihr hättet, sie hätten';
const hintWerden = 'Präsens:\\nich werde, du wirst, er wird, wir werden, ihr werdet, sie werden\\n\\nPräteritum:\\nich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden\\n\\nKonditional:\\nich würde, du würdest, er würde, wir würden, ihr würdet, sie würden';
const hintKoennen = 'Präsens:\\nich kann, du kannst, er kann, wir können, ihr könnt, sie können\\n\\nPräteritum:\\nich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten\\n\\nKonditional:\\nich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten';
const hintAduso = 'Position 0: Does not count for word order';

export const CATEGORIES_DATA: Categories = {
`;

for (const [catName, tenses] of Object.entries(categories)) {
  output += `  ${catName}: {\n`;
  for (const [tenseName, sentences] of Object.entries(tenses)) {
    output += `    ${tenseName}: [\n`;
    const exStrings = sentences.map((sentence, idx) => {
      const { bank, target } = processSentence(sentence);
      
      const bankStr = bank.map(c => {
        let props = [];
        props.push(`id: '${c.id}'`);
        if (c.text !== undefined) props.push(`text: '${c.text.replace(/'/g, "\\'")}'`);
        if (c.infinitive !== undefined) props.push(`infinitive: '${c.infinitive.replace(/'/g, "\\'")}'`);
        props.push(`type: '${c.type}'`);
        props.push(`cat: '${c.cat}'`);
        return `{ ${props.join(', ')} }`;
      }).join(',\n        ');

      const targetStr = target.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ');

      return `      {
        title: "${catName.toUpperCase()} ${tenseName} ${idx + 1}",
        bank: [
          ${bankStr}
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "",
            target: [${targetStr}]
          }
        ]
      }`;
    });
    output += exStrings.join(',\n') + '\n';
    output += `    ],\n`;
  }
  output += `  },\n`;
}

output += `};\n`;

fs.writeFileSync('src/data.ts', output);
console.log('Successfully generated src/data.ts');
