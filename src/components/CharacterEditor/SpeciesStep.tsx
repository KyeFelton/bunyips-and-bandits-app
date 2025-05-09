import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  speciesAtom,
  speciesDataAtom,
  imageAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
} from "../../state/character";
import { AllSpecies } from "../../data/species";
import { Heart, ChartNoAxesColumn, Shield, ArrowLeftRight } from "lucide-react";
import { SkillIcon } from "../icons/SkillIcon";
import { Locomotion } from "../../enums/Locomotion";
import { DamageType } from "../../enums/DamageType";
import { SpeedIcon } from "../icons/SpeedIcon";
import { ArmourIcon } from "../icons/ArmourIcon";
import { getSpeciesImage } from "../../utils/speciesImages";
import { SpeciesHealthBar } from "../SpeciesHealthBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { cn } from "../../utils/cn";
import { useCallback, useEffect, useState } from "react";

export const SpeciesStep = () => {
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const speciesData = useAtomValue(speciesDataAtom);
  const setImage = useSetAtom(imageAtom);
  const setCurrentPhysique = useSetAtom(currentPhysiqueAtom);
  const setCurrentMorale = useSetAtom(currentMoraleAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [api, setApi] = useState<CarouselApi>();

  const handleSpeciesChange = useCallback(
    (value: string) => {
      const newSpeciesData = AllSpecies[value as keyof typeof AllSpecies];
      const physiqueChange = newSpeciesData.physique - speciesData.physique;
      const moraleChange = newSpeciesData.morale - speciesData.morale;
      const staminaChange = newSpeciesData.stamina - speciesData.stamina;
      setCurrentPhysique((prev) => Math.max(0, prev + physiqueChange));
      setCurrentMorale((prev) => Math.max(0, prev + moraleChange));
      setCurrentStamina((prev) => Math.max(0, prev + staminaChange));
      setSpecies(value);
      setImage(getSpeciesImage(value));
    },
    [
      setCurrentMorale,
      setCurrentPhysique,
      setCurrentStamina,
      setImage,
      setSpecies,
      speciesData.morale,
      speciesData.physique,
      speciesData.stamina,
    ]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const speciesKeys = Object.keys(AllSpecies);
      const selectedSpecies = speciesKeys[selectedIndex];
      handleSpeciesChange(selectedSpecies);
    },
    [handleSpeciesChange]
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    const speciesKeys = Object.keys(AllSpecies);
    const selectedIndex = speciesKeys.indexOf(selectedSpecies);
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedSpecies]);

  return (
    <div className="space-y-6">
      {speciesData && (
        <div className="">
          {/* Species Image */}
          <div className="relative px-16">
            <div className="h-[220px] lg:h-[280px] flex items-center">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent>
                  {Object.keys(AllSpecies).map((species) => (
                    <CarouselItem
                      key={species}
                      className="sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                      onClick={() => {
                        const speciesKeys = Object.keys(AllSpecies);
                        const selectedIndex = speciesKeys.indexOf(species);
                        if (selectedIndex !== -1) {
                          api?.scrollTo(selectedIndex);
                          handleSpeciesChange(species);
                        }
                      }}
                    >
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div
                          className={cn(
                            "transition-all duration-300 ease-in-out",
                            species === selectedSpecies
                              ? "h-40 w-40 lg:h-48 lg:w-48 opacity-100"
                              : "h-36 w-36 lg:h-44 lg:w-44 opacity-50"
                          )}
                        >
                          <img
                            src={getSpeciesImage(species)}
                            alt={species}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <span
                          className={cn(
                            "font-medium",
                            species !== selectedSpecies
                              ? `text-md text-muted-foreground/50`
                              : "text-lg"
                          )}
                        >
                          {species}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Stats Container */}
          <div className="space-y-8">
            {/* Base Stats */}
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-foreground" />
                Health
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 bg-red/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Physique</div>
                    <div className="text-xl font-semibold">
                      {speciesData.physique}
                    </div>
                  </div>
                  <SpeciesHealthBar
                    value={speciesData.physique}
                    maxValue={10}
                    color="red"
                  />
                </div>
                <div className="p-4 bg-green/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Morale</div>
                    <div className="text-xl font-semibold">
                      {speciesData.morale}
                    </div>
                  </div>
                  <SpeciesHealthBar
                    value={speciesData.morale}
                    maxValue={10}
                    color="green"
                  />
                </div>
                <div className="p-4 bg-blue/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Stamina</div>
                    <div className="text-xl font-semibold">
                      {speciesData.stamina}
                    </div>
                  </div>
                  <SpeciesHealthBar
                    value={speciesData.stamina}
                    maxValue={10}
                    color="blue"
                  />
                </div>
              </div>
            </div>

            {/* Speed */}
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5" />
                Speed
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(speciesData.speed)
                  .filter(([, value]) => value > 0)
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
                {Object.entries(speciesData.skillLevels).map(
                  ([skill, value]) => (
                    <div key={skill} className="flex items-center gap-2">
                      <SkillIcon
                        type={skill as keyof typeof speciesData.skillLevels}
                      />
                      <div>
                        <div className="text-sm font-medium">{skill}</div>
                        <div>{value === 0 ? "-" : value}</div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
