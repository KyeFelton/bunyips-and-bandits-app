import { Effect } from "./effect";

export type ImmediateEffect = {
  body?: number;
  mind?: number;
  stamina?: number;
  condition?: string;
};

export type Item = {
  name: string;
  description: string;
  effects?: Effect[];
  immediateEffect?: ImmediateEffect;
  singleUse: boolean;
  weight: number;
  defaultCost?: number;
};

export type CharacterItem = Item & {
  equipped: boolean;
  quantity: number;
};

export type ItemDictionary = Record<string, CharacterItem>;
