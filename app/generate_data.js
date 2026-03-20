const fs = require('fs');

const hintSein = 'Präsens:\nich bin, du bist, er ist, wir sind, ihr seid, sie sind\n\nPräteritum:\nich war, du warst, er war, wir waren, ihr wart, sie waren\n\nKonditional:\nich wäre, du wärst, er wäre, wir wären, ihr wärt, sie wären';
const hintHaben = 'Präsens:\nich habe, du hast, er hat, wir haben, ihr habt, sie haben\n\nPräteritum:\nich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten\n\nKonditional:\nich hätte, du hättest, er hätte, wir hätten, ihr hättet, sie hätten';
const hintWerden = 'Präsens:\nich werde, du wirst, er wird, wir werden, ihr werdet, sie werden\n\nPräteritum:\nich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden\n\nKonditional:\nich würde, du würdest, er würde, wir würden, ihr würdet, sie würden';
const hintKoennen = 'Präsens:\nich kann, du kannst, er kann, wir können, ihr könnt, sie können\n\nPräteritum:\nich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten\n\nKonditional:\nich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten';
const hintAduso = 'Position 0: Does not count for word order';

// I will write a script to generate the data.ts file with all the new sentences.
// Since the user provided a lot of sentences, I will format them properly.

