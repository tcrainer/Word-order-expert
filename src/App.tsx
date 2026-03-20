import { motion, AnimatePresence, Reorder } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Brain, Zap, Trophy, ArrowRight, ArrowLeft, CheckCircle2, XCircle, Lightbulb, Flame } from 'lucide-react';
import { CATEGORIES_DATA } from './data';
import { BankCard, Exercise } from './types';
import { Flashcard } from './components/Flashcard';

type Screen = 'menu' | 'tense' | 'exercise' | 'complete';

export default function App() {
  const [screen, setScreen] = useState<Screen>('menu');
  const [category, setCategory] = useState<string | null>(null);
  const [tenses, setTenses] = useState<string[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exIdx, setExIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [bankCards, setBankCards] = useState<BankCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<BankCard[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);
  const [numSentences, setNumSentences] = useState(6);
  const isDragging = useRef(false);

  const goToMenu = () => {
    setScreen('menu');
    setCategory(null);
    setTenses([]);
    setExercises([]);
    setExIdx(0);
    setStepIdx(0);
    setShowHint(false);
  };

  const selectCategory = (cat: string) => {
    setCategory(cat);
    setTenses([]);
    setScreen('tense');
  };

  const toggleTense = (tense: string) => {
    setTenses(prev =>
      prev.includes(tense) ? prev.filter(t => t !== tense) : [...prev, tense]
    );
  };

  const startExercises = () => {
    if (tenses.length === 0 || !category) return;
    const catData = CATEGORIES_DATA[category];
    let combined: Exercise[] = [];
    
    tenses.forEach(t => {
      if (catData[t as keyof typeof catData]) {
        let currentTenseExercises = [...catData[t as keyof typeof catData]!];
        // Shuffle currentTenseExercises
        for (let i = currentTenseExercises.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [currentTenseExercises[i], currentTenseExercises[j]] = [currentTenseExercises[j], currentTenseExercises[i]];
        }
        // Take numSentences
        combined = combined.concat(currentTenseExercises.slice(0, numSentences));
      }
    });

    // Shuffle combined exercises
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    setExercises(combined);
    setExIdx(0);
    setStepIdx(0);
    setShowHint(false);
    loadExercise(combined, 0, 0);
    setScreen('exercise');
  };

  const loadExercise = (exs: Exercise[], eIdx: number, sIdx: number) => {
    const ex = exs[eIdx];
    if (!ex) {
      setScreen('complete');
      return;
    }
    const step = ex.steps[sIdx];
    if (!step) {
      setScreen('complete');
      return;
    }

    // Deep clone and shuffle bank cards
    const clonedBank = ex.bank.map(c => ({ ...c, userValue: '' }));
    for (let i = clonedBank.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clonedBank[i], clonedBank[j]] = [clonedBank[j], clonedBank[i]];
    }

    setBankCards(clonedBank);
    setSelectedCards([]);
    setFeedback(null);
  };

  const moveCard = (id: string, source: 'bank' | 'selected') => {
    if (isDragging.current) return;
    if (feedback === 'correct') return;
    setFeedback(null);

    if (source === 'bank') {
      const cardIdx = bankCards.findIndex(c => c.id === id);
      if (cardIdx === -1) return;
      const card = bankCards[cardIdx];
      setBankCards(prev => prev.filter(c => c.id !== id));
      setSelectedCards(prev => [...prev, { ...card, status: null }]);
    } else {
      const cardIdx = selectedCards.findIndex(c => c.id === id);
      if (cardIdx === -1) return;
      const card = selectedCards[cardIdx];
      setSelectedCards(prev => prev.filter(c => c.id !== id));
      setBankCards(prev => [...prev, { ...card, status: null }]);
    }
  };

  const updateCardValue = (id: string, val: string) => {
    setBankCards(prev => prev.map(c => c.id === id ? { ...c, userValue: val, status: null } : c));
    setSelectedCards(prev => prev.map(c => c.id === id ? { ...c, userValue: val, status: null } : c));
    setFeedback(null);
  };

  const checkAnswer = () => {
    const step = exercises[exIdx]?.steps[stepIdx];
    if (!step) return;

    const target = step.target;
    const user = selectedCards.map(c => {
      if (c.type === 'standard') return c.text || '';
      if (c.type === 'verb') return (c.userValue || '').trim();
      if (c.type === 'dropdown') return `${c.userValue || ''} ${c.base || ''}`.trim();
      if (c.type === 'punctuation') return c.text || '';
      return '';
    });

    let allCorrect = user.length === target.length;
    const updatedCards = selectedCards.map((c, i) => {
      const isCorrect = user[i]?.toLowerCase() === target[i]?.toLowerCase();
      if (!isCorrect) allCorrect = false;
      return { ...c, status: isCorrect ? 'correct' : 'incorrect' as 'correct' | 'incorrect' };
    });

    setSelectedCards(updatedCards);
    setFeedback(allCorrect ? 'correct' : 'incorrect');
    
    if (allCorrect) {
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };

  const nextStep = () => {
    const ex = exercises[exIdx];
    let newEIdx = exIdx;
    let newSIdx = stepIdx;

    if (stepIdx < ex.steps.length - 1) {
      newSIdx++;
    } else if (exIdx < exercises.length - 1) {
      newEIdx++;
      newSIdx = 0;
    } else {
      setScreen('complete');
      return;
    }

    setExIdx(newEIdx);
    setStepIdx(newSIdx);
    loadExercise(exercises, newEIdx, newSIdx);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Top Bar / Header */}
      <header className="fixed top-0 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={goToMenu}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Satzbau<span className="text-indigo-400">Pro</span></span>
          </div>
          
          {streak > 0 && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm"
            >
              <Flame className="w-4 h-4 fill-orange-400" />
              {streak} Streak!
            </motion.div>
          )}
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 max-w-5xl mx-auto min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {screen === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full"
            >
              <h1 className="text-4xl md:text-6xl font-display font-black text-center mb-6 tracking-tight">
                Master German <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Sentence Structure
                </span>
              </h1>
              <p className="text-zinc-400 text-center text-lg mb-12 max-w-xl">
                Level up your German grammar. Drag, drop, and conjugate your way to fluency. Choose your difficulty to start.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {[
                  { id: 'noob', icon: '📘', title: 'Noob (A1/A2)', desc: 'Basic Inversion (Time/Sequence first)', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', hover: 'hover:border-blue-400' },
                  { id: 'pro', icon: '📙', title: 'Pro (B1)', desc: 'Inversion + Subordinate Clauses', color: 'from-purple-500/20 to-fuchsia-500/20', border: 'border-purple-500/30', hover: 'hover:border-purple-400' },
                  { id: 'expert', icon: '📗', title: 'Expert (B2)', desc: 'zu-Infinitives (um...zu, es ist wichtig)', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30', hover: 'hover:border-emerald-400' },
                  { id: 'god', icon: '📕', title: 'God Tier (C1)', desc: 'Subordinate First (wenn, als, da)', color: 'from-rose-500/20 to-orange-500/20', border: 'border-rose-500/30', hover: 'hover:border-rose-400' },
                ].map(cat => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectCategory(cat.id)}
                    className={`p-6 rounded-2xl border bg-gradient-to-br ${cat.color} ${cat.border} ${cat.hover} transition-all text-left group relative overflow-hidden`}
                  >
                    <div className="text-4xl mb-4">{cat.icon}</div>
                    <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-white transition-colors">{cat.title}</h3>
                    <p className="text-zinc-400 text-sm">{cat.desc}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'tense' && (
            <motion.div
              key="tense"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full"
            >
              <button onClick={goToMenu} className="self-start flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Levels
              </button>
              
              <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Select Tenses</h2>
              <p className="text-zinc-400 text-center mb-10">Mix and match tenses for your training session.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                {(category === 'god' ? [
                  { id: 'mixture', label: 'Mixture', sub: 'All advanced conjunctions' },
                  { id: 'da', label: 'da', sub: 'Since / Because' },
                  { id: 'wenn_als', label: 'wenn / als', sub: 'When / If' },
                  { id: 'nachdem', label: 'nachdem', sub: 'After (+ Pluperfect)' },
                ] : [
                  { id: 'present', label: 'Present', sub: 'Präsens' },
                  { id: 'past', label: 'Past', sub: 'Perfekt / Präteritum' },
                  { id: 'future', label: 'Future', sub: 'Werden + Infinitiv' },
                  { id: 'conditional', label: 'Conditional', sub: 'Würden, Hätten, Wären' },
                ]).map(t => {
                  const isSelected = tenses.includes(t.id);
                  return (
                    <motion.button
                      key={t.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleTense(t.id)}
                      className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                        isSelected 
                          ? 'border-indigo-500 bg-indigo-500/10' 
                          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                      }`}
                    >
                      <div className="text-left">
                        <div className={`font-bold text-lg ${isSelected ? 'text-indigo-300' : 'text-zinc-200'}`}>{t.label}</div>
                        <div className="text-zinc-500 text-sm">{t.sub}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-zinc-700'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
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
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={numSentences} 
                  onChange={(e) => setNumSentences(parseInt(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              <motion.button
                whileHover={tenses.length > 0 ? { scale: 1.05 } : {}}
                whileTap={tenses.length > 0 ? { scale: 0.95 } : {}}
                disabled={tenses.length === 0}
                onClick={startExercises}
                className={`w-full max-w-md py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  tenses.length > 0 
                    ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                }`}
              >
                Start Training <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {screen === 'exercise' && exercises[exIdx] && (
            <motion.div
              key="exercise"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col"
            >
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
                  <button 
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold hover:bg-amber-500/20 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4" /> 
                    {showHint ? 'Hide Hint' : 'Need a hint?'}
                  </button>
                  
                  <AnimatePresence>
                    {showHint && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-200/80 text-sm leading-relaxed">
                          <strong className="text-amber-400">als</strong> = when (single event in past).<br/>
                          <strong className="text-amber-400">wenn</strong> = when/if (present, future, repeated past).<br/>
                          <strong className="text-amber-400">da</strong> = since/because (often at start instead of 'weil').<br/>
                          <span className="inline-block mt-2 px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-bold text-xs">⚠ Remember: Verb-Comma-Verb!</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 mb-8">
                <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">Target</div>
                <p className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
                  "{exercises[exIdx].steps[stepIdx].english}"
                </p>
                <p className="text-zinc-400 text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4" /> {exercises[exIdx].steps[stepIdx].instruction}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Your Sentence (Drag to rearrange, click to remove)</div>
                <Reorder.Group 
                  axis="x" 
                  values={selectedCards} 
                  onReorder={setSelectedCards} 
                  className={`min-h-[120px] p-4 rounded-2xl border-2 transition-colors flex flex-wrap gap-3 items-end bg-white shadow-inner ${
                    selectedCards.length > 0 ? 'border-indigo-300' : 'border-zinc-300 border-dashed'
                  }`}
                >
                  {selectedCards.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 italic text-sm py-8">
                      Select cards from the word bank below...
                    </div>
                  )}
                  {selectedCards.map(card => (
                    <Reorder.Item 
                      key={card.id} 
                      value={card} 
                      className="cursor-grab active:cursor-grabbing"
                      onDragStart={() => { isDragging.current = true; }}
                      onDragEnd={() => { 
                        setTimeout(() => { isDragging.current = false; }, 100); 
                      }}
                    >
                      <Flashcard 
                        card={card} 
                        onClick={() => moveCard(card.id, 'selected')} 
                        onUpdateValue={(val) => updateCardValue(card.id, val)}
                      />
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>

              <div className="mb-12">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Word Bank (Click to add)</div>
                <div className="min-h-[120px] p-4 rounded-2xl bg-white border border-zinc-300 shadow-inner flex flex-wrap gap-3 items-end justify-center">
                  {bankCards.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 italic text-sm py-8">
                      All cards used!
                    </div>
                  )}
                  <AnimatePresence>
                    {bankCards.map(card => (
                      <motion.div key={card.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                        <Flashcard 
                          card={card} 
                          onClick={() => moveCard(card.id, 'bank')} 
                          onUpdateValue={(val) => updateCardValue(card.id, val)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pb-12">
                {feedback === null ? (
                  <motion.button
                    whileHover={selectedCards.length > 0 ? { scale: 1.05 } : {}}
                    whileTap={selectedCards.length > 0 ? { scale: 0.95 } : {}}
                    disabled={selectedCards.length === 0}
                    onClick={checkAnswer}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      selectedCards.length > 0 
                        ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    Check Answer
                  </motion.button>
                ) : feedback === 'incorrect' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold">
                      <XCircle className="w-5 h-5" /> Not quite right. Check verbs or dropdowns!
                    </div>
                    <button 
                      onClick={() => setFeedback(null)}
                      className="px-8 py-4 rounded-xl font-bold text-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-5 h-5" /> Perfect syntax! W!
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextStep}
                      className="px-8 py-4 rounded-xl font-bold text-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2"
                    >
                      {stepIdx < exercises[exIdx].steps.length - 1 ? 'Next Step' : 'Next Mission'} <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {screen === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full text-center"
            >
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                <Trophy className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-display font-black mb-4">GG! You Did It!</h2>
              <p className="text-zinc-400 mb-12 text-lg">
                You've successfully completed this training block. Your German syntax is looking sharp.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToMenu}
                className="w-full py-4 rounded-xl font-bold text-lg bg-white text-black hover:bg-zinc-200 transition-all"
              >
                Back to Main Menu
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
