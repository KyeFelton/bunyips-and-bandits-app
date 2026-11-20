import { SkillType } from "../enums/SkillType";
import { Item } from "./items";
import { Trait } from "./traits";

export type StartingSkillLevel = {
  skill: SkillType,
  level: number;
}

export type StartingItemGroup = {
  name: string;
  money: number;
  items: Item[];
};

export type Background = {
  name: string;
  description: string;
  traits: Trait[];
  startingSkillLevels: StartingSkillLevel[];
  startingItems: StartingItemGroup[];
};
