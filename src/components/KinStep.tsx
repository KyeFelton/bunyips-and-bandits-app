import { useAtom, useSetAtom } from "jotai";
import {
  kinAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  languagesAtom,
} from "../state/character";
import { Heart, ChartNoAxesColumn, ArrowLeftRight, Radio } from "lucide-react";
import { SkillIcon } from "./icons/SkillIcon";
import { Locomotion } from "../enums/Locomotion";
import { SpeedIcon } from "./icons/SpeedIcon";
import { SenseIcon } from "./icons/SenseIcon";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { SpeciesHealthBar } from "./SpeciesHealthBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { cn } from "../utils/cn";
import { useCallback, useEffect, useState } from "react";
import { SpeedRating } from "../enums/SpeedRating";
import { Kin } from "../models/kin";
import { AllKin } from "../data/kin";

const KIN_OPTIONS: Kin[] = Object.values(AllKin).sort((a, b) =>
  a.name.localeCompare(b.name),
);

export const KinStep = () => {
  const [kin, setKin] = useAtom(kinAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const setLanguages = useSetAtom(languagesAtom);
  const [api, setApi] = useState<CarouselApi>();

  const handleKinChange = useCallback(
    (kinOption: Kin) => {
      setCurrentBody(kinOption.species.body);
      setCurrentMind(kinOption.species.mind);
      setCurrentStamina(kinOption.species.stamina);
      setLanguages(kinOption.ancestry.languages);
      setKin(kinOption);
    },
    [setCurrentBody, setCurrentMind, setCurrentStamina, setLanguages, setKin],
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const option = KIN_OPTIONS[api.selectedScrollSnap()];
      if (option) {
        handleKinChange(option);
      }
    },
    [handleKinChange],
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !kin) return;
    const selectedIndex = KIN_OPTIONS.findIndex(
      (option) => option.name === kin.name,
    );
    if (selectedIndex !== -1 && api.selectedScrollSnap() !== selectedIndex) {
      api.scrollTo(selectedIndex);
    }
  }, [api, kin]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Choose your kin to shape your character's heritage and abilities.
        </div>
      </div>

      <div className="">
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
                {KIN_OPTIONS.map((option, index) => {
                  const isSelected = option.name === kin.name;
                  return (
                    <CarouselItem
                      key={option.name}
                      className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                      onClick={() => {
                        api?.scrollTo(index);
                        handleKinChange(option);
                      }}
                    >
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div
                          className={cn(
                            "transition-all duration-300 ease-in-out h-36 w-36 lg:h-44 lg:w-44 ",
                            isSelected ? "opacity-100" : "opacity-50",
                          )}
                        >
                          <img
                            src={option.imageSrc}
                            alt={option.name}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <span
                          className={cn(
                            "font-medium text-center",
                            !isSelected
                              ? "text-md text-muted-foreground/50"
                              : "text-lg",
                          )}
                        >
                          {option.name}
                        </span>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {kin && (
        <div className="p-4 bg-primary/10 rounded-lg">
          <h4 className="font-semibold text-lg">{kin.name}</h4>
          <p className="text-sm text-muted-foreground mb-2">
            {kin.species.name} <strong>·</strong> {kin.ancestry.name}
          </p>
          <p className="text-sm text-muted-foreground">{kin.description}</p>
        </div>
      )}

      {kin && (
        <div className="space-y-6 pt-6 border-t border-muted-foreground/20">
          {/* Base Stats */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-danger" />
              Health
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-4 bg-danger/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Body</div>
                  <div className="text-xl font-semibold">
                    {kin.species.body}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={kin.species.body}
                  maxValue={10}
                  color="danger"
                />
              </div>
              <div className="p-4 bg-good/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Mind</div>
                  <div className="text-xl font-semibold">
                    {kin.species.mind}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={kin.species.mind}
                  maxValue={10}
                  color="good"
                />
              </div>
              <div className="p-4 bg-info/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Stamina</div>
                  <div className="text-xl font-semibold">
                    {kin.species.stamina}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={kin.species.stamina}
                  maxValue={10}
                  color="info"
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
              {Object.entries(kin.species.speed)
                .filter(([, value]) => value !== SpeedRating.None)
                .map(([type, value]) => (
                  <div key={type} className="flex items-center gap-2">
                    <SpeedIcon type={type as Locomotion} size={16} />
                    <div>
                      <div className="text-sm font-medium">{type}</div>
                      <div>
                        {value === SpeedRating.None ? "-" : String(value)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Senses */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Radio className="h-5 w-5" />
              Senses
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { type: SenseType.Sight, label: "Sight" },
                { type: SenseType.InfraredSight, label: "Infradanger" },
                { type: SenseType.Hearing, label: "Hearing" },
                { type: SenseType.TremorHearing, label: "Tremor" },
                { type: SenseType.Smell, label: "Smell" },
              ]
                .filter(
                  ({ type }) =>
                    kin.species.senses.keen.includes(type) ||
                    kin.species.senses.poor.includes(type),
                )
                .map(({ type, label }) => (
                  <div key={type} className="flex items-center gap-4">
                    <SenseIcon type={type} />
                    <div>
                      <div className="text-sm font-medium">{label}</div>
                      <div>
                        {kin.species.senses.keen.includes(type)
                          ? "Keen"
                          : kin.species.senses.poor.includes(type)
                            ? "Poor"
                            : "-"}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ChartNoAxesColumn className="h-5 w-5" />
              Skill Modifiers
            </h3>
            {Object.keys(kin.species.skillModifiers).length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {Object.entries(kin.species.skillModifiers).map(
                  ([skill, value]) => (
                    <div key={skill} className="flex items-center gap-2">
                      <SkillIcon type={skill as SkillType} />
                      <div>
                        <div className="text-sm font-medium">{skill}</div>
                        <div>{value > 0 ? `+${value}` : String(value)}</div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground h-[48px]">
                No skill modifiers
              </p>
            )}
          </div>

          {/* Armour */}
          {/* <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Armour
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.entries(kin.species.armour).map(([type, value]) => (
                <div key={type} className="flex items-center gap-2">
                  <ArmourIcon type={type as DamageType} size={16} />
                  <div>
                    <div className="text-sm font-medium">{type}</div>
                    <div>
                      {value > 0 ? `+${value}` : value < 0 ? value : "-"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};
