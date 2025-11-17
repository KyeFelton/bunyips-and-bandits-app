import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  ancestryAtom,
  ancestryDataAtom,
  speciesAtom,
  speciesDataAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
} from "./../state/character";
import { AllSpecies } from "./../data/species";
import { AllAncestries } from "./../data/ancestries";
import { Heart, ChartNoAxesColumn, Shield, ArrowLeftRight, Sparkles } from "lucide-react";
import { SkillIcon } from "./icons/SkillIcon";
import { Locomotion } from "./../enums/Locomotion";
import { DamageType } from "./../enums/DamageType";
import { SpeedIcon } from "./icons/SpeedIcon";
import { ArmourIcon } from "./icons/ArmourIcon";
import { getSpeciesImage } from "./../utils/speciesImages";
import { SpeciesHealthBar } from "./SpeciesHealthBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { cn } from "./../utils/cn";
import { useCallback, useEffect, useState, useMemo } from "react";
import { Card } from "./ui/card";

export const FolkStep = () => {
  const [selectedAncestry, setAncestry] = useAtom(ancestryAtom);
  const ancestryData = useAtomValue(ancestryDataAtom);
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const speciesData = useAtomValue(speciesDataAtom);
  const setCurrentPhysique = useSetAtom(currentPhysiqueAtom);
  const setCurrentMorale = useSetAtom(currentMoraleAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [api, setApi] = useState<CarouselApi>();

  // Get available ancestries for selected species
  const availableAncestries = useMemo(() => {
    if (!selectedSpecies) return Object.keys(AllAncestries);

    return Object.entries(AllAncestries)
      .filter(([_, ancestry]) => ancestry.species.includes(selectedSpecies))
      .map(([name]) => name);
  }, [selectedSpecies]);

  const handleAncestryChange = useCallback(
    (ancestryName: string) => {
      setAncestry(ancestryName);
    },
    [setAncestry]
  );

  const handleSpeciesChange = useCallback(
    (value: string) => {
      const newSpeciesData = AllSpecies[value as keyof typeof AllSpecies];
      if (!speciesData) {
        // First selection
        setCurrentPhysique(newSpeciesData.physique);
        setCurrentMorale(newSpeciesData.morale);
        setCurrentStamina(newSpeciesData.stamina);
      } else {
        // Changing species
        const physiqueChange = newSpeciesData.physique - speciesData.physique;
        const moraleChange = newSpeciesData.morale - speciesData.morale;
        const staminaChange = newSpeciesData.stamina - speciesData.stamina;
        setCurrentPhysique((prev) => Math.max(0, prev + physiqueChange));
        setCurrentMorale((prev) => Math.max(0, prev + moraleChange));
        setCurrentStamina((prev) => Math.max(0, prev + staminaChange));
      }
      setSpecies(value);

      // Check if current ancestry is still valid for the new species
      if (selectedAncestry) {
        const ancestryData = AllAncestries[selectedAncestry as keyof typeof AllAncestries];
        if (!ancestryData.species.includes(value)) {
          // Current ancestry not available for new species
          // Find first available ancestry for this species
          const firstAvailableAncestry = Object.entries(AllAncestries)
            .find(([_, ancestry]) => ancestry.species.includes(value));
          if (firstAvailableAncestry) {
            setAncestry(firstAvailableAncestry[0]);
          }
        }
      } else {
        // No ancestry selected, auto-select first available
        const firstAvailableAncestry = Object.entries(AllAncestries)
          .find(([_, ancestry]) => ancestry.species.includes(value));
        if (firstAvailableAncestry) {
          setAncestry(firstAvailableAncestry[0]);
        }
      }
    },
    [
      setCurrentMorale,
      setCurrentPhysique,
      setCurrentStamina,
      setSpecies,
      speciesData,
      selectedAncestry,
      setAncestry,
    ]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const allSpeciesKeys = Object.keys(AllSpecies);
      const selectedSpeciesName = allSpeciesKeys[selectedIndex];
      if (selectedSpeciesName) {
        handleSpeciesChange(selectedSpeciesName);
      }
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
    if (!api || !selectedSpecies) return;
    const allSpeciesKeys = Object.keys(AllSpecies);
    const selectedIndex = allSpeciesKeys.indexOf(selectedSpecies);
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedSpecies]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Choose your species and ancestry to shape your character's heritage and abilities.
        </div>
      </div>

      {/* Species Selection */}
      <div>
        <h3 className="font-semibold mb-4 text-lg">Select Species</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground mb-4">
          <div className="whitespace-nowrap">
            Selected: {selectedSpecies || "None"}
          </div>
        </div>

        {/* Species Carousel */}
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
                {Object.keys(AllSpecies).map((speciesName) => (
                  <CarouselItem
                    key={speciesName}
                    className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                    onClick={() => {
                      const allSpeciesKeys = Object.keys(AllSpecies);
                      const selectedIndex = allSpeciesKeys.indexOf(speciesName);
                      if (selectedIndex !== -1) {
                        api?.scrollTo(selectedIndex);
                        handleSpeciesChange(speciesName);
                      }
                    }}
                  >
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div
                        className={cn(
                          "transition-all duration-300 ease-in-out",
                          speciesName === selectedSpecies
                            ? "h-40 w-40 lg:h-48 lg:w-48 opacity-100"
                            : "h-36 w-36 lg:h-44 lg:w-44 opacity-50"
                        )}
                      >
                        <img
                          src={getSpeciesImage(speciesName, selectedAncestry || "Englorian")}
                          alt={speciesName}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <span
                        className={cn(
                          "font-medium",
                          speciesName !== selectedSpecies
                            ? `text-md text-muted-foreground/50`
                            : "text-lg"
                        )}
                      >
                        {speciesName}
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
      </div>

      {/* Ancestry Selection (only show if species is selected) */}
      {selectedSpecies && availableAncestries.length > 0 && (
        <div className="pt-6 border-t border-muted-foreground/20">
          <h3 className="font-semibold mb-4 text-lg">Select Ancestry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableAncestries.map((ancestryName) => {
              const ancestry = AllAncestries[ancestryName as keyof typeof AllAncestries];
              return (
                <Card
                  key={ancestryName}
                  className={cn(
                    "p-4 cursor-pointer transition-all duration-200 hover:shadow-lg border-2",
                    selectedAncestry === ancestryName
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/50"
                  )}
                  onClick={() => handleAncestryChange(ancestryName)}
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">{ancestry.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {ancestry.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Ancestry Trait Details (shown below cards when ancestry is selected) */}
          {selectedAncestry && ancestryData && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <div className="font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                {ancestryData.name} Heritage
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {ancestryData.description}
              </div>
              {ancestryData.effects && ancestryData.effects.length > 0 && (
                <div className="text-sm mt-2">
                  <span className="font-medium">Bonus:</span> +{ancestryData.effects[0].skill?.bonus || 1} {ancestryData.effects[0].skill?.skillType || 'skill'}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Stats Display (only show if both ancestry and species are selected) */}
      {speciesData && ancestryData && (
        <div className="space-y-6 pt-6 border-t border-muted-foreground/20">
          {/* Base Stats */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-foreground" />
              Health
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
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
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5" />
              Speed
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.entries(speciesData.speed).map(([type, value]) => (
                <div key={type} className="flex items-center gap-2">
                  <SpeedIcon type={type as Locomotion} size={16} />
                  <div>
                    <div className="text-sm font-medium">{type}</div>
                    <div>{value ? `${value}m` : "-"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Armour */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Armour
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.entries(speciesData.armour).map(([type, value]) => (
                <div key={type} className="flex items-center gap-2">
                  <ArmourIcon type={type as DamageType} size={16} />
                  <div>
                    <div className="text-sm font-medium">{type}</div>
                    <div>{value > 0 ? `+${value}` : value < 0 ? value : "-"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ChartNoAxesColumn className="h-5 w-5" />
              Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
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
      )}
    </div>
  );
};
