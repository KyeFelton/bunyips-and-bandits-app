import { SkillType } from "../enums/SkillType";
import { Item } from "./items";
import { Trait } from "./traits";

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
};
