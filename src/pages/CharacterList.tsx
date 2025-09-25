import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useAtom } from "jotai";
import { downloadSaveFile, loadSaveFile } from "../utils/saveFile";
import { getCharacterEditorRoute, getCharacterSheetRoute } from "../routes";
import { Upload, MoreVertical, CirclePlus, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ErrorDialog } from "../components/ErrorDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { saveFileAtom, focalCharacterIdAtom } from "../state/saveFile";
import { randomString } from "../utils/randomString";
import { CharacterSaveFile, defaultCharacter } from "../models/saveFile";
import {
  ageAtom,
  backgroundAtom,
  currentMoraleAtom,
  currentPhysiqueAtom,
  currentStaminaAtom,
  customTraitsAtom,
  genderAtom,
  imageAtom,
  itemsAtom,
  languagesAtom,
  levelAtom,
  moneyAtom,
  moraleUpgradesAtom,
  nameAtom,
  pathsAtom,
  personalityAtom,
  physiqueUpgradesAtom,
  skillLevelUpgradesAtom,
  speciesAtom,
  staminaUpgradesAtom,
} from "../state/character";
import { getSpeciesImage } from "../utils/speciesImages";
import "./CharacterList.sass";
import { Logo } from "../components/Logo";

export function CharactersPage() {
  const navigate = useNavigate();
  const [saveFile, setSaveFile] = useAtom(saveFileAtom);
  const [characterToDelete, setCharacterToDelete] = useState<
    string | undefined
  >();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [focalCharacterId, setFocalCharacterId] = useAtom(focalCharacterIdAtom);

  const [name, setName] = useAtom(nameAtom);
  const [level, setLevel] = useAtom(levelAtom);
  const [currentPhysique, setCurrentPhysique] = useAtom(currentPhysiqueAtom);
  const [physiqueUpgrades, setPhysiqueUpgrades] = useAtom(physiqueUpgradesAtom);
  const [currentMorale, setCurrentMorale] = useAtom(currentMoraleAtom);
  const [moraleUpgrades, setMoraleUpgrades] = useAtom(moraleUpgradesAtom);
  const [currentStamina, setCurrentStamina] = useAtom(currentStaminaAtom);
  const [staminaUpgrades, setStaminaUpgrades] = useAtom(staminaUpgradesAtom);
  const [species, setSpecies] = useAtom(speciesAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [background, setBackground] = useAtom(backgroundAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [languages, setLanguages] = useAtom(languagesAtom);
  const [image, setImage] = useAtom(imageAtom);
  const [money, setMoney] = useAtom(moneyAtom);
  const [items, setItems] = useAtom(itemsAtom);
  const [paths, setPaths] = useAtom(pathsAtom);
  const [customTraits, setCustomTraits] = useAtom(customTraitsAtom);
  const [skillLevelUpgrades, setSkillLevelUpgrades] = useAtom(
    skillLevelUpgradesAtom
  );

  const focalCharacter = {
    name,
    species,
    gender,
    age,
    personality,
    background,
    languages,
    level,
    paths,
    customTraits,
    skillLevelUpgrades,
    currentPhysique,
    physiqueUpgrades,
    currentMorale,
    moraleUpgrades,
    currentStamina,
    staminaUpgrades,
    items,
    money,
    image,
  };

  const setFocalCharacter = (id: string, character: CharacterSaveFile) => {
    setFocalCharacterId(id);
    setName(character.name);
    setLevel(character.level);
    setCurrentPhysique(character.currentPhysique);
    setPhysiqueUpgrades(character.physiqueUpgrades);
    setCurrentMorale(character.currentMorale);
    setMoraleUpgrades(character.moraleUpgrades);
    setCurrentStamina(character.currentStamina);
    setStaminaUpgrades(character.staminaUpgrades);
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
  };

  const saveCurrentFocalCharacter = () => {
    if (
      typeof focalCharacterId === "string" &&
      saveFile.characters[focalCharacterId]
    ) {
      setSaveFile((prev) => ({
        ...prev,
        characters: {
          ...prev.characters,
          [focalCharacterId]: focalCharacter,
        },
      }));
    }
  };

  const handleImport = async () => {
    await loadSaveFile(setSaveFile, undefined, (title, message) => {
      setErrorTitle(title);
      setErrorMessage(message);
      setErrorDialogOpen(true);
    });
  };

  const handleCreateNewCharacter = () => {
    saveCurrentFocalCharacter();
    const id = randomString(10);
    setSaveFile((prev) => {
      return {
        ...prev,
        characters: { ...prev.characters, [id]: defaultCharacter },
      };
    });
    setFocalCharacterId(id);
    setFocalCharacter(id, defaultCharacter);
    navigate(getCharacterEditorRoute(id));
  };

  const handleSelectCharacter = (id: string) => {
    saveCurrentFocalCharacter();
    if (id !== focalCharacterId) {
      const character = saveFile.characters[id];
      setFocalCharacter(id, character);
    }
    navigate(getCharacterSheetRoute(id));
  };

  const handleEditCharacter = (id: string) => {
    saveCurrentFocalCharacter();
    if (id !== focalCharacterId) {
      const character = saveFile.characters[id];
      setFocalCharacter(id, character);
    }
    navigate(getCharacterEditorRoute(id));
  };

  const handleDeleteCharacter = (id: string) => {
    setCharacterToDelete(id);
  };

  const confirmDeleteCharacter = () => {
    if (!characterToDelete) {
      return;
    }
    setSaveFile((prev) => {
      const characters = { ...prev.characters };
      delete characters[characterToDelete];
      return { ...prev, characters: characters };
    });
    setCharacterToDelete(undefined);
  };

  const handleDownload = () => {
    const updatedSaveFile = focalCharacterId
      ? {
          ...saveFile,
          characters: {
            ...saveFile.characters,
            [focalCharacterId]: focalCharacter,
          },
        }
      : saveFile;
    downloadSaveFile(updatedSaveFile);
  };

  return (
    <motion.div
      className="h-full container mx-auto py-8 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
    >
      {Object.keys(saveFile.characters).length > 0 && (
        <div className="flex justify-between items-center pb-8">
          <h1 className="text-3xl font-bold text-primary-foreground">
            Characters
          </h1>
          <div className="flex gap-2">
            <Button onClick={handleCreateNewCharacter}>
              <CirclePlus className="h-5 w-5 mr-2" />
              New
            </Button>
            <Button className="hidden md:flex" onClick={handleImport}>
              <Upload className="h-4 w-4 mr-2" />
              Load
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      )}

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-20">
        {Object.entries(saveFile.characters).map(([id, saveFileCharacter]) => {
          const character =
            focalCharacterId === id ? focalCharacter : saveFileCharacter;
          return (
            <Card
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleSelectCharacter(id)}
              key={id}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-2 right-2 z-10">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditCharacter(id);
                          }}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteCharacter(id);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  {
                    <img
                      src={
                        character.image ?? getSpeciesImage(character.species)
                      }
                      alt={character.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  }
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="font-semibold text-lg">{character.name}</h3>
                <div className="text-sm text-muted-foreground">
                  Level {character.level} {character.species}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {Object.keys(saveFile.characters).length === 0 && (
        <div className="relative w-full max-w-xl min-w-[300px] flex flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="logo-animation absolute top-8 z-30 flex justify-center">
            <Logo className="w-[90%] h-16" />
          </div>
          <div className="banner-animation w-full flex flex-col justify-center items-center p-8 space-y-8 rounded-lg shadow-2xl backdrop-blur-sm border border-white/100 bg-black/95 z-20">
            <div className="invisible">
              <Logo className="w-full h-16" />
            </div>
            <div className="flex justify-center gap-4 w-full">
              <Button
                className="load-button w-md h-14 text-lg hover:scale-105 transition-transform"
                onClick={handleImport}
              >
                <Upload className="mr-2 h-6 w-6" />
                Load
              </Button>
              <Button
                variant="outline"
                className="new-button w-md h-14 text-lg hover:scale-105 transition-transform"
                onClick={handleCreateNewCharacter}
              >
                <CirclePlus className="mr-2 h-6 w-6" />
                New
              </Button>
            </div>
          </div>
        </div>
      )}

      {characterToDelete && (
        <Dialog
          open={characterToDelete !== undefined}
          // onOpenChange={setIsDeleteDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Character</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete{" "}
                <strong>{saveFile.characters[characterToDelete].name}</strong>?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="destructive" onClick={confirmDeleteCharacter}>
                Delete
              </Button>
              <Button
                variant="outline"
                onClick={() => setCharacterToDelete(undefined)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <ErrorDialog
        isOpen={errorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
        title={errorTitle}
        description={errorMessage}
      />
    </motion.div>
  );
}
