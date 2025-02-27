import { SkillType } from '../enums/SkillType';
import { ItemDictionary } from './items';
import { SelectedPath } from './paths';

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
  skillLevelUpgrades: Partial<Record<SkillType, number>>;
  currentHealth: number;
  currentSanity: number;
  currentStamina: number;
  items: ItemDictionary;
  money: number;
  image?: string;
};