import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";
import { CharacterItem } from "../models/items";
import { SelectedPath } from "../models/paths";
import { Minotaur } from "../models/species";

// Basic character info
export const nameAtom = atom<string>("Timber");
export const speciesAtom = atom<string>(Minotaur.name);
export const genderAtom = atom<string>("");
export const ageAtom = atom<number>(0);
export const personalityAtom = atom<string>("");
export const languagesAtom = atom<string[]>([]);
export const imageAtom = atom<string | undefined>(undefined);

// Character progression
export const levelAtom = atom<number>(1);
export const pathsAtom = atom<SelectedPath[]>([]);
export const skillLevelUpgradesAtom = atom<Partial<Record<SkillType, number>>>(
  {}
);

// Character stats
export const currentHealthAtom = atom<number>(Minotaur.health.initial);
export const currentSanityAtom = atom<number>(11);
export const currentStaminaAtom = atom<number>(11);

// Items and equipment
export const itemsAtom = atom<CharacterItem[]>([]);
export const moneyAtom = atom<number>(0);
