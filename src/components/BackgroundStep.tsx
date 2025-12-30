import { useAtom, useAtomValue } from "jotai";
import { backgroundAtom, backgroundDataAtom } from "./../state/character";
import { AllBackgrounds } from "./../data/backgrounds";
import {
  GraduationCap,
  Star,
  Hammer,
  Swords,
  Sailboat,
  Wheat,
  Leaf,
  BowArrow,
  Pickaxe,
  Crown,
  Heart,
  Coins,
  BookOpen,
  Music,
  Shield,
  Eye,
} from "lucide-react";
import { SkillIcon } from "./icons/SkillIcon";
import { SkillType } from "./../enums/SkillType";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { cn } from "./../utils/cn";
import { useCallback, useEffect, useState } from "react";
import { type LucideIcon } from "lucide-react";

// Icon mapping for each background
const BACKGROUND_ICONS: Record<string, LucideIcon> = {
  Artisan: Hammer,
  Bandit: Swords,
  Drifter: Sailboat,
  Farmer: Wheat,
  Herbalist: Leaf,
  Hunter: BowArrow,
  Labourer: Pickaxe,
  Leader: Crown,
  Medic: Heart,
  Merchant: Coins,
  Monk: BookOpen,
  Performer: Music,
  Soldier: Shield,
  Spy: Eye,
};

export const BackgroundStep = () => {
  const [selectedBackground, setBackground] = useAtom(backgroundAtom);
  const backgroundData = useAtomValue(backgroundDataAtom);
  const [api, setApi] = useState<CarouselApi>();

  const backgroundsArray = Object.values(AllBackgrounds);

  const handleBackgroundChange = useCallback(
    (backgroundName: string) => {
      setBackground(backgroundName);
    },
    [setBackground]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const selectedBackgroundName = backgroundsArray[selectedIndex]?.name;
      if (selectedBackgroundName) {
        handleBackgroundChange(selectedBackgroundName);
      }
    },
    [handleBackgroundChange, backgroundsArray]
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !selectedBackground) return;
    const selectedIndex = backgroundsArray.findIndex(
      (b) => b.name === selectedBackground
    );
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedBackground, backgroundsArray]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1">
          Choose your background to represent your character's past profession
          and training.
        </div>
      </div>

      {/* Background Carousel */}
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
              {backgroundsArray.map((backgroundItem) => {
                const IconComponent = BACKGROUND_ICONS[backgroundItem.name];
                return (
                  <CarouselItem
                    key={backgroundItem.name}
                    className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                    onClick={() => {
                      const selectedIndex = backgroundsArray.findIndex(
                        (b) => b.name === backgroundItem.name
                      );
                      if (selectedIndex !== -1) {
                        api?.scrollTo(selectedIndex);
                        handleBackgroundChange(backgroundItem.name);
                      }
                    }}
                  >
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div
                        className={cn(
                          "transition-all duration-300 ease-in-out rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
                          backgroundItem.name === selectedBackground
                            ? "h-40 w-40 lg:h-48 lg:w-48 opacity-100"
                            : "h-36 w-36 lg:h-44 lg:w-44 opacity-50"
                        )}
                      >
                        {IconComponent && (
                          <IconComponent
                            className={cn(
                              backgroundItem.name === selectedBackground
                                ? "h-16 w-16 lg:h-20 lg:w-20"
                                : "h-14 w-14 lg:h-16 lg:w-16"
                            )}
                          />
                        )}
                      </div>
                      <span
                        className={cn(
                          "font-medium",
                          backgroundItem.name !== selectedBackground
                            ? "text-md text-muted-foreground/50"
                            : "text-lg"
                        )}
                      >
                        {backgroundItem.name}
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

      {/* Background Description */}
      {backgroundData && (
        <div className="p-4 bg-primary/10 rounded-lg mt-4">
          <h4 className="font-semibold text-lg mb-2">{backgroundData.name}</h4>
          <p className="text-sm text-muted-foreground">
            {backgroundData.description}
          </p>
        </div>
      )}

      {/* Background Details */}
      {backgroundData && (
        <div className="space-y-6 pt-6 border-t border-muted-foreground/20">
          {/* Expertise Skills */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {backgroundData.expertiseSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <SkillIcon type={skill as SkillType} />
                  <div>
                    <div className="text-sm font-medium">{skill}</div>
                    <div>Level 5</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traits */}
          {backgroundData.traits && backgroundData.traits.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Trait
              </h3>
              <div className="space-y-3">
                {backgroundData.traits.map((trait, index) => (
                  <div key={index}>
                    <p className="text-sm text-muted-foreground">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
