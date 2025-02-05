import { useState } from "react";
import { useAtom } from "jotai";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Plus } from "lucide-react";
import * as Paths from "../models/paths";
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
import { pathsAtom } from "../state/primitives";

type Props = {
  disabled?: boolean;
};

export const AddPathDialog = ({ disabled }: Props) => {
  const [paths, setPaths] = useAtom(pathsAtom);
  const [selectedPath, setSelectedPath] = useState<string>("");
  const [open, setOpen] = useState(false);

  const allPaths = Object.values(Paths).filter(
    (path) => typeof path === "object" && "name" in path
  ) as Paths.Path[];

  const availablePaths = allPaths.filter(
    (path) => !paths.some((p) => p.name === path.name)
  );

  const handleAddPath = () => {
    const path = availablePaths.find((p) => p.name === selectedPath);
    if (path) {
      setPaths([...paths, { ...path, level: 1 }]);
    }
    setOpen(false);
    setSelectedPath("");
  };

  const selectedPathDetails = availablePaths.find(
    (p) => p.name === selectedPath
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={disabled}>
          <Plus className="h-4 w-4 mr-2" />
          Add Path
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="p-1">Choose a path</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col gap-4 overflow-hidden p-1">
          <Select value={selectedPath} onValueChange={setSelectedPath}>
            <SelectTrigger>
              <SelectValue placeholder="Select a path" />
            </SelectTrigger>
            <SelectContent>
              {availablePaths.map((path) => (
                <SelectItem key={path.name} value={path.name}>
                  {path.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedPathDetails && (
            <div className="flex-1 overflow-auto">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {selectedPathDetails.description}
                </p>
                <div className="flex gap-2">
                  {selectedPathDetails.skillTypes.map((skillType) => (
                    <Badge key={skillType} variant="secondary">
                      {skillType}
                    </Badge>
                  ))}
                </div>
              </div>

              <TooltipProvider>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Level</TableHead>
                      <TableHead>Traits</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedPathDetails.unlockables.map((unlock) => (
                      <TableRow key={unlock.level}>
                        <TableCell className="font-medium">
                          {unlock.level}
                        </TableCell>
                        <TableCell>
                          <ul className="space-y-1">
                            {unlock.traits.map((trait) => (
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
                            {unlock.actions.map((action) => (
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
                    ))}
                  </TableBody>
                </Table>
              </TooltipProvider>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={handleAddPath} disabled={!selectedPath}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
