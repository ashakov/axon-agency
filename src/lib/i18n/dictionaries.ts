import type { Locale } from './config';
import type { Dictionary } from './types';
import { en } from './en';
import { ru } from './ru';

export type { Dictionary } from './types';

export const dictionaries: Record<Locale, Dictionary> = { en, ru };
