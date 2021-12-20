import { List } from '../types/shared';

export const pickFirst = (list: List<string>): string => list[0] ?? '';
