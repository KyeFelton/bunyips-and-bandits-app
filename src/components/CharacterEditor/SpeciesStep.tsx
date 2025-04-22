import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  speciesAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
  physiqueAtom,
  moraleAtom,
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
import { AllSpecies } from "../../data/species";
import { Heart, ChartNoAxesColumn, Shield, ArrowLeftRight } from "lucide-react";
import { SkillIcon } from "../icons/SkillIcon";
import { Locomotion } from "../../enums/Locomotion";
import { DamageType } from "../../enums/DamageType";
import { SpeedIcon } from "../icons/SpeedIcon";
import { ArmourIcon } from "../icons/ArmourIcon";
import { useEffect } from "react";
import { getSpeciesImage } from "../../utils/speciesImages";

export const SpeciesStep = () => {
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const physique = useAtomValue(physiqueAtom);
  const morale = useAtomValue(moraleAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentPhysique = useSetAtom(currentPhysiqueAtom);
  const setCurrentMorale = useSetAtom(currentMoraleAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const speciesData = useAtomValue(speciesDataAtom);
  const setImage = useSetAtom(imageAtom);

  useEffect(() => {
    setCurrentPhysique(physique.max);
  }, [physique, setCurrentPhysique]);

  useEffect(() => {
    setCurrentMorale(morale.max);
  }, [morale, setCurrentMorale]);

  useEffect(() => {
    setCurrentStamina(stamina.max);
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
                <div className="text-sm font-medium mb-1">Physique</div>
                <div className="text-xl">
                  {speciesData.physique.initial}
                  <span className="text-sm text-muted-foreground ml-1">
                    (+{speciesData.physique.increments} per level)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-green/10 rounded-lg">
                <div className="text-sm font-medium mb-1">Morale</div>
                <div className="text-xl">
                  {speciesData.morale.initial}
                  <span className="text-sm text-muted-foreground ml-1">
                    (+{speciesData.morale.increments} per level)
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
              Speed
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(speciesData.speed)
                .filter(([_, value]) => value > 0)
                .map(([type, value]) => (
                  <div key={type} className="flex items-center gap-2">
                    <SpeedIcon type={type as Locomotion} size={16} />
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
