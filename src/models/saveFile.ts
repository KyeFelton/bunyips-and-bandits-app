import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "./items";
import { SelectedPath } from "./paths";
import { Trait } from "./traits";

export type SaveFile = {
  name: string;
  species: string;
  gender: string;
  age: number;
  personality: string;
  background: string;
  languages: string[];
  level: number;
  paths: SelectedPath[];
  customTraits: Trait[];
  skillLevelUpgrades: Partial<Record<SkillType, number>>;
  currentPhysique: number;
  currentMorale: number;
  currentStamina: number;
  items: ItemDictionary;
  money: number;
  image: string;
};
