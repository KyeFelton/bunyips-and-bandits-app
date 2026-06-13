import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "./items";
import { Trait } from "./traits";
import { Condition } from "./conditions";
import { startingKin } from "../data/kin";
import { Kin } from "./kin";

export type CharacterSaveFile = {
  name: string;
  kin: Kin;
  gender: string;
  age: number;
  personality: string;
  background: string;
  backstory: string;
  languages: string[];
  magicSkills: string[];
  customTraits: Trait[];
  criticalSuccesses: Partial<Record<SkillType, number>>;
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
  kin: startingKin,
  gender: "",
  age: 0,
  personality: "",
  background: "Artisan",
  backstory: "",
  languages: ["Dharrigal", "Englorian"],
  magicSkills: ["Biotic"],
  customTraits: [],
  criticalSuccesses: {},
  currentBody: startingKin.species.body,
  bodyUpgrades: 0,
  currentMind: startingKin.species.mind,
  mindUpgrades: 0,
  currentStamina: startingKin.species.stamina,
  staminaUpgrades: 0,
  items: {},
  money: 0,
  image: undefined,
  conditions: [],
};

export type SaveFile = {
  characters: Record<string, CharacterSaveFile>;
};
