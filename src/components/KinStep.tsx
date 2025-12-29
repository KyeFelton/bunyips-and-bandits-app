import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  originAtom,
  originDataAtom,
  speciesAtom,
  speciesDataAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  languagesAtom,
} from "../state/character";
import { AllSpecies } from "../data/species";
import { AllOrigins } from "../data/origins";
import { Heart, ChartNoAxesColumn, ArrowLeftRight, Radio } from "lucide-react";
import { SkillIcon } from "./icons/SkillIcon";
import { Locomotion } from "../enums/Locomotion";
import { SpeedIcon } from "./icons/SpeedIcon";
import { SenseIcon } from "./icons/SenseIcon";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { getSpeciesImage } from "../utils/speciesImages";
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
import { useCallback, useEffect, useState, useMemo } from "react";
import { Card } from "./ui/card";
import { SpeedRating } from "../enums/SpeedRating";
import { Human } from "../data/species/Human";

// Folk descriptions by origin and species
const FOLK_DESCRIPTIONS: Record<
  string,
  Record<string, { name: string; description: string }>
> = {
  Downunda: {
    Reptilian: {
      name: "Birim",
      description:
        "The Birim are a reptilian folk originating from the deserts of Downunda. They are distinguished by their tall and slender physique, with features resembling goannas.",
    },
    Avian: {
      name: "Karrakan",
      description:
        "The Karrakan are an avian folk with ancestral ties to Downunda. Their feather colours vary widely, with some resembling pink galahs, sulphur-crested cockatoos, or black cockatoos.",
    },
    Giant: {
      name: "Yowie",
      description:
        "Yowies are a giant folk found in the highlands of Downunda. They are large, fur-covered humanoids with features resembling marsupials.",
    },
    Goblin: {
      name: "Drop Bear",
      description:
        "Drop Bears are a koala-like, goblin folk native to the forests of Downunda. They possess stocky, hunched bodies, with strong arms suited for climbing and wrestling.",
    },
    Delver: {
      name: "Joonyar",
      description:
        "The Joonyar are a delver folk that live in the underground regions of Downunda. They are small humanoids with skin in shades of eucalyptus, brown hair, and glowing orange eyes that provide illumination in low-light environments.",
    },
    Human: {
      name: "Dharrigal",
      description:
        "Humans of Downunda are diverse in culture, with many tracing their lineage to the Dharrigal peoples who have inhabited these lands for countless generations.",
    },
  },
  Engloria: {
    Avian: {
      name: "Skerrig",
      description:
        "The Skerrig are an avian folk native to the coasts and rivers of Engloria and Downunda. Their plumage varies widely, often resembling seabirds such as gulls, cormorants, and puffins.",
    },
    Giant: {
      name: "Troll",
      description:
        "Trolls are a giant folk native to the swamps and mountains of Engloria. They are large humanoids with broad noses, heavy brows, mossy hair, and enormous hands and feet.",
    },
    Goblin: {
      name: "Hob",
      description:
        "Hobs are a goblin folk with ancestral ties to Engloria. They are slightly shorter than humans, with a stocky build, coarse body hair, and facial features often likened to bats, including wide-set eyes, flat nose and pointed ears.",
    },
    Delver: {
      name: "Gnome",
      description:
        "Gnomes are delvers originating from the underground regions of Engloria. They are small in stature and are recognised by their sky-blue skin, white hair, and glowing yellow eyes.",
    },
    Human: {
      name: "Englorian",
      description:
        "Englorian humans descend from the Englorian settlers who arrived from across the seas. They are the most abundant of all folk in Downunda.",
    },
  },
};

