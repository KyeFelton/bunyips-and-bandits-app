import { useAtom, useAtomValue } from "jotai";
import { classAtom, classDataAtom } from "./../state/character";
import { AllClasses } from "./../data/classes";
import { ChartNoAxesColumn } from "lucide-react";
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

export const ClassStep = () => {
  const [selectedClass, setClass] = useAtom(classAtom);
  const classData = useAtomValue(classDataAtom);
  const [api, setApi] = useState<CarouselApi>();

  const classesArray = Object.values(AllClasses);

  const handleClassChange = useCallback(
    (className: string) => {
      setClass(className);
    },
    [setClass]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const selectedClassName = classesArray[selectedIndex]?.name;
      if (selectedClassName) {
        handleClassChange(selectedClassName);
      }
    },
    [handleClassChange, classesArray]
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !selectedClass) return;
    const selectedIndex = classesArray.findIndex(
      (c) => c.name === selectedClass
    );
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedClass, classesArray]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Choose your class to define your character's background and training.
          Your class provides bonuses to specific skills.
        </div>
      </div>

      {/* Class Selection */}
      <div className="">
        <h3 className="font-semibold mb-4 text-lg">Class</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground mb-4">
          <div className="whitespace-nowrap">
            Selected: {selectedClass || "None"}
          </div>
        </div>

        {/* Class Carousel */}
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
                {classesArray.map((classItem) => (
                  <CarouselItem
                    key={classItem.name}
                    className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                    onClick={() => {
                      const selectedIndex = classesArray.findIndex(
                        (c) => c.name === classItem.name
                      );
                      if (selectedIndex !== -1) {
                        api?.scrollTo(selectedIndex);
                        handleClassChange(classItem.name);
                      }
                    }}
                  >
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Card
                        className={cn(
                          "transition-all duration-300 ease-in-out p-6 flex flex-col items-center justify-center",
                          classItem.name === selectedClass
                            ? "h-32 w-32 lg:h-40 lg:w-40 opacity-100 border-primary bg-primary/5 border-2"
                            : "h-28 w-28 lg:h-36 lg:w-36 opacity-50 border-muted"
                        )}
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1">
                            {classItem.name.charAt(0)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {classItem.name.substring(0, 8)}
                            {classItem.name.length > 8 ? "..." : ""}
                          </div>
                        </div>
                      </Card>
                      <span
                        className={cn(
                          "font-medium text-center",
                          classItem.name !== selectedClass
                            ? `text-md text-muted-foreground/50`
                            : "text-lg"
                        )}
                      >
                        {classItem.name}
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

        {/* Class Description */}
        {classData && (
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">{classData.name}</h4>
            <p className="text-sm text-muted-foreground">
              {classData.description}
            </p>
          </div>
        )}
      </div>

      {/* Class Details */}
      {classData && (
        <div className="space-y-6 pt-6 border-t border-muted-foreground/20">
          {/* Skill Bonuses */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ChartNoAxesColumn className="h-5 w-5" />
              Skill Bonuses
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(classData.skillBonuses).map(([skill, bonus]) => (
                <div
                  key={skill}
                  className="p-4 bg-primary/10 rounded-lg flex items-center gap-3"
                >
                  <SkillIcon type={skill as SkillType} />
                  <div>
                    <div className="text-sm font-medium">{skill}</div>
                    <div className="text-lg font-bold">+{bonus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Starting Traits */}
          {classData.startingTraits && classData.startingTraits.length > 0 && (
            <div className="pt-6 border-t border-muted-foreground/20">
              <h3 className="font-semibold mb-4">Starting Traits</h3>
              <div className="space-y-2">
                {classData.startingTraits.map((trait) => (
                  <div key={trait.name} className="p-3 bg-muted/50 rounded-lg">
                    <div className="font-medium">{trait.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {trait.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Starting Actions */}
          {classData.startingActions &&
            classData.startingActions.length > 0 && (
              <div className="pt-6 border-t border-muted-foreground/20">
                <h3 className="font-semibold mb-4">Starting Actions</h3>
                <div className="space-y-2">
                  {classData.startingActions.map((action) => (
                    <div
                      key={action.name}
                      className="p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="font-medium">{action.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {action.effect}
                      </div>
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
