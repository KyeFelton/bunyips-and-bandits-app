import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { SaveFile, CharacterSaveFile } from "../models/saveFile";
import {
  nameAtom,
  originAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  backgroundAtom,
  personalityAtom,
  languagesAtom,
  classAtom,
  customTraitsAtom,
  criticalSuccessesAtom,
  currentBodyAtom,
  bodyUpgradesAtom,
  currentMindAtom,
  mindUpgradesAtom,
  currentStaminaAtom,
  staminaUpgradesAtom,
  itemsAtom,
  moneyAtom,
  imageAtom,
  conditionsAtom,
} from "./character";

// Save file atom with localStorage persistence
// This will automatically save to localStorage on every change
// and load from localStorage on initialization
export const saveFileAtom = atomWithStorage<SaveFile>(
  "bunyips-and-bandits-save-file",
  { characters: {} }
);

export const focalCharacterIdAtom = atom<string | undefined>(undefined);

// Derived atom that builds the focal character from individual atoms
export const focalCharacterAtom = atom<CharacterSaveFile>((get) => ({
  name: get(nameAtom),
  origin: get(originAtom),
  species: get(speciesAtom),
  gender: get(genderAtom),
  age: get(ageAtom),
  personality: get(personalityAtom),
  background: get(backgroundAtom),
  languages: get(languagesAtom),
  class: get(classAtom),
  customTraits: get(customTraitsAtom),
  criticalSuccesses: get(criticalSuccessesAtom),
  currentBody: get(currentBodyAtom),
  bodyUpgrades: get(bodyUpgradesAtom),
  currentMind: get(currentMindAtom),
  mindUpgrades: get(mindUpgradesAtom),
  currentStamina: get(currentStaminaAtom),
  staminaUpgrades: get(staminaUpgradesAtom),
  items: get(itemsAtom),
  money: get(moneyAtom),
  image: get(imageAtom),
  conditions: get(conditionsAtom),
}));

// Hook to automatically sync focal character to save file
// Call this in components that need auto-save behavior
export const useSyncFocalCharacter = () => {
  const focalCharacterId = useAtomValue(focalCharacterIdAtom);
  const focalCharacter = useAtomValue(focalCharacterAtom);
  const setSaveFile = useSetAtom(saveFileAtom);

  useEffect(() => {
    // Only sync if we have a focal character ID
    if (focalCharacterId) {
      setSaveFile((prev) => {
        // Only update if the character exists in the save file
        if (prev.characters[focalCharacterId]) {
          return {
            ...prev,
            characters: {
              ...prev.characters,
              [focalCharacterId]: focalCharacter,
            },
          };
        }
        return prev;
      });
    }
  }, [focalCharacterId, focalCharacter, setSaveFile]);
};
