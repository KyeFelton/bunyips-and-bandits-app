import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { magicSkillsAtom, MAX_SKILL_LEVEL } from "../state/character";
import { SkillType } from "../enums/SkillType";
import * as Skills from "../models/skills";
import { AllSkillProgressions } from "../data/skillProgressions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { cn } from "../utils/cn";
import { SkillIcon } from "./icons/SkillIcon";
import { Badge } from "./ui/badge";

const MAGIC_SKILLS = [
  SkillType.Biotic,
  SkillType.Electric,
  SkillType.Kinetic,
  SkillType.Pyro,
  SkillType.Psychic,
  SkillType.Radiant,
  SkillType.Sonic,
  SkillType.Spirit,
];

export const MagicStep = () => {
  const [magicSkills, setMagicSkills] = useAtom(magicSkillsAtom);
  const [api, setApi] = useState<CarouselApi>();

  // Current selected skill is first element of array (single selection)
  const selectedSkill = magicSkills.length > 0 ? magicSkills[0] : "";

  const handleSkillChange = useCallback(
    (skillType: SkillType) => {
      // Replace array with single skill (enforce single selection)
      setMagicSkills([skillType]);
    },
    [setMagicSkills]
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const selectedSkillType = MAGIC_SKILLS[selectedIndex];
      if (selectedSkillType) {
        handleSkillChange(selectedSkillType);
      }
    },
    [handleSkillChange]
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !selectedSkill) return;
    const selectedIndex = MAGIC_SKILLS.indexOf(selectedSkill as SkillType);
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedSkill]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1">
          Choose a magic skill that your character has been trained in.
        </div>
      </div>

      {/* Magic Skill Carousel */}
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
              {MAGIC_SKILLS.map((skillType) => (
                <CarouselItem
                  key={skillType}
                  className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                  onClick={() => {
                    const selectedIndex = MAGIC_SKILLS.indexOf(skillType);
                    if (selectedIndex !== -1) {
                      api?.scrollTo(selectedIndex);
                      handleSkillChange(skillType);
                    }
                  }}
                >
                  <div className="flex flex-col justify-center items-center gap-2">
                    <div
                      className={cn(
                        "transition-all duration-300 ease-in-out rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
                        skillType === selectedSkill
                          ? "h-40 w-40 lg:h-48 lg:w-48 opacity-100"
                          : "h-36 w-36 lg:h-44 lg:w-44 opacity-50"
                      )}
                    >
                      <SkillIcon
                        type={skillType}
                        className={cn(
                          skillType === selectedSkill
                            ? "h-16 w-16 lg:h-20 lg:w-20"
                            : "h-14 w-14 lg:h-16 lg:w-16"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "font-medium",
                        skillType !== selectedSkill
                          ? "text-md text-muted-foreground/50"
                          : "text-lg"
                      )}
                    >
                      {skillType}
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

      {/* Selected Skill Description and Unlockables */}
      {selectedSkill &&
        (() => {
          const skillData = Skills[
            selectedSkill as keyof typeof Skills
          ] as Skills.Skill;
          const progression = AllSkillProgressions[selectedSkill as SkillType];

          return (
            <div className="space-y-4">
              {/* Description */}
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{selectedSkill}</h4>
                <p className="text-sm text-muted-foreground">
                  {skillData.description}
                </p>
              </div>

              {/* Unlockables by Level */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold">Unlockables</h4>

                <div className="space-y-2">
                  {Array.from({ length: MAX_SKILL_LEVEL }, (_, i) => i + 1).map(
                    (level) => {
                      const unlockable = progression.unlockables.find(
                        (u) => u.level === level
                      );
                      const traits = unlockable?.traits || [];
                      const actions = unlockable?.actions || [];
                      const hasContent =
                        traits.length > 0 || actions.length > 0;

                      if (!hasContent) return null;

                      // Combine traits and actions to determine first item
                      const allItems = [
                        ...traits.map((trait) => ({
                          type: "trait" as const,
                          data: trait,
                        })),
                        ...actions.map((action) => ({
                          type: "action" as const,
                          data: action,
                        })),
                      ];

                      return (
                        <div
                          key={level}
                          className="p-3 rounded-lg border transition-all border-primary/30"
                        >
                          <div className="space-y-4">
                            {allItems.map((item, index) => {
                              const isFirstItem = index === 0;

                              if (item.type === "trait") {
                                const trait = item.data;
                                return (
                                  <div key={trait.name} className="space-y-2">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                      <div className="font-semibold text-sm">
                                        {trait.name}
                                      </div>
                                      {isFirstItem && (
                                        <div className="text-sm px-2 py-1 rounded text-center flex-shrink-0 bg-primary/20 text-primary">
                                          Level {level}
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {trait.description}
                                    </p>
                                  </div>
                                );
                              } else {
                                const action = item.data;
                                return (
                                  <div key={action.name} className="space-y-2">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                      <div className="font-semibold text-sm">
                                        {action.name}
                                      </div>
                                      {isFirstItem && (
                                        <div className="text-sm px-2 py-1 rounded text-center flex-shrink-0 bg-primary/20 text-primary">
                                          Level {level}
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                      {action.effect}
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                      {action.range !== "Self" && (
                                        <Badge
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          Range: {action.range}
                                        </Badge>
                                      )}
                                      {action.areaOfEffect !==
                                        "Single target" && (
                                        <Badge
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          Area: {action.areaOfEffect}
                                        </Badge>
                                      )}
                                      {(action.staminaCost === "variable" ||
                                        action.staminaCost > 0) && (
                                        <Badge
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          Stamina:{" "}
                                          {action.staminaCost === "variable"
                                            ? "Variable"
                                            : action.staminaCost}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
};
