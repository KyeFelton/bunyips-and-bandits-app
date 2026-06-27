import { useAtomValue, useAtom } from "jotai";
import {
  actionsAtom,
  currentStaminaAtom,
  skillRollValuesAtom,
} from "./../state/character";
import { HelpCircle } from "lucide-react";
import { AreaOfEffect } from "./../enums/AreaOfEffect";
import { Range } from "./../enums/Range";
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
import { Badge } from "./ui/badge";
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

const ActionTags = ({ action }: { action: Action }) => {
  const tags:  string[] = [];

  if (action.range !== Range.Self) {
    tags.push(`${action.range} range`);
  }

  if (action.areaOfEffect !== AreaOfEffect.SingleTarget) {
    tags.push(`${action.areaOfEffect} area`);
  }

  if (action.staminaCost !== 0) {
    const label =
      action.staminaCost === "variable"
        ? "X stamina"
        : `${action.staminaCost} stamina`;
    tags.push(label);
}

  if (action.duration) {
    tags.push(action.duration);
  }

  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((label) => (
        <Badge key={label} variant="secondary">
          {label}
        </Badge>
      ))}
    </div>
  );
};

export const ActionsList = () => {
  const unlockedActions = useAtomValue(actionsAtom);
  const [stamina, setStamina] = useAtom(currentStaminaAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);
  const showRollToast = useRollToast();

  // Basic actions available to all characters
  const basicActions: Action[] = [Brawl, Dash];

  // Combine and sort all actions
  const actions = [...basicActions, ...unlockedActions].sort((a, b) =>
    a.name.localeCompare(b.name),
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
          type: action.skillType,
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
            <TableHead></TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {actions.map((action) => (
            <TableRow key={action.name} className="group">
              <TableCell>
                <div className="flex items-center gap-1">
                  {action.name}
                  <Popover>
                    <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground text-left hover:bg-accent-subtle hover:text-accent-foreground rounded-full">
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
              <TableCell>
                <ActionTags action={action} />
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
