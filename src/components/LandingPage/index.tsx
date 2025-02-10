import { Button } from "../ui/button";
import { Upload, CirclePlus } from "lucide-react";
import { useSetAtom } from "jotai";
import {
  nameAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  levelAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
} from "../../state/character";
import { isEditingCharacterAtom, isFirstLoadAtom } from "../../state/app";
import { uploadCharacter } from "../../utils/character";
import { Logo } from "../Logo";
import "./index.css";

export function LandingPage() {
  const setIsEditingCharacter = useSetAtom(isEditingCharacterAtom);
  const setIsFirstLoad = useSetAtom(isFirstLoadAtom);

  const setters = {
    setName: useSetAtom(nameAtom),
    setSpecies: useSetAtom(speciesAtom),
    setGender: useSetAtom(genderAtom),
    setAge: useSetAtom(ageAtom),
    setPersonality: useSetAtom(personalityAtom),
    setLanguages: useSetAtom(languagesAtom),
    setImage: useSetAtom(imageAtom),
    setLevel: useSetAtom(levelAtom),
    setCurrentHealth: useSetAtom(currentHealthAtom),
    setCurrentSanity: useSetAtom(currentSanityAtom),
    setCurrentStamina: useSetAtom(currentStaminaAtom),
    setMoney: useSetAtom(moneyAtom),
    setItems: useSetAtom(itemsAtom),
    setPaths: useSetAtom(pathsAtom),
    setSkillLevelUpgrades: useSetAtom(skillLevelUpgradesAtom),
    setIsFirstLoad: setIsFirstLoad,
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      <div className="w-full max-w-lg flex flex-col justify-center items-center space-y-4 p-5 backdrop-blur-sm rounded-md">
        <div className="logo-animation">
          <Logo width={560} height={120} />
        </div>
        <div className="button-animation flex gap-8">
          <Button
            className="w-full h-14 text-lg"
            onClick={() => {
              setIsEditingCharacter(true);
              setIsFirstLoad(false);
            }}
          >
            <CirclePlus className="mr-2 h-6 w-6" />
            New
          </Button>
          <Button
            variant="outline"
            className="w-full h-14 text-lg"
            onClick={() => uploadCharacter(setters)}
          >
            <Upload className="mr-2 h-6 w-6" />
            Load
          </Button>
        </div>
      </div>
    </div>
  );
}
