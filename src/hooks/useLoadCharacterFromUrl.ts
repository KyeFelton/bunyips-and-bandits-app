import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { saveFileAtom, focalCharacterIdAtom } from "../state/saveFile";
import {
  nameAtom,
  levelAtom,
  currentBodyAtom,
  bodyUpgradesAtom,
  currentMindAtom,
  mindUpgradesAtom,
  currentStaminaAtom,
  staminaUpgradesAtom,
  originAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  backgroundAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  customTraitsAtom,
  skillLevelUpgradesAtom,
  conditionsAtom,
} from "../state/character";

/**
 * Hook that loads a character from the URL parameter into the focal character atoms.
 * This allows direct navigation to character pages via URL and handles browser back/forward.
 */
export const useLoadCharacterFromUrl = () => {
  const { id } = useParams<{ id: string }>();
  const saveFile = useAtomValue(saveFileAtom);
  const setFocalCharacterId = useSetAtom(focalCharacterIdAtom);
  const setName = useSetAtom(nameAtom);
  const setLevel = useSetAtom(levelAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setBodyUpgrades = useSetAtom(bodyUpgradesAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setMindUpgrades = useSetAtom(mindUpgradesAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const setStaminaUpgrades = useSetAtom(staminaUpgradesAtom);
  const setOrigin = useSetAtom(originAtom);
  const setSpecies = useSetAtom(speciesAtom);
  const setGender = useSetAtom(genderAtom);
  const setAge = useSetAtom(ageAtom);
  const setBackground = useSetAtom(backgroundAtom);
  const setPersonality = useSetAtom(personalityAtom);
  const setLanguages = useSetAtom(languagesAtom);
  const setImage = useSetAtom(imageAtom);
  const setMoney = useSetAtom(moneyAtom);
  const setItems = useSetAtom(itemsAtom);
  const setPaths = useSetAtom(pathsAtom);
  const setCustomTraits = useSetAtom(customTraitsAtom);
  const setSkillLevelUpgrades = useSetAtom(skillLevelUpgradesAtom);
  const setConditions = useSetAtom(conditionsAtom);

  useEffect(() => {
    if (id && saveFile.characters[id]) {
      const character = saveFile.characters[id];
      setFocalCharacterId(id);
      setName(character.name);
      setLevel(character.level);
      setCurrentBody(character.currentBody);
      setBodyUpgrades(character.bodyUpgrades);
      setCurrentMind(character.currentMind);
      setMindUpgrades(character.mindUpgrades);
      setCurrentStamina(character.currentStamina);
      setStaminaUpgrades(character.staminaUpgrades);
      setOrigin(character.origin);
      setSpecies(character.species);
      setGender(character.gender);
      setAge(character.age);
      setBackground(character.background);
      setPersonality(character.personality);
      setLanguages(character.languages);
      setImage(character.image);
      setMoney(character.money);
      setItems(character.items);
      setPaths(character.paths);
      setCustomTraits(character.customTraits);
      setSkillLevelUpgrades(character.skillLevelUpgrades);
      setConditions(character.conditions || []);
    }
  }, [
    id,
    saveFile,
    setFocalCharacterId,
    setName,
    setLevel,
    setCurrentBody,
    setBodyUpgrades,
    setCurrentMind,
    setMindUpgrades,
    setCurrentStamina,
    setStaminaUpgrades,
    setOrigin,
    setSpecies,
    setGender,
    setAge,
    setBackground,
    setPersonality,
    setLanguages,
    setImage,
    setMoney,
    setItems,
    setPaths,
    setCustomTraits,
    setSkillLevelUpgrades,
    setConditions,
  ]);
};
