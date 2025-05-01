import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Settings, Upload, Download, RotateCcw, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useSetAtom } from "jotai";
import {
  nameAtom,
  levelAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  personalityAtom,
  backgroundAtom,
  languagesAtom,
  imageAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
  customTraitsAtom,
} from "../state/character";
import { resetCharacter, uploadCharacter } from "../utils/character";
import {
  CharacterEditorRoute,
  CharacterSheetRoute,
  HomeRoute,
} from "../routes";

export function SettingsButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCharacterSheet = location.pathname.endsWith(CharacterSheetRoute);

  const setters = {
    setName: useSetAtom(nameAtom),
    setLevel: useSetAtom(levelAtom),
    setCurrentPhysique: useSetAtom(currentPhysiqueAtom),
    setCurrentMorale: useSetAtom(currentMoraleAtom),
    setCurrentStamina: useSetAtom(currentStaminaAtom),
    setSpecies: useSetAtom(speciesAtom),
    setGender: useSetAtom(genderAtom),
    setAge: useSetAtom(ageAtom),
    setBackground: useSetAtom(backgroundAtom),
    setPersonality: useSetAtom(personalityAtom),
    setLanguages: useSetAtom(languagesAtom),
    setImage: useSetAtom(imageAtom),
    setMoney: useSetAtom(moneyAtom),
    setItems: useSetAtom(itemsAtom),
    setPaths: useSetAtom(pathsAtom),
    setCustomTraits: useSetAtom(customTraitsAtom),
    setSkillLevelUpgrades: useSetAtom(skillLevelUpgradesAtom),
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this character and return to the main menu?"
      )
    ) {
      resetCharacter(setters);
      navigate(HomeRoute);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 bg-background shadow-lg hover:scale-110 transition-transform"
        >
          <Settings className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {isCharacterSheet && (
          <>
            <DropdownMenuItem onClick={() => navigate(CharacterEditorRoute)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => uploadCharacter(setters, navigate)}
            >
              <Download className="mr-2 h-4 w-4" />
              Save
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuItem onClick={() => uploadCharacter(setters, navigate)}>
          <Upload className="mr-2 h-4 w-4" />
          Load
        </DropdownMenuItem>
        {isCharacterSheet && (
          <>
            <DropdownMenuItem onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
