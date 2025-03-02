import { useAtomValue, useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Upload,
  Download,
  RotateCcw,
  EllipsisVertical,
  Pencil,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  nameAtom,
  levelAtom,
  currentHealthAtom,
  currentSanityAtom,
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
  saveFileAtom,
  customTraitsAtom,
} from "../../state/character";
import { resetCharacter, uploadCharacter } from "../../utils/character";

export const NameCard = () => {
  const name = useAtomValue(nameAtom);
  const level = useAtomValue(levelAtom);
  const image = useAtomValue(imageAtom);
  const saveFile = useAtomValue(saveFileAtom);
  const navigate = useNavigate();

  // Get setters for loading character data
  const setters = {
    setName: useSetAtom(nameAtom),
    setLevel: useSetAtom(levelAtom),
    setCurrentHealth: useSetAtom(currentHealthAtom),
    setCurrentSanity: useSetAtom(currentSanityAtom),
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
    if (
      window.confirm(
        "Are you sure you want to delete this character and return to the main menu?"
      )
    ) {
      resetCharacter(setters);
      navigate("/");
    }
  };

  return (
    <Card className="h-[332px] flex flex-col">
      <CardHeader className="p-4">
        <div className="relative flex flex-col items-center">
          <div className="absolute right-0 top-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <EllipsisVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/character/edit")}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Save
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => uploadCharacter(setters, navigate)}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Load
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleReset}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h3 className="px-8 text-2xl font-semibold text-center line-clamp-2">
            {name || "???"}
          </h3>
          <span className="text-sm text-muted-foreground">Level {level}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow min-h-0">
        <img
          src={image}
          alt="character"
          className="w-full h-full rounded-md object-cover"
        />
      </CardContent>
    </Card>
  );
};
