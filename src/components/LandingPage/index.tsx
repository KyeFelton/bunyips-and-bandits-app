import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Upload, CirclePlus } from 'lucide-react';
import { useSetAtom } from 'jotai';
import {
  nameAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  levelAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
  moneyAtom,
  itemsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
} from '../../state/character';
import { isEditingCharacterAtom, isFirstLoadAtom } from '../../state/app';
import { uploadCharacter } from '../../utils/character';
import logo from '../../images/logo.svg'
import styles from 'index.css'

export function LandingPage() {
  const setIsEditingCharacter = useSetAtom(isEditingCharacterAtom);
  const setIsFirstLoad = useSetAtom(isFirstLoadAtom);

  // Get setters for loading character data
  const setters = {
    setName: useSetAtom(nameAtom),
    setSpecies: useSetAtom(speciesAtom),
    setGender: useSetAtom(genderAtom),
    setAge: useSetAtom(ageAtom),
    setPersonality: useSetAtom(personalityAtom),
    setLanguages: useSetAtom(languagesAtom),
    setImage: useSetAtom(imageAtom),
    setLevel: useSetAtom(levelAtom),
    setCurrentHealth: useSetAtom(currentHealthAtom),
    setCurrentSanity: useSetAtom(currentSanityAtom),
    setCurrentStamina: useSetAtom(currentStaminaAtom),
    setMoney: useSetAtom(moneyAtom),
    setItems: useSetAtom(itemsAtom),
    setPaths: useSetAtom(pathsAtom),
    setSkillLevelUpgrades: useSetAtom(skillLevelUpgradesAtom),
    setIsFirstLoad: setIsFirstLoad,
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-black">
      {/* Video Background */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
        <iframe
          src="https://www.youtube.com/embed/PjtF_olhk4s?autoplay=1&mute=1&controls=0&loop=1&playlist=PjtF_olhk4s&showinfo=0&rel=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 w-full h-full"
          style={{ 
            pointerEvents: 'none',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
      </div> */}

      <div className="w-full max-w-lg flex flex-col justify-center items-center space-y-4">
          <div>
            <img src={logo} width="250px"/>
          </div>
          <Button
            className="w-full h-24 text-lg"
            onClick={() => {
              setIsEditingCharacter(true);
              setIsFirstLoad(false);
            }}
          >
            <CirclePlus className="mr-2 h-6 w-6" />
            New
          </Button>
          <Button
            variant="outline"
            className="w-full h-24 text-lg"
            onClick={() => uploadCharacter(setters)}
          >
            <Upload className="mr-2 h-6 w-6" />
            Load
          </Button>
      </div>
    </div>
  );
}