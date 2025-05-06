import { MAX_PATH_LEVEL } from "../state/character";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
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

        <span className="text-sm text-muted-foreground">
          Path progressions: {usedPathPoints}/{availablePathPoints}
        </span>
      </div>

      <TooltipProvider>
        {paths.map((path) => (
          <div key={path.name} className="mb-6 last:mb-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">
                    <SkillIcon type={path.skillTypes[0]} />
                  </span>
                  <h3 className="text-lg font-semibold">{path.name}</h3>
                  <span className="text-sm font-normal text-muted-foreground">
                    Level
                  </span>
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
                  {path?.initialLevel === 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemovePath(path.name)}
                      className="h-6 w-6 ml-auto"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {path.description}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm">Skills:</span>
                  {path.skillTypes.map((skillType) => (
                    <Badge key={skillType} variant="secondary">
                      {skillType}
                    </Badge>
                  ))}
                </div>
              </div>
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
                                <Tooltip>
                                  <TooltipTrigger className="text-left hover:text-accent-foreground">
                                    {trait.name}
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="right"
                                    className="max-w-[300px]"
                                  >
                                    <p>{trait.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </li>
                            ))}
                          </ul>
                        </TableCell>
                        <TableCell>
                          <ul className="space-y-1">
                            {actions.map((action) => (
                              <li key={action.name}>
                                <Tooltip>
                                  <TooltipTrigger className="text-left hover:text-accent-foreground">
                                    {action.name}
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="right"
                                    className="max-w-[300px]"
                                  >
                                    <p>{action.effect}</p>
                                  </TooltipContent>
                                </Tooltip>
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
        ))}

        {paths.length === 0 && (
          <div className="p-8">
            <div className="text-center text-muted-foreground">
              No paths selected. Select a path and click "Add" to begin your
              journey.
            </div>
          </div>
        )}
      </TooltipProvider>
    </div>
  );
};
