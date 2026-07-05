import { useAtomValue } from "jotai";
import { Button } from "./ui/button";
import { Edit2 } from "lucide-react";
import {
  nameAtom,
  imageAtom,
  kinAtom,
  ageAtom,
  backgroundAtom,
  backstoryAtom,
  genderAtom,
  languagesAtom,
  personalityAtom,
} from "../state/character";
import { EditDescriptionDialog } from "./EditDescriptionDialog";
import { useState } from "react";
import { Badge } from "./ui/badge";

export const DescriptionPanel = () => {
  const name = useAtomValue(nameAtom);
  const image = useAtomValue(imageAtom);
  const kin = useAtomValue(kinAtom);
  const gender = useAtomValue(genderAtom);
  const age = useAtomValue(ageAtom);
  const selectedLanguages = useAtomValue(languagesAtom);
  const background = useAtomValue(backgroundAtom);
  const backstory = useAtomValue(backstoryAtom);
  const personality = useAtomValue(personalityAtom);

  const [isEditDescriptionDialogOpen, setIsEditDescriptionDialogOpen] =
    useState(false);

  return (
    <div className="flex flex-col group">
      <div className="p-4">
        <div className="relative flex flex-col items-center">
          <h3 className="px-8 text-2xl font-semibold text-center line-clamp-2">
            {name || "No name"}
          </h3>
          <span className="text-md text-muted-foreground">{kin.name}</span>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 h-6 w-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            onClick={() => setIsEditDescriptionDialogOpen(true)}
          >
            <Edit2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="p-6 pt-0 flex-grow min-h-0 flex justify-center">
        <img
          src={image ?? kin.imageSrc}
          alt="character"
          className="w-full max-w-[300px] h-full max-h-[300px] rounded-md object-cover"
        />
      </div>
      <div className="p-6 pt-0 space-y-4 flex-grow min-h-0">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Gender
            </div>
            <div className="text-sm">{gender || "-"}</div>
          </div>

          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Age
            </div>
            <div className="text-sm">{age || "-"}</div>
          </div>

          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Background
            </div>
            <div className="text-sm">{background || "-"}</div>
          </div>

          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Size
            </div>
            <div className="text-sm">{kin.species.size || "-"}</div>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Languages
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedLanguages.length > 0 ? (
              selectedLanguages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))
            ) : (
              <span className="text-sm">None</span>
            )}
          </div>
        </div>

        <div className="md:hidden xl:block">
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Backstory
          </div>
          <div className="text-sm flex">
            <div className="flex-1">{backstory || "-"}</div>
          </div>
        </div>

        <div className="md:hidden xl:block">
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Personality & Motivation
          </div>
          <div className="text-sm flex">
            <div className="flex-1">{personality || "-"}</div>
          </div>
        </div>
      </div>
      <EditDescriptionDialog
        isOpen={isEditDescriptionDialogOpen}
        onClose={() => setIsEditDescriptionDialogOpen(false)}
      />
    </div>
  );
};
