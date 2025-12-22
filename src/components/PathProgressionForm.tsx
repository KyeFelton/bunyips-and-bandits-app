import { MAX_PATH_LEVEL } from "../state/character";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronLeft, ChevronRight, X, ChevronDown, Plus } from "lucide-react";
import { Badge } from "./ui/badge";
import { Path, PathProgression } from "../models/paths";
import * as AllPaths from "../data/paths";
import { useState, useCallback, useEffect } from "react";
import { SkillIcon } from "./icons/SkillIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { cn } from "../utils/cn";

export type PathProgressionWithInitial = PathProgression & {
  initialLevel?: number;
};

interface PathProgressionFormProps {
  availablePathPoints: number;
  paths: PathProgressionWithInitial[];
  onPathChange: (path: PathProgressionWithInitial) => void;
}

export const PathProgressionForm = ({
  availablePathPoints,
  paths,
  onPathChange,
}: PathProgressionFormProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedPathName, setSelectedPathName] = useState<string>("");

  const usedPathPoints = paths.reduce((sum, path) => sum + path.level, 0);
  const remainingPathPoints = availablePathPoints - usedPathPoints;

  const availablePaths = Object.values(AllPaths)
    .filter((path) => typeof path === "object" && "name" in path)
    .filter((path) => !paths.some((p) => p.name === path.name)) as Path[];

  const handleOpenClosePath = (pathName: string, open: boolean) => {
    const path = paths.find((path) => path.name === pathName);
    if (path) {
      onPathChange({ ...path, open });
    }
  };

  const handleAddPath = (pathToAdd: Path) => {
    onPathChange({ ...pathToAdd, level: 1, initialLevel: 0, open: true });
  };

  const handleUpdateLevel = (pathName: string, amount: number) => {
    const path = paths.find((path) => path.name === pathName);
    if (path) {
      onPathChange({ ...path, level: path.level + amount });
    }
  };

  const handleRemovePath = (pathName: string) => {
    const path = paths.find((path) => path.name === pathName);
    if (path) {
      onPathChange({ ...path, level: 0 });
    }
  };

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const selectedIndex = api.selectedScrollSnap();
      const selectedPath = availablePaths[selectedIndex];
      if (selectedPath) {
        setSelectedPathName(selectedPath.name);
      }
    },
    [availablePaths]
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !selectedPathName || availablePaths.length === 0) return;
    const selectedIndex = availablePaths.findIndex(
      (p) => p.name === selectedPathName
    );
    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedPathName, availablePaths]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Select paths to unlock unique traits and abilities for your character.
        </div>
        <div className="whitespace-nowrap">
          Path progressions: {usedPathPoints}/{availablePathPoints}
        </div>
      </div>

      {/* Current Paths */}
      {paths.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Your Paths</h3>
          {paths.map((path) => (
            <Collapsible
              key={path.name}
              open={path.open}
              onOpenChange={(open) => handleOpenClosePath(path.name, open)}
              className="border border-muted-foreground/20 rounded-lg p-4"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground hover:text-accent-foreground flex-shrink-0"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          path.open ? "" : "-rotate-90"
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <span className="text-muted-foreground flex-shrink-0">
                    <SkillIcon type={path.skillTypes[0]} />
                  </span>
                  <h3 className="text-lg font-semibold">{path.name}</h3>
                </div>
                <div className="flex items-center gap-2 ml-8 sm:ml-0">
                  <div className="flex items-center gap-1 text-sm font-normal text-muted-foreground">
                    <span>Level</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground hover:text-accent-foreground"
                      onClick={() => handleUpdateLevel(path.name, -1)}
                      disabled={path.level <= (path?.initialLevel || 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-semibold min-w-[1.5rem] text-center">
                      {path.level}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground hover:text-accent-foreground"
                      onClick={() => handleUpdateLevel(path.name, 1)}
                      disabled={
                        remainingPathPoints <= 0 || path.level >= MAX_PATH_LEVEL
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  {path?.initialLevel === 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemovePath(path.name)}
                      className="h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <CollapsibleContent>
                <div className="space-y-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    {path.description}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm font-medium">Skills:</span>
                    {path.skillTypes.map((skillType) => (
                      <Badge key={skillType} variant="secondary">
                        {skillType}
                      </Badge>
                    ))}
                  </div>

                  {/* Unlockables by Level */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-semibold">Unlockables</h4>

                    <div className="space-y-2">
                      {Array.from(
                        { length: MAX_PATH_LEVEL },
                        (_, i) => i + 1
                      ).map((level) => {
                        const unlockable = path.unlockables.find(
                          (u) => u.level === level
                        );
                        const traits = unlockable?.traits || [];
                        const actions = unlockable?.actions || [];
                        const isUnlocked = level <= path.level;
                        const hasContent =
                          traits.length > 0 || actions.length > 0;

                        if (!hasContent) return null;

                        return (
                          <div
                            key={level}
                            className={cn(
                              "p-3 rounded-lg border transition-all",
                              isUnlocked
                                ? "bg-primary/5 border-primary/30"
                                : "bg-muted/30 border-muted opacity-60"
                            )}
                          >
                            <div className="space-y-2">
                              {traits.map((trait) => (
                                <div key={trait.name} className="space-y-2">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div
                                      className={cn(
                                        "text-sm px-2 py-1 rounded text-center flex-shrink-0",
                                        isUnlocked
                                          ? "bg-primary text-primary-foreground"
                                          : "bg-muted text-muted-foreground"
                                      )}
                                    >
                                      {trait.name}
                                    </div>
                                    <div className="font-semibold text-sm">
                                      Level {level}
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {trait.description}
                                  </p>
                                </div>
                              ))}
                              {actions.map((action) => (
                                <div key={action.name} className="space-y-2">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div
                                      className={cn(
                                        "text-sm px-2 py-1 rounded text-center flex-shrink-0",
                                        isUnlocked
                                          ? "bg-primary text-primary-foreground"
                                          : "bg-muted text-muted-foreground"
                                      )}
                                    >
                                      {action.name}
                                    </div>
                                    <div className="font-semibold text-sm">
                                      Level {level}
                                    </div>
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
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      )}

      {/* Add New Path Carousel */}
      {availablePaths.length > 0 && remainingPathPoints >= 1 && (
        <div className="space-y-4 pb-6 border-b border-muted-foreground/20">
          <h3 className="font-semibold mb-4 text-lg">Add New Path</h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground mb-4">
            <div className="whitespace-nowrap">
              Selected: {selectedPathName || "None"}
            </div>
          </div>

          {/* Path Carousel */}
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
                  {availablePaths.map((path) => (
                    <CarouselItem
                      key={path.name}
                      className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                      onClick={() => {
                        const selectedIndex = availablePaths.indexOf(path);
                        if (selectedIndex !== -1) {
                          api?.scrollTo(selectedIndex);
                          setSelectedPathName(path.name);
                        }
                      }}
                    >
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div
                          className={cn(
                            "transition-all duration-300 ease-in-out rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
                            path.name === selectedPathName
                              ? "h-40 w-40 lg:h-48 lg:w-48 opacity-100"
                              : "h-36 w-36 lg:h-44 lg:w-44 opacity-50"
                          )}
                        >
                          <SkillIcon
                            type={path.skillTypes[0]}
                            className={cn(
                              path.name === selectedPathName
                                ? "h-16 w-16 lg:h-20 lg:w-20"
                                : "h-14 w-14 lg:h-16 lg:w-16"
                            )}
                          />
                        </div>
                        <span
                          className={cn(
                            "font-medium",
                            path.name !== selectedPathName
                              ? "text-md text-muted-foreground/50"
                              : "text-lg"
                          )}
                        >
                          {path.name}
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

          {/* Path Description */}
          {selectedPathName &&
            (() => {
              const selectedPath = availablePaths.find(
                (p) => p.name === selectedPathName
              );
              if (!selectedPath) return null;

              return (
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">
                    {selectedPath.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedPath.description}
                  </p>
                  <div className="flex justify-center">
                    <Button
                      onClick={() => {
                        handleAddPath(selectedPath);
                        setSelectedPathName("");
                      }}
                      disabled={remainingPathPoints < 1}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add {selectedPath.name}
                    </Button>
                  </div>
                </div>
              );
            })()}
        </div>
      )}

      {paths.length === 0 && availablePaths.length === 0 && (
        <div className="p-8">
          <div className="text-center text-muted-foreground">
            No paths available. You may have reached the maximum number of
            paths.
          </div>
        </div>
      )}
    </div>
  );
};