export const KinStep = () => {
  const [selectedOrigin, setOrigin] = useAtom(originAtom);
  const originData = useAtomValue(originDataAtom);
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const speciesData = useAtomValue(speciesDataAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const setLanguages = useSetAtom(languagesAtom);
  const [api, setApi] = useState<CarouselApi>();

  // Get available ancestries for selected species
  const availableOrigins = useMemo(() => {
    if (!selectedSpecies) return Object.keys(AllOrigins);

    return Object.entries(AllOrigins)
      .filter(([, origin]) => origin.species.includes(selectedSpecies))
      .map(([name]) => name);
  }, [selectedSpecies]);

  // Get available species for selected origin
  const availableSpecies = useMemo(() => {
    if (!selectedOrigin) return Object.keys(AllSpecies);

    const originData = AllOrigins[selectedOrigin as keyof typeof AllOrigins];
    if (!originData) return Object.keys(AllSpecies);

    return Object.keys(AllSpecies).filter((speciesName) =>
      originData.species.includes(speciesName)
    );
  }, [selectedOrigin]);

  const handleOriginChange = useCallback(
    (originName: string) => {
      setOrigin(originName);
      if (originName === "Downunda") {
        setLanguages(["Dharrigal", "Englorian"]);
      } else if (originName === "Engloria") {
        setLanguages(["Englorian"]);
      }
    },
    [setOrigin, setLanguages]
  );

  const handleSpeciesChange = useCallback(
    (value: string) => {
      const newSpeciesData = AllSpecies[value as keyof typeof AllSpecies];
      setCurrentBody(newSpeciesData.body);
      setCurrentMind(newSpeciesData.mind);
      setCurrentStamina(newSpeciesData.stamina);
      setSpecies(value);
    },
    [setCurrentMind, setCurrentBody, setCurrentStamina, setSpecies]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const selectedSpeciesName = availableSpecies[selectedIndex];
      if (selectedSpeciesName) {
        handleSpeciesChange(selectedSpeciesName);
      }
    },
    [handleSpeciesChange, availableSpecies]
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
    const selectedIndex = availableSpecies.indexOf(selectedSpecies);
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedSpecies, availableSpecies]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Choose your species and origin to shape your character's heritage and
          abilities.
        </div>
      </div>

      {/* Origin Selection */}
      <div className="">
        <h3 className="font-semibold mb-4 text-lg">Origin</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(AllOrigins).map((origin) => {
            const isAvailable = availableOrigins.includes(origin.name);
            return (
              <Card
                key={origin.name}
                className={cn(
                  "p-4 transition-all duration-200 border-2",
                  isAvailable
                    ? "cursor-pointer hover:shadow-lg"
                    : "cursor-not-allowed opacity-50",
                  selectedOrigin === origin.name
                    ? "border-primary bg-primary/5"
                    : isAvailable
                    ? "border-muted hover:border-primary/50"
                    : "border-muted"
                )}
                onClick={() => isAvailable && handleOriginChange(origin.name)}
              >
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">{origin.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {origin.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Species Selection */}
      <div className="pt-6 border-t border-muted-foreground/20">
        <h3 className="font-semibold mb-4 text-lg">Species</h3>
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
                {availableSpecies.map((speciesName) => (
                  <CarouselItem
                    key={speciesName}
                    className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                    onClick={() => {
                      const selectedIndex =
                        availableSpecies.indexOf(speciesName);
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
                          src={getSpeciesImage(speciesName, selectedOrigin)}
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

        {/* Description */}
        {selectedSpecies &&
          selectedOrigin &&
          (() => {
            const folkInfo =
              FOLK_DESCRIPTIONS[selectedOrigin]?.[selectedSpecies];
            if (!folkInfo) return null;

            return (
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">
                  {selectedSpecies === Human.name
                    ? `${folkInfo.name} ${selectedSpecies}`
                    : `${folkInfo.name} (${selectedSpecies})`}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {folkInfo.description}
                </p>
              </div>
            );
          })()}
      </div>

      {/* Stats Display (only show if both origin and species are selected) */}
      {speciesData && originData && (
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
                  <div className="text-sm font-medium">Body</div>
                  <div className="text-xl font-semibold">
                    {speciesData.body}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={speciesData.body}
                  maxValue={10}
                  color="red"
                />
              </div>
              <div className="p-4 bg-green/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Mind</div>
                  <div className="text-xl font-semibold">
                    {speciesData.mind}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={speciesData.mind}
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
                { type: SenseType.InfraredSight, label: "Infrared" },
                { type: SenseType.Hearing, label: "Hearing" },
                { type: SenseType.TremorHearing, label: "Tremor" },
                { type: SenseType.Smell, label: "Smell" },
              ].map(({ type, label }) => (
                <div key={type} className="flex items-center gap-4">
                  <SenseIcon type={type} />
                  <div>
                    <div className="text-sm font-medium">{label}</div>
                    <div>
                      {speciesData.senses.primary.includes(type)
                        ? "Primary"
                        : speciesData.senses.secondary.includes(type)
                        ? "Secondary"
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
            {Object.keys(speciesData.skillModifiers).length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {Object.entries(speciesData.skillModifiers).map(
                  ([skill, value]) => (
                    <div key={skill} className="flex items-center gap-2">
                      <SkillIcon type={skill as SkillType} />
                      <div>
                        <div className="text-sm font-medium">{skill}</div>
                        <div>{value > 0 ? `+${value}` : String(value)}</div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className="text-muted-foreground h-[48px]">
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
              {Object.entries(speciesData.armour).map(([type, value]) => (
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
