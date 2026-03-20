export type CardType = 'standard' | 'verb' | 'dropdown' | 'punctuation' | 'auxVerb';
export type CardCat = 'time' | 'verb' | 'subject' | 'detail' | 'subjunction' | 'place' | 'punctuation' | 'adjective' | 'adverb';

export interface BankCard {
  id: string;
  text?: string;
  infinitive?: string;
  base?: string;
  options?: string[];
  type: CardType;
  cat: CardCat;
  userValue?: string;
  auxChoice?: string;
  hint?: string;
  gender?: 'm' | 'f' | 'n' | 'pl';
  status?: 'correct' | 'incorrect' | null;
}

export interface Step {
  instruction: string;
  english: string;
  target: string[];
}

export interface Exercise {
  title: string;
  bank: BankCard[];
  steps: Step[];
}

export interface CategoryData {
  present?: Exercise[];
  past?: Exercise[];
  future?: Exercise[];
  conditional?: Exercise[];
  mixture?: Exercise[];
  da?: Exercise[];
  wenn_als?: Exercise[];
  nachdem?: Exercise[];
}

export interface Categories {
  [key: string]: CategoryData;
}
