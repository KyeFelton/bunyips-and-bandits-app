import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "./items";
import { PathProgression } from "./paths";
import { Trait } from "./traits";

export type CharacterSaveFile = {
  name: string;
  species: string;
  gender: string;
  age: number;
  personality: string;
  background: string;
  languages: string[];
  level: number;
  paths: PathProgression[];
  customTraits: Trait[];
  skillLevelUpgrades: Partial<Record<SkillType, number>>;
  currentPhysique: number;
  physiqueUpgrades: number;
  currentMorale: number;
  moraleUpgrades: number;
  currentStamina: number;
  staminaUpgrades: number;
  items: ItemDictionary;
  money: number;
  image: string | undefined;
};


export type SaveFile = {
  characters: CharacterSaveFile[]
}
