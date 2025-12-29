import { useAtom, useAtomValue } from "jotai";
import { backgroundAtom, backgroundDataAtom } from "./../state/character";
import { AllBackgrounds } from "./../data/backgrounds";
import { GraduationCap } from "lucide-react";
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
import { Card } from "./ui/card";

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
          and training. Your background grants expertise in specific skills,
          starting them at level 5.
        </div>
      </div>

      {/* Background Selection */}
      <div className="">
        <h3 className="font-semibold mb-4 text-lg">Background</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground mb-4">
          <div className="whitespace-nowrap">
            Selected: {selectedBackground || "None"}
          </div>
        </div>

        {/* Background Carousel */}
        <div className="relative px-16">
          <div className="h-[200px] flex items-center">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent>
                {backgroundsArray.map((backgroundItem) => (
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
                      <Card
                        className={cn(
                          "transition-all duration-300 ease-in-out p-6 flex flex-col items-center justify-center",
                          backgroundItem.name === selectedBackground
                            ? "h-32 w-32 lg:h-40 lg:w-40 opacity-100 border-primary bg-primary/5 border-2"
                            : "h-28 w-28 lg:h-36 lg:w-36 opacity-50 border-muted"
                        )}
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1">
                            {backgroundItem.name.charAt(0)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {backgroundItem.name.substring(0, 8)}
                            {backgroundItem.name.length > 8 ? "..." : ""}
                          </div>
                        </div>
                      </Card>
                      <span
                        className={cn(
                          "font-medium text-center",
                          backgroundItem.name !== selectedBackground
                            ? `text-md text-muted-foreground/50`
                            : "text-lg"
                        )}
                      >
                        {backgroundItem.name}
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

        {/* Background Description */}
        {backgroundData && (
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">
              {backgroundData.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {backgroundData.description}
            </p>
          </div>
        )}
      </div>

      {/* Background Details */}
      {backgroundData && (
        <div className="space-y-6 pt-6 border-t border-muted-foreground/20">
          {/* Expertise Skills */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Expertise Skills (Start at Level 5)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {backgroundData.expertiseSkills.map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-primary/10 rounded-lg flex items-center gap-3"
                >
                  <SkillIcon type={skill as SkillType} />
                  <div>
                    <div className="text-sm font-medium">{skill}</div>
                    <div className="text-lg font-bold">Lv 5</div>
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
