import { MAX_PATH_LEVEL } from "../state/character";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ChevronLeft, ChevronRight, X, ChevronsUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { Path, PathProgression } from "../models/paths";
import * as AllPaths from "../data/paths";
import { useState } from "react";
import { SkillIcon } from "./icons/SkillIcon";

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
  const [selectedPath, setSelectedPath] = useState<string>("");
  const usedPathPoints = paths.reduce((sum, path) => sum + path.level, 0);
  const remainingPathPoints = availablePathPoints - usedPathPoints;

  const availablePaths = Object.values(AllPaths)
    .filter((path) => typeof path === "object" && "name" in path)
    .filter((path) => !paths.some((p) => p.name === path.name)) as Path[];

  const handleAddPath = () => {
    const path = availablePaths.find((p) => p.name === selectedPath);
    if (path) {
      onPathChange({ ...path, level: 1, initialLevel: 0 });
      setSelectedPath("");
    }
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Select up to {availablePathPoints - usedPathPoints} path
          {availablePathPoints > 1 ? "s" : ""} to unlock unique traits and
          abilities for your character.
        </div>
        <div className="whitespace-nowrap">
          Path progressions: {usedPathPoints}/{availablePathPoints}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Select
            value={selectedPath}
            onValueChange={setSelectedPath}
            disabled={
              remainingPathPoints < 1 || paths.length >= availablePathPoints
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select path" />
            </SelectTrigger>
            <SelectContent>
              {availablePaths.map((path) => (
                <SelectItem key={path.name} value={path.name}>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">
                      <SkillIcon type={path.skillTypes[0]} />
                    </span>
                    {path.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedPath !== "" && (
            <Button
              onClick={handleAddPath}
              disabled={
                !selectedPath ||
                paths.length >= availablePathPoints ||
                remainingPathPoints < 1
              }
            >
              Add
            </Button>
          )}
        </div>
      </div>

      {paths.map((path) => (
        <Collapsible
          key={path.name}
          className="pb-2 mb-2 border-b border-muted-foreground/20 last:mb-0 last:border-b-0"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-accent-foreground"
                >
                  <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </CollapsibleTrigger>
              <span className="text-muted-foreground">
                <SkillIcon type={path.skillTypes[0]} />
              </span>
              <h3 className="text-lg font-semibold">{path.name}</h3>
              <div className="flex items-center gap-1 ml-2 text-sm font-normal text-muted-foreground">
                Level
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-accent-foreground"
                  onClick={() => handleUpdateLevel(path.name, -1)}
                  disabled={path.level <= (path?.initialLevel || 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-normal text-muted-foreground">
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
            </div>
            <div className="flex items-center gap-2">
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
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {path.description}
              </p>
              <div className="flex gap-2">
                <span className="text-sm">Skills:</span>
                {path.skillTypes.map((skillType) => (
                  <Badge key={skillType} variant="secondary">
                    {skillType}
                  </Badge>
                ))}
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Level</TableHead>
                    <TableHead>Traits</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: MAX_PATH_LEVEL }, (_, i) => i + 1).map(
                    (level) => {
                      const unlockable = path.unlockables.find(
                        (u) => u.level === level
                      );
                      const traits = unlockable?.traits || [];
                      const actions = unlockable?.actions || [];
                      return (
                        <TableRow
                          key={level}
                          className={level > path.level ? "opacity-50" : ""}
                        >
                          <TableCell className="font-medium">{level}</TableCell>
                          <TableCell>
                            <ul className="space-y-1">
                              {traits.map((trait) => (
                                <li key={trait.name}>
                                  <Popover>
                                    <PopoverTrigger className="text-left hover:text-accent-foreground">
                                      {trait.name}
                                    </PopoverTrigger>
                                    <PopoverContent
                                      className="max-w-[300px] text-sm"
                                      side="right"
                                    >
                                      <p>{trait.description}</p>
                                    </PopoverContent>
                                  </Popover>
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul className="space-y-1">
                              {actions.map((action) => (
                                <li key={action.name}>
                                  <Popover>
                                    <PopoverTrigger className="text-left hover:text-accent-foreground">
                                      {action.name}
                                    </PopoverTrigger>
                                    <PopoverContent
                                      className="max-w-[300px] text-sm"
                                      side="right"
                                    >
                                      <p>{action.effect}</p>
                                    </PopoverContent>
                                  </Popover>
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
      {paths.length === 0 && (
        <div className="p-8">
          <div className="text-center text-muted-foreground">
            No paths selected. Select a path and click "Add" to begin your
            journey.
          </div>
        </div>
      )}
    </div>
  );
};
