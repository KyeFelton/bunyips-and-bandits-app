import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  ancestryAtom,
  ancestryDataAtom,
  speciesAtom,
  speciesDataAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  languagesAtom,
} from "../state/character";
import { AllSpecies } from "../data/species";
import { AllAncestries } from "../data/ancestries";
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
import { SpeedRating } from "../enums/SpeedRating";

type KinOption = {
  ancestry: string;
  species: string;
  name: string;
  description: string;
  label: string;
};

const KIN: Omit<KinOption, "label">[] = [
  {
    ancestry: "Downunda",
    species: "Reptilian",
    name: "Birim",
    description:
      "The Birim are a reptilian kin originating from the deserts of Downunda. They are distinguished by their tall and slender physique, with features resembling goannas.",
  },
  {
    ancestry: "Downunda",
    species: "Giant",
    name: "Yowie",
    description:
      "Yowies are a giant kin found in the highlands of Downunda. They are large, fur-covered humanoids with features resembling marsupials.",
  },
  {
    ancestry: "Downunda",
    species: "Goblin",
    name: "Drop Bear",
    description:
      "Drop Bears are a koala-like, goblin kin native to the forests of Downunda. They possess stocky, hunched bodies, with strong arms suited for climbing and wrestling.",
  },
  {
    ancestry: "Downunda",
    species: "Delver",
    name: "Joonyar",
    description:
      "The Joonyar are a delver kin that live in the underground regions of Downunda. They are small humanoids with skin in shades of eucalyptus, brown hair, and glowing orange eyes that provide illumination in low-light environments.",
  },
  {
    ancestry: "Downunda",
    species: "Human",
    name: "Dharrigal",
    description:
      "Humans of Downunda are diverse in culture, with many tracing their lineage to the Dharrigal peoples who have inhabited these lands for countless generations.",
  },
  {
    ancestry: "Engloria",
    species: "Avian",
    name: "Skerrig",
    description:
      "The Skerrig are an avian kin native to the coasts and rivers of Engloria and Downunda. Their plumage varies widely, often resembling seabirds such as gulls, cormorants, and puffins.",
  },
  {
    ancestry: "Engloria",
    species: "Giant",
    name: "Troll",
    description:
      "Trolls are a giant kin native to the swamps and mountains of Engloria. They are large humanoids with broad noses, heavy brows, mossy hair, and enormous hands and feet.",
  },
  {
    ancestry: "Engloria",
    species: "Goblin",
    name: "Hob",
    description:
      "Hobs are a goblin kin with ancestral ties to Engloria. They are slightly shorter than humans, with a stocky build, coarse body hair, and facial features often likened to bats, including wide-set eyes, flat nose and pointed ears.",
  },
  {
    ancestry: "Engloria",
    species: "Delver",
    name: "Gnome",
    description:
      "Gnomes are delvers originating from the underground regions of Engloria. They are small in stature and are recognised by their sky-blue skin, white hair, and glowing yellow eyes.",
  },
  {
    ancestry: "Engloria",
    species: "Human",
    name: "Englorian",
    description:
      "Englorians descend from human settlers who originated in Engloria.",
  },
];

const KIN_OPTIONS: KinOption[] = KIN.map((kin) => ({
  ...kin,
  label: kin.name,
})).sort((a, b) => a.label.localeCompare(b.label));

