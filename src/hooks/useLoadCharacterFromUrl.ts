import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { saveFileAtom, focalCharacterIdAtom } from "../state/saveFile";
import {
  nameAtom,
  classAtom,
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
  biographyAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  moneyAtom,
  itemsAtom,
  customTraitsAtom,
  criticalSuccessesAtom,
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
  const setClass = useSetAtom(classAtom);
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
  const setBiography = useSetAtom(biographyAtom);
  const setPersonality = useSetAtom(personalityAtom);
  const setLanguages = useSetAtom(languagesAtom);
  const setImage = useSetAtom(imageAtom);
  const setMoney = useSetAtom(moneyAtom);
  const setItems = useSetAtom(itemsAtom);
  const setCustomTraits = useSetAtom(customTraitsAtom);
  const setCriticalSuccesses = useSetAtom(criticalSuccessesAtom);
  const setConditions = useSetAtom(conditionsAtom);

  useEffect(() => {
    if (id && saveFile.characters[id]) {
      const character = saveFile.characters[id];
      setFocalCharacterId(id);
      setName(character.name);
      setClass(character.class);
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
      setBiography(character.biography || "");
      setPersonality(character.personality);
      setLanguages(character.languages);
      setImage(character.image);
      setMoney(character.money);
      setItems(character.items);
      setCustomTraits(character.customTraits);
      setCriticalSuccesses(character.criticalSuccesses);
      setConditions(character.conditions || []);
    }
  }, [
    id,
    saveFile,
    setFocalCharacterId,
    setName,
    setClass,
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
    setBiography,
    setPersonality,
    setLanguages,
    setImage,
    setMoney,
    setItems,
    setCustomTraits,
    setCriticalSuccesses,
    setConditions,
  ]);
};
