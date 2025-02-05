import { useState } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Input } from "./ui/input";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import {
  Upload,
  Download,
  RotateCcw,
  EllipsisVertical,
  Wand2,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
  languagesAtom,
  imageAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
} from "../state/primitives";
import { saveFileAtom } from "../state/derived";
import { Minotaur } from "../models/species";
import { CharacterWizard } from "./CharacterWizard";

export const CharacterNameCard = () => {
  const [name, setName] = useAtom(nameAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  // Get setters for reset functionality
  const setLevel = useSetAtom(levelAtom);
  const setCurrentHealth = useSetAtom(currentHealthAtom);
  const setCurrentSanity = useSetAtom(currentSanityAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const setSpecies = useSetAtom(speciesAtom);
  const setGender = useSetAtom(genderAtom);
  const setAge = useSetAtom(ageAtom);
  const setPersonality = useSetAtom(personalityAtom);
  const setLanguages = useSetAtom(languagesAtom);
  const setImage = useSetAtom(imageAtom);
  const setMoney = useSetAtom(moneyAtom);
  const setItems = useSetAtom(itemsAtom);
  const setPaths = useSetAtom(pathsAtom);
  const setSkillLevelUpgrades = useSetAtom(skillLevelUpgradesAtom);

  // Getters for load functionality
  const saveFile = useAtomValue(saveFileAtom);

  const handleStartEdit = () => {
    setTempName(name);
    setIsEditing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleNameSubmit = () => {
    setName(tempName);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNameSubmit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setTempName(name);
    }
  };

  const resetCharacter = () => {
    setName("Timber");
    setLevel(1);
    setCurrentHealth(Minotaur.health.initial);
    setCurrentSanity(10);
    setCurrentStamina(10);
    setSpecies(Minotaur.name);
    setGender("");
    setAge(0);
    setPersonality("");
    setLanguages([]);
    setImage(undefined);
    setMoney(0);
    setItems([]);
    setPaths([]);
    setSkillLevelUpgrades({});
  };

  const handleUpload = () => {
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
            // Update all atoms with the loaded data
            setName(data.name);
            setLevel(data.level);
            setCurrentHealth(data.currentHealth);
            setCurrentSanity(data.currentSanity);
            setCurrentStamina(data.currentStamina);
            setSpecies(data.species);
            setGender(data.gender);
            setAge(data.age);
            setPersonality(data.personality);
            setLanguages(data.languages);
            setImage(data.image);
            setMoney(data.money);
            setItems(data.items);
            setPaths(data.paths);
            setSkillLevelUpgrades(data.skillLevelUpgrades || {});
          } catch (error) {
            console.error("Error parsing character file:", error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
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
    if (window.confirm("Are you sure you want to reset the character?")) {
      resetCharacter();
    }
  };

  return (
    <Card>
      <CardHeader className="p-4">
        <div className="relative flex flex-col items-center">
          <div className="absolute right-0 top-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <EllipsisVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Dialog>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Character Wizard
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-none w-[1200px] h-[800px] overflow-auto">
                    <CharacterWizard />
                  </DialogContent>
                </Dialog>
                <DropdownMenuItem onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleUpload}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleReset}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {isEditing || !name ? (
            <Input
              className="text-center text-2xl font-semibold h-9 w-64"
              value={tempName}
              onChange={handleNameChange}
              onBlur={handleNameSubmit}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Enter name"
            />
          ) : (
            <h3
              className="text-2xl font-semibold cursor-pointer hover:text-muted-foreground transition-colors"
              onClick={handleStartEdit}
            >
              {name}
            </h3>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};
