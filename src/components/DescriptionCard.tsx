import { useAtomValue } from "jotai";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import {
  kinAtom,
  genderAtom,
  ageAtom,
  languagesAtom,
  backgroundAtom,
  backstoryAtom,
  personalityAtom,
} from "./../state/character";
import { EditDescriptionDialog } from "./EditDescriptionDialog";

export const DescriptionCard = () => {
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
      <div className="p-6 relative">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Description
        </h3>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-6 w-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
          onClick={() => setIsEditDescriptionDialogOpen(true)}
        >
          <Edit2 className="h-3 w-3" />
        </Button>
      </div>
      <div className="p-6 pt-0 space-y-4 flex-grow min-h-0">
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
            Size
          </div>
          <div className="text-sm">{kin.species.size || "-"}</div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Background
          </div>
          <div className="text-sm">{background || "-"}</div>
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

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Backstory
          </div>
          <div className="text-sm flex">
            <div className="flex-1">{backstory || "-"}</div>
          </div>
        </div>

        <div>
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
