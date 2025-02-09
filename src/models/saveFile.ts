import { SkillType } from '../enums/SkillType';
import { CharacterItem } from './items';
import { SelectedPath } from './paths';

export type SaveFile = {
  name: string;
  species: string;
  gender: string;
  age: number;
  personality: string;
  languages: string[];
  level: number;
  paths: SelectedPath[];
  skillLevelUpgrades: Partial<Record<SkillType, number>>;
  currentHealth: number;
  currentSanity: number;
  currentStamina: number;
  items: CharacterItem[];
  money: number;
  image?: string;
};
