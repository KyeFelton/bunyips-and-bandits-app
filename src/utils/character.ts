import { SetStateAction } from 'jotai';
import { SaveFile } from '../models/saveFile';
import { AllSpecies } from '../models/species';

type CharacterSetters = {
  setName: (value: SetStateAction<string>) => void;
  setLevel: (value: SetStateAction<number>) => void;
  setCurrentHealth: (value: SetStateAction<number>) => void;
  setCurrentSanity: (value: SetStateAction<number>) => void;
  setCurrentStamina: (value: SetStateAction<number>) => void;
  setSpecies: (value: SetStateAction<string>) => void;
  setGender: (value: SetStateAction<string>) => void;
  setAge: (value: SetStateAction<number>) => void;
  setPersonality: (value: SetStateAction<string>) => void;
  setLanguages: (value: SetStateAction<string[]>) => void;
  setImage: (value: SetStateAction<string | undefined>) => void;
  setMoney: (value: SetStateAction<number>) => void;
  setItems: (value: SetStateAction<any[]>) => void;
  setPaths: (value: SetStateAction<any[]>) => void;
  setSkillLevelUpgrades: (value: SetStateAction<any>) => void;
  setIsFirstLoad?: (value: SetStateAction<boolean>) => void;
};

export const uploadCharacter = (setters: CharacterSetters) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string) as SaveFile;

          // Update all atoms with the loaded data
          setters.setName(data.name);
          setters.setLevel(data.level);
          setters.setCurrentHealth(data.currentHealth);
          setters.setCurrentSanity(data.currentSanity);
          setters.setCurrentStamina(data.currentStamina);
          setters.setSpecies(data.species);
          setters.setGender(data.gender);
          setters.setAge(data.age);
          setters.setPersonality(data.personality);
          setters.setLanguages(data.languages);
          setters.setImage(data.image);
          setters.setMoney(data.money);
          setters.setItems(data.items);
          setters.setPaths(data.paths);
          setters.setSkillLevelUpgrades(data.skillLevelUpgrades || {});
          setters.setIsFirstLoad?.(false);
        } catch (error) {
          console.error('Error parsing character file:', error);
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};

export const resetCharacter = (setters: CharacterSetters) => {
  const startingSpecies = AllSpecies.Minotaur;

  setters.setName('');
  setters.setSpecies(startingSpecies.name);
  setters.setLevel(1);
  setters.setCurrentHealth(
    startingSpecies.health.initial + startingSpecies.health.increments
  );
  setters.setCurrentSanity(
    startingSpecies.sanity.initial + startingSpecies.sanity.increments
  );
  setters.setCurrentStamina(
    startingSpecies.stamina.initial + startingSpecies.stamina.increments
  );
  setters.setGender('');
  setters.setAge(0);
  setters.setPersonality('');
  setters.setLanguages([]);
  setters.setImage(undefined);
  setters.setMoney(0);
  setters.setItems([]);
  setters.setPaths([]);
  setters.setSkillLevelUpgrades({});
  setters.setIsFirstLoad?.(true);
};
