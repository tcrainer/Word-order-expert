import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import { BankCard } from '../types';

interface FlashcardProps {
  card: BankCard;
  onClick: () => void;
  onUpdateValue: (val: string) => void;
  onUpdateAuxChoice?: (val: string) => void;
}

export function Flashcard({ card, onClick, onUpdateValue, onUpdateAuxChoice }: FlashcardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showHint, setShowHint] = useState(false);

  const insertUmlaut = (char: string) => {
    const val = card.userValue || '';
    onUpdateValue(val + char);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '1') { e.preventDefault(); insertUmlaut('ä'); }
    if (e.key === '2') { e.preventDefault(); insertUmlaut('ö'); }
    if (e.key === '3') { e.preventDefault(); insertUmlaut('ü'); }
    if (e.key === '4') { e.preventDefault(); insertUmlaut('ß'); }
  };

  const getColors = () => {
    if (card.status === 'correct') {
      return 'bg-emerald-100 border-emerald-500 text-emerald-900 shadow-sm';
    }
    if (card.status === 'incorrect') {
      return 'bg-rose-100 border-rose-500 text-rose-900 shadow-sm';
    }

    switch (card.cat) {
      case 'time':
      case 'place':
      case 'adverb':
        return 'bg-violet-100 border-violet-300 text-violet-800 hover:bg-violet-200 shadow-sm';
      case 'adjective':
        return 'bg-pink-100 border-pink-300 text-pink-800 hover:bg-pink-200 shadow-sm';
      case 'verb':
        return 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200 shadow-sm';
      case 'subjunction':
        return 'bg-red-100 border-red-300 text-red-800 hover:bg-red-200 shadow-sm';
      case 'punctuation':
        return 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200 shadow-sm';
    }

    if (card.gender) {
      switch (card.gender) {
        case 'f': return 'bg-red-100 border-red-300 text-red-800 hover:bg-red-200 shadow-sm';
        case 'm': return 'bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200 shadow-sm';
        case 'n': return 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200 shadow-sm';
        case 'pl': return 'bg-yellow-100 border-yellow-300 text-yellow-800 hover:bg-yellow-200 shadow-sm';
      }
    }

    return 'bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200 shadow-sm';
  };

  if (card.cat === 'punctuation') {
    return (
      <motion.div
        onClick={onClick}
        className={`cursor-pointer border-2 rounded-md flex items-center justify-center min-w-[20px] h-[28px] text-base font-black transition-colors ${getColors()}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {card.text}
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer border-2 rounded-md p-1 min-w-[40px] min-h-[32px] flex flex-col items-center justify-end transition-colors ${getColors()}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {card.hint && card.type !== 'verb' && (
        <div className="relative flex items-center mb-auto self-start">
          <button 
            className="w-3 h-3 rounded-full bg-black/10 flex items-center justify-center text-[8px] font-bold hover:bg-black/20"
            onClick={(e) => { e.stopPropagation(); setShowHint(!showHint); }}
          >?</button>
          {showHint && (
            <div className="absolute bottom-full mb-1 left-0 bg-zinc-800 text-white text-[9px] p-1.5 rounded whitespace-nowrap z-10 text-left">
              {card.hint.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {card.type === 'standard' && (
        <span className="text-xs font-medium text-center">{card.text}</span>
      )}

      {card.type === 'verb' && (
        <>
          <div className="flex items-center gap-1 mb-auto">
            <span className="text-[8px] font-bold opacity-60 uppercase tracking-wider">[{card.infinitive}]</span>
            {card.hint && (
              <div className="relative flex items-center">
                <button 
                  className="w-3 h-3 rounded-full bg-black/10 flex items-center justify-center text-[8px] font-bold hover:bg-black/20"
                  onClick={(e) => { e.stopPropagation(); setShowHint(!showHint); }}
                >?</button>
                {showHint && (
                  <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[9px] p-1.5 rounded whitespace-nowrap z-10 text-left">
                    {card.hint.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={card.userValue || ''}
            onChange={(e) => onUpdateValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            placeholder="Form"
            className="w-14 mt-0.5 px-1 py-0.5 text-center text-[10px] font-medium bg-white/80 border border-black/20 rounded focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-black placeholder:text-black/40"
          />
          <div className="flex gap-0.5 mt-0.5">
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ä'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ä</button>
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ö'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ö</button>
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ü'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ü</button>
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ß'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ß</button>
          </div>
        </>
      )}

      {card.type === 'dropdown' && (
        <>
          {card.cat === 'verb' && (
            <span className="text-[8px] font-bold opacity-60 mb-auto uppercase tracking-wider">haben / sein</span>
          )}
          <div className="flex items-center gap-1 mt-auto">
            <select
              value={card.userValue || ''}
              onChange={(e) => onUpdateValue(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="px-1 py-0.5 text-[10px] font-medium bg-white/80 border border-black/20 rounded focus:outline-none focus:border-orange-500 text-black appearance-none cursor-pointer"
            >
              <option value="" disabled>-</option>
              {card.options?.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {card.cat !== 'verb' && (
              <span className={`text-[10px] font-medium whitespace-nowrap ${
                card.gender === 'f' ? 'text-red-800' :
                card.gender === 'm' ? 'text-blue-800' :
                card.gender === 'n' ? 'text-green-800' :
                card.gender === 'pl' ? 'text-yellow-800' : ''
              }`}>
                {card.base}
              </span>
            )}
          </div>
        </>
      )}
      {card.type === 'auxVerb' && (
        <>
          <div className="flex items-center gap-1 mb-auto">
            <span className="text-[8px] font-bold opacity-60 uppercase tracking-wider">[haben / sein]</span>
          </div>
          <select
            value={card.auxChoice || ''}
            onChange={(e) => { onUpdateAuxChoice?.(e.target.value); }}
            onClick={(e) => e.stopPropagation()}
            className="mt-0.5 px-1 py-0.5 text-[10px] font-medium bg-white/80 border border-black/20 rounded focus:outline-none focus:border-green-600 text-black appearance-none cursor-pointer"
          >
            <option value="" disabled>wählen</option>
            <option value="haben">haben</option>
            <option value="sein">sein</option>
          </select>
          <input
            ref={inputRef}
            type="text"
            value={card.userValue || ''}
            onChange={(e) => onUpdateValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            placeholder="Form"
            className="w-14 mt-0.5 px-1 py-0.5 text-center text-[10px] font-medium bg-white/80 border border-black/20 rounded focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-black placeholder:text-black/40"
          />
          <div className="flex gap-0.5 mt-0.5">
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ä'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ä</button>
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ö'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ö</button>
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ü'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ü</button>
            <button onClick={(e) => { e.stopPropagation(); insertUmlaut('ß'); }} className="px-1 py-0 text-[8px] font-bold bg-white/80 border border-black/10 rounded hover:bg-white text-black">ß</button>
          </div>
        </>
      )}
    </motion.div>
  );
}
