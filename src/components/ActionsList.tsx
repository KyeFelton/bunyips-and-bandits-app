import { useAtomValue, useAtom } from "jotai";
import {
  pathsAtom,
  currentStaminaAtom,
  skillRollValuesAtom,
} from "./../state/character";
import { User, Users, Circle, Scan, HelpCircle } from "lucide-react";
import { AreaOfEffect } from "./../enums/AreaOfEffect";
import { Action } from "./../models/actions";
import { Brawl } from "./../data/actions/Brawl";
import { Dash } from "./../data/actions/Dash";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SkillIcon } from "./icons/SkillIcon";
import { useRollToast } from "./RollToast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const AreaIcon = ({ type }: { type: AreaOfEffect }) => {
  switch (type) {
    case AreaOfEffect.SingleTarget:
      return <User className="h-4 w-4" />;
    case AreaOfEffect.Close:
      return <Users className="h-4 w-4" />;
    case AreaOfEffect.Near:
      return <Circle className="h-4 w-4" />;
    case AreaOfEffect.Far:
      return <Scan className="h-4 w-4" />;
    default:
      return "-";
  }
};

export const ActionsList = () => {
  const paths = useAtomValue(pathsAtom);
  const [stamina, setStamina] = useAtom(currentStaminaAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);
  const showRollToast = useRollToast();

  // Basic actions available to all characters
  const basicActions: (Action & { path: string })[] = [
    { ...Brawl, path: "Basic" },
    { ...Dash, path: "Basic" },
  ];

  // Path-unlocked actions
  const pathActions: (Action & { path: string })[] = paths.flatMap((path) =>
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .flatMap((unlock) =>
        unlock.actions.map((action) => ({
          ...action,
          path: path.name,
        }))
      )
  );

  // Combine and sort all actions
  const actions = [...basicActions, ...pathActions].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handlePerformAction = (action: Action) => {
    const staminaCost =
      typeof action.staminaCost === "number" ? action.staminaCost : 0;

    if (stamina >= staminaCost) {
      setStamina(stamina - staminaCost);

      // Only show roll toast for actions with a skill check
      if (action.skillType) {
        const rollValues = skillRollValues[action.skillType];
        showRollToast({
          name: `${action.name} (${action.skillType})`,
          dice: rollValues.dice,
          modifier: rollValues.modifier,
          hasAdvantage: rollValues.hasAdvantage,
          hasDisadvantage: rollValues.hasDisadvantage,
        });
      }
    }
  };

  return (
    <TooltipProvider>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Skill</TableHead>
            <TableHead>Range</TableHead>
            <TableHead className="text-center">Area</TableHead>
            <TableHead className="text-center">Stamina</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {actions.map((action) => (
            <TableRow key={`${action.path}-${action.name}`} className="group">
              <TableCell>
                <div className="flex items-center gap-1">
                  {action.name}
                  <Popover>
                    <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground text-left hover:bg-accent hover:text-accent-foreground rounded-full">
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </PopoverTrigger>
                    <PopoverContent
                      className="max-w-[300px] text-sm"
                      side="right"
                    >
                      <p>{action.effect}</p>
                    </PopoverContent>
                  </Popover>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  {action.skillType ? (
                    <Tooltip>
                      <TooltipTrigger className="cursor-default text-muted-foreground hover:text-foreground transition-colors">
                        <SkillIcon type={action.skillType} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{action.skillType}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </div>
              </TableCell>
              <TableCell>{action.range}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-default text-muted-foreground hover:text-foreground transition-colors">
                      <AreaIcon type={action.areaOfEffect} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{action.areaOfEffect}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
              <TableCell className="text-center font-mono">
                {typeof action.staminaCost === "number"
                  ? action.staminaCost
                  : "X"}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePerformAction(action)}
                  disabled={
                    (typeof action.staminaCost === "number" &&
                      stamina < action.staminaCost) ||
                    (action.skillType &&
                      skillRollValues[action.skillType].dice === 0)
                  }
                >
                  Perform
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  );
};
