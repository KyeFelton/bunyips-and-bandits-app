import { Effect } from "./effect";

export type Item = {
  name: string;
  description: string;
  effects?: Effect[];
  singleUse: boolean;
  weight: number;
  defaultCost?: number;
};

export type CharacterItem = Item & {
  equipped: boolean;
  quantity: number;
};

export type ItemDictionary = Record<string, CharacterItem>;
