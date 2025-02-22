import { useAtomValue, useSetAtom } from 'jotai';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
  Upload,
  Download,
  RotateCcw,
  EllipsisVertical,
  Pencil,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  nameAtom,
  levelAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
  saveFileAtom,
} from '../../state/character';
import { isEditingCharacterAtom, isFirstLoadAtom } from '../../state/app';
import { resetCharacter, uploadCharacter } from '../../utils/character';
import defaultCharacterImage from '../../images/character.svg';

export const NameCard = () => {
  const name = useAtomValue(nameAtom);
  const level = useAtomValue(levelAtom);
  const image = useAtomValue(imageAtom);
  const setIsEditingCharacter = useSetAtom(isEditingCharacterAtom);
  const saveFile = useAtomValue(saveFileAtom);
  const setIsFirstLoad = useSetAtom(isFirstLoadAtom);

  // Get setters for loading character data
  const setters = {
    setName: useSetAtom(nameAtom),
    setLevel: useSetAtom(levelAtom),
    setCurrentHealth: useSetAtom(currentHealthAtom),
    setCurrentSanity: useSetAtom(currentSanityAtom),
    setCurrentStamina: useSetAtom(currentStaminaAtom),
    setSpecies: useSetAtom(speciesAtom),
    setGender: useSetAtom(genderAtom),
    setAge: useSetAtom(ageAtom),
    setPersonality: useSetAtom(personalityAtom),
    setLanguages: useSetAtom(languagesAtom),
    setImage: useSetAtom(imageAtom),
    setMoney: useSetAtom(moneyAtom),
    setItems: useSetAtom(itemsAtom),
    setPaths: useSetAtom(pathsAtom),
    setSkillLevelUpgrades: useSetAtom(skillLevelUpgradesAtom),
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(saveFile, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'character.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (
      window.confirm(
        'Are you sure you want to delete this character and return to the main menu?'
      )
    ) {
      resetCharacter({ ...setters, setIsFirstLoad });
    }
  };

  return (
    <Card>
      <CardHeader className="p-4">
        <div className="relative flex flex-col items-center">
          <div className="absolute right-0 top-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <EllipsisVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditingCharacter(true)}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Save
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => uploadCharacter(setters)}>
                  <Upload className="mr-2 h-4 w-4" />
                  Load
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleReset}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h3 className="text-2xl font-semibold text-center">{name}</h3>
          <span className="text-sm text-muted-foreground">Level {level}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className={'flex justify-center'}>
          <img
            src={image || defaultCharacterImage}
            alt="character"
            className="w-48 h-48 rounded-md object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};
