import { startingSpecies } from "../data/species";
import { startingAncestry } from "../data/ancestries";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "./items";
import { PathProgression } from "./paths";
import { Trait } from "./traits";

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

export const defaultCharacter: CharacterSaveFile = {
  name: "",
  ancestry: startingAncestry.name,
  species: startingSpecies.name,
  gender: "",
  age: 0,
  personality: "",
  background: "",
  languages: [],
  level: 0,
  paths: [],
  customTraits: [],
  skillLevelUpgrades: {},
  currentPhysique: startingSpecies.physique,
  physiqueUpgrades: 0,
  currentMorale: startingSpecies.morale,
  moraleUpgrades: 0,
  currentStamina: startingSpecies.stamina,
  staminaUpgrades: 0,
  items: {},
  money: 0,
  image: undefined,
};

export type SaveFile = {
  characters: Record<string, CharacterSaveFile>;
};
