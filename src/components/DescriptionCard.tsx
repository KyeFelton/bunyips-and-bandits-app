import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ancestryAtom,
  speciesDataAtom,
  genderAtom,
  ageAtom,
  languagesAtom,
  backgroundAtom,
  personalityAtom,
} from "./../state/character";

export const DescriptionCard = () => {
  const ancestry = useAtomValue(ancestryAtom);
  const species = useAtomValue(speciesDataAtom);
  const gender = useAtomValue(genderAtom);
  const age = useAtomValue(ageAtom);
  const selectedLanguages = useAtomValue(languagesAtom);
  const background = useAtomValue(backgroundAtom);
  const personality = useAtomValue(personalityAtom);

  return (
    <Card className="sm:h-[472px] flex flex-col">
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow min-h-0 overflow-auto">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Ancestry
          </div>
          <div className="text-sm">{ancestry || "-"}</div>
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
          <div className="text-sm flex">
            <div className="flex-1">{background || "-"}</div>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Personality & Motivation
          </div>
          <div className="text-sm flex">
            <div className="flex-1">{personality || "-"}</div>
            <div></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
