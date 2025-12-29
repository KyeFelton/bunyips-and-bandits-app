import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import {
  originAtom,
  speciesDataAtom,
  genderAtom,
  ageAtom,
  languagesAtom,
  backgroundAtom,
  backgroundDataAtom,
  biographyAtom,
  personalityAtom,
} from "./../state/character";
import { EditDescriptionDialog } from "./EditDescriptionDialog";

export const DescriptionCard = () => {
  const origin = useAtomValue(originAtom);
  const species = useAtomValue(speciesDataAtom);
  const gender = useAtomValue(genderAtom);
  const age = useAtomValue(ageAtom);
  const selectedLanguages = useAtomValue(languagesAtom);
  const background = useAtomValue(backgroundAtom);
  const backgroundData = useAtomValue(backgroundDataAtom);
  const biography = useAtomValue(biographyAtom);
  const personality = useAtomValue(personalityAtom);

  const [isEditDescriptionDialogOpen, setIsEditDescriptionDialogOpen] =
    useState(false);

  return (
    <Card className="sm:h-[472px] flex flex-col group">
      <CardHeader className="relative">
        <CardTitle>Description</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-6 w-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
          onClick={() => setIsEditDescriptionDialogOpen(true)}
        >
          <Edit2 className="h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow min-h-0 overflow-auto">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Origin
          </div>
          <div className="text-sm">{origin || "-"}</div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Species
          </div>
          <div className="text-sm">{species.name}</div>
        </div>

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
          <div className="text-sm">{species.size || "-"}</div>
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
            Background
          </div>
          <div className="text-sm">
            {backgroundData ? (
              <div>
                <div className="font-semibold">{backgroundData.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Expertise: {backgroundData.expertiseSkills.join(", ")}
                </div>
              </div>
            ) : (
              <div>{background || "-"}</div>
            )}
          </div>
        </div>

        {biography && (
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Biography
            </div>
            <div className="text-sm whitespace-pre-wrap">{biography}</div>
          </div>
        )}

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Personality & Motivation
          </div>
          <div className="text-sm flex">
            <div className="flex-1">{personality || "-"}</div>
          </div>
        </div>
      </CardContent>
      <EditDescriptionDialog
        isOpen={isEditDescriptionDialogOpen}
        onClose={() => setIsEditDescriptionDialogOpen(false)}
      />
    </Card>
  );
};
