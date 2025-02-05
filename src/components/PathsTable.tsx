import { useAtom, useAtomValue } from "jotai";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ChevronUp, X } from "lucide-react";
import { AddPathDialog } from "./AddPathDialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import { pathsAtom } from "../state/primitives";
import { availablePathPointsAtom } from "../state/derived";

export const PathsTable = () => {
  const [paths, setPaths] = useAtom(pathsAtom);
  const availablePathPoints = useAtomValue(availablePathPointsAtom);
  const usedPathPoints = paths.reduce((sum, path) => sum + path.level, 0);
  const remainingPathPoints = availablePathPoints - usedPathPoints;

  const handleUpdateLevel = (pathName: string) => {
    const updatedPaths = paths.map((path) => {
      if (path.name === pathName && path.level < 5) {
        // Only allow level change if we have enough points
        if (usedPathPoints + 1 > availablePathPoints) {
          return path;
        }
        return { ...path, level: path.level + 1 };
      }
      return path;
    });

    setPaths(updatedPaths);
  };

  const handleRemovePath = (pathName: string) => {
    setPaths(paths.filter((path) => path.name !== pathName));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <AddPathDialog
          disabled={
            remainingPathPoints < 1 || paths.length >= availablePathPoints
          }
        />
        <span className="text-sm text-muted-foreground">
          Path Points: {usedPathPoints}/{availablePathPoints}
        </span>
      </div>

      <TooltipProvider>
        {paths.map((path) => (
          <div key={path.name} className="mb-6 last:mb-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    {path.name}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      Level {path.level}
                    </span>
                  </h3>
                  {remainingPathPoints > 0 && path.level < 5 && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-accent-foreground"
                          onClick={() => handleUpdateLevel(path.name)}
                        >
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Level up</TooltipContent>
                    </Tooltip>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemovePath(path.name)}
                    className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {path.description}
                </p>
                <div className="flex gap-2 mt-2">
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
                {[1, 2, 3, 4, 5].map((level) => {
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
                })}
              </TableBody>
            </Table>
          </div>
        ))}

        {paths.length === 0 && (
          <div className="p-8">
            <div className="text-center text-muted-foreground">
              No paths selected. Click "Add Path" to begin your journey.
            </div>
          </div>
        )}
      </TooltipProvider>
    </div>
  );
};
