import { useAtomValue, useAtom } from "jotai";
import {
  pathsAtom,
  currentStaminaAtom,
  skillRollValuesAtom,
} from "../../state/character";
import { User, Users, Triangle, Circle, Scan } from "lucide-react";
import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Action } from "../../models/actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SkillIcon } from "../icons/SkillIcon";
import { useRollToast } from "./RollToast";

const AreaIcon = ({ type }: { type: AreaOfEffect }) => {
  switch (type) {
    case AreaOfEffect.SingleTarget:
      return <User className="h-4 w-4" />;
    case AreaOfEffect.MultipleTargets:
      return <Users className="h-4 w-4" />;
    case AreaOfEffect.Cone:
      return <Triangle className="h-4 w-4" />;
    case AreaOfEffect.Sphere:
      return <Circle className="h-4 w-4" />;
    case AreaOfEffect.Arena:
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

  const actions: (Action & { path: string })[] = paths
    .flatMap((path) =>
      path.unlockables
        .filter((unlock) => unlock.level <= path.level)
        .flatMap((unlock) =>
          unlock.actions.map((action) => ({
            ...action,
            path: path.name,
          }))
        )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const handlePerformAction = (action: Action) => {
    const staminaCost =
      typeof action.staminaCost === "number" ? action.staminaCost : 0;
    const rollValues = skillRollValues[action.skillType];
    if (stamina >= staminaCost) {
      setStamina(stamina - staminaCost);
      showRollToast({
        name: `${action.name} (${action.skillType})`,
        dice: rollValues.dice,
        modifier: rollValues.modifier,
        hasAdvantage: rollValues.hasAdvantage,
        hasDisadvantage: rollValues.hasDisadvantage,
      });
    }
  };

  if (actions.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        No actions available. Select a path and increase its level to unlock
        actions.
      </div>
    );
  }

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
                <Tooltip>
                  <TooltipTrigger className="font-medium cursor-default text-left">
                    {action.name}
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-[300px]">
                    <p>{action.effect}</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-default text-foreground">
                      <SkillIcon type={action.skillType} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{action.skillType}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
              <TableCell>{action.range}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-default text-foreground">
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
                    skillRollValues[action.skillType].dice === 0
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
