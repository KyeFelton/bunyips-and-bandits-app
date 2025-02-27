import { Button } from "../ui/button";
import { Upload, CirclePlus } from "lucide-react";
import { useSetAtom } from "jotai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  nameAtom,
  speciesAtom,
  genderAtom,
  ageAtom,
  backgroundAtom,
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
} from "../../state/character";
import { uploadCharacter } from "../../utils/character";
import { Logo } from "../Logo";
import "./index.sass";

export function LandingPage() {
  const navigate = useNavigate();

  const setters = {
    setName: useSetAtom(nameAtom),
    setSpecies: useSetAtom(speciesAtom),
    setGender: useSetAtom(genderAtom),
    setAge: useSetAtom(ageAtom),
    setBackground: useSetAtom(backgroundAtom),
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
  };

  const handleLoadCharacter = async () => {
    await uploadCharacter(setters, navigate);
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="firefly" />
      ))}
      <div className="relative w-full max-w-xl min-w-[300px] flex flex-col items-center">
        <div className="logo-animation absolute top-8 z-30 flex justify-center">
          <Logo className="w-[90%] h-16" />
        </div>
        <div className="banner-animation w-full flex flex-col justify-center items-center p-8 space-y-8 rounded-lg shadow-2xl backdrop-blur-sm border border-white/100 bg-black/95 z-20">
          <div className="invisible">
            <Logo className="w-full h-16" />
          </div>
          <div className="flex justify-center gap-4 w-full">
            <Button
              className="load-button w-md h-14 text-lg hover:scale-105 transition-transform"
              onClick={handleLoadCharacter}
            >
              <Upload className="mr-2 h-6 w-6" />
              Load
            </Button>
            <Button
              variant="outline"
              className="new-button w-md h-14 text-lg hover:scale-105 transition-transform"
              onClick={() => navigate("/character/edit")}
            >
              <CirclePlus className="mr-2 h-6 w-6" />
              New
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
