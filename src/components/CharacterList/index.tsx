import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useAtomValue, useSetAtom } from "jotai";
import {
  nameAtom,
  levelAtom,
  speciesAtom,
  imageAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
  physiqueUpgradesAtom,
  moraleUpgradesAtom,
  staminaUpgradesAtom,
  genderAtom,
  ageAtom,
  backgroundAtom,
  personalityAtom,
  languagesAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  customTraitsAtom,
  skillLevelUpgradesAtom,
} from "../../state/character";
import { exitCharacter, loadCharacters } from "../../utils/character";
import { CharacterSheetRoute } from "../../routes";
import { Upload, MoreVertical, CirclePlus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ErrorDialog } from "../ErrorDialog";
import { CharacterEditorRoute } from "../../routes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export function CharactersPage() {
  const navigate = useNavigate();
  const name = useAtomValue(nameAtom);
  const level = useAtomValue(levelAtom);
  const species = useAtomValue(speciesAtom);
  const image = useAtomValue(imageAtom);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const setters = {
  //   setName: useSetAtom(nameAtom),
  //   setLevel: useSetAtom(levelAtom),
  //   setCurrentPhysique: useSetAtom(currentPhysiqueAtom),
  //   setPhysiqueUpgrades: useSetAtom(physiqueUpgradesAtom),
  //   setCurrentMorale: useSetAtom(currentMoraleAtom),
  //   setMoraleUpgrades: useSetAtom(moraleUpgradesAtom),
  //   setCurrentStamina: useSetAtom(currentStaminaAtom),
  //   setStaminaUpgrades: useSetAtom(staminaUpgradesAtom),
  //   setSpecies: useSetAtom(speciesAtom),
  //   setGender: useSetAtom(genderAtom),
  //   setAge: useSetAtom(ageAtom),
  //   setBackground: useSetAtom(backgroundAtom),
  //   setPersonality: useSetAtom(personalityAtom),
  //   setLanguages: useSetAtom(languagesAtom),
  //   setImage: useSetAtom(imageAtom),
  //   setMoney: useSetAtom(moneyAtom),
  //   setItems: useSetAtom(itemsAtom),
  //   setPaths: useSetAtom(pathsAtom),
  //   setCustomTraits: useSetAtom(customTraitsAtom),
  //   setSkillLevelUpgrades: useSetAtom(skillLevelUpgradesAtom),
  // };

  const handleLoadCharacter = async () => {
    // await loadCharacters(setters, undefined, (title, message) => {
    //   setErrorTitle(title);
    //   setErrorMessage(message);
    //   setErrorDialogOpen(true);
    // });
  };

  const handleCreateNewCharacter = () => {
    navigate(CharacterEditorRoute);
  };

  const handleCardClick = () => {
    navigate(CharacterSheetRoute);
  };

  const handleEditCharacter = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(CharacterEditorRoute);
  };

  const handleDeleteCharacter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteCharacter = () => {
    // resetCharacter(setters);
    setIsDeleteDialogOpen(false);
  };

  return (
    <motion.div
      className="h-full container mx-auto py-8 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="firefly" />
      ))}

      {name && (
        <div className="flex justify-between items-center pb-8">
          <h1 className="text-3xl font-bold text-primary-foreground">
            Characters
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleLoadCharacter}>
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
          </div>
        </div>
      )}

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-20">
        {name && (
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={handleCardClick}
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
                      <DropdownMenuItem onClick={handleEditCharacter}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleDeleteCharacter}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {image && (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                {!image && (
                  <div className="w-full h-48 bg-muted flex items-center justify-center rounded-t-lg">
                    <span className="text-muted-foreground">No Image</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="font-semibold text-lg">{name}</h3>
              <div className="text-sm text-muted-foreground">
                Level {level} {species}
              </div>
            </CardFooter>
          </Card>
        )}
      </div>

      {!name && (
        <div className="left-1/2 top-[45%] absolute -translate-x-1/2 -translate-y-1/2">
          <div className="w-full flex flex-col justify-center items-center p-8 space-y-4 rounded-lg shadow-2xl backdrop-blur-sm border border-white/100 bg-black/95 z-20">
            <p className="text-primary-foreground text-lg mb-6">
              You don't have any characters yet.
            </p>
            <div className="flex gap-4">
              <Button
                className="h-12 px-6 text-base hover:scale-105 transition-transform"
                onClick={handleLoadCharacter}
              >
                <Upload className="h-5 w-5 mr-2" />
                Load
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 text-base hover:scale-105 transition-transform"
                onClick={handleCreateNewCharacter}
              >
                <CirclePlus className="h-5 w-5 mr-2" />
                New
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Character</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {name}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteCharacter}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ErrorDialog
        isOpen={errorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
        title={errorTitle}
        description={errorMessage}
      />
    </motion.div>
  );
}
