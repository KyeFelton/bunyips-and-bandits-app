import { useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  speciesAtom,
  genderAtom,
  ageAtom,
  languagesAtom,
  personalityAtom,
} from '../../state/character';
import { DescriptionDialog } from './DescriptionDialog';

export const DescriptionCard = () => {
  const species = useAtomValue(speciesAtom);
  const gender = useAtomValue(genderAtom);
  const age = useAtomValue(ageAtom);
  const selectedLanguages = useAtomValue(languagesAtom);
  const personality = useAtomValue(personalityAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Species
          </div>
          <div className="text-sm">{species}</div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Gender
          </div>
          <div className="text-sm">{gender || '-'}</div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Age
          </div>
          <div className="text-sm">{age || '-'}</div>
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
            Personality & Motivation
          </div>
          <div className="relative max-h-24 overflow-hidden">
            <div className="text-sm leading-relaxed whitespace-pre-wrap">
              {personality || '-'}
            </div>
            {personality && personality.length > 150 && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
            )}
          </div>
          {personality && personality.length > 150 && (
            <DescriptionDialog
              title="Personality & Motivation"
              content={personality}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};