export const KinStep = () => {
  const [selectedAncestry, setAncestry] = useAtom(ancestryAtom);
  const ancestryData = useAtomValue(ancestryDataAtom);
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const speciesData = useAtomValue(speciesDataAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const setLanguages = useSetAtom(languagesAtom);
  const [api, setApi] = useState<CarouselApi>();

  const selectedKinOption = useMemo(
    () =>
      KIN_OPTIONS.find(
        (option) =>
          option.species === selectedSpecies &&
          option.ancestry === selectedAncestry
      ),
    [selectedSpecies, selectedAncestry]
  );

  const handleKinChange = useCallback(
    (speciesName: string, ancestryName: string) => {
      const newSpeciesData = AllSpecies[speciesName as keyof typeof AllSpecies];
      const newAncestryData =
        AllAncestries[ancestryName as keyof typeof AllAncestries];
      setCurrentBody(newSpeciesData.body);
      setCurrentMind(newSpeciesData.mind);
      setCurrentStamina(newSpeciesData.stamina);
      setSpecies(speciesName);
      setAncestry(ancestryName);
      setLanguages(newAncestryData.languages);
    },
    [
      setCurrentBody,
      setCurrentMind,
      setCurrentStamina,
      setSpecies,
      setAncestry,
      setLanguages,
    ]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const option = KIN_OPTIONS[api.selectedScrollSnap()];
      if (option) {
        handleKinChange(option.species, option.ancestry);
      }
    },
    [handleKinChange]
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !selectedSpecies || !selectedAncestry) return;
    const selectedIndex = KIN_OPTIONS.findIndex(
      (option) =>
        option.species === selectedSpecies &&
        option.ancestry === selectedAncestry
    );
    if (selectedIndex !== -1 && api.selectedScrollSnap() !== selectedIndex) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedSpecies, selectedAncestry]);

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
                  const isSelected =
                    option.species === selectedSpecies &&
                    option.ancestry === selectedAncestry;

                  return (
                    <CarouselItem
                      key={`${option.ancestry}-${option.species}`}
                      className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                      onClick={() => {
                        api?.scrollTo(index);
                        handleKinChange(option.species, option.ancestry);
                      }}
                    >
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div
                          className={cn(
                            "transition-all duration-300 ease-in-out",
                            isSelected
                              ? "h-40 w-40 lg:h-48 lg:w-48 opacity-100"
                              : "h-36 w-36 lg:h-44 lg:w-44 opacity-50"
                          )}
                        >
                          <img
                            src={getSpeciesImage(
                              option.species,
                              option.ancestry
                            )}
                            alt={option.label}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <span
                          className={cn(
                            "font-medium text-center",
                            !isSelected
                              ? "text-md text-muted-foreground/50"
                              : "text-lg"
                          )}
                        >
                          {option.label}
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

      {selectedKinOption && (
        <div className="p-4 bg-primary/10 rounded-lg">
          <h4 className="font-semibold text-lg">{selectedKinOption.label}</h4>
          <p className="text-sm text-muted-foreground mb-2">
            {selectedKinOption.species} <strong>·</strong>{" "}
            {selectedKinOption.ancestry}
          </p>
          <p className="text-sm text-muted-foreground">
            {selectedKinOption.description}
          </p>
        </div>
      )}

      {/* Stats Display (only show if both ancestry and species are selected) */}
      {speciesData && ancestryData && (
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
                    {speciesData.body}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={speciesData.body}
                  maxValue={10}
                  color="danger"
                />
              </div>
              <div className="p-4 bg-good/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Mind</div>
                  <div className="text-xl font-semibold">
                    {speciesData.mind}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={speciesData.mind}
                  maxValue={10}
                  color="good"
                />
              </div>
              <div className="p-4 bg-info/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Stamina</div>
                  <div className="text-xl font-semibold">
                    {speciesData.stamina}
                  </div>
                </div>
                <SpeciesHealthBar
                  value={speciesData.stamina}
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
              {Object.entries(speciesData.speed)
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
                    speciesData.senses.keen.includes(type) ||
                    speciesData.senses.poor.includes(type)
                )
                .map(({ type, label }) => (
                  <div key={type} className="flex items-center gap-4">
                    <SenseIcon type={type} />
                    <div>
                      <div className="text-sm font-medium">{label}</div>
                      <div>
                        {speciesData.senses.keen.includes(type)
                          ? "Keen"
                          : speciesData.senses.poor.includes(type)
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
