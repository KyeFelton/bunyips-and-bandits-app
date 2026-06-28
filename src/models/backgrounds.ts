import { SkillType } from "../enums/SkillType";
import { Item } from "./items";
import { Trait } from "./traits";

export type MoneyTier = "Poor" | "Average" | "Wealthy" | "Prosperous";

export const MONEY_TIER_AMOUNTS: Record<MoneyTier, number> = {
  Poor: 0,
  Average: 20,
  Wealthy: 500,
  Prosperous: 20000,
};

export type StartingItemGroup = {
  name: string;
  items: Item[];
};

export type Background = {
  name: string;
  description: string;
  expertiseSkills: SkillType[];
  traits: Trait[];
  startingItems: StartingItemGroup[];
  availableMoneyTiers: MoneyTier[];
};
