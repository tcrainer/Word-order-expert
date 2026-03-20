import { motion, AnimatePresence, Reorder } from 'motion/react';
import React, { useState, useRef } from 'react';
import { Brain, Zap, Trophy, ArrowRight, ArrowLeft, CheckCircle2, XCircle, Lightbulb, Flame, Lock, Star } from 'lucide-react';
import { CATEGORIES_DATA } from './data';
import { BankCard, Exercise } from './types';
import { Flashcard } from './components/Flashcard';

type Screen = 'menu' | 'tense' | 'exercise' | 'complete';
type LevelProgress = Record<string, Record<string, number>>;

const STONES_PER_TENSE = 3;
const REQUIRED_TO_UNLOCK = 12;
const STORAGE_KEY = 'satzbau_progress';

const LEVEL_TENSES: Record<string, { id: string; label: string; stoneColor: string }[]> = {
  noob:   [
    { id: 'present',     label: 'Present',    stoneColor: 'bg-blue-400'   },
    { id: 'past',        label: 'Past',        stoneColor: 'bg-violet-400' },
    { id: 'future',      label: 'Future',      stoneColor: 'bg-cyan-400'   },
    { id: 'conditional', label: 'Conditional', stoneColor: 'bg-pink-400'   },
  ],
  pro: [
    { id: 'present',     label: 'Present',    stoneColor: 'bg-blue-400'   },
    { id: 'past',        label: 'Past',        stoneColor: 'bg-violet-400' },
    { id: 'future',      label: 'Future',      stoneColor: 'bg-cyan-400'   },
    { id: 'conditional', label: 'Conditional', stoneColor: 'bg-pink-400'   },
  ],
  expert: [
    { id: 'present',     label: 'Present',    stoneColor: 'bg-blue-400'   },
    { id: 'past',        label: 'Past',        stoneColor: 'bg-violet-400' },
    { id: 'future',      label: 'Future',      stoneColor: 'bg-cyan-400'   },
    { id: 'conditional', label: 'Conditional', stoneColor: 'bg-pink-400'   },
  ],
  god: [
    { id: 'mixture',  label: 'Mixture',  stoneColor: 'bg-amber-400'  },
    { id: 'da',       label: 'Da',       stoneColor: 'bg-orange-400' },
    { id: 'wenn_als', label: 'Wenn/Als', stoneColor: 'bg-red-400'    },
    { id: 'nachdem',  label: 'Nachdem',  stoneColor: 'bg-rose-400'   },
  ],
};

const LEVEL_META = [
  { id: 'noob',   emoji: '📘', title: 'Noob',    sub: 'A1/A2', bg: 'from-blue-600 to-cyan-600',       desc: 'Basic Inversion'      },
  { id: 'pro',    emoji: '📙', title: 'Pro',      sub: 'B1',    bg: 'from-purple-600 to-fuchsia-600',  desc: 'Subordinate Clauses'  },
  { id: 'expert', emoji: '📗', title: 'Expert',   sub: 'B2',    bg: 'from-emerald-600 to-teal-600',    desc: 'zu-Infinitives'       },
  { id: 'god',    emoji: '📕', title: 'God Tier', sub: 'C1',    bg: 'from-rose-600 to-orange-600',     desc: 'Subordinate-First'    },
];

function loadProgress(): LevelProgress {
  try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : {}; }
  catch { return {}; }
}
function saveProgress(p: LevelProgress) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}
function stonesFilled(progress: LevelProgress, level: string): number {
  return (LEVEL_TENSES[level] || []).reduce((s, t) =>
    s + Math.min(progress[level]?.[t.id] || 0, STONES_PER_TENSE), 0);
}
function isUnlocked(level: string, progress: LevelProgress): boolean {
  const order = ['noob', 'pro', 'expert', 'god'];
  const idx = order.indexOf(level);
  if (idx <= 0) return true;
  return stonesFilled(progress, order[idx - 1]) >= REQUIRED_TO_UNLOCK;
}
function getTenseFromTitle(title: string): string | null {
  const l = title.toLowerCase();
  if (l.includes(' present'))     return 'present';
  if (l.includes(' past'))        return 'past';
  if (l.includes(' future'))      return 'future';
  if (l.includes(' conditional')) return 'conditional';
  if (l.includes(' mixture'))     return 'mixture';
  if (l.includes('wenn_als'))     return 'wenn_als';
  if (l.includes(' nachdem'))     return 'nachdem';
  if (l.includes(' da'))          return 'da';
  return null;
}

