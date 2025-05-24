import { SetStateAction } from "jotai";
import { SaveFile } from "../models/saveFile";
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
): { isValid: boolean; errorMessage?: string } => {
  if (typeof data !== "object" || data === null) {
    return {
      isValid: false,
      errorMessage: "Save file must be a valid JSON object",
    };
  }

  const saveData = data as SaveFile;

  if (typeof saveData.name !== "string") {
    return {
      isValid: false,
      errorMessage: "Expected a string value for 'name'",
    };
  }

  if (typeof saveData.species !== "string") {
    return {
      isValid: false,
      errorMessage: "Expected a string value for 'species'",
    };
  }

  if (typeof saveData.level !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'level'",
    };
  }

  if (!Array.isArray(saveData.languages)) {
    return {
      isValid: false,
      errorMessage: "Expected an array for 'languages'",
    };
  }

  if (typeof saveData.currentPhysique !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'currentPhysique'",
    };
  }

  if (typeof saveData.physiqueUpgrades !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'physiqueUpgrades'",
    };
  }

  if (typeof saveData.currentMorale !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'currentMorale'",
    };
  }

  if (typeof saveData.moraleUpgrades !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'moraleUpgrades'",
    };
  }

  if (typeof saveData.currentStamina !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'currentStamina'",
    };
  }

  if (typeof saveData.staminaUpgrades !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'staminaUpgrades'",
    };
  }

  if (typeof saveData.money !== "number") {
    return {
      isValid: false,
      errorMessage: "Expected a number value for 'money'",
    };
  }

  if (!Array.isArray(saveData.paths)) {
    return { isValid: false, errorMessage: "Expected an array for 'paths'" };
  }

  if (typeof saveData.items !== "object" || saveData.items === null) {
    return { isValid: false, errorMessage: "Expected an object for 'items'" };
  }

  if (!Array.isArray(saveData.customTraits)) {
    return {
      isValid: false,
      errorMessage: "Expected an array for 'customTraits'",
    };
  }

  return { isValid: true };
};

export const loadCharacter = async (
  setters: CharacterSetters,
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
          const validation = validateSaveFile(data);

          if (!validation.isValid) {
            throw new Error(
              validation.errorMessage || "Invalid save file format"
            );
          }

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

          navigate?.(CharacterSheetRoute);
        } catch (error) {
          console.error(
            "Error loading character:",
            error instanceof Error ? error.message : "Unknown error"
          );

          if (onError) {
            onError(
              "Failed to Load Character",
              error instanceof Error
                ? error.message + ". Please make sure the file is valid."
                : "Failed to load character file. Please make sure the file is valid."
            );
          } else {
            alert(
              "Failed to load character file. Please make sure the file is valid."
            );
          }
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};

export const saveCharacter = (saveFile: SaveFile) => {
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

export const resetCharacter = (setters: CharacterSetters) => {
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
