import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  speciesAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
  healthAtom,
  sanityAtom,
  staminaAtom,
  speciesDataAtom,
  imageAtom,
} from "../../state/character";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AllSpecies } from "../../models/species";
import { Heart, ChartNoAxesColumn, Shield, ArrowLeftRight } from "lucide-react";
import { SkillIcon } from "../icons/SkillIcon";
import { MovementType } from "../../enums/MovementType";
import { DamageType } from "../../enums/DamageType";
import { SpeedIcon } from "../icons/SpeedIcon";
import { ArmourIcon } from "../icons/ArmourIcon";
import { useEffect } from "react";
import { getSpeciesImage } from "../../utils/speciesImages";

export const SpeciesStep = () => {
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const health = useAtomValue(healthAtom);
  const sanity = useAtomValue(sanityAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentHealth = useSetAtom(currentHealthAtom);
  const setCurrentSanity = useSetAtom(currentSanityAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const speciesData = useAtomValue(speciesDataAtom);
  const setImage = useSetAtom(imageAtom);

  useEffect(() => {
    setCurrentHealth(Math.min(health.current, health.max));
  }, [health, setCurrentHealth]);

  useEffect(() => {
    setCurrentSanity(Math.min(sanity.current, sanity.max));
  }, [sanity, setCurrentSanity]);

  useEffect(() => {
    setCurrentStamina(Math.min(stamina.current, stamina.max));
  }, [stamina, setCurrentStamina]);

  const handleSpeciesChange = (value: string) => {
    setSpecies(value);
    setImage(getSpeciesImage(value));
  };

  return (
    <div className="space-y-6">
      <Select value={selectedSpecies} onValueChange={handleSpeciesChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select species" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(AllSpecies).map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {speciesData && (
        <div className="p-6 space-y-8">
          {/* Base Stats */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-foreground" />
              Health
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-red/10 rounded-lg">
                <div className="text-sm font-medium mb-1">Hit points</div>
                <div className="text-xl">
                  {speciesData.health.initial}
                  <span className="text-sm text-muted-foreground ml-1">
                    (+{speciesData.health.increments} per level)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-green/10 rounded-lg">
                <div className="text-sm font-medium mb-1">Morale</div>
                <div className="text-xl">
                  {speciesData.sanity.initial}
                  <span className="text-sm text-muted-foreground ml-1">
                    (+{speciesData.sanity.increments} per level)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-blue/10 rounded-lg">
                <div className="text-sm font-medium mb-1">Stamina</div>
                <div className="text-xl">
                  {speciesData.stamina.initial}
                  <span className="text-sm text-muted-foreground ml-1">
                    (+{speciesData.stamina.increments} per level)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Movement */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5" />
              Movement
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(speciesData.speed)
                .filter(([_, value]) => value > 0)
                .map(([type, value]) => (
                  <div key={type} className="flex items-center gap-2">
                    <SpeedIcon type={type as MovementType} size={16} />
                    <div>
                      <div className="text-sm font-medium">{type}</div>
                      <div>{value}m</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Armour */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Armour
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {Object.entries(speciesData.armour).map(([type, value]) => (
                <div key={type} className="flex items-center gap-2">
                  <ArmourIcon type={type as DamageType} size={16} />
                  <div>
                    <div className="text-sm font-medium">{type}</div>
                    <div>{value > 0 ? `+${value}` : "-"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ChartNoAxesColumn className="h-5 w-5" />
              Skills
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(speciesData.skillLevels).map(([skill, value]) => (
                <div key={skill} className="flex items-center gap-2">
                  <SkillIcon type={skill as any} />
                  <div>
                    <div className="text-sm font-medium">{skill}</div>
                    <div>{value === 0 ? "-" : value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
