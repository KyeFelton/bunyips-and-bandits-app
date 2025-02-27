import { useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  speciesAtom,
  genderAtom,
  ageAtom,
  languagesAtom,
  backgroundAtom,
  personalityAtom,
} from '../../state/character';
import { DescriptionDialog } from './DescriptionDialog';

export const DescriptionCard = () => {
  const species = useAtomValue(speciesAtom);
  const gender = useAtomValue(genderAtom);
  const age = useAtomValue(ageAtom);
  const selectedLanguages = useAtomValue(languagesAtom);
  const background = useAtomValue(backgroundAtom);
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
            Background
          </div>
            <div className="text-sm flex">
              <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{background || '-'}</div>
              <div>
              {background && background.length > 0 && (
                <DescriptionDialog
                  title="Background"
                  content={background}
                  trigger={
                    <button className="text-sm text-muted-foreground hover:text-accent-foreground ml-1 inline align-baseline">
                      more
                    </button>
                  }
                />
              )}
                </div>
            </div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            Personality & Motivation
          </div>
          <div className="text-sm flex">
            <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {personality || '-'}
            </div>
            <div>
              {personality && personality.length > 150 && (
                <DescriptionDialog
                  title="Personality & Motivation"
                  content={personality}
                  trigger={
                    <button className="text-sm text-muted-foreground hover:text-accent-foreground ml-1 inline align-baseline">
                      more
                    </button>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};