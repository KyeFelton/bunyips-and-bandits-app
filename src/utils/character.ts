import { SetStateAction } from "jotai";
import { CharacterSaveFile, SaveFile } from "../models/saveFile";
import { getSpeciesImage } from "./speciesImages";
import { Trait } from "../models/traits";
import { CharacterSheetRoute } from "../routes";
import { startingSpecies } from "../data/species";
import { PathProgression } from "../models/paths";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "../models/items";

type CharacterSetters = {
  setName: (value: SetStateAction<string>) => void;
  setLevel: (value: SetStateAction<number>) => void;
  setCurrentPhysique: (value: SetStateAction<number>) => void;
  setPhysiqueUpgrades: (value: SetStateAction<number>) => void;
  setCurrentMorale: (value: SetStateAction<number>) => void;
  setMoraleUpgrades: (value: SetStateAction<number>) => void;
  setCurrentStamina: (value: SetStateAction<number>) => void;
  setStaminaUpgrades: (value: SetStateAction<number>) => void;
  setSpecies: (value: SetStateAction<string>) => void;
  setGender: (value: SetStateAction<string>) => void;
  setAge: (value: SetStateAction<number>) => void;
  setBackground: (value: SetStateAction<string>) => void;
  setPersonality: (value: SetStateAction<string>) => void;
  setLanguages: (value: SetStateAction<string[]>) => void;
  setImage: (value: SetStateAction<string | undefined>) => void;
  setMoney: (value: SetStateAction<number>) => void;
  setItems: (value: SetStateAction<ItemDictionary>) => void;
  setPaths: (value: SetStateAction<PathProgression[]>) => void;
  setCustomTraits: (value: SetStateAction<Trait[]>) => void;
  setSkillLevelUpgrades: (
    value: SetStateAction<Partial<Record<SkillType, number>>>
  ) => void;
  setIsFirstLoad?: (value: SetStateAction<boolean>) => void;
};

const validateSaveFile = (
  data: unknown
): data is SaveFile  => {
  let error: string | null = null;

  if (typeof data !== "object" || data === null) {
    error = "Save file must be a valid JSON object";
  }

  const saveData = data as SaveFile;

  if (!Array.isArray(saveData.characters)) {
    error = "Expected an array of characters";
  }

  for (const character of saveData.characters) {
    if (typeof character.name !== "string") {
      error = "Expected a string value for 'name'";
    }
  
    if (typeof character.species !== "string") {
      error = "Expected a string value for 'species'";
    }
  
    if (typeof character.level !== "number") {
      error = "Expected a number value for 'level'";
    }
  
    if (!Array.isArray(character.languages)) {
      error = "Expected an array for 'languages'";
    }
  
    if (typeof character.currentPhysique !== "number") {
      error = "Expected a number value for 'currentPhysique'";
    }
  
    if (typeof character.physiqueUpgrades !== "number") {
      error = "Expected a number value for 'physiqueUpgrades'";
    }
  
    if (typeof character.currentMorale !== "number") {
      error = "Expected a number value for 'currentMorale'";
    }
  
    if (typeof character.moraleUpgrades !== "number") {
      error = "Expected a number value for 'moraleUpgrades'";
    }
  
    if (typeof character.currentStamina !== "number") {
      error = "Expected a number value for 'currentStamina'";
    }
  
    if (typeof character.staminaUpgrades !== "number") {
      error = "Expected a number value for 'staminaUpgrades'";
    }
  
    if (typeof character.money !== "number") {
      error = "Expected a number value for 'money'";
    }
  
    if (!Array.isArray(character.paths)) {
        error = "Expected an array for 'paths'";
    }
  
    if (typeof character.items !== "object" || character.items === null) {
        error = "Expected an object for 'items'";
    }
  
    if (!Array.isArray(character.customTraits)) {
        error = "Expected an array for 'customTraits'";
    }
  }
  
  if (error) {
    console.error(error);
    return false;
  }

  return true;
};

export const loadCharacters = async (
  setCharacters: (value: SetStateAction<SaveFile>) => void,
  navigate?: (path: string) => void,
  onError?: (title: string, message: string) => void
) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (!validateSaveFile(data)) {
            throw Error("Failed to load character file. Please make sure the file is valid.");
          }
          setCharacters(data);
          navigate?.(CharacterSheetRoute);
        } catch (error) {

          if (onError) {
            onError(
              "Failed to load character",
              error instanceof Error ? error.message : ""
            );
          } else {
            alert(error instanceof Error ? error.message : "Failed to load character");
          }
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};

export const setFocalCharacter = (data: CharacterSaveFile, setters: CharacterSetters) => {
    // Update all atoms with the loaded data
    setters.setName(data.name);
    setters.setLevel(data.level);
    setters.setCurrentPhysique(data.currentPhysique);
    setters.setPhysiqueUpgrades(data.physiqueUpgrades);
    setters.setCurrentMorale(data.currentMorale);
    setters.setMoraleUpgrades(data.moraleUpgrades);
    setters.setCurrentStamina(data.currentStamina);
    setters.setStaminaUpgrades(data.staminaUpgrades);
    setters.setSpecies(data.species);
    setters.setGender(data.gender || "");
    setters.setAge(data.age || 0);
    setters.setBackground(data.background || "");
    setters.setPersonality(data.personality || "");
    setters.setLanguages(data.languages);
    setters.setImage(data.image);
    setters.setMoney(data.money);
    setters.setItems(data.items);
    setters.setPaths(data.paths);
    setters.setCustomTraits(data.customTraits);
    setters.setSkillLevelUpgrades(data.skillLevelUpgrades || {});
    setters.setIsFirstLoad?.(false);
}

export const saveData = (saveFile: SaveFile) => {
  const blob = new Blob([JSON.stringify(saveFile, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "character.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exitCharacter = (setters: CharacterSetters) => {
  setters.setName("");
  setters.setSpecies(startingSpecies.name);
  setters.setLevel(1);
  setters.setCurrentPhysique(startingSpecies.physique);
  setters.setPhysiqueUpgrades(0);
  setters.setCurrentMorale(startingSpecies.morale);
  setters.setMoraleUpgrades(0);
  setters.setCurrentStamina(startingSpecies.stamina);
  setters.setStaminaUpgrades(0);
  setters.setGender("");
  setters.setAge(0);
  setters.setBackground("");
  setters.setPersonality("");
  setters.setLanguages([]);
  setters.setImage(getSpeciesImage(startingSpecies.name));
  setters.setMoney(0);
  setters.setItems({});
  setters.setPaths([]);
  setters.setCustomTraits([]);
  setters.setSkillLevelUpgrades({});
  setters.setIsFirstLoad?.(true);
};
