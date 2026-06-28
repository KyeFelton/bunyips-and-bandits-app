import { useAtom, useAtomValue } from "jotai";
import {
  actionsAtom,
  currentStaminaAtom,
  skillRollValuesAtom,
} from "./../state/character";
import { AreaOfEffect } from "./../enums/AreaOfEffect";
import { Range } from "./../enums/Range";
import { Action } from "./../models/actions";
import { Brawl } from "./../data/actions/Brawl";
import { Dash } from "./../data/actions/Dash";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SkillIcon } from "./icons/SkillIcon";
import { useRollToast } from "./RollToast";

const ActionTags = ({ action }: { action: Action }) => {
  const tags: string[] = [];

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

  const basicActions: Action[] = [Brawl, Dash];

  const actions = [...basicActions, ...unlockedActions].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const handlePerformAction = (action: Action) => {
    const staminaCost =
      typeof action.staminaCost === "number" ? action.staminaCost : 0;

    if (stamina >= staminaCost) {
      setStamina(stamina - staminaCost);

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
    <div className="divide-y divide-border">
      {actions.map((action) => (
        <div key={action.name} className="p-4 space-y-2">
          {/* Header: name + tags */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-semibold">{action.name}</div>
            <ActionTags action={action} />
          </div>

          {/* Skill */}
          {action.skillType && (() => {
            const roll = skillRollValues[action.skillType];
            const rollLabel = roll.dice === 0
              ? "No dice"
              : roll.modifier !== 0
                ? `d${roll.dice} ${roll.modifier > 0 ? "+" : ""}${roll.modifier}`
                : `d${roll.dice}`;
            return (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <SkillIcon type={action.skillType} />
                <span>{action.skillType}</span>
                <span className="text-muted-foreground/60">·</span>
                <span>{rollLabel}</span>
              </div>
            );
          })()}

          {/* Description */}
          <p className="text-sm">{action.effect}</p>

          {/* Perform */}
          <div className="pt-1">
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
          </div>
        </div>
      ))}
    </div>
  );
};
