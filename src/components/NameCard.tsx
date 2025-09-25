import { useAtom, useAtomValue } from "jotai";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  nameAtom,
  levelAtom,
  imageAtom,
  speciesAtom,
} from "./../state/character";
import { LevelUpModal } from "./LevelUpModal";
import { useState } from "react";
import { getSpeciesImage } from "./../utils/speciesImages";

export const NameCard = () => {
  const name = useAtomValue(nameAtom);
  const [level, setLevel] = useAtom(levelAtom);
  const image = useAtomValue(imageAtom);
  const species = useAtomValue(speciesAtom);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const handleLevelUpModalOpen = () => {
    setLevel((prev) => prev + 1);
    setIsLevelUpModalOpen(true);
  };

  const handleLevelUpModalClose = (success: boolean) => {
    if (!success) {
      setLevel((prev) => prev - 1);
    }
    setIsLevelUpModalOpen(false);
  };

  return (
    <Card className="h-[332px] flex flex-col">
      <CardHeader className="p-4">
        <div className="relative flex flex-col items-center">
          <h3 className="px-8 text-2xl font-semibold text-center line-clamp-2">
            {name || "-"}
          </h3>
          <span className="text-md text-muted-foreground flex items-center gap-2">
            <span className="pl-5">Level {level}</span>

            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => handleLevelUpModalOpen()}
              disabled={level >= 10}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow min-h-0 flex justify-center">
        <img
          src={image ?? getSpeciesImage(species)}
          alt="character"
          className="w-full max-w-[250px] h-full max-h-[250px] rounded-md object-cover"
        />
      </CardContent>
      <LevelUpModal
        open={isLevelUpModalOpen}
        onClose={handleLevelUpModalClose}
      />
    </Card>
  );
};
