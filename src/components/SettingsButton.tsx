import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Settings, Upload, Download, RotateCcw, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAtomValue, useSetAtom } from "jotai";
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
  saveFileAtom,
  physiqueUpgradesAtom,
  moraleUpgradesAtom,
  staminaUpgradesAtom,
} from "../state/character";
import { resetCharacter, uploadCharacter } from "../utils/character";
import {
  CharacterEditorRoute,
  CharacterSheetRoute,
  HomeRoute,
} from "../routes";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function SettingsButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const saveFile = useAtomValue(saveFileAtom);
  const isCharacterSheet = location.pathname.endsWith(CharacterSheetRoute);
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  const setters = {
    setName: useSetAtom(nameAtom),
    setLevel: useSetAtom(levelAtom),
    setCurrentPhysique: useSetAtom(currentPhysiqueAtom),
    setPhysiqueUpgrades: useSetAtom(physiqueUpgradesAtom),
    setCurrentMorale: useSetAtom(currentMoraleAtom),
    setMoraleUpgrades: useSetAtom(moraleUpgradesAtom),
    setCurrentStamina: useSetAtom(currentStaminaAtom),
    setStaminaUpgrades: useSetAtom(staminaUpgradesAtom),
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

  const handleDownload = () => {
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

  const handleReset = () => {
    setIsResetDialogOpen(true);
  };

  const confirmReset = () => {
    resetCharacter(setters);
    navigate(HomeRoute);
    setIsResetDialogOpen(false);
  };

  return (
    <>
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
              <DropdownMenuItem onClick={() => handleDownload()}>
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

      <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset Character</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this character and return to the
              main menu?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsResetDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmReset}>
              Reset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
