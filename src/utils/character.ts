import { SetStateAction } from "jotai";
import { SaveFile } from "../models/saveFile";
import { getSpeciesImage } from "./speciesImages";
import { Trait } from "../models/traits";
import { CharacterSheetRoute } from "../routes";
import { startingSpecies } from "../data/species";

type CharacterSetters = {
  setName: (value: SetStateAction<string>) => void;
  setLevel: (value: SetStateAction<number>) => void;
  setCurrentPhysique: (value: SetStateAction<number>) => void;
  setCurrentMorale: (value: SetStateAction<number>) => void;
  setCurrentStamina: (value: SetStateAction<number>) => void;
  setSpecies: (value: SetStateAction<string>) => void;
  setGender: (value: SetStateAction<string>) => void;
  setAge: (value: SetStateAction<number>) => void;
  setBackground: (value: SetStateAction<string>) => void;
  setPersonality: (value: SetStateAction<string>) => void;
  setLanguages: (value: SetStateAction<string[]>) => void;
  setImage: (value: SetStateAction<string>) => void;
  setMoney: (value: SetStateAction<number>) => void;
  setItems: (value: SetStateAction<Record<string, any>>) => void;
  setPaths: (value: SetStateAction<any[]>) => void;
  setCustomTraits: (value: SetStateAction<Trait[]>) => void;
  setSkillLevelUpgrades: (value: SetStateAction<any>) => void;
  setIsFirstLoad?: (value: SetStateAction<boolean>) => void;
};

const validateSaveFile = (data: any): data is SaveFile => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.name === "string" &&
    typeof data.species === "string" &&
    typeof data.level === "number" &&
    Array.isArray(data.languages) &&
    typeof data.currentPhysique === "number" &&
    typeof data.currentMorale === "number" &&
    typeof data.currentStamina === "number" &&
    typeof data.money === "number" &&
    Array.isArray(data.paths) &&
    typeof data.items === "object" &&
    Array.isArray(data.customTraits)
  );
};

export const uploadCharacter = async (
  setters: CharacterSetters,
  navigate: (path: string) => void
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
            throw new Error("Invalid save file format");
          }

          // Update all atoms with the loaded data
          setters.setName(data.name);
          setters.setLevel(data.level);
          setters.setCurrentPhysique(data.currentPhysique);
          setters.setCurrentMorale(data.currentMorale);
          setters.setCurrentStamina(data.currentStamina);
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

          navigate(CharacterSheetRoute);
        } catch (error) {
          console.error(
            "Error loading character:",
            error instanceof Error ? error.message : "Unknown error"
          );
          alert(
            "Failed to load character file. Please make sure the file is valid."
          );
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};

export const resetCharacter = (setters: CharacterSetters) => {
  setters.setName("");
  setters.setSpecies(startingSpecies.name);
  setters.setLevel(1);
  setters.setCurrentPhysique(
    startingSpecies.physique.initial + startingSpecies.physique.increments
  );
  setters.setCurrentMorale(
    startingSpecies.morale.initial + startingSpecies.morale.increments
  );
  setters.setCurrentStamina(
    startingSpecies.stamina.initial + startingSpecies.stamina.increments
  );
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
