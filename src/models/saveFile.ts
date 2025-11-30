import { startingSpecies } from "../data/species";
import { startingAncestry } from "../data/ancestries";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "./items";
import { PathProgression } from "./paths";
import { Trait } from "./traits";
import { Condition } from "./conditions";

export type CharacterSaveFile = {
  name: string;
  ancestry: string;
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
  currentBody: number;
  bodyUpgrades: number;
  currentMind: number;
  mindUpgrades: number;
  currentStamina: number;
  staminaUpgrades: number;
  items: ItemDictionary;
  money: number;
  image: string | undefined;
  conditions: Condition[];
};

export const defaultCharacter: CharacterSaveFile = {
  name: "",
  ancestry: startingAncestry.name,
  species: startingSpecies.name,
  gender: "",
  age: 0,
  personality: "",
  background: "",
  languages: [],
  level: 1,
  paths: [],
  customTraits: [],
  skillLevelUpgrades: {},
  currentBody: startingSpecies.body,
  bodyUpgrades: 0,
  currentMind: startingSpecies.mind,
  mindUpgrades: 0,
  currentStamina: startingSpecies.stamina,
  staminaUpgrades: 0,
  items: {},
  money: 0,
  image: undefined,
  conditions: [],
};

export type SaveFile = {
  characters: Record<string, CharacterSaveFile>;
};
