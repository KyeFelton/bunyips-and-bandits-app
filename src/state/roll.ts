import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";

export type RollDisplayState = {
  dice: number;
  extraText: string;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;
  id: string;
  isCriticalSuccess: boolean;
  modifier: number;
  name: string;
  naturalRoll: number;
  naturalRoll1: number;
  naturalRoll2: number;
  roll: number;
  type: SkillType;
};

export const activeRollAtom = atom<RollDisplayState | null>(null);