function StoneRow({ tense, count, align }: { tense: { id: string; label: string; stoneColor: string }; count: number; align: 'left' | 'right' }) {
  return (
    <div className={`flex items-center gap-3 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest w-16 text-center shrink-0">{tense.label}</span>
      <div className="flex gap-1.5">
        {Array.from({ length: STONES_PER_TENSE }).map((_, i) => {
          const filled = i < Math.min(count, STONES_PER_TENSE);
          return (
            <div key={i} className={`w-7 h-7 rounded-full border-2 transition-all duration-300 ${
              filled ? `${tense.stoneColor} border-transparent shadow-sm` : 'bg-zinc-800 border-zinc-700'
            }`} />
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen]               = useState<Screen>('menu');
  const [category, setCategory]           = useState<string | null>(null);
  const [tenses, setTenses]               = useState<string[]>([]);
  const [exercises, setExercises]         = useState<Exercise[]>([]);
  const [exIdx, setExIdx]                 = useState(0);
  const [stepIdx, setStepIdx]             = useState(0);
  const [bankCards, setBankCards]         = useState<BankCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<BankCard[]>([]);
  const [feedback, setFeedback]           = useState<'correct' | 'incorrect' | null>(null);
  const [showHint, setShowHint]           = useState(false);
  const [streak, setStreak]               = useState(0);
  const [numSentences, setNumSentences]   = useState(6);
  const [completedStep1, setCompletedStep1] = useState<string | null>(null);
  const [progress, setProgress]           = useState<LevelProgress>(loadProgress);
  const [justUnlocked, setJustUnlocked]   = useState<string | null>(null);
  const isDragging = useRef(false);

  const goToMenu = () => {
    setScreen('menu'); setCategory(null); setTenses([]); setExercises([]);
    setExIdx(0); setStepIdx(0); setShowHint(false); setCompletedStep1(null); setJustUnlocked(null);
  };

  const selectCategory = (cat: string) => { setCategory(cat); setTenses([]); setScreen('tense'); };
  const toggleTense = (t: string) => setTenses(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

  const startExercises = () => {
    if (!tenses.length || !category) return;
    const catData = CATEGORIES_DATA[category];
    let combined: Exercise[] = [];
    tenses.forEach(t => {
      if (catData[t as keyof typeof catData]) {
        let cur = [...catData[t as keyof typeof catData]!];
        for (let i = cur.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [cur[i], cur[j]] = [cur[j], cur[i]]; }
        combined = combined.concat(cur.slice(0, numSentences));
      }
    });
    for (let i = combined.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [combined[i], combined[j]] = [combined[j], combined[i]]; }
    setExercises(combined); setExIdx(0); setStepIdx(0); setShowHint(false);
    loadExercise(combined, 0, 0); setScreen('exercise');
  };

  const loadExercise = (exs: Exercise[], eIdx: number, sIdx: number) => {
    const ex = exs[eIdx];
    if (!ex || !ex.steps[sIdx]) { setScreen('complete'); return; }
    const clonedBank = ex.bank.map(c => ({ ...c, userValue: '', auxChoice: '' }));
    for (let i = clonedBank.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [clonedBank[i], clonedBank[j]] = [clonedBank[j], clonedBank[i]]; }
    setBankCards(clonedBank); setSelectedCards([]); setFeedback(null);
  };

  const moveCard = (id: string, source: 'bank' | 'selected') => {
    if (isDragging.current || feedback === 'correct') return;
    setFeedback(null);
    if (source === 'bank') {
      const card = bankCards.find(c => c.id === id); if (!card) return;
      setBankCards(p => p.filter(c => c.id !== id)); setSelectedCards(p => [...p, { ...card, status: null }]);
    } else {
      const card = selectedCards.find(c => c.id === id); if (!card) return;
      setSelectedCards(p => p.filter(c => c.id !== id)); setBankCards(p => [...p, { ...card, status: null }]);
    }
  };

  const updateCardValue  = (id: string, val: string) => {
    setBankCards(p => p.map(c => c.id === id ? { ...c, userValue: val, status: null } : c));
    setSelectedCards(p => p.map(c => c.id === id ? { ...c, userValue: val, status: null } : c));
    setFeedback(null);
  };
  const updateAuxChoice = (id: string, val: string) => {
    setBankCards(p => p.map(c => c.id === id ? { ...c, auxChoice: val, status: null } : c));
    setSelectedCards(p => p.map(c => c.id === id ? { ...c, auxChoice: val, status: null } : c));
    setFeedback(null);
  };

  const checkAnswer = () => {
    const step = exercises[exIdx]?.steps[stepIdx]; if (!step) return;
    const target = step.target;
    const user = selectedCards.map(c => {
      if (c.type === 'standard')    return c.text || '';
      if (c.type === 'verb')        return (c.userValue || '').trim();
      if (c.type === 'auxVerb')     return (c.userValue || '').trim();
      if (c.type === 'dropdown')    return `${c.userValue || ''} ${c.base || ''}`.trim();
      if (c.type === 'punctuation') return c.text || '';
      return '';
    });
    let allCorrect = user.length === target.length;
    const updated = selectedCards.map((c, i) => {
      let ok = user[i]?.toLowerCase() === target[i]?.toLowerCase();
      if (c.type === 'auxVerb') ok = ok && (c.auxChoice || '') === (c.infinitive || '');
      if (!ok) allCorrect = false;
      return { ...c, status: ok ? 'correct' : 'incorrect' as 'correct' | 'incorrect' };
    });
    setSelectedCards(updated);
    setFeedback(allCorrect ? 'correct' : 'incorrect');
    if (allCorrect) setStreak(s => s + 1); else setStreak(0);
  };

  const nextStep = () => {
    const ex = exercises[exIdx];
    const isLast = stepIdx === ex.steps.length - 1;

    if (isLast && feedback === 'correct' && category) {
      const tense = getTenseFromTitle(ex.title);
      if (tense) {
        const order = ['noob', 'pro', 'expert', 'god'];
        setProgress(prev => {
          const updated: LevelProgress = {
            ...prev,
            [category]: { ...(prev[category] || {}), [tense]: (prev[category]?.[tense] || 0) + 1 },
          };
          saveProgress(updated);
          const ci = order.indexOf(category);
          if (ci < order.length - 1) {
            const next = order[ci + 1];
            if (!isUnlocked(next, prev) && isUnlocked(next, updated)) setJustUnlocked(next);
          }
          return updated;
        });
      }
    }

    let newE = exIdx, newS = stepIdx;
    if (!isLast) {
      const sentence = selectedCards.map(c => {
        if (c.type === 'standard')    return c.text || '';
        if (c.type === 'verb')        return c.userValue || '';
        if (c.type === 'auxVerb')     return c.userValue || '';
        if (c.type === 'dropdown')    return `${c.userValue || ''} ${c.base || ''}`.trim();
        if (c.type === 'punctuation') return c.text || '';
        return '';
      }).filter(Boolean).join(' ');
      setCompletedStep1(sentence); newS++;
    } else if (exIdx < exercises.length - 1) {
      setCompletedStep1(null); newE++; newS = 0;
    } else { setScreen('complete'); return; }

    setExIdx(newE); setStepIdx(newS); loadExercise(exercises, newE, newS);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <header className="fixed top-0 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={goToMenu}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center"><Brain className="w-5 h-5 text-white" /></div>
            <span className="font-display font-bold text-xl tracking-tight">Satzbau<span className="text-indigo-400">Pro</span></span>
          </div>
          {streak > 0 && (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm">
              <Flame className="w-4 h-4 fill-orange-400" />{streak} Streak!
            </motion.div>
          )}
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 max-w-2xl mx-auto min-h-screen flex flex-col">
        <AnimatePresence mode="wait">

          {/* ── MENU PATH ── */}
          {screen === 'menu' && (
            <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center w-full">
              <h1 className="text-3xl md:text-5xl font-display font-black text-center mb-1 tracking-tight">
                Satzbau<span className="text-indigo-400">Pro</span>
              </h1>
              <p className="text-zinc-500 text-center text-xs mb-8 max-w-xs">
                Fill 3 stones per tense (12 total) to unlock the next level
              </p>

              <div className="w-full flex flex-col items-center">
                {LEVEL_META.map((lv, lvIdx) => {
                  const unlocked = isUnlocked(lv.id, progress);
                  const filled   = stonesFilled(progress, lv.id);
                  const isLast   = lvIdx === LEVEL_META.length - 1;

                  return (
                    <React.Fragment key={lv.id}>
                      {/* Level node */}
                      <motion.button
                        whileHover={unlocked ? { scale: 1.02 } : {}}
                        whileTap={unlocked ? { scale: 0.98 } : {}}
                        onClick={() => unlocked && selectCategory(lv.id)}
                        disabled={!unlocked}
                        className={`relative w-full max-w-sm rounded-2xl p-4 flex items-center gap-4 border-2 transition-all ${
                          unlocked
                            ? `bg-gradient-to-r ${lv.bg} border-transparent shadow-lg cursor-pointer hover:shadow-xl`
                            : 'bg-zinc-900 border-zinc-800 cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div className="text-4xl">{lv.emoji}</div>
                        <div className="text-left flex-1 min-w-0">
                          <div className="font-display font-black text-xl leading-tight">{lv.title}</div>
                          <div className="text-white/70 text-xs">{lv.sub} · {lv.desc}</div>
                        </div>
                        {!unlocked && <Lock className="w-5 h-5 text-zinc-500 shrink-0" />}
                        {unlocked && filled >= REQUIRED_TO_UNLOCK && <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 shrink-0" />}
                        {unlocked && filled < REQUIRED_TO_UNLOCK && (
                          <div className="text-white/80 text-xs font-bold shrink-0">{filled}/{REQUIRED_TO_UNLOCK}</div>
                        )}
                      </motion.button>

                      {/* Stepping stones to next level */}
                      {!isLast && (
                        <div className="flex flex-col items-center w-full">
                          <div className="w-px h-3 bg-zinc-700" />
                          <div className="w-full max-w-sm bg-zinc-900/80 border border-zinc-800 rounded-2xl px-5 py-4 flex flex-col gap-3">
                            {LEVEL_TENSES[lv.id].map((t, ti) => (
                              <StoneRow key={t.id} tense={t} count={progress[lv.id]?.[t.id] || 0} align={ti % 2 === 0 ? 'left' : 'right'} />
                            ))}
                            <div className="mt-1 pt-2 border-t border-zinc-800">
                              <div className="flex justify-between text-[10px] text-zinc-600 mb-1">
                                <span>→ unlocks {LEVEL_META[lvIdx + 1]?.title}</span>
                                <span>{Math.min(filled, REQUIRED_TO_UNLOCK)}/{REQUIRED_TO_UNLOCK}</span>
                              </div>
                              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${Math.min(filled / REQUIRED_TO_UNLOCK * 100, 100)}%` }}
                                  transition={{ duration: 0.6, ease: 'easeOut' }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-px h-3 bg-zinc-700" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <button onClick={() => { if (confirm('Reset all progress?')) { setProgress({}); localStorage.removeItem(STORAGE_KEY); } }}
                className="mt-10 text-zinc-700 hover:text-zinc-500 text-xs transition-colors">
                Reset progress
              </button>
            </motion.div>
          )}

          {/* ── TENSE SELECT ── */}
          {screen === 'tense' && (
            <motion.div key="tense" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
              <button onClick={goToMenu} className="self-start flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Select Tenses</h2>
              <p className="text-zinc-400 text-center mb-10">Mix and match tenses for your training session.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                {(category === 'god' ? [
                  { id: 'mixture',  label: 'Mixture',   sub: 'All advanced conjunctions' },
                  { id: 'da',       label: 'da',         sub: 'Since / Because'           },
                  { id: 'wenn_als', label: 'wenn / als', sub: 'When / If'                 },
                  { id: 'nachdem',  label: 'nachdem',    sub: 'After (+ Pluperfect)'      },
                ] : [
                  { id: 'present',     label: 'Present',     sub: 'Präsens'              },
                  { id: 'past',        label: 'Past',         sub: 'Perfekt / Präteritum' },
                  { id: 'future',      label: 'Future',       sub: 'Werden + Infinitiv'   },
                  { id: 'conditional', label: 'Conditional',  sub: 'Würden, Hätten, Wären'},
                ]).map(t => {
                  const sel = tenses.includes(t.id);
                  const done = progress[category!]?.[t.id] || 0;
                  return (
                    <motion.button key={t.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => toggleTense(t.id)}
                      className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                        sel ? 'border-indigo-500 bg-indigo-500/10' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'}`}>
                      <div className="text-left">
                        <div className={`font-bold text-lg ${sel ? 'text-indigo-300' : 'text-zinc-200'}`}>{t.label}</div>
                        <div className="text-zinc-500 text-sm">{t.sub}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${sel ? 'border-indigo-500 bg-indigo-500' : 'border-zinc-700'}`}>
                          {sel && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <div className="text-[10px] text-zinc-500">{done} done</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="w-full max-w-md mb-8">
                <label className="flex items-center justify-between text-zinc-300 mb-2">
                  <span className="font-medium">Sentences per tense:</span>
                  <span className="font-bold text-indigo-400">{numSentences}</span>
                </label>
                <input type="range" min="1" max="20" value={numSentences}
                  onChange={e => setNumSentences(parseInt(e.target.value))} className="w-full accent-indigo-500" />
              </div>

              <motion.button whileHover={tenses.length > 0 ? { scale: 1.05 } : {}} whileTap={tenses.length > 0 ? { scale: 0.95 } : {}}
                disabled={tenses.length === 0} onClick={startExercises}
                className={`w-full max-w-md py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  tenses.length > 0 ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}>
                Start Training <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {/* ── EXERCISE ── */}
          {screen === 'exercise' && exercises[exIdx] && (
            <motion.div key="exercise" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <button onClick={goToMenu} className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="font-display font-bold text-xl text-indigo-400">{exercises[exIdx].title}</h2>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm font-medium text-zinc-300">
                  Mission {exIdx + 1} of {exercises.length}
                </div>
              </div>

              {category === 'god' && (
                <div className="mb-6">
                  <button onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold hover:bg-amber-500/20 transition-colors">
                    <Lightbulb className="w-4 h-4" />{showHint ? 'Hide Hint' : 'Need a hint?'}
                  </button>
                  <AnimatePresence>
                    {showHint && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="mt-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-200/80 text-sm leading-relaxed">
                          <strong className="text-amber-400">als</strong> = when (single event in past).<br />
                          <strong className="text-amber-400">wenn</strong> = when/if (present, future, repeated past).<br />
                          <strong className="text-amber-400">da</strong> = since/because.<br />
                          <span className="inline-block mt-2 px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-bold text-xs">⚠ Verb-Comma-Verb!</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {completedStep1 && stepIdx > 0 && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
                  <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">✓ Schritt 1 — dein Satz</div>
                  <p className="font-display text-lg text-emerald-200">{completedStep1}</p>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 mb-8">
                <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">Target</div>
                <p className="font-display text-2xl md:text-3xl font-medium text-white mb-4">"{exercises[exIdx].steps[stepIdx].english}"</p>
                <p className="text-zinc-400 text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4" />{exercises[exIdx].steps[stepIdx].instruction}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Your Sentence (Drag to rearrange, click to remove)</div>
                <Reorder.Group axis="x" values={selectedCards} onReorder={setSelectedCards}
                  className={`min-h-[120px] p-4 rounded-2xl border-2 transition-colors flex flex-wrap gap-3 items-end bg-white shadow-inner ${selectedCards.length > 0 ? 'border-indigo-300' : 'border-zinc-300 border-dashed'}`}>
                  {selectedCards.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 italic text-sm py-8">Select cards from the word bank below...</div>
                  )}
                  {selectedCards.map(card => (
                    <Reorder.Item key={card.id} value={card} className="cursor-grab active:cursor-grabbing"
                      onDragStart={() => { isDragging.current = true; }}
                      onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}>
                      <Flashcard card={card} onClick={() => moveCard(card.id, 'selected')}
                        onUpdateValue={val => updateCardValue(card.id, val)}
                        onUpdateAuxChoice={val => updateAuxChoice(card.id, val)} />
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>

              <div className="mb-12">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Word Bank (Click to add)</div>
                <div className="min-h-[120px] p-4 rounded-2xl bg-white border border-zinc-300 shadow-inner flex flex-wrap gap-3 items-end justify-center">
                  {bankCards.length === 0 && <div className="w-full h-full flex items-center justify-center text-zinc-400 italic text-sm py-8">All cards used!</div>}
                  <AnimatePresence>
                    {bankCards.map(card => (
                      <motion.div key={card.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                        <Flashcard card={card} onClick={() => moveCard(card.id, 'bank')}
                          onUpdateValue={val => updateCardValue(card.id, val)}
                          onUpdateAuxChoice={val => updateAuxChoice(card.id, val)} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pb-12">
                {feedback === null ? (
                  <motion.button whileHover={selectedCards.length > 0 ? { scale: 1.05 } : {}} whileTap={selectedCards.length > 0 ? { scale: 0.95 } : {}}
                    disabled={selectedCards.length === 0} onClick={checkAnswer}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${selectedCards.length > 0 ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}>
                    Check Answer
                  </motion.button>
                ) : feedback === 'incorrect' ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold">
                      <XCircle className="w-5 h-5" /> Not quite right. Check verbs or dropdowns!
                    </div>
                    <button onClick={() => setFeedback(null)} className="px-8 py-4 rounded-xl font-bold text-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors">Try Again</button>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-5 h-5" /> Perfect syntax! W!
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={nextStep}
                      className="px-8 py-4 rounded-xl font-bold text-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2">
                      {stepIdx < exercises[exIdx].steps.length - 1 ? 'Next Step' : 'Next Mission'} <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── COMPLETE ── */}
          {screen === 'complete' && (
            <motion.div key="complete" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full text-center">
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                <Trophy className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-display font-black mb-4">GG! You Did It!</h2>

              {justUnlocked && (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="mb-6 px-6 py-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
                  <div className="text-3xl mb-1">🔓</div>
                  <div className="font-bold text-lg">{LEVEL_META.find(l => l.id === justUnlocked)?.title} unlocked!</div>
                  <div className="text-yellow-400/70 text-sm">Keep going!</div>
                </motion.div>
              )}

              <p className="text-zinc-400 mb-6 text-lg">Your German syntax is looking sharp.</p>

              {category && (
                <div className="w-full mb-8 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <div className="text-zinc-400 text-xs uppercase tracking-widest mb-3 font-bold">
                    {category.toUpperCase()} progress
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {LEVEL_TENSES[category]?.map(t => {
                      const count  = progress[category]?.[t.id] || 0;
                      const stones = Math.min(count, STONES_PER_TENSE);
                      return (
                        <div key={t.id} className="flex items-center gap-3">
                          <span className="text-zinc-500 text-xs w-20 shrink-0 text-right">{t.label}</span>
                          <div className="flex gap-1.5">
                            {Array.from({ length: STONES_PER_TENSE }).map((_, i) => (
                              <div key={i} className={`w-5 h-5 rounded-full transition-all ${i < stones ? t.stoneColor : 'bg-zinc-700'}`} />
                            ))}
                          </div>
                          <span className="text-zinc-600 text-xs">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={goToMenu}
                className="w-full py-4 rounded-xl font-bold text-lg bg-white text-black hover:bg-zinc-200 transition-all">
                Back to Path
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
