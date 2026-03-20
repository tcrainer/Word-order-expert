import { Categories } from './types';

const hintSein = 'Präsens:\nich bin, du bist, er ist, wir sind, ihr seid, sie sind\n\nPräteritum:\nich war, du warst, er war, wir waren, ihr wart, sie waren\n\nKonditional:\nich wäre, du wärst, er wäre, wir wären, ihr wärt, sie wären';
const hintHaben = 'Präsens:\nich habe, du hast, er hat, wir haben, ihr habt, sie haben\n\nPräteritum:\nich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten\n\nKonditional:\nich hätte, du hättest, er hätte, wir hätten, ihr hättet, sie hätten';
const hintWerden = 'Präsens:\nich werde, du wirst, er wird, wir werden, ihr werdet, sie werden\n\nPräteritum:\nich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden\n\nKonditional:\nich würde, du würdest, er würde, wir würden, ihr würdet, sie würden';
const hintKoennen = 'Präsens:\nich kann, du kannst, er kann, wir können, ihr könnt, sie können\n\nPräteritum:\nich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten\n\nKonditional:\nich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten';
const hintAduso = 'Position 0: Does not count for word order';

export const CATEGORIES_DATA: Categories = {
  noob: {
    present: [
      {
        title: "NOOB present 1",
        bank: [
          { id: '1', text: 'Heute', type: 'standard', cat: 'time' },
        { id: '2', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im Restaurant', type: 'standard', cat: 'place' },
        { id: '6', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Today we gladly eat pizza in the restaurant.",
            target: ['Heute', 'essen', 'wir', 'gern', 'im Restaurant', 'Pizza', '.']
          }
        ]
      },
      {
        title: "NOOB present 2",
        bank: [
          { id: '1', text: 'Manchmal', type: 'standard', cat: 'time' },
        { id: '2', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '4', text: 'in den Park', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'bleibe', type: 'standard', cat: 'detail' },
        { id: '8', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Sometimes my friends go to the park, but I stay at home.",
            target: ['Manchmal', 'gehen', 'meine Freunde', 'in den Park', ',', 'aber', 'ich', 'bleibe', 'zu Hause', '.']
          }
        ]
      },
      {
        title: "NOOB present 3",
        bank: [
          { id: '1', text: 'Morgens', type: 'standard', cat: 'time' },
        { id: '2', text: 'trinkt', infinitive: 'trinkt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'er', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '6', text: 'Tee', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "In the morning he gladly drinks tea in the cafe.",
            target: ['Morgens', 'trinkt', 'er', 'gern', 'im Cafe', 'Tee', '.']
          }
        ]
      },
      {
        title: "NOOB present 4",
        bank: [
          { id: '1', text: 'Abends', type: 'standard', cat: 'time' },
        { id: '2', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '5', text: 'fern', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'und', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'lesen', infinitive: 'lesen', type: 'verb', cat: 'verb' },
        { id: '9', text: 'Bücher', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "In the evening we watch TV at home, and we read books.",
            target: ['Abends', 'sehen', 'wir', 'zu Hause', 'fern', ',', 'und', 'wir', 'lesen', 'Bücher', '.']
          }
        ]
      },
      {
        title: "NOOB present 5",
        bank: [
          { id: '1', text: 'Jeden Tag', type: 'standard', cat: 'time' },
        { id: '2', text: 'lernt', infinitive: 'lernt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '4', text: 'in der Schule', type: 'standard', cat: 'place' },
        { id: '5', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '9', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Every day she learns German in school, for it is important.",
            target: ['Jeden Tag', 'lernt', 'sie', 'in der Schule', 'Deutsch', ',', 'denn', 'es', 'ist', 'wichtig', '.']
          }
        ]
      },
      {
        title: "NOOB present 6",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'trinke', infinitive: 'trinke', type: 'verb', cat: 'verb' },
        { id: '3', text: 'keinen Kaffee', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'sondern', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'trinke', infinitive: 'trinke', type: 'verb', cat: 'verb' },
        { id: '7', text: 'Tee', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I don't drink coffee, but rather I drink tea.",
            target: ['Ich', 'trinke', 'keinen Kaffee', ',', 'sondern', 'ich', 'trinke', 'Tee', '.']
          }
        ]
      },
      {
        title: "NOOB present 7",
        bank: [
          { id: '1', text: 'Normalerweise', type: 'standard', cat: 'time' },
        { id: '2', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'am Wochenende', type: 'standard', cat: 'detail' },
        { id: '5', text: 'an den Strand', type: 'standard', cat: 'place' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Normally we travel to the beach at the weekend.",
            target: ['Normalerweise', 'fahren', 'wir', 'am Wochenende', 'an den Strand', '.']
          }
        ]
      },
      {
        title: "NOOB present 8",
        bank: [
          { id: '1', text: 'Oft', type: 'standard', cat: 'time' },
        { id: '2', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'in der Stadt', type: 'standard', cat: 'place' },
        { id: '6', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Often they gladly visit the sights in the city.",
            target: ['Oft', 'besichtigen', 'sie', 'gern', 'in der Stadt', 'die Sehenswürdigkeiten', '.']
          }
        ]
      },
      {
        title: "NOOB present 9",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'spielt', infinitive: 'spielt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'er', type: 'standard', cat: 'subject' },
        { id: '6', text: 'geht', infinitive: 'geht', type: 'verb', cat: 'verb' },
        { id: '7', text: 'schwimmen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He plays football, or he goes swimming.",
            target: ['Er', 'spielt', 'Fußball', ',', 'oder', 'er', 'geht', 'schwimmen', '.']
          }
        ]
      },
      {
        title: "NOOB present 10",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '3', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '4', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps my friends have time today.",
            target: ['Vielleicht', 'haben', 'meine Freunde', 'heute', 'Zeit', '.']
          }
        ]
      },
      {
        title: "NOOB present 11",
        bank: [
          { id: '1', text: 'Morgens', type: 'standard', cat: 'time' },
        { id: '2', text: 'trinke', infinitive: 'trinke', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Tee', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "In the morning I drink tea.",
            target: ['Morgens', 'trinke', 'ich', 'Tee', '.']
          }
        ]
      },
      {
        title: "NOOB present 12",
        bank: [
          { id: '1', text: 'Heute', type: 'standard', cat: 'time' },
        { id: '2', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Today we are visiting the sights.",
            target: ['Heute', 'besichtigen', 'wir', 'die Sehenswürdigkeiten', '.']
          }
        ]
      },
      {
        title: "NOOB present 13",
        bank: [
          { id: '1', text: 'Oft', type: 'standard', cat: 'time' },
        { id: '2', text: 'fotografiert', infinitive: 'fotografiert', type: 'verb', cat: 'verb' },
        { id: '3', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '4', text: 'im', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Park', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Often she takes photos in the park.",
            target: ['Oft', 'fotografiert', 'sie', 'im', 'Park', '.']
          }
        ]
      },
      {
        title: "NOOB present 14",
        bank: [
          { id: '1', text: 'Manchmal', type: 'standard', cat: 'time' },
        { id: '2', text: 'lesen', infinitive: 'lesen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Sometimes we read a book.",
            target: ['Manchmal', 'lesen', 'wir', 'ein Buch', '.']
          }
        ]
      },
      {
        title: "NOOB present 15",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'trinke', infinitive: 'trinke', type: 'verb', cat: 'verb' },
        { id: '3', text: 'keinen Kaffee', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'sondern', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'trinke', infinitive: 'trinke', type: 'verb', cat: 'verb' },
        { id: '7', text: 'Tee', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I don't drink coffee, but rather I drink tea.",
            target: ['Ich', 'trinke', 'keinen Kaffee', ',', 'sondern', 'ich', 'trinke', 'Tee', '.']
          }
        ]
      },
      {
        title: "NOOB present 16",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'spielt', infinitive: 'spielt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '6', text: 'liest', infinitive: 'liest', type: 'verb', cat: 'verb' },
        { id: '7', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He plays football, but she reads a book.",
            target: ['Er', 'spielt', 'Fußball', ',', 'aber', 'sie', 'liest', 'ein Buch', '.']
          }
        ]
      },
      {
        title: "NOOB present 17",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ins Kino', type: 'standard', cat: 'detail' },
        { id: '4', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: '7', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We are going to the cinema or we are staying at home.",
            target: ['Wir', 'gehen', 'ins Kino', 'oder', 'wir', 'bleiben', 'zu Hause', '.']
          }
        ]
      },
      {
        title: "NOOB present 18",
        bank: [
          { id: '1', text: 'Abends', type: 'standard', cat: 'time' },
        { id: '2', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'fern', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "In the evening we watch TV.",
            target: ['Abends', 'sehen', 'wir', 'fern', '.']
          }
        ]
      },
      {
        title: "NOOB present 19",
        bank: [
          { id: '1', text: 'Normalerweise', type: 'standard', cat: 'time' },
        { id: '2', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: '3', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '4', text: 'hier', type: 'standard', cat: 'place' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Normally my friends work here.",
            target: ['Normalerweise', 'arbeiten', 'meine Freunde', 'hier', '.']
          }
        ]
      },
      {
        title: "NOOB present 20",
        bank: [
          { id: '1', text: 'Jeden Tag', type: 'standard', cat: 'time' },
        { id: '2', text: 'lerne', infinitive: 'lerne', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'es', type: 'standard', cat: 'subject' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '8', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Every day I learn German, for it is important.",
            target: ['Jeden Tag', 'lerne', 'ich', 'Deutsch', ',', 'denn', 'es', 'ist', 'wichtig', '.']
          }
        ]
      }
    ],
    past: [
      {
        title: "NOOB past 1",
        bank: [
          { id: '1', text: 'Gestern', type: 'standard', cat: 'time' },
        { id: '2', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im Garten', type: 'standard', cat: 'place' },
        { id: '6', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Yesterday I gladly worked in the garden.",
            target: ['Gestern', 'habe', 'ich', 'gern', 'im Garten', 'gearbeitet', '.']
          }
        ]
      },
      {
        title: "NOOB past 2",
        bank: [
          { id: '1', text: 'Letzte Woche', type: 'standard', cat: 'time' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'er', type: 'standard', cat: 'subject' },
        { id: '4', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '8', text: 'er', type: 'standard', cat: 'subject' },
        { id: '9', text: 'hier', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Last week he was abroad, but today he is here.",
            target: ['Letzte Woche', 'war', 'er', 'im Ausland', ',', 'aber', 'heute', 'ist', 'er', 'hier', '.']
          }
        ]
      },
      {
        title: "NOOB past 3",
        bank: [
          { id: '1', text: 'Früher', type: 'standard', cat: 'time' },
        { id: '2', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'ein Auto', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'und', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: '8', text: 'zur Arbeit', type: 'standard', cat: 'detail' },
        { id: '9', text: 'gefahren', infinitive: 'gefahren', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Previously I had a car, and I drove to work.",
            target: ['Früher', 'hatte', 'ich', 'ein Auto', ',', 'und', 'ich', 'bin', 'zur Arbeit', 'gefahren', '.']
          }
        ]
      },
      {
        title: "NOOB past 4",
        bank: [
          { id: '1', text: 'Vor zwei Jahren', type: 'standard', cat: 'time' },
        { id: '2', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'am Wochenende', type: 'standard', cat: 'detail' },
        { id: '5', text: 'am', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Two years ago we were at the beach at the weekend.",
            target: ['Vor zwei Jahren', 'waren', 'wir', 'am Wochenende', 'am', 'Strand', '.']
          }
        ]
      },
      {
        title: "NOOB past 5",
        bank: [
          { id: '1', text: 'Gestern', type: 'standard', cat: 'time' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'morgens', type: 'standard', cat: 'detail' },
        { id: '5', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '8', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '9', text: 'schlecht', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Yesterday it rained in the morning, for the weather was bad.",
            target: ['Gestern', 'hat', 'es', 'morgens', 'regnet', ',', 'denn', 'das Wetter', 'war', 'schlecht', '.']
          }
        ]
      },
      {
        title: "NOOB past 6",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gemacht', infinitive: 'gemacht', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '8', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '9', text: 'gespielt', infinitive: 'gespielt', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He did the homework, or he played football.",
            target: ['Er', 'hat', 'die Hausaufgaben', 'gemacht', ',', 'oder', 'er', 'hat', 'Fußball', 'gespielt', '.']
          }
        ]
      },
      {
        title: "NOOB past 7",
        bank: [
          { id: '1', text: 'Dann', type: 'standard', cat: 'time' },
        { id: '2', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Restaurant', type: 'standard', cat: 'detail' },
        { id: '6', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Then we went to the restaurant.",
            target: ['Dann', 'sind', 'wir', 'ins', 'Restaurant', 'gegangen', '.']
          }
        ]
      },
      {
        title: "NOOB past 8",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '3', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '4', text: 'fotografiert', infinitive: 'fotografiert', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '8', text: 'kein Buch', type: 'standard', cat: 'detail' },
        { id: '9', text: 'gekauft', infinitive: 'gekauft', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I photographed the sights, but I bought no book.",
            target: ['Ich', 'habe', 'die Sehenswürdigkeiten', 'fotografiert', ',', 'aber', 'ich', 'habe', 'kein Buch', 'gekauft', '.']
          }
        ]
      },
      {
        title: "NOOB past 9",
        bank: [
          { id: '1', text: 'Letzte Woche', type: 'standard', cat: 'time' },
        { id: '2', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '5', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '6', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Last week we ate pizza in the cafe.",
            target: ['Letzte Woche', 'haben', 'wir', 'im Cafe', 'Pizza', 'gegessen', '.']
          }
        ]
      },
      {
        title: "NOOB past 10",
        bank: [
          { id: '1', text: 'Früher', type: 'standard', cat: 'time' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '4', text: 'in der Schule', type: 'standard', cat: 'place' },
        { id: '5', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Previously she was younger in school.",
            target: ['Früher', 'war', 'sie', 'in der Schule', 'jünger', '.']
          }
        ]
      },
      {
        title: "NOOB past 11",
        bank: [
          { id: '1', text: 'Gestern', type: 'standard', cat: 'time' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Yesterday I was abroad.",
            target: ['Gestern', 'war', 'ich', 'im Ausland', '.']
          }
        ]
      },
      {
        title: "NOOB past 12",
        bank: [
          { id: '1', text: 'Früher', type: 'standard', cat: 'time' },
        { id: '2', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mein Freund', type: 'standard', cat: 'subject' },
        { id: '4', text: 'ein Auto', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Previously my friend had a car.",
            target: ['Früher', 'hatte', 'mein Freund', 'ein Auto', '.']
          }
        ]
      },
      {
        title: "NOOB past 13",
        bank: [
          { id: '1', text: 'Letzte Woche', type: 'standard', cat: 'time' },
        { id: '2', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Last week we ate pizza.",
            target: ['Letzte Woche', 'haben', 'wir', 'Pizza', 'gegessen', '.']
          }
        ]
      },
      {
        title: "NOOB past 14",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'und', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '6', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '7', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He worked, and she learned.",
            target: ['Er', 'hat', 'gearbeitet', ',', 'und', 'sie', 'hat', 'gelernt', '.']
          }
        ]
      },
      {
        title: "NOOB past 15",
        bank: [
          { id: '1', text: 'Vor zwei Jahren', type: 'standard', cat: 'time' },
        { id: '2', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'am', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Two years ago we were at the beach.",
            target: ['Vor zwei Jahren', 'waren', 'wir', 'am', 'Strand', '.']
          }
        ]
      },
      {
        title: "NOOB past 16",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Cafe', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '9', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We went to the cafe, but it was boring.",
            target: ['Wir', 'sind', 'ins', 'Cafe', 'gegangen', ',', 'aber', 'es', 'war', 'langweilig', '.']
          }
        ]
      },
      {
        title: "NOOB past 17",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '3', text: 'Sport', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gespielt', infinitive: 'gespielt', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '8', text: 'fit', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I played sport, for I was fit.",
            target: ['Ich', 'habe', 'Sport', 'gespielt', ',', 'denn', 'ich', 'war', 'fit', '.']
          }
        ]
      },
      {
        title: "NOOB past 18",
        bank: [
          { id: '1', text: 'Dann', type: 'standard', cat: 'time' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'er', type: 'standard', cat: 'subject' },
        { id: '4', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gemacht', infinitive: 'gemacht', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Then he did the homework.",
            target: ['Dann', 'hat', 'er', 'die Hausaufgaben', 'gemacht', '.']
          }
        ]
      },
      {
        title: "NOOB past 19",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'im Restaurant', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '7', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We were in the restaurant, or we were at home.",
            target: ['Wir', 'waren', 'im Restaurant', ',', 'oder', 'wir', 'waren', 'zu Hause', '.']
          }
        ]
      },
      {
        title: "NOOB past 20",
        bank: [
          { id: '1', text: 'Abends', type: 'standard', cat: 'time' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "In the evening it rained.",
            target: ['Abends', 'hat', 'es', 'regnet', '.']
          }
        ]
      }
    ],
    future: [
      {
        title: "NOOB future 1",
        bank: [
          { id: '1', text: 'Morgen', type: 'standard', cat: 'time' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'in der Stadt', type: 'standard', cat: 'place' },
        { id: '5', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '6', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Tomorrow I will visit the sights in the city.",
            target: ['Morgen', 'werde', 'ich', 'in der Stadt', 'die Sehenswürdigkeiten', 'besichtigen', '.']
          }
        ]
      },
      {
        title: "NOOB future 2",
        bank: [
          { id: '1', text: 'Nächste Woche', type: 'standard', cat: 'time' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'in die Berge', type: 'standard', cat: 'place' },
        { id: '5', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Next week we will travel to the mountains.",
            target: ['Nächste Woche', 'werden', 'wir', 'in die Berge', 'fahren', '.']
          }
        ]
      },
      {
        title: "NOOB future 3",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '6', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '7', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will learn, for the exam will be hard.",
            target: ['Er', 'wird', 'lernen', ',', 'denn', 'die Prüfung', 'wird', 'schwer', 'sein', '.']
          }
        ]
      },
      {
        title: "NOOB future 4",
        bank: [
          { id: '1', text: 'Dann', type: 'standard', cat: 'time' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im Garten', type: 'standard', cat: 'place' },
        { id: '6', text: 'sitzen', infinitive: 'sitzen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Then we will gladly sit in the garden.",
            target: ['Dann', 'werden', 'wir', 'gern', 'im Garten', 'sitzen', '.']
          }
        ]
      },
      {
        title: "NOOB future 5",
        bank: [
          { id: '1', text: 'Morgen', type: 'standard', cat: 'time' },
        { id: '2', text: 'wirst', infinitive: 'wirst', type: 'verb', cat: 'verb' },
        { id: '3', text: 'du', type: 'standard', cat: 'subject' },
        { id: '4', text: 'nach Hause', type: 'standard', cat: 'place' },
        { id: '5', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'und', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '9', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Tomorrow you will come home, and we will eat.",
            target: ['Morgen', 'wirst', 'du', 'nach Hause', 'kommen', ',', 'und', 'wir', 'werden', 'essen', '.']
          }
        ]
      },
      {
        title: "NOOB future 6",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '5', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'sondern', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '8', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '9', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will not play football, but rather I will work.",
            target: ['Ich', 'werde', 'nicht', 'Fußball', 'spielen', ',', 'sondern', 'ich', 'werde', 'arbeiten', '.']
          }
        ]
      },
      {
        title: "NOOB future 7",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'am Wochenende', type: 'standard', cat: 'detail' },
        { id: '5', text: 'regnen', infinitive: 'regnen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps it will rain at the weekend.",
            target: ['Vielleicht', 'wird', 'es', 'am Wochenende', 'regnen', '.']
          }
        ]
      },
      {
        title: "NOOB future 8",
        bank: [
          { id: '1', text: 'Nächste Woche', type: 'standard', cat: 'time' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '4', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '5', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Next week my friends will be abroad.",
            target: ['Nächste Woche', 'werden', 'meine Freunde', 'im Ausland', 'sein', '.']
          }
        ]
      },
      {
        title: "NOOB future 9",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'die Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '8', text: 'kochen', infinitive: 'kochen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will buy the pizza, or we will cook.",
            target: ['Wir', 'werden', 'die Pizza', 'kaufen', ',', 'oder', 'wir', 'werden', 'kochen', '.']
          }
        ]
      },
      {
        title: "NOOB future 10",
        bank: [
          { id: '1', text: 'Bald', type: 'standard', cat: 'time' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: '5', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Soon I will have more time.",
            target: ['Bald', 'werde', 'ich', 'mehr Zeit', 'haben', '.']
          }
        ]
      },
      {
        title: "NOOB future 11",
        bank: [
          { id: '1', text: 'Morgen', type: 'standard', cat: 'time' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Tomorrow I will learn German.",
            target: ['Morgen', 'werde', 'ich', 'Deutsch', 'lernen', '.']
          }
        ]
      },
      {
        title: "NOOB future 12",
        bank: [
          { id: '1', text: 'Nächste Woche', type: 'standard', cat: 'time' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'in die Berge', type: 'standard', cat: 'place' },
        { id: '5', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Next week we will travel to the mountains.",
            target: ['Nächste Woche', 'werden', 'wir', 'in die Berge', 'fahren', '.']
          }
        ]
      },
      {
        title: "NOOB future 13",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '6', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '7', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '8', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will come, but she will stay at home.",
            target: ['Er', 'wird', 'kommen', ',', 'aber', 'sie', 'wird', 'zu Hause', 'bleiben', '.']
          }
        ]
      },
      {
        title: "NOOB future 14",
        bank: [
          { id: '1', text: 'Dann', type: 'standard', cat: 'time' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '5', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Then we will eat pizza.",
            target: ['Dann', 'werden', 'wir', 'Pizza', 'essen', '.']
          }
        ]
      },
      {
        title: "NOOB future 15",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'und', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ihr', type: 'standard', cat: 'subject' },
        { id: '6', text: 'werdet', type: 'standard', cat: 'detail' },
        { id: '7', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will work, and you will play.",
            target: ['Wir', 'werden', 'arbeiten', ',', 'und', 'ihr', 'werdet', 'spielen', '.']
          }
        ]
      },
      {
        title: "NOOB future 16",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '7', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will sleep, for I will be tired.",
            target: ['Ich', 'werde', 'schlafen', ',', 'denn', 'ich', 'werde', 'müde', 'sein', '.']
          }
        ]
      },
      {
        title: "NOOB future 17",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'morgen', type: 'standard', cat: 'detail' },
        { id: '5', text: 'regnen', infinitive: 'regnen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps it will rain tomorrow.",
            target: ['Vielleicht', 'wird', 'es', 'morgen', 'regnen', '.']
          }
        ]
      },
      {
        title: "NOOB future 18",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: '4', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '8', text: 'fernsehen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will buy a book, or he will watch TV.",
            target: ['Er', 'wird', 'ein Buch', 'kaufen', ',', 'oder', 'er', 'wird', 'fernsehen', '.']
          }
        ]
      },
      {
        title: "NOOB future 19",
        bank: [
          { id: '1', text: 'Bald', type: 'standard', cat: 'time' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '4', text: 'hier', type: 'standard', cat: 'place' },
        { id: '5', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Soon my friends will be here.",
            target: ['Bald', 'werden', 'meine Freunde', 'hier', 'sein', '.']
          }
        ]
      },
      {
        title: "NOOB future 20",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'sondern', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '8', text: 'hier', type: 'standard', cat: 'place' },
        { id: '9', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will not go, but rather I will stay here.",
            target: ['Ich', 'werde', 'nicht', 'gehen', ',', 'sondern', 'ich', 'werde', 'hier', 'bleiben', '.']
          }
        ]
      }
    ],
    conditional: [
      {
        title: "NOOB conditional 1",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '5', text: 'besser', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps it would be better today.",
            target: ['Vielleicht', 'wäre', 'es', 'heute', 'besser', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 2",
        bank: [
          { id: '1', text: 'Heute', type: 'standard', cat: 'time' },
        { id: '2', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Today I would gladly have time in the cafe.",
            target: ['Heute', 'hätte', 'ich', 'gern', 'im Cafe', 'Zeit', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 3",
        bank: [
          { id: '1', text: 'Am Wochenende', type: 'standard', cat: 'time' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'an den Strand', type: 'standard', cat: 'place' },
        { id: '6', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "At the weekend we would gladly travel to the beach.",
            target: ['Am Wochenende', 'würden', 'wir', 'gern', 'an den Strand', 'fahren', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 4",
        bank: [
          { id: '1', text: 'Morgen', type: 'standard', cat: 'time' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Tomorrow she would gladly be at home.",
            target: ['Morgen', 'wäre', 'sie', 'gern', 'zu Hause', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 5",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'ein Auto', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '8', text: 'kein Geld', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would gladly have a car, but I have no money.",
            target: ['Ich', 'hätte', 'gern', 'ein Auto', ',', 'aber', 'ich', 'habe', 'kein Geld', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 6",
        bank: [
          { id: '1', text: 'Dann', type: 'standard', cat: 'time' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'in', type: 'standard', cat: 'detail' },
        { id: '6', text: 'den', type: 'standard', cat: 'detail' },
        { id: '7', text: 'Bergen', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Then we would gladly hike in the mountains.",
            target: ['Dann', 'würden', 'wir', 'gern', 'in', 'den', 'Bergen', 'wandern', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 7",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'hättet', type: 'standard', cat: 'detail' },
        { id: '3', text: 'ihr', type: 'standard', cat: 'subject' },
        { id: '4', text: 'morgen', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps you (pl) would have time tomorrow.",
            target: ['Vielleicht', 'hättet', 'ihr', 'morgen', 'Zeit', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 8",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'Sport', type: 'standard', cat: 'detail' },
        { id: '7', text: 'macht', infinitive: 'macht', type: 'verb', cat: 'verb' },
        { id: '8', text: 'Spaß', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would gladly be younger, for sport is fun.",
            target: ['Er', 'wäre', 'gern', 'jünger', ',', 'denn', 'Sport', 'macht', 'Spaß', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 9",
        bank: [
          { id: '1', text: 'Heute', type: 'standard', cat: 'time' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Park', type: 'standard', cat: 'detail' },
        { id: '7', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Today my friends would gladly play in the park.",
            target: ['Heute', 'würden', 'meine Freunde', 'gern', 'im', 'Park', 'spielen', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 10",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hätten', infinitive: 'hätten', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'hätten', infinitive: 'hätten', type: 'verb', cat: 'verb' },
        { id: '8', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '9', text: 'Urlaub', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would gladly have more time, or we would gladly have a holiday.",
            target: ['Wir', 'hätten', 'gern', 'mehr Zeit', ',', 'oder', 'wir', 'hätten', 'gern', 'Urlaub', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 11",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'besser', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps it would be better.",
            target: ['Vielleicht', 'wäre', 'es', 'besser', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 12",
        bank: [
          { id: '1', text: 'Heute', type: 'standard', cat: 'time' },
        { id: '2', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Today I would gladly have more time.",
            target: ['Heute', 'hätte', 'ich', 'gern', 'mehr Zeit', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 13",
        bank: [
          { id: '1', text: 'Am Wochenende', type: 'standard', cat: 'time' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'an den Strand', type: 'standard', cat: 'place' },
        { id: '6', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "At the weekend we would gladly travel to the beach.",
            target: ['Am Wochenende', 'würden', 'wir', 'gern', 'an den Strand', 'fahren', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 14",
        bank: [
          { id: '1', text: 'Morgen', type: 'standard', cat: 'time' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '4', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '5', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Tomorrow she would gladly be in the cafe.",
            target: ['Morgen', 'wäre', 'sie', 'gern', 'im Cafe', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 15",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'eine Pizza', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'aber', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: '8', text: 'satt', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would gladly have a pizza, but I am full.",
            target: ['Ich', 'hätte', 'gern', 'eine Pizza', ',', 'aber', 'ich', 'bin', 'satt', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 16",
        bank: [
          { id: '1', text: 'Dann', type: 'standard', cat: 'time' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '4', text: 'im Garten', type: 'standard', cat: 'place' },
        { id: '5', text: 'sitzen', infinitive: 'sitzen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Then we would sit in the garden.",
            target: ['Dann', 'würden', 'wir', 'im Garten', 'sitzen', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 17",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'denn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'Sport', type: 'standard', cat: 'detail' },
        { id: '7', text: 'macht', infinitive: 'macht', type: 'verb', cat: 'verb' },
        { id: '8', text: 'Spaß', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would gladly be younger, for sport is fun.",
            target: ['Er', 'wäre', 'gern', 'jünger', ',', 'denn', 'Sport', 'macht', 'Spaß', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 18",
        bank: [
          { id: '1', text: 'Vielleicht', type: 'standard', cat: 'time' },
        { id: '2', text: 'hättet', type: 'standard', cat: 'detail' },
        { id: '3', text: 'ihr', type: 'standard', cat: 'subject' },
        { id: '4', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Perhaps you (pl) would have time today.",
            target: ['Vielleicht', 'hättet', 'ihr', 'heute', 'Zeit', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 19",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '4', text: 'die', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '6', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'oder', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '9', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '10', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would gladly visit the city, or we would hike.",
            target: ['Wir', 'würden', 'gern', 'die', 'Stadt', 'besichtigen', ',', 'oder', 'wir', 'würden', 'wandern', '.']
          }
        ]
      },
      {
        title: "NOOB conditional 20",
        bank: [
          { id: '1', text: 'Früher', type: 'standard', cat: 'time' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '5', text: 'gewesen', infinitive: 'gewesen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Previously that would have been nice.",
            target: ['Früher', 'wäre', 'das', 'schön', 'gewesen', '.']
          }
        ]
      }
    ],
  },
  pro: {
    present: [
      {
        title: "PRO present 1",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'freue', infinitive: 'freue', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mich', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'am Wochenende', type: 'standard', cat: 'detail' },
        { id: '7', text: 'in den Park', type: 'standard', cat: 'place' },
        { id: '8', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I am happy because we are going to the park at the weekend.",
            target: ['Ich', 'freue', 'mich', ',', 'weil', 'wir', 'am Wochenende', 'in den Park', 'gehen', '.']
          }
        ]
      },
      {
        title: "PRO present 2",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'lernt', infinitive: 'lernt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '6', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He learns German although the exam is hard.",
            target: ['Er', 'lernt', 'Deutsch', ',', 'obwohl', 'die Prüfung', 'schwer', 'ist', '.']
          }
        ]
      },
      {
        title: "PRO present 3",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: '3', text: 'der Ansicht', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '6', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '7', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I am of the opinion that the weather is beautiful today.",
            target: ['Ich', 'bin', 'der Ansicht', ',', 'dass', 'das Wetter', 'heute', 'schön', 'ist', '.']
          }
        ]
      },
      {
        title: "PRO present 4",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Restaurant', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '8', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We go to the restaurant if we are hungry.",
            target: ['Wir', 'gehen', 'ins', 'Restaurant', ',', 'wenn', 'wir', 'Hunger', 'haben', '.']
          }
        ]
      },
      {
        title: "PRO present 5",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'denke', infinitive: 'denke', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'es', type: 'standard', cat: 'subject' },
        { id: '5', text: 'sich', type: 'standard', cat: 'detail' },
        { id: '6', text: 'lohnt', infinitive: 'lohnt', type: 'verb', cat: 'verb' },
        { id: 'c2', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '8', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '9', text: 'leben', infinitive: 'leben', type: 'verb', cat: 'verb' },
        { id: 'c3', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I think that it is worth it to live abroad.",
            target: ['Ich', 'denke', ',', 'dass', 'es', 'sich', 'lohnt', ',', 'im Ausland', 'zu', 'leben', '.']
          }
        ]
      },
      {
        title: "PRO present 6",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'bleibt', infinitive: 'bleibt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'er', type: 'standard', cat: 'subject' },
        { id: '6', text: 'krank', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He is staying at home because he is sick.",
            target: ['Er', 'bleibt', 'zu Hause', ',', 'weil', 'er', 'krank', 'ist', '.']
          }
        ]
      },
      {
        title: "PRO present 7",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'die', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'es', type: 'standard', cat: 'subject' },
        { id: '7', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We visit the city although it is raining.",
            target: ['Wir', 'besichtigen', 'die', 'Stadt', ',', 'obwohl', 'es', 'regnet', '.']
          }
        ]
      },
      {
        title: "PRO present 8",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'weiß', infinitive: 'weiß', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'er', type: 'standard', cat: 'subject' },
        { id: '5', text: 'Recht', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I know that he is right.",
            target: ['Ich', 'weiß', ',', 'dass', 'er', 'Recht', 'hat', '.']
          }
        ]
      },
      {
        title: "PRO present 9",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We play football if we have time.",
            target: ['Wir', 'spielen', 'Fußball', ',', 'wenn', 'wir', 'Zeit', 'haben', '.']
          }
        ]
      },
      {
        title: "PRO present 10",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fotografiert', infinitive: 'fotografiert', type: 'verb', cat: 'verb' },
        { id: '3', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '6', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She photographs the sights because they are beautiful.",
            target: ['Sie', 'fotografiert', 'die Sehenswürdigkeiten', ',', 'weil', 'sie', 'schön', 'sind', '.']
          }
        ]
      },
      {
        title: "PRO present 11",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'freue', infinitive: 'freue', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mich', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'Urlaub', type: 'standard', cat: 'detail' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I am happy because we have holiday.",
            target: ['Ich', 'freue', 'mich', ',', 'weil', 'wir', 'Urlaub', 'haben', '.']
          }
        ]
      },
      {
        title: "PRO present 12",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'lernt', infinitive: 'lernt', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He learns German although it is hard.",
            target: ['Er', 'lernt', 'Deutsch', ',', 'obwohl', 'es', 'schwer', 'ist', '.']
          }
        ]
      },
      {
        title: "PRO present 13",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'denke', infinitive: 'denke', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '5', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '6', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I think that the weather is beautiful today.",
            target: ['Ich', 'denke', ',', 'dass', 'das Wetter', 'heute', 'schön', 'ist', '.']
          }
        ]
      },
      {
        title: "PRO present 14",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in den Park', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We go to the park if we have time.",
            target: ['Wir', 'gehen', 'in den Park', ',', 'wenn', 'wir', 'Zeit', 'haben', '.']
          }
        ]
      },
      {
        title: "PRO present 15",
        bank: [
          { id: '1', text: 'Meine Freundin', type: 'standard', cat: 'detail' },
        { id: '2', text: 'sagt', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '5', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "My girlfriend says that she is hungry.",
            target: ['Meine Freundin', 'sagt', ',', 'dass', 'sie', 'Hunger', 'hat', '.']
          }
        ]
      },
      {
        title: "PRO present 16",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'bleibe', type: 'standard', cat: 'detail' },
        { id: '3', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'krank', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I am staying at home because I am sick.",
            target: ['Ich', 'bleibe', 'zu Hause', ',', 'weil', 'ich', 'krank', 'bin', '.']
          }
        ]
      },
      {
        title: "PRO present 17",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in', type: 'standard', cat: 'detail' },
        { id: '4', text: 'den', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Bergen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We hike in the mountains although it is raining.",
            target: ['Wir', 'wandern', 'in', 'den', 'Bergen', ',', 'obwohl', 'es', 'regnet', '.']
          }
        ]
      },
      {
        title: "PRO present 18",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'weiß', infinitive: 'weiß', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'er', type: 'standard', cat: 'subject' },
        { id: '5', text: 'Recht', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He knows that he is right.",
            target: ['Er', 'weiß', ',', 'dass', 'er', 'Recht', 'hat', '.']
          }
        ]
      },
      {
        title: "PRO present 19",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'besuche', type: 'standard', cat: 'detail' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Cafe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Kaffee', type: 'standard', cat: 'detail' },
        { id: '8', text: 'brauche', infinitive: 'brauche', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I visit the cafe when I need coffee.",
            target: ['Ich', 'besuche', 'das', 'Cafe', ',', 'wenn', 'ich', 'Kaffee', 'brauche', '.']
          }
        ]
      },
      {
        title: "PRO present 20",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finden', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'die', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '6', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We find that the city is interesting.",
            target: ['Wir', 'finden', ',', 'dass', 'die', 'Stadt', 'interessant', 'ist', '.']
          }
        ]
      }
    ],
    past: [
      {
        title: "PRO past 1",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'gestern', type: 'standard', cat: 'detail' },
        { id: '7', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: '9', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I was tired because I had worked a lot yesterday.",
            target: ['Ich', 'war', 'müde', ',', 'weil', 'ich', 'gestern', 'viel', 'gearbeitet', 'hatte', '.']
          }
        ]
      },
      {
        title: "PRO past 2",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Buch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gelesen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: '9', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He read the book although it was boring.",
            target: ['Er', 'hat', 'das', 'Buch', 'gelesen', ',', 'obwohl', 'es', 'langweilig', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 3",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'dachte', infinitive: 'dachte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '5', text: 'im', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Kino', type: 'standard', cat: 'detail' },
        { id: '7', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I thought that my friends were in the cinema.",
            target: ['Ich', 'dachte', ',', 'dass', 'meine Freunde', 'im', 'Kino', 'waren', '.']
          }
        ]
      },
      {
        title: "PRO past 4",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '3', text: 'an den Strand', type: 'standard', cat: 'place' },
        { id: '4', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '7', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We went to the beach when the weather was great.",
            target: ['Wir', 'sind', 'an den Strand', 'gegangen', ',', 'wenn', 'das Wetter', 'toll', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 5",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'der Ansicht', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '6', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She was of the opinion that the exam was hard.",
            target: ['Sie', 'war', 'der Ansicht', ',', 'dass', 'die Prüfung', 'schwer', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 6",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '8', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He ate pizza because he was hungry.",
            target: ['Er', 'hat', 'Pizza', 'gegessen', ',', 'weil', 'er', 'Hunger', 'hatte', '.']
          }
        ]
      },
      {
        title: "PRO past 7",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'keinen Kaffee', type: 'standard', cat: 'detail' },
        { id: '7', text: 'getrunken', type: 'standard', cat: 'detail' },
        { id: '8', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We were in the cafe although we drank no coffee.",
            target: ['Wir', 'waren', 'im Cafe', ',', 'obwohl', 'wir', 'keinen Kaffee', 'getrunken', 'haben', '.']
          }
        ]
      },
      {
        title: "PRO past 8",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wusste', infinitive: 'wusste', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'das', type: 'standard', cat: 'subject' },
        { id: '5', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '6', text: 'teuer', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I knew that the car was expensive.",
            target: ['Ich', 'wusste', ',', 'dass', 'das', 'Auto', 'teuer', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 9",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'nach Hause', type: 'standard', cat: 'place' },
        { id: '4', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'es', type: 'standard', cat: 'subject' },
        { id: '7', text: 'regnete', infinitive: 'regnete', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He went home because it was raining.",
            target: ['Er', 'ist', 'nach Hause', 'gegangen', ',', 'weil', 'es', 'regnete', '.']
          }
        ]
      },
      {
        title: "PRO past 10",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '3', text: 'die', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Kamera', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gesucht', infinitive: 'gesucht', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'fotografiert', infinitive: 'fotografiert', type: 'verb', cat: 'verb' },
        { id: '9', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We looked for the camera when we took photos.",
            target: ['Wir', 'haben', 'die', 'Kamera', 'gesucht', ',', 'wenn', 'wir', 'fotografiert', 'haben', '.']
          }
        ]
      },
      {
        title: "PRO past 11",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: '7', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: '8', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I was tired because I worked a lot.",
            target: ['Ich', 'war', 'müde', ',', 'weil', 'ich', 'viel', 'gearbeitet', 'habe', '.']
          }
        ]
      },
      {
        title: "PRO past 12",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Buch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gelesen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: '9', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He read the book although it was boring.",
            target: ['Er', 'hat', 'das', 'Buch', 'gelesen', ',', 'obwohl', 'es', 'langweilig', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 13",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'dachte', infinitive: 'dachte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'er', type: 'standard', cat: 'subject' },
        { id: '5', text: 'gestern', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hier', type: 'standard', cat: 'place' },
        { id: '7', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I thought that he was here yesterday.",
            target: ['Ich', 'dachte', ',', 'dass', 'er', 'gestern', 'hier', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 14",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '3', text: 'am', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: '5', text: 'geblieben', infinitive: 'geblieben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '9', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We stayed at the beach when it was beautiful.",
            target: ['Wir', 'sind', 'am', 'Strand', 'geblieben', ',', 'wenn', 'es', 'schön', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 15",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '8', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She ate pizza because she was hungry.",
            target: ['Sie', 'hat', 'Pizza', 'gegessen', ',', 'weil', 'sie', 'Hunger', 'hatte', '.']
          }
        ]
      },
      {
        title: "PRO past 16",
        bank: [
          { id: '1', text: 'Mein Freund', type: 'standard', cat: 'detail' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'froh', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'die', type: 'standard', cat: 'detail' },
        { id: '7', text: 'Kamera', type: 'standard', cat: 'detail' },
        { id: '8', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "My friend was glad that we had the camera.",
            target: ['Mein Freund', 'war', 'froh', ',', 'dass', 'wir', 'die', 'Kamera', 'hatten', '.']
          }
        ]
      },
      {
        title: "PRO past 17",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gespielt', infinitive: 'gespielt', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We played football although we were tired.",
            target: ['Wir', 'haben', 'Fußball', 'gespielt', ',', 'obwohl', 'wir', 'müde', 'waren', '.']
          }
        ]
      },
      {
        title: "PRO past 18",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wusste', infinitive: 'wusste', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '5', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '6', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I knew that the exam was hard.",
            target: ['Ich', 'wusste', ',', 'dass', 'die Prüfung', 'schwer', 'war', '.']
          }
        ]
      },
      {
        title: "PRO past 19",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'nach Hause', type: 'standard', cat: 'place' },
        { id: '4', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'es', type: 'standard', cat: 'subject' },
        { id: '7', text: 'regnete', infinitive: 'regnete', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He went home because it was raining.",
            target: ['Er', 'ist', 'nach Hause', 'gegangen', ',', 'weil', 'es', 'regnete', '.']
          }
        ]
      },
      {
        title: "PRO past 20",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gelacht', infinitive: 'gelacht', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'Spaß', type: 'standard', cat: 'detail' },
        { id: '7', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "They laughed when we had fun.",
            target: ['Sie', 'haben', 'gelacht', ',', 'wenn', 'wir', 'Spaß', 'hatten', '.']
          }
        ]
      }
    ],
    future: [
      {
        title: "PRO future 1",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '6', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will learn because the exam will be important.",
            target: ['Ich', 'werde', 'lernen', ',', 'weil', 'die Prüfung', 'wichtig', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 2",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'regnen', infinitive: 'regnen', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will travel although it will rain.",
            target: ['Wir', 'werden', 'fahren', ',', 'obwohl', 'es', 'regnen', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 3",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'denkt', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '5', text: 'morgen', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '8', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He thinks that we will have time tomorrow.",
            target: ['Er', 'denkt', ',', 'dass', 'wir', 'morgen', 'Zeit', 'haben', 'werden', '.']
          }
        ]
      },
      {
        title: "PRO future 4",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mich', type: 'standard', cat: 'detail' },
        { id: '4', text: 'freuen', infinitive: 'freuen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '8', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '9', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will be happy if we will be abroad.",
            target: ['Ich', 'werde', 'mich', 'freuen', ',', 'wenn', 'wir', 'im Ausland', 'sein', 'werden', '.']
          }
        ]
      },
      {
        title: "PRO future 5",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '6', text: 'ein Auto', type: 'standard', cat: 'detail' },
        { id: '7', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She will work because she will buy a car.",
            target: ['Sie', 'wird', 'arbeiten', ',', 'weil', 'sie', 'ein Auto', 'kaufen', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 6",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'glauben', infinitive: 'glauben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '5', text: 'am Wochenende', type: 'standard', cat: 'detail' },
        { id: '6', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We believe that the weather will be beautiful at the weekend.",
            target: ['Wir', 'glauben', ',', 'dass', 'das Wetter', 'am Wochenende', 'schön', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 7",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'er', type: 'standard', cat: 'subject' },
        { id: '6', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will hike although he will be tired.",
            target: ['Er', 'wird', 'wandern', ',', 'obwohl', 'er', 'müde', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 8",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will sleep when I will be at home.",
            target: ['Ich', 'werde', 'schlafen', ',', 'wenn', 'ich', 'zu Hause', 'sein', 'werde', '.']
          }
        ]
      },
      {
        title: "PRO future 9",
        bank: [
          { id: '1', text: 'Meine Freunde', type: 'standard', cat: 'detail' },
        { id: '2', text: 'sagen', infinitive: 'sagen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '5', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '6', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '7', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "My friends say that they will be in the cafe.",
            target: ['Meine Freunde', 'sagen', ',', 'dass', 'sie', 'im Cafe', 'sein', 'werden', '.']
          }
        ]
      },
      {
        title: "PRO future 10",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'in', type: 'standard', cat: 'detail' },
        { id: '8', text: 'class', type: 'standard', cat: 'detail' },
        { id: '9', text: 'der', type: 'standard', cat: 'detail' },
        { id: '10', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '11', text: 'wohnen', infinitive: 'wohnen', type: 'verb', cat: 'verb' },
        { id: '12', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be great when we will live in the city.",
            target: ['Es', 'wird', 'toll', 'sein', ',', 'wenn', 'wir', 'in', 'class', 'der', 'Stadt', 'wohnen', 'werden', '.']
          }
        ]
      },
      {
        title: "PRO future 11",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '6', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will learn because the exam will be important.",
            target: ['Ich', 'werde', 'lernen', ',', 'weil', 'die Prüfung', 'wichtig', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 12",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will travel although it will be hard.",
            target: ['Wir', 'werden', 'fahren', ',', 'obwohl', 'es', 'schwer', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 13",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'denkt', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '5', text: 'morgen', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '8', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He thinks that we will have time tomorrow.",
            target: ['Er', 'denkt', ',', 'dass', 'wir', 'morgen', 'Zeit', 'haben', 'werden', '.']
          }
        ]
      },
      {
        title: "PRO future 14",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mich', type: 'standard', cat: 'detail' },
        { id: '4', text: 'freuen', infinitive: 'freuen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'du', type: 'standard', cat: 'subject' },
        { id: '7', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: '8', text: 'wirst', infinitive: 'wirst', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will be happy if you will come.",
            target: ['Ich', 'werde', 'mich', 'freuen', ',', 'wenn', 'du', 'kommen', 'wirst', '.']
          }
        ]
      },
      {
        title: "PRO future 15",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '6', text: 'das', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '8', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: '9', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She will work because she will buy the car.",
            target: ['Sie', 'wird', 'arbeiten', ',', 'weil', 'sie', 'das', 'Auto', 'kaufen', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 16",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'glauben', infinitive: 'glauben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '5', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '6', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '7', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We believe that the weather will be beautiful.",
            target: ['Wir', 'glauben', ',', 'dass', 'das Wetter', 'schön', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 17",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'er', type: 'standard', cat: 'subject' },
        { id: '6', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will hike although he will be tired.",
            target: ['Er', 'wird', 'wandern', ',', 'obwohl', 'er', 'müde', 'sein', 'wird', '.']
          }
        ]
      },
      {
        title: "PRO future 18",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '8', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will sleep when I will be at home.",
            target: ['Ich', 'werde', 'schlafen', ',', 'wenn', 'ich', 'zu Hause', 'sein', 'werde', '.']
          }
        ]
      },
      {
        title: "PRO future 19",
        bank: [
          { id: '1', text: 'Meine Freunde', type: 'standard', cat: 'detail' },
        { id: '2', text: 'sagen', infinitive: 'sagen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '5', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '6', text: 'sein', type: 'standard', cat: 'detail' },
        { id: '7', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "My friends say that they will be in the cafe.",
            target: ['Meine Freunde', 'sagen', ',', 'dass', 'sie', 'im Cafe', 'sein', 'werden', '.']
          }
        ]
      },
      {
        title: "PRO future 20",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '8', text: 'leben', infinitive: 'leben', type: 'verb', cat: 'verb' },
        { id: '9', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be great when we will live abroad.",
            target: ['Es', 'wird', 'toll', 'sein', ',', 'wenn', 'wir', 'im Ausland', 'leben', 'werden', '.']
          }
        ]
      }
    ],
    conditional: [
      {
        title: "PRO conditional 1",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would learn because it would be important.",
            target: ['Ich', 'würde', 'lernen', ',', 'weil', 'es', 'wichtig', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 2",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'regnen', infinitive: 'regnen', type: 'verb', cat: 'verb' },
        { id: '7', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would hike although it would rain.",
            target: ['Wir', 'würden', 'wandern', ',', 'obwohl', 'es', 'regnen', 'würde', '.']
          }
        ]
      },
      {
        title: "PRO conditional 3",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'dächte', infinitive: 'dächte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '5', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would think that I would have time today.",
            target: ['Er', 'dächte', ',', 'dass', 'ich', 'heute', 'Zeit', 'hätte', '.']
          }
        ]
      },
      {
        title: "PRO conditional 4",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mich', type: 'standard', cat: 'detail' },
        { id: '4', text: 'freuen', infinitive: 'freuen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'am', type: 'standard', cat: 'detail' },
        { id: '8', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: '9', text: 'wären', infinitive: 'wären', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would be happy if we were at the beach.",
            target: ['Ich', 'würde', 'mich', 'freuen', ',', 'wenn', 'wir', 'am', 'Strand', 'wären', '.']
          }
        ]
      },
      {
        title: "PRO conditional 5",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '8', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She would eat pizza because she would be hungry.",
            target: ['Sie', 'würde', 'Pizza', 'essen', ',', 'weil', 'sie', 'Hunger', 'hätte', '.']
          }
        ]
      },
      {
        title: "PRO conditional 6",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fänden', infinitive: 'fänden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ihr', type: 'standard', cat: 'subject' },
        { id: '7', text: 'hier', type: 'standard', cat: 'place' },
        { id: '8', text: 'wärt', infinitive: 'wärt', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would find it great that you were here.",
            target: ['Wir', 'fänden', 'es', 'toll', ',', 'dass', 'ihr', 'hier', 'wärt', '.']
          }
        ]
      },
      {
        title: "PRO conditional 7",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Buch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: '9', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would buy the book although it would be boring.",
            target: ['Er', 'würde', 'das', 'Buch', 'kaufen', ',', 'obwohl', 'es', 'langweilig', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 8",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ginge', infinitive: 'ginge', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ins Kino', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'der', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Film', type: 'standard', cat: 'detail' },
        { id: '7', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would go to the cinema if the film were interesting.",
            target: ['Ich', 'ginge', 'ins Kino', ',', 'wenn', 'der', 'Film', 'interessant', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 9",
        bank: [
          { id: '1', text: 'Meine Freundin', type: 'standard', cat: 'detail' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'froh', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'da', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "My girlfriend would be glad that I was there.",
            target: ['Meine Freundin', 'wäre', 'froh', ',', 'dass', 'ich', 'da', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 10",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'besser', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'hätten', infinitive: 'hätten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be better if we had more time.",
            target: ['Es', 'wäre', 'besser', ',', 'wenn', 'wir', 'mehr Zeit', 'hätten', '.']
          }
        ]
      },
      {
        title: "PRO conditional 11",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would learn because it would be important.",
            target: ['Ich', 'würde', 'lernen', ',', 'weil', 'es', 'wichtig', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 12",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'es', type: 'standard', cat: 'subject' },
        { id: '6', text: 'regnen', infinitive: 'regnen', type: 'verb', cat: 'verb' },
        { id: '7', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would hike although it would rain.",
            target: ['Wir', 'würden', 'wandern', ',', 'obwohl', 'es', 'regnen', 'würde', '.']
          }
        ]
      },
      {
        title: "PRO conditional 13",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'dächte', infinitive: 'dächte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '3', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '5', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would think that I would have time.",
            target: ['Er', 'dächte', ',', 'dass', 'ich', 'Zeit', 'hätte', '.']
          }
        ]
      },
      {
        title: "PRO conditional 14",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'mich', type: 'standard', cat: 'detail' },
        { id: '4', text: 'freuen', infinitive: 'freuen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'am', type: 'standard', cat: 'detail' },
        { id: '8', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: '9', text: 'wären', infinitive: 'wären', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would be happy if we were at the beach.",
            target: ['Ich', 'würde', 'mich', 'freuen', ',', 'wenn', 'wir', 'am', 'Strand', 'wären', '.']
          }
        ]
      },
      {
        title: "PRO conditional 15",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'weil', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '8', text: 'hätte', infinitive: 'hätte', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She would eat pizza because she would have hunger.",
            target: ['Sie', 'würde', 'Pizza', 'essen', ',', 'weil', 'sie', 'Hunger', 'hätte', '.']
          }
        ]
      },
      {
        title: "PRO conditional 16",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fänden', infinitive: 'fänden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'ihr', type: 'standard', cat: 'subject' },
        { id: '7', text: 'hier', type: 'standard', cat: 'place' },
        { id: '8', text: 'wärt', infinitive: 'wärt', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would find it great that you were here.",
            target: ['Wir', 'fänden', 'es', 'toll', ',', 'dass', 'ihr', 'hier', 'wärt', '.']
          }
        ]
      },
      {
        title: "PRO conditional 17",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Buch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'obwohl', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'teuer', type: 'standard', cat: 'adjective' },
        { id: '9', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would buy the book although it would be expensive.",
            target: ['Er', 'würde', 'das', 'Buch', 'kaufen', ',', 'obwohl', 'es', 'teuer', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 18",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ginge', infinitive: 'ginge', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ins Kino', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'der', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Film', type: 'standard', cat: 'detail' },
        { id: '7', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: '8', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would go to the cinema if the film were interesting.",
            target: ['Ich', 'ginge', 'ins Kino', ',', 'wenn', 'der', 'Film', 'interessant', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 19",
        bank: [
          { id: '1', text: 'Meine Freundin', type: 'standard', cat: 'detail' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'froh', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '6', text: 'da', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "My girlfriend would be glad that I was there.",
            target: ['Meine Freundin', 'wäre', 'froh', ',', 'dass', 'ich', 'da', 'wäre', '.']
          }
        ]
      },
      {
        title: "PRO conditional 20",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'besser', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'wenn', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'hätten', infinitive: 'hätten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be better if we had more time.",
            target: ['Es', 'wäre', 'besser', ',', 'wenn', 'wir', 'mehr Zeit', 'hätten', '.']
          }
        ]
      }
    ],
  },
  expert: {
    present: [
      {
        title: "EXPERT present 1",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in die Berge', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We travel to the mountains in order to hike.",
            target: ['Wir', 'fahren', 'in die Berge', ',', 'um', 'zu', 'wandern', '.']
          }
        ]
      },
      {
        title: "EXPERT present 2",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'im Garten', type: 'standard', cat: 'place' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'sitzen', infinitive: 'sitzen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It is nice to sit in the garden.",
            target: ['Es', 'ist', 'schön', ',', 'im Garten', 'zu', 'sitzen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 3",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'jeden Tag', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I find it important to learn German every day.",
            target: ['Ich', 'finde', 'es', 'wichtig', ',', 'jeden Tag', 'Deutsch', 'zu', 'lernen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 4",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'geht', infinitive: 'geht', type: 'verb', cat: 'verb' },
        { id: '3', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Cafe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'einen Tee', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He goes to the cafe in order to drink a tea.",
            target: ['Er', 'geht', 'ins', 'Cafe', ',', 'um', 'einen Tee', 'zu', 'trinken', '.']
          }
        ]
      },
      {
        title: "EXPERT present 5",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It is boring to do homework.",
            target: ['Es', 'ist', 'langweilig', ',', 'Hausaufgaben', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 6",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I find it great to visit the sights.",
            target: ['Ich', 'finde', 'es', 'toll', ',', 'die Sehenswürdigkeiten', 'zu', 'besichtigen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 7",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in den Park', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We go to the park in order to play football.",
            target: ['Wir', 'gehen', 'in den Park', ',', 'um', 'Fußball', 'zu', 'spielen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 8",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'immer', type: 'standard', cat: 'time' },
        { id: '5', text: 'Recht', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It is hard to always be right.",
            target: ['Es', 'ist', 'schwer', ',', 'immer', 'Recht', 'zu', 'haben', '.']
          }
        ]
      },
      {
        title: "EXPERT present 9",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'Bücher', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'lesen', infinitive: 'lesen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I find it interesting to read books.",
            target: ['Ich', 'finde', 'es', 'interessant', ',', 'Bücher', 'zu', 'lesen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 10",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'braucht', infinitive: 'braucht', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Kamera', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'finden', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He needs time in order to find the camera.",
            target: ['Er', 'braucht', 'Zeit', ',', 'um', 'die', 'Kamera', 'zu', 'finden', '.']
          }
        ]
      },
      {
        title: "EXPERT present 11",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in die Berge', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We travel to the mountains in order to hike.",
            target: ['Wir', 'fahren', 'in die Berge', ',', 'um', 'zu', 'wandern', '.']
          }
        ]
      },
      {
        title: "EXPERT present 12",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'im Garten', type: 'standard', cat: 'place' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'sitzen', infinitive: 'sitzen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It is nice to sit in the garden.",
            target: ['Es', 'ist', 'schön', ',', 'im Garten', 'zu', 'sitzen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 13",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I find it important to learn German.",
            target: ['Ich', 'finde', 'es', 'wichtig', ',', 'Deutsch', 'zu', 'lernen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 14",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'gehe', type: 'standard', cat: 'detail' },
        { id: '3', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Cafe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'einen Kaffee', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I go to the cafe in order to drink a coffee.",
            target: ['Ich', 'gehe', 'ins', 'Cafe', ',', 'um', 'einen Kaffee', 'zu', 'trinken', '.']
          }
        ]
      },
      {
        title: "EXPERT present 15",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It is boring to do homework.",
            target: ['Es', 'ist', 'langweilig', ',', 'Hausaufgaben', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 16",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I find it great to visit the sights.",
            target: ['Ich', 'finde', 'es', 'toll', ',', 'die Sehenswürdigkeiten', 'zu', 'besichtigen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 17",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in den Park', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We go to the park in order to play football.",
            target: ['Wir', 'gehen', 'in den Park', ',', 'um', 'Fußball', 'zu', 'spielen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 18",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'immer', type: 'standard', cat: 'time' },
        { id: '5', text: 'Recht', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It is hard to always be right.",
            target: ['Es', 'ist', 'schwer', ',', 'immer', 'Recht', 'zu', 'haben', '.']
          }
        ]
      },
      {
        title: "EXPERT present 19",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'Bücher', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'lesen', infinitive: 'lesen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I find it interesting to read books.",
            target: ['Ich', 'finde', 'es', 'interessant', ',', 'Bücher', 'zu', 'lesen', '.']
          }
        ]
      },
      {
        title: "EXPERT present 20",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'braucht', infinitive: 'braucht', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Kamera', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'finden', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He needs time in order to find the camera.",
            target: ['Er', 'braucht', 'Zeit', ',', 'um', 'die', 'Kamera', 'zu', 'finden', '.']
          }
        ]
      }
    ],
    past: [
      {
        title: "EXPERT past 1",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in', type: 'standard', cat: 'detail' },
        { id: '4', text: 'die', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '6', text: 'gefahren', infinitive: 'gefahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '9', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '10', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We travelled to the city in order to eat pizza.",
            target: ['Wir', 'sind', 'in', 'die', 'Stadt', 'gefahren', ',', 'um', 'Pizza', 'zu', 'essen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 2",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'am', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It was nice to be at the beach.",
            target: ['Es', 'war', 'schön', ',', 'am', 'Strand', 'zu', 'sein', '.']
          }
        ]
      },
      {
        title: "EXPERT past 3",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fand', infinitive: 'fand', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I found it important to work a lot.",
            target: ['Ich', 'fand', 'es', 'wichtig', ',', 'viel', 'zu', 'arbeiten', '.']
          }
        ]
      },
      {
        title: "EXPERT past 4",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'nach Hause', type: 'standard', cat: 'place' },
        { id: '4', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He went home in order to sleep.",
            target: ['Er', 'ist', 'nach Hause', 'gegangen', ',', 'um', 'zu', 'schlafen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 5",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It was hard to do the exam.",
            target: ['Es', 'war', 'schwer', ',', 'die Prüfung', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 6",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fand', infinitive: 'fand', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besuchen', infinitive: 'besuchen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I found it great to visit my friends.",
            target: ['Ich', 'fand', 'es', 'toll', ',', 'meine Freunde', 'zu', 'besuchen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 7",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'Kaffee', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We were in the cafe in order to drink coffee.",
            target: ['Wir', 'waren', 'im Cafe', ',', 'um', 'Kaffee', 'zu', 'trinken', '.']
          }
        ]
      },
      {
        title: "EXPERT past 8",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'nirgendwo', type: 'standard', cat: 'detail' },
        { id: '5', text: 'hin', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It was boring to go nowhere.",
            target: ['Es', 'war', 'langweilig', ',', 'nirgendwo', 'hin', 'zu', 'gehen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 9",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fand', infinitive: 'fand', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'leben', infinitive: 'leben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I found it interesting to live abroad.",
            target: ['Ich', 'fand', 'es', 'interessant', ',', 'im Ausland', 'zu', 'leben', '.']
          }
        ]
      },
      {
        title: "EXPERT past 10",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'in der Schule', type: 'standard', cat: 'place' },
        { id: '6', text: 'besser', type: 'standard', cat: 'adjective' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She learned in order to be better in school.",
            target: ['Sie', 'hat', 'gelernt', ',', 'um', 'in der Schule', 'besser', 'zu', 'sein', '.']
          }
        ]
      },
      {
        title: "EXPERT past 11",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in', type: 'standard', cat: 'detail' },
        { id: '4', text: 'die', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '6', text: 'gefahren', infinitive: 'gefahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '9', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '10', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We travelled to the city in order to eat pizza.",
            target: ['Wir', 'sind', 'in', 'die', 'Stadt', 'gefahren', ',', 'um', 'Pizza', 'zu', 'essen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 12",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'am', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It was nice to be at the beach.",
            target: ['Es', 'war', 'schön', ',', 'am', 'Strand', 'zu', 'sein', '.']
          }
        ]
      },
      {
        title: "EXPERT past 13",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fand', infinitive: 'fand', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I found it important to work a lot.",
            target: ['Ich', 'fand', 'es', 'wichtig', ',', 'viel', 'zu', 'arbeiten', '.']
          }
        ]
      },
      {
        title: "EXPERT past 14",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '3', text: 'nach Hause', type: 'standard', cat: 'place' },
        { id: '4', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He went home in order to sleep.",
            target: ['Er', 'ist', 'nach Hause', 'gegangen', ',', 'um', 'zu', 'schlafen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 15",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It was hard to do the exam.",
            target: ['Es', 'war', 'schwer', ',', 'die Prüfung', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 16",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fand', infinitive: 'fand', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besuchen', infinitive: 'besuchen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I found it great to visit my friends.",
            target: ['Ich', 'fand', 'es', 'toll', ',', 'meine Freunde', 'zu', 'besuchen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 17",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '3', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'Tee', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We were in the cafe in order to drink tea.",
            target: ['Wir', 'waren', 'im Cafe', ',', 'um', 'Tee', 'zu', 'trinken', '.']
          }
        ]
      },
      {
        title: "EXPERT past 18",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '3', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'nirgendwo', type: 'standard', cat: 'detail' },
        { id: '5', text: 'hin', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It was boring to go nowhere.",
            target: ['Es', 'war', 'langweilig', ',', 'nirgendwo', 'hin', 'zu', 'gehen', '.']
          }
        ]
      },
      {
        title: "EXPERT past 19",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fand', infinitive: 'fand', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'leben', infinitive: 'leben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I found it interesting to live abroad.",
            target: ['Ich', 'fand', 'es', 'interessant', ',', 'im Ausland', 'zu', 'leben', '.']
          }
        ]
      },
      {
        title: "EXPERT past 20",
        bank: [
          { id: '1', text: 'Sie', type: 'standard', cat: 'subject' },
        { id: '2', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'besser', type: 'standard', cat: 'adjective' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "She learned in order to be better.",
            target: ['Sie', 'hat', 'gelernt', ',', 'um', 'besser', 'zu', 'sein', '.']
          }
        ]
      }
    ],
    future: [
      {
        title: "EXPERT future 1",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '4', text: 'brauchen', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will need time in order to do the homework.",
            target: ['Ich', 'werde', 'Zeit', 'brauchen', ',', 'um', 'die Hausaufgaben', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 2",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be important to learn German.",
            target: ['Es', 'wird', 'wichtig', 'sein', ',', 'Deutsch', 'zu', 'lernen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 3",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in', type: 'standard', cat: 'detail' },
        { id: '4', text: 'die', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '6', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'seine', type: 'standard', cat: 'detail' },
        { id: '9', text: 'Freundin', type: 'standard', cat: 'detail' },
        { id: '10', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '11', text: 'besuchen', infinitive: 'besuchen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will travel to the city in order to visit his girlfriend.",
            target: ['Er', 'wird', 'in', 'die', 'Stadt', 'fahren', ',', 'um', 'seine', 'Freundin', 'zu', 'besuchen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 4",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'Sport', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will go in order to do sport.",
            target: ['Wir', 'werden', 'gehen', ',', 'um', 'Sport', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 5",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'überall', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'fotografieren', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be great to take photos everywhere.",
            target: ['Es', 'wird', 'toll', 'sein', ',', 'überall', 'zu', 'fotografieren', '.']
          }
        ]
      },
      {
        title: "EXPERT future 6",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'versuchen', infinitive: 'versuchen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'die Pizza', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will try to eat the pizza.",
            target: ['Ich', 'werde', 'versuchen', ',', 'die Pizza', 'zu', 'essen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 7",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'uns', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besuchen', infinitive: 'besuchen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will come in order to visit us.",
            target: ['Er', 'wird', 'kommen', ',', 'um', 'uns', 'zu', 'besuchen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 8",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'das', type: 'standard', cat: 'subject' },
        { id: '6', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be hard to buy the car.",
            target: ['Es', 'wird', 'schwer', 'sein', ',', 'das', 'Auto', 'zu', 'kaufen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 9",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: '5', text: 'finden', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'leben', infinitive: 'leben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will find it interesting to live abroad.",
            target: ['Ich', 'werde', 'es', 'interessant', 'finden', ',', 'im Ausland', 'zu', 'leben', '.']
          }
        ]
      },
      {
        title: "EXPERT future 10",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '4', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'im', type: 'standard', cat: 'detail' },
        { id: '7', text: 'Park', type: 'standard', cat: 'detail' },
        { id: '8', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '9', text: 'spielen', infinitive: 'spielen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will have time in order to play in the park.",
            target: ['Wir', 'werden', 'Zeit', 'haben', ',', 'um', 'im', 'Park', 'zu', 'spielen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 11",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'in', type: 'standard', cat: 'detail' },
        { id: '4', text: 'die', type: 'standard', cat: 'detail' },
        { id: '5', text: 'Schule', type: 'standard', cat: 'detail' },
        { id: '6', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '9', text: 'lernen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will go to school in order to learn.",
            target: ['Ich', 'werde', 'in', 'die', 'Schule', 'gehen', ',', 'um', 'zu', 'lernen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 12",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sitzen', infinitive: 'sitzen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be nice to sit in the cafe.",
            target: ['Es', 'wird', 'schön', 'sein', ',', 'im Cafe', 'zu', 'sitzen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 13",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '5', text: 'finden', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will find it important to have time.",
            target: ['Ich', 'werde', 'es', 'wichtig', 'finden', ',', 'Zeit', 'zu', 'haben', '.']
          }
        ]
      },
      {
        title: "EXPERT future 14",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Berge', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will travel in order to see the mountains.",
            target: ['Wir', 'werden', 'fahren', ',', 'um', 'die', 'Berge', 'zu', 'sehen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 15",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'überall', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'fotografieren', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be great to take photos everywhere.",
            target: ['Es', 'wird', 'toll', 'sein', ',', 'überall', 'zu', 'fotografieren', '.']
          }
        ]
      },
      {
        title: "EXPERT future 16",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'versuchen', infinitive: 'versuchen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'die Pizza', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will try to eat the pizza.",
            target: ['Ich', 'werde', 'versuchen', ',', 'die Pizza', 'zu', 'essen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 17",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'uns', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besuchen', infinitive: 'besuchen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He will come in order to visit us.",
            target: ['Er', 'wird', 'kommen', ',', 'um', 'uns', 'zu', 'besuchen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 18",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wird', infinitive: 'wird', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'das', type: 'standard', cat: 'subject' },
        { id: '6', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'kaufen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It will be hard to buy the car.",
            target: ['Es', 'wird', 'schwer', 'sein', ',', 'das', 'Auto', 'zu', 'kaufen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 19",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: '5', text: 'finden', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'sprechen', infinitive: 'sprechen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I will find it interesting to speak German.",
            target: ['Ich', 'werde', 'es', 'interessant', 'finden', ',', 'Deutsch', 'zu', 'sprechen', '.']
          }
        ]
      },
      {
        title: "EXPERT future 20",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'werden', infinitive: 'werden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'Sport', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We will go in order to do sport.",
            target: ['Wir', 'werden', 'gehen', ',', 'um', 'Sport', 'zu', 'machen', '.']
          }
        ]
      }
    ],
    conditional: [
      {
        title: "EXPERT conditional 1",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'helfen', infinitive: 'helfen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would come in order to help.",
            target: ['Ich', 'würde', 'kommen', ',', 'um', 'zu', 'helfen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 2",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be nice to have more time.",
            target: ['Es', 'wäre', 'schön', ',', 'mehr Zeit', 'zu', 'haben', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 3",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fände', type: 'standard', cat: 'detail' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would find it great to work abroad.",
            target: ['Ich', 'fände', 'es', 'toll', ',', 'im Ausland', 'zu', 'arbeiten', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 4",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would go in order to visit the city.",
            target: ['Wir', 'würden', 'gehen', ',', 'um', 'die', 'Stadt', 'zu', 'besichtigen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 5",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be boring to stay at home.",
            target: ['Es', 'wäre', 'langweilig', ',', 'zu Hause', 'zu', 'bleiben', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 6",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fände', type: 'standard', cat: 'detail' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'machen', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would find it important to do the homework.",
            target: ['Ich', 'fände', 'es', 'wichtig', ',', 'die Hausaufgaben', 'zu', 'machen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 7",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'seine', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Freundin', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would travel in order to see his girlfriend.",
            target: ['Er', 'würde', 'fahren', ',', 'um', 'seine', 'Freundin', 'zu', 'sehen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 8",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'keinen Kaffee', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be hard to drink no coffee.",
            target: ['Es', 'wäre', 'schwer', ',', 'keinen Kaffee', 'zu', 'trinken', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 9",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fände', type: 'standard', cat: 'detail' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'lesen', infinitive: 'lesen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would find it interesting to read a book.",
            target: ['Ich', 'fände', 'es', 'interessant', ',', 'ein Buch', 'zu', 'lesen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 10",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'fit', type: 'standard', cat: 'adjective' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would hike in order to be fit.",
            target: ['Wir', 'würden', 'wandern', ',', 'um', 'fit', 'zu', 'sein', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 11",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'kommen', infinitive: 'kommen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'helfen', infinitive: 'helfen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would come in order to help.",
            target: ['Ich', 'würde', 'kommen', ',', 'um', 'zu', 'helfen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 12",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be nice to have more time.",
            target: ['Es', 'wäre', 'schön', ',', 'mehr Zeit', 'zu', 'haben', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 13",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fände', type: 'standard', cat: 'detail' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'arbeiten', infinitive: 'arbeiten', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would find it great to work abroad.",
            target: ['Ich', 'fände', 'es', 'toll', ',', 'im Ausland', 'zu', 'arbeiten', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 14",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would go in order to visit the sights.",
            target: ['Wir', 'würden', 'gehen', ',', 'um', 'die Sehenswürdigkeiten', 'zu', 'besichtigen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 15",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'langweilig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be boring to stay at home.",
            target: ['Es', 'wäre', 'langweilig', ',', 'zu Hause', 'zu', 'bleiben', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 16",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fände', type: 'standard', cat: 'detail' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'die Wahrheit', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sagen', infinitive: 'sagen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would find it important to tell the truth.",
            target: ['Ich', 'fände', 'es', 'wichtig', ',', 'die Wahrheit', 'zu', 'sagen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 17",
        bank: [
          { id: '1', text: 'Er', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würde', infinitive: 'würde', type: 'verb', cat: 'verb' },
        { id: '3', text: 'fahren', infinitive: 'fahren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'seine', type: 'standard', cat: 'detail' },
        { id: '6', text: 'Freundin', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '8', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "He would travel in order to see his girlfriend.",
            target: ['Er', 'würde', 'fahren', ',', 'um', 'seine', 'Freundin', 'zu', 'sehen', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 18",
        bank: [
          { id: '1', text: 'Es', type: 'standard', cat: 'subject' },
        { id: '2', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'keinen Kaffee', type: 'standard', cat: 'detail' },
        { id: '5', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '6', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "It would be hard to drink no coffee.",
            target: ['Es', 'wäre', 'schwer', ',', 'keinen Kaffee', 'zu', 'trinken', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 19",
        bank: [
          { id: '1', text: 'Ich', type: 'standard', cat: 'subject' },
        { id: '2', text: 'fände', type: 'standard', cat: 'detail' },
        { id: '3', text: 'es', type: 'standard', cat: 'subject' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'schreiben', infinitive: 'schreiben', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "I would find it interesting to write a book.",
            target: ['Ich', 'fände', 'es', 'interessant', ',', 'ein Buch', 'zu', 'schreiben', '.']
          }
        ]
      },
      {
        title: "EXPERT conditional 20",
        bank: [
          { id: '1', text: 'Wir', type: 'standard', cat: 'subject' },
        { id: '2', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '3', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'um', type: 'standard', cat: 'subjunction' },
        { id: '5', text: 'fit', type: 'standard', cat: 'adjective' },
        { id: '6', text: 'zu', type: 'standard', cat: 'subjunction' },
        { id: '7', text: 'sein', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "We would hike in order to be fit.",
            target: ['Wir', 'würden', 'wandern', ',', 'um', 'fit', 'zu', 'sein', '.']
          }
        ]
      }
    ],
  },
  god: {
    da: [
      {
        title: "GOD da 1",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '7', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since it's raining, we're staying at home today.",
            target: ['Da', 'es', 'regnet', ',', 'bleiben', 'wir', 'heute', 'zu Hause', '.']
          }
        ]
      },
      {
        title: "GOD da 2",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'krank', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'gehe', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'zur Arbeit', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since I'm sick, I'm not going to work.",
            target: ['Da', 'ich', 'krank', 'bin', ',', 'gehe', 'ich', 'nicht', 'zur Arbeit', '.']
          }
        ]
      },
      {
        title: "GOD da 3",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '4', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'im Restaurant', type: 'standard', cat: 'place' },
        { id: '7', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since we're hungry, we eat pizza in the restaurant.",
            target: ['Da', 'wir', 'Hunger', 'haben', ',', 'essen', 'im Restaurant', 'Pizza', '.']
          }
        ]
      },
      {
        title: "GOD da 4",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'lernt', infinitive: 'lernt', type: 'verb', cat: 'verb' },
        { id: '6', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '7', text: 'jeden Tag', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since the exam is hard, she learns every day.",
            target: ['Da', 'die Prüfung', 'schwer', 'ist', ',', 'lernt', 'sie', 'jeden Tag', '.']
          }
        ]
      },
      {
        title: "GOD da 5",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '3', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'an den Strand', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since the weather is great, we're going to the beach.",
            target: ['Da', 'das Wetter', 'toll', 'ist', ',', 'gehen', 'wir', 'an den Strand', '.']
          }
        ]
      },
      {
        title: "GOD da 6",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'kein Auto', type: 'standard', cat: 'detail' },
        { id: '4', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'fährt', type: 'standard', cat: 'detail' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since he has no car, he doesn't drive.",
            target: ['Da', 'er', 'kein Auto', 'hat', ',', 'fährt', 'er', 'nicht', '.']
          }
        ]
      },
      {
        title: "GOD da 7",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '3', text: 'da', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'Spaß', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since my friends are there, we have a lot of fun.",
            target: ['Da', 'meine Freunde', 'da', 'sind', ',', 'haben', 'wir', 'viel', 'Spaß', '.']
          }
        ]
      },
      {
        title: "GOD da 8",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'gehe', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'jetzt', type: 'standard', cat: 'detail' },
        { id: '8', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since I'm tired, I'm going to sleep now.",
            target: ['Da', 'ich', 'müde', 'bin', ',', 'gehe', 'ich', 'jetzt', 'schlafen', '.']
          }
        ]
      },
      {
        title: "GOD da 9",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'machen', type: 'standard', cat: 'detail' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since it's important, we're doing the homework.",
            target: ['Da', 'es', 'wichtig', 'ist', ',', 'machen', 'wir', 'die Hausaufgaben', '.']
          }
        ]
      },
      {
        title: "GOD da 10",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'die', type: 'standard', cat: 'detail' },
        { id: '3', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '4', text: 'interessant', type: 'standard', cat: 'adjective' },
        { id: '5', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since the city is interesting, we visit the sights.",
            target: ['Da', 'die', 'Stadt', 'interessant', 'ist', ',', 'besichtigen', 'wir', 'die Sehenswürdigkeiten', '.']
          }
        ]
      },
      {
        title: "GOD da 11",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since it's raining, we're staying at home.",
            target: ['Da', 'es', 'regnet', ',', 'bleiben', 'wir', 'zu Hause', '.']
          }
        ]
      },
      {
        title: "GOD da 12",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'krank', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'gehe', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'zur Arbeit', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since I'm sick, I'm not going to work.",
            target: ['Da', 'ich', 'krank', 'bin', ',', 'gehe', 'ich', 'nicht', 'zur Arbeit', '.']
          }
        ]
      },
      {
        title: "GOD da 13",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '4', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'essen', infinitive: 'essen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'eine Pizza', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since we're hungry, we're eating a pizza.",
            target: ['Da', 'wir', 'Hunger', 'haben', ',', 'essen', 'wir', 'eine Pizza', '.']
          }
        ]
      },
      {
        title: "GOD da 14",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'lerne', infinitive: 'lerne', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since the exam is hard, I'm learning a lot.",
            target: ['Da', 'die Prüfung', 'schwer', 'ist', ',', 'lerne', 'ich', 'viel', '.']
          }
        ]
      },
      {
        title: "GOD da 15",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'gehen', infinitive: 'gehen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'in den Park', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since the weather is nice, we're going to the park.",
            target: ['Da', 'das Wetter', 'schön', 'ist', ',', 'gehen', 'wir', 'in den Park', '.']
          }
        ]
      },
      {
        title: "GOD da 16",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'kein Geld', type: 'standard', cat: 'detail' },
        { id: '4', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'kauft', type: 'standard', cat: 'detail' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'das', type: 'standard', cat: 'subject' },
        { id: '8', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '9', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since he has no money, he's not buying the car.",
            target: ['Da', 'er', 'kein Geld', 'hat', ',', 'kauft', 'er', 'das', 'Auto', 'nicht', '.']
          }
        ]
      },
      {
        title: "GOD da 17",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'meine Freunde', type: 'standard', cat: 'subject' },
        { id: '3', text: 'da', type: 'standard', cat: 'subjunction' },
        { id: '4', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Spaß', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since my friends are there, we're having fun.",
            target: ['Da', 'meine Freunde', 'da', 'sind', ',', 'haben', 'wir', 'Spaß', '.']
          }
        ]
      },
      {
        title: "GOD da 18",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'gehe', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since I'm tired, I'm going to sleep.",
            target: ['Da', 'ich', 'müde', 'bin', ',', 'gehe', 'ich', 'schlafen', '.']
          }
        ]
      },
      {
        title: "GOD da 19",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Sonntag', type: 'standard', cat: 'detail' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since it's Sunday, we have time.",
            target: ['Da', 'es', 'Sonntag', 'ist', ',', 'haben', 'wir', 'Zeit', '.']
          }
        ]
      },
      {
        title: "GOD da 20",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'die', type: 'standard', cat: 'detail' },
        { id: '3', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: '4', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '5', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'hier', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since the city is great, we're staying here.",
            target: ['Da', 'die', 'Stadt', 'toll', 'ist', ',', 'bleiben', 'wir', 'hier', '.']
          }
        ]
      }
    ],
    wenn_als: [
      {
        title: "GOD wenn_als 1",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'spielte', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'oft', type: 'standard', cat: 'time' },
        { id: '8', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I was younger, I often played football.",
            target: ['Als', 'ich', 'jünger', 'war', ',', 'spielte', 'ich', 'oft', 'Fußball', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 2",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'sitzen', infinitive: 'sitzen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'im Garten', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When the weather is nice, we sit in the garden.",
            target: ['Wenn', 'das Wetter', 'schön', 'ist', ',', 'sitzen', 'wir', 'im Garten', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 3",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '4', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'haben', infinitive: 'haben', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'fotografiert', infinitive: 'fotografiert', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When we were abroad, we took a lot of photos.",
            target: ['Als', 'wir', 'im Ausland', 'waren', ',', 'haben', 'wir', 'viel', 'fotografiert', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 4",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '4', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'lese', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'gern', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I have time, I gladly read a book.",
            target: ['Wenn', 'ich', 'Zeit', 'habe', ',', 'lese', 'ich', 'gern', 'ein Buch', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 5",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'in der Schule', type: 'standard', cat: 'place' },
        { id: '4', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: '8', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When he was in school, he learned German.",
            target: ['Als', 'er', 'in der Schule', 'war', ',', 'hat', 'er', 'Deutsch', 'gelernt', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 6",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'zu Hause', type: 'standard', cat: 'place' },
        { id: '7', text: 'fern', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When it rains, we watch TV at home.",
            target: ['Wenn', 'es', 'regnet', ',', 'sehen', 'wir', 'zu Hause', 'fern', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 7",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'am', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: '5', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '7', text: 'es', type: 'standard', cat: 'subject' },
        { id: '8', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When we were at the beach, it was great.",
            target: ['Als', 'wir', 'am', 'Strand', 'waren', ',', 'war', 'es', 'toll', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 8",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '4', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'esse', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'eine Pizza', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I'm hungry, I eat a pizza.",
            target: ['Wenn', 'ich', 'Hunger', 'habe', ',', 'esse', 'ich', 'eine Pizza', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 9",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '5', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: '7', text: 'er', type: 'standard', cat: 'subject' },
        { id: '8', text: 'zur Arbeit', type: 'standard', cat: 'detail' },
        { id: '9', text: 'gefahren', infinitive: 'gefahren', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When he had the car, he drove to work.",
            target: ['Als', 'er', 'das', 'Auto', 'hatte', ',', 'ist', 'er', 'zur Arbeit', 'gefahren', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 10",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '4', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: '6', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Tee', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When they are in the cafe, they drink tea.",
            target: ['Wenn', 'sie', 'im Cafe', 'sind', ',', 'trinken', 'sie', 'Tee', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 11",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'ein Kind', type: 'standard', cat: 'detail' },
        { id: '4', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'spielte', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'oft', type: 'standard', cat: 'time' },
        { id: '8', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I was a child, I often played football.",
            target: ['Als', 'ich', 'ein Kind', 'war', ',', 'spielte', 'ich', 'oft', 'Fußball', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 12",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'morgen', type: 'standard', cat: 'detail' },
        { id: '4', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'sehen', infinitive: 'sehen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'fern', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "If it rains tomorrow, we'll watch TV.",
            target: ['Wenn', 'es', 'morgen', 'regnet', ',', 'sehen', 'wir', 'fern', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 13",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '4', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'besichtigten', type: 'standard', cat: 'detail' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'viel', type: 'standard', cat: 'adverb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When we were abroad, we visited a lot.",
            target: ['Als', 'wir', 'im Ausland', 'waren', ',', 'besichtigten', 'wir', 'viel', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 14",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '4', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'lese', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ein Buch', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When/If I have time, I read a book.",
            target: ['Wenn', 'ich', 'Zeit', 'habe', ',', 'lese', 'ein Buch', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 15",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'ein Auto', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When he was younger, he had a car.",
            target: ['Als', 'er', 'jünger', 'war', ',', 'hatte', 'er', 'ein Auto', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 16",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'am Wochenende', type: 'standard', cat: 'detail' },
        { id: '4', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'froh', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When we hike at the weekend, we are happy.",
            target: ['Wenn', 'wir', 'am Wochenende', 'wandern', ',', 'sind', 'wir', 'froh', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 17",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gestern', type: 'standard', cat: 'detail' },
        { id: '4', text: 'im Cafe', type: 'standard', cat: 'place' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'traf', infinitive: 'traf', type: 'verb', cat: 'verb' },
        { id: '7', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '8', text: 'einen Freund', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I was in the cafe yesterday, I met a friend.",
            target: ['Als', 'ich', 'gestern', 'im Cafe', 'war', ',', 'traf', 'ich', 'einen Freund', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 18",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'du', type: 'standard', cat: 'subject' },
        { id: '3', text: 'kommst', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'trinken', type: 'standard', cat: 'detail' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'einen Tee', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When you come, we'll drink a tea.",
            target: ['Wenn', 'du', 'kommst', ',', 'trinken', 'wir', 'einen Tee', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 19",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'die Sonne', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schien', infinitive: 'schien', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'gingen', type: 'standard', cat: 'detail' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'an den Strand', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When the sun shone, we went to the beach.",
            target: ['Als', 'die Sonne', 'schien', ',', 'gingen', 'wir', 'an den Strand', '.']
          }
        ]
      },
      {
        title: "GOD wenn_als 20",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Hunger', type: 'standard', cat: 'detail' },
        { id: '4', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'koche', infinitive: 'koche', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I'm hungry, I cook pizza.",
            target: ['Wenn', 'ich', 'Hunger', 'habe', ',', 'koche', 'ich', 'Pizza', '.']
          }
        ]
      }
    ],
    nachdem: [
      {
        title: "GOD nachdem 1",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: '4', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'machten', infinitive: 'machten', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had learned, we did the exam.",
            target: ['Nachdem', 'wir', 'gelernt', 'hatten', ',', 'machten', 'wir', 'die Prüfung', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 2",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: '4', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'sehr', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After he had worked, he was very tired.",
            target: ['Nachdem', 'er', 'gearbeitet', 'hatte', ',', 'war', 'er', 'sehr', 'müde', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 3",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '7', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '8', text: 'satt', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After they had eaten pizza, they were full.",
            target: ['Nachdem', 'sie', 'Pizza', 'gegessen', 'hatten', ',', 'waren', 'sie', 'satt', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 4",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '4', text: 'besucht', infinitive: 'besucht', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'gingen', type: 'standard', cat: 'detail' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '9', text: 'Cafe', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had visited the sights, we went to the cafe.",
            target: ['Nachdem', 'wir', 'die Sehenswürdigkeiten', 'besucht', 'hatten', ',', 'gingen', 'wir', 'ins', 'Cafe', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 5",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Buch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gelesen', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '8', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '9', text: 'der Ansicht', type: 'standard', cat: 'detail' },
        { id: 'c2', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '10', text: 'dass', type: 'standard', cat: 'subjunction' },
        { id: '11', text: 'es', type: 'standard', cat: 'subject' },
        { id: '12', text: 'toll', type: 'standard', cat: 'adjective' },
        { id: '13', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c3', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After I had read the book, I was of the opinion that it was great.",
            target: ['Nachdem', 'ich', 'das', 'Buch', 'gelesen', 'hatte', ',', 'war', 'ich', 'der Ansicht', ',', 'dass', 'es', 'toll', 'war', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 6",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: '4', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '6', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '7', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After it had rained, the weather was beautiful.",
            target: ['Nachdem', 'es', 'regnet', 'hatte', ',', 'war', 'das Wetter', 'schön', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 7",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gespielt', infinitive: 'gespielt', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'nach Hause', type: 'standard', cat: 'place' },
        { id: '9', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had played football, we went home.",
            target: ['Nachdem', 'wir', 'Fußball', 'gespielt', 'hatten', ',', 'sind', 'wir', 'nach Hause', 'gegangen', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 8",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gemacht', infinitive: 'gemacht', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: '7', text: 'er', type: 'standard', cat: 'subject' },
        { id: '8', text: 'mehr Zeit', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After he had done the homework, he had more time.",
            target: ['Nachdem', 'er', 'die Hausaufgaben', 'gemacht', 'hatte', ',', 'hatte', 'er', 'mehr Zeit', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 9",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Park', type: 'standard', cat: 'detail' },
        { id: '5', text: 'fotografiert', infinitive: 'fotografiert', type: 'verb', cat: 'verb' },
        { id: '6', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'ging', type: 'standard', cat: 'detail' },
        { id: '8', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '9', text: 'in', type: 'standard', cat: 'detail' },
        { id: '10', text: 'die', type: 'standard', cat: 'detail' },
        { id: '11', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After she had taken photos in the park, she went to the city.",
            target: ['Nachdem', 'sie', 'im', 'Park', 'fotografiert', 'hatte', ',', 'ging', 'sie', 'in', 'die', 'Stadt', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 10",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im Restaurant', type: 'standard', cat: 'place' },
        { id: '4', text: 'gewesen', infinitive: 'gewesen', type: 'verb', cat: 'verb' },
        { id: '5', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'Spaß', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had been in the restaurant, we had fun.",
            target: ['Nachdem', 'wir', 'im Restaurant', 'gewesen', 'waren', ',', 'hatten', 'wir', 'Spaß', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 11",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: '4', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'satt', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had eaten, we were full.",
            target: ['Nachdem', 'wir', 'gegessen', 'hatten', ',', 'waren', 'wir', 'satt', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 12",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: '4', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'machte', type: 'standard', cat: 'detail' },
        { id: '6', text: 'er', type: 'standard', cat: 'subject' },
        { id: '7', text: 'die Prüfung', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After he had learned, he did the exam.",
            target: ['Nachdem', 'er', 'gelernt', 'hatte', ',', 'machte', 'er', 'die Prüfung', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 13",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: '4', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After I had worked, I was tired.",
            target: ['Nachdem', 'ich', 'gearbeitet', 'hatte', ',', 'war', 'ich', 'müde', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 14",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '3', text: 'die Sehenswürdigkeiten', type: 'standard', cat: 'detail' },
        { id: '4', text: 'besucht', infinitive: 'besucht', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'gingen', type: 'standard', cat: 'detail' },
        { id: '7', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '8', text: 'ins', type: 'standard', cat: 'detail' },
        { id: '9', text: 'Cafe', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After they had visited the sights, they went to the cafe.",
            target: ['Nachdem', 'sie', 'die Sehenswürdigkeiten', 'besucht', 'hatten', ',', 'gingen', 'sie', 'ins', 'Cafe', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 15",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: '4', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '6', text: 'der', type: 'standard', cat: 'detail' },
        { id: '7', text: 'Garten', type: 'standard', cat: 'detail' },
        { id: '8', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After it had rained, the garden was beautiful.",
            target: ['Nachdem', 'es', 'regnet', 'hatte', ',', 'war', 'der', 'Garten', 'schön', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 16",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Fußball', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gespielt', infinitive: 'gespielt', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'tranken', infinitive: 'tranken', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'Wasser', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had played football, we drank water.",
            target: ['Nachdem', 'wir', 'Fußball', 'gespielt', 'hatten', ',', 'tranken', 'wir', 'Wasser', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 17",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Buch', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gelesen', type: 'standard', cat: 'detail' },
        { id: '6', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'gab', infinitive: 'gab', type: 'verb', cat: 'verb' },
        { id: '8', text: 'er', type: 'standard', cat: 'subject' },
        { id: '9', text: 'es', type: 'standard', cat: 'subject' },
        { id: '10', text: 'mir', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After he had read the book, he gave it to me.",
            target: ['Nachdem', 'er', 'das', 'Buch', 'gelesen', 'hatte', ',', 'gab', 'er', 'es', 'mir', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 18",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Urlaub', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gewesen', infinitive: 'gewesen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'waren', infinitive: 'waren', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: '8', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '9', text: 'keine', type: 'standard', cat: 'detail' },
        { id: '10', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '11', text: 'mehr', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had been on holiday, we had no more time.",
            target: ['Nachdem', 'wir', 'im', 'Urlaub', 'gewesen', 'waren', ',', 'hatten', 'wir', 'keine', 'Zeit', 'mehr', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 19",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gemacht', infinitive: 'gemacht', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'sah', type: 'standard', cat: 'detail' },
        { id: '7', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '8', text: 'fern', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After I had done the homework, I watched TV.",
            target: ['Nachdem', 'ich', 'die Hausaufgaben', 'gemacht', 'hatte', ',', 'sah', 'ich', 'fern', '.']
          }
        ]
      },
      {
        title: "GOD nachdem 20",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '3', text: 'das', type: 'standard', cat: 'subject' },
        { id: '4', text: 'Auto', type: 'standard', cat: 'detail' },
        { id: '5', text: 'gekauft', infinitive: 'gekauft', type: 'verb', cat: 'verb' },
        { id: '6', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '7', text: 'fuhren', infinitive: 'fuhren', type: 'verb', cat: 'verb' },
        { id: '8', text: 'sie', type: 'standard', cat: 'subject' },
        { id: '9', text: 'in die Berge', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After they had bought the car, they travelled to the mountains.",
            target: ['Nachdem', 'sie', 'das', 'Auto', 'gekauft', 'hatten', ',', 'fuhren', 'sie', 'in die Berge', '.']
          }
        ]
      }
    ],
    mixture: [
      {
        title: "GOD mixture 1",
        bank: [
          { id: '1', text: 'Obwohl', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'lerne', infinitive: 'lerne', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'jeden Tag', type: 'standard', cat: 'detail' },
        { id: '8', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Although it is hard, I learn German every day.",
            target: ['Obwohl', 'es', 'schwer', 'ist', ',', 'lerne', 'ich', 'jeden Tag', 'Deutsch', '.']
          }
        ]
      },
      {
        title: "GOD mixture 2",
        bank: [
          { id: '1', text: 'Weil', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '4', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'die', type: 'standard', cat: 'detail' },
        { id: '8', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Because we are abroad, we visit the city.",
            target: ['Weil', 'wir', 'im Ausland', 'sind', ',', 'besichtigen', 'wir', 'die', 'Stadt', '.']
          }
        ]
      },
      {
        title: "GOD mixture 3",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '8', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "If the weather were nice, we would hike today.",
            target: ['Wenn', 'das Wetter', 'schön', 'wäre', ',', 'würden', 'wir', 'heute', 'wandern', '.']
          }
        ]
      },
      {
        title: "GOD mixture 4",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'keine', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '5', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '7', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '8', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: '9', text: 'gearbeitet', infinitive: 'gearbeitet', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since I had no time, I didn't work.",
            target: ['Da', 'ich', 'keine', 'Zeit', 'hatte', ',', 'habe', 'ich', 'nicht', 'gearbeitet', '.']
          }
        ]
      },
      {
        title: "GOD mixture 5",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'ins Kino', type: 'standard', cat: 'detail' },
        { id: '9', text: 'gegangen', infinitive: 'gegangen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had eaten pizza, we went to the cinema.",
            target: ['Nachdem', 'wir', 'Pizza', 'gegessen', 'hatten', ',', 'sind', 'wir', 'ins Kino', 'gegangen', '.']
          }
        ]
      },
      {
        title: "GOD mixture 6",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'oft', type: 'standard', cat: 'time' },
        { id: '8', text: 'am', type: 'standard', cat: 'detail' },
        { id: '9', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I was younger, I was often at the beach.",
            target: ['Als', 'ich', 'jünger', 'war', ',', 'war', 'ich', 'oft', 'am', 'Strand', '.']
          }
        ]
      },
      {
        title: "GOD mixture 7",
        bank: [
          { id: '1', text: 'Obwohl', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'mache', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'die Hausaufgaben', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Although I am tired, I do the homework.",
            target: ['Obwohl', 'ich', 'müde', 'bin', ',', 'mache', 'ich', 'die Hausaufgaben', '.']
          }
        ]
      },
      {
        title: "GOD mixture 8",
        bank: [
          { id: '1', text: 'Dass', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Recht', type: 'standard', cat: 'detail' },
        { id: '4', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'sehr', type: 'standard', cat: 'adverb' },
        { id: '8', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "That he is right, I find very important.",
            target: ['Dass', 'er', 'Recht', 'hat', ',', 'finde', 'ich', 'sehr', 'wichtig', '.']
          }
        ]
      },
      {
        title: "GOD mixture 9",
        bank: [
          { id: '1', text: 'Weil', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'heute', type: 'standard', cat: 'detail' },
        { id: '7', text: 'im Haus', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Because it's raining, we're staying in the house today.",
            target: ['Weil', 'es', 'regnet', ',', 'bleiben', 'wir', 'heute', 'im Haus', '.']
          }
        ]
      },
      {
        title: "GOD mixture 10",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: '4', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After I have learned, I will sleep.",
            target: ['Nachdem', 'ich', 'gelernt', 'habe', ',', 'werde', 'ich', 'schlafen', '.']
          }
        ]
      },
      {
        title: "GOD mixture 11",
        bank: [
          { id: '1', text: 'Obwohl', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schwer', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'ist', infinitive: 'ist', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'lerne', infinitive: 'lerne', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'jeden Tag', type: 'standard', cat: 'detail' },
        { id: '8', text: 'Deutsch', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Although it is hard, I learn German every day.",
            target: ['Obwohl', 'es', 'schwer', 'ist', ',', 'lerne', 'ich', 'jeden Tag', 'Deutsch', '.']
          }
        ]
      },
      {
        title: "GOD mixture 12",
        bank: [
          { id: '1', text: 'Weil', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'im Ausland', type: 'standard', cat: 'place' },
        { id: '4', text: 'sind', infinitive: 'sind', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'besichtigen', infinitive: 'besichtigen', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'die', type: 'standard', cat: 'detail' },
        { id: '8', text: 'Stadt', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Because we are abroad, we are visiting the city.",
            target: ['Weil', 'wir', 'im Ausland', 'sind', ',', 'besichtigen', 'wir', 'die', 'Stadt', '.']
          }
        ]
      },
      {
        title: "GOD mixture 13",
        bank: [
          { id: '1', text: 'Wenn', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'das Wetter', type: 'standard', cat: 'subject' },
        { id: '3', text: 'schön', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'wäre', infinitive: 'wäre', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'würden', infinitive: 'würden', type: 'verb', cat: 'verb' },
        { id: '6', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '7', text: 'wandern', infinitive: 'wandern', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "If the weather were nice, we would hike.",
            target: ['Wenn', 'das Wetter', 'schön', 'wäre', ',', 'würden', 'wir', 'wandern', '.']
          }
        ]
      },
      {
        title: "GOD mixture 14",
        bank: [
          { id: '1', text: 'Da', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'keine', type: 'standard', cat: 'detail' },
        { id: '4', text: 'Zeit', type: 'standard', cat: 'detail' },
        { id: '5', text: 'hatte', infinitive: 'hatte', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'habe', type: 'standard', cat: 'detail' },
        { id: '7', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '8', text: 'nicht', type: 'standard', cat: 'adverb' },
        { id: '9', text: 'angerufen', infinitive: 'angerufen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Since I had no time, I didn't call.",
            target: ['Da', 'ich', 'keine', 'Zeit', 'hatte', ',', 'habe', 'ich', 'nicht', 'angerufen', '.']
          }
        ]
      },
      {
        title: "GOD mixture 15",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Pizza', type: 'standard', cat: 'detail' },
        { id: '4', text: 'gegessen', infinitive: 'gegessen', type: 'verb', cat: 'verb' },
        { id: '5', text: 'hatten', infinitive: 'hatten', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '6', text: 'gingen', type: 'standard', cat: 'detail' },
        { id: '7', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '8', text: 'ins Kino', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After we had eaten pizza, we went to the cinema.",
            target: ['Nachdem', 'wir', 'Pizza', 'gegessen', 'hatten', ',', 'gingen', 'wir', 'ins Kino', '.']
          }
        ]
      },
      {
        title: "GOD mixture 16",
        bank: [
          { id: '1', text: 'Als', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'jünger', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'war', infinitive: 'war', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'oft', type: 'standard', cat: 'time' },
        { id: '8', text: 'am', type: 'standard', cat: 'detail' },
        { id: '9', text: 'Strand', type: 'standard', cat: 'detail' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "When I was younger, I was often at the beach.",
            target: ['Als', 'ich', 'jünger', 'war', ',', 'war', 'ich', 'oft', 'am', 'Strand', '.']
          }
        ]
      },
      {
        title: "GOD mixture 17",
        bank: [
          { id: '1', text: 'Obwohl', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'müde', type: 'standard', cat: 'adjective' },
        { id: '4', text: 'bin', infinitive: 'bin', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'arbeite', type: 'standard', cat: 'detail' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'noch', type: 'standard', cat: 'time' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Although I am tired, I am still working.",
            target: ['Obwohl', 'ich', 'müde', 'bin', ',', 'arbeite', 'ich', 'noch', '.']
          }
        ]
      },
      {
        title: "GOD mixture 18",
        bank: [
          { id: '1', text: 'Dass', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'er', type: 'standard', cat: 'subject' },
        { id: '3', text: 'Recht', type: 'standard', cat: 'detail' },
        { id: '4', text: 'hat', infinitive: 'hat', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'finde', infinitive: 'finde', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'wichtig', type: 'standard', cat: 'adjective' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "That he is right, I find important.",
            target: ['Dass', 'er', 'Recht', 'hat', ',', 'finde', 'ich', 'wichtig', '.']
          }
        ]
      },
      {
        title: "GOD mixture 19",
        bank: [
          { id: '1', text: 'Weil', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'es', type: 'standard', cat: 'subject' },
        { id: '3', text: 'regnet', infinitive: 'regnet', type: 'verb', cat: 'verb' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '4', text: 'bleiben', infinitive: 'bleiben', type: 'verb', cat: 'verb' },
        { id: '5', text: 'wir', type: 'standard', cat: 'subject' },
        { id: '6', text: 'im Haus', type: 'standard', cat: 'place' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "Because it's raining, we're staying in the house.",
            target: ['Weil', 'es', 'regnet', ',', 'bleiben', 'wir', 'im Haus', '.']
          }
        ]
      },
      {
        title: "GOD mixture 20",
        bank: [
          { id: '1', text: 'Nachdem', type: 'standard', cat: 'subjunction' },
        { id: '2', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '3', text: 'gelernt', type: 'standard', cat: 'detail' },
        { id: '4', text: 'habe', type: 'standard', cat: 'detail' },
        { id: 'c1', text: ',', type: 'standard', cat: 'punctuation' },
        { id: '5', text: 'werde', infinitive: 'werde', type: 'verb', cat: 'verb' },
        { id: '6', text: 'ich', type: 'standard', cat: 'subject' },
        { id: '7', text: 'schlafen', infinitive: 'schlafen', type: 'verb', cat: 'verb' },
        { id: 'c2', text: '.', type: 'standard', cat: 'punctuation' }
        ],
        steps: [
          {
            instruction: "Bilde den Satz.",
            english: "After I have learned, I will sleep.",
            target: ['Nachdem', 'ich', 'gelernt', 'habe', ',', 'werde', 'ich', 'schlafen', '.']
          }
        ]
      }
    ],
  },
};
