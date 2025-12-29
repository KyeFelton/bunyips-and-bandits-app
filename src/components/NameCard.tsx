import { useAtomValue } from "jotai";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Edit2 } from "lucide-react";
import {
  nameAtom,
  imageAtom,
  speciesAtom,
  ancestryAtom,
} from "./../state/character";
import { EditNameDialog } from "./EditNameDialog";
import { useState } from "react";
import { getSpeciesImage } from "./../utils/speciesImages";

export const NameCard = () => {
  const name = useAtomValue(nameAtom);
  const image = useAtomValue(imageAtom);
  const species = useAtomValue(speciesAtom);
  const ancestry = useAtomValue(ancestryAtom);

  const [isEditNameDialogOpen, setIsEditNameDialogOpen] = useState(false);

  return (
    <Card className="h-[332px] flex flex-col group">
      <CardHeader className="p-4">
        <div className="relative flex flex-col items-center">
          <h3 className="px-8 text-2xl font-semibold text-center line-clamp-2">
            {name || "No name"}
          </h3>
          <span className="text-md text-muted-foreground">
            {ancestry} {species}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 h-6 w-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            onClick={() => setIsEditNameDialogOpen(true)}
          >
            <Edit2 className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow min-h-0 flex justify-center">
        <img
          src={image ?? getSpeciesImage(species, ancestry)}
          alt="character"
          className="w-full max-w-[250px] h-full max-h-[250px] rounded-md object-cover"
        />
      </CardContent>
      <EditNameDialog
        isOpen={isEditNameDialogOpen}
        onClose={() => setIsEditNameDialogOpen(false)}
      />
    </Card>
  );
};
