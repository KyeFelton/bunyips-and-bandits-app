import { SetStateAction } from "jotai";
import { SaveFile } from "../models/saveFile";
import { CharacterListRoute } from "../routes";

const validateSaveFile = (data: unknown): data is SaveFile => {
  let error: string | null = null;

  if (typeof data !== "object" || data === null) {
    error = "Save file must be a valid JSON object";
  }

  const saveData = data as SaveFile;

  if (typeof saveData.characters !== "object" || data === null) {
    error = "Expected a dictionary of characters";
  }

  for (const character of Object.values(saveData.characters)) {
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

export const loadSaveFile = async (
  setSaveFile: (value: SetStateAction<SaveFile>) => void,
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
            throw Error(
              "Character file is invalid. Please make sure the file is valid."
            );
          }
          setSaveFile(data);
          navigate?.(CharacterListRoute);
        } catch (error) {
          if (onError) {
            onError(
              "Failed to load character",
              error instanceof Error ? error.message : ""
            );
          } else {
            alert(
              error instanceof Error
                ? error.message
                : "Failed to load character"
            );
          }
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};

export const downloadSaveFile = (saveFile: SaveFile) => {
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
