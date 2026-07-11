import { useAtom, useAtomValue } from "jotai";
import {
  actionsAtom,
  currentStaminaAtom,
  skillRollValuesAtom,
} from "../state/character";
import { AreaOfEffect } from "../enums/AreaOfEffect";
import { Range } from "../enums/Range";
import { Action } from "../models/actions";
import { ImmediateEffect } from "../models/effect";
import { Brawl } from "../data/actions/Brawl";
import { Dash } from "../data/actions/Dash";
import { Button } from "./ui/button";
import { ActionAttributeIconType, ActionIcon } from "./icons/ActionIcon";
import { SkillIcon } from "./icons/SkillIcon";
import { RichDescription } from "./RichDescription";
import { RollButton } from "./RollButton";

type ActionAttributeProps = {
  icon?: ActionAttributeIconType;
  label?: string;
  value: string;
};

const ActionAttribute = ({ icon, label, value }: ActionAttributeProps) => (
  <div className="flex items-center text-muted-foreground text-sm">
    {icon ? (
      <>
        <ActionIcon type={icon} showText />:
        <span className="ml-1 text-foreground">{value}</span>
      </>
    ) : (
      <>
        {label && <span>{label}:</span>}
        <span className="ml-1 text-foreground">{value}</span>
      </>
    )}
  </div>
);

const formatBonus = (bonus: number) => (bonus >= 0 ? `+${bonus}` : `${bonus}`);

const immediateEffectLabels = (effect: ImmediateEffect): string[] => {
  const labels: string[] = [];
  if (effect.custom) labels.push(effect.custom);
  if (effect.body !== undefined)
    labels.push(`${formatBonus(effect.body)} Body`);
  if (effect.mind !== undefined)
    labels.push(`${formatBonus(effect.mind)} Mind`);
  if (effect.stamina !== undefined)
    labels.push(`${formatBonus(effect.stamina)} Stamina`);
  if (effect.condition) labels.push(`Applies condition: ${effect.condition}`);
  return labels;
};

const hasStaminaCost = (action: Action) =>
  action.staminaCost === "variable" ||
  (typeof action.staminaCost === "number" && action.staminaCost !== 0);

const formatStaminaCost = (action: Action) =>
  action.staminaCost === "variable"
    ? "X stamina"
    : `${action.staminaCost} stamina`;

const getRollValue = (
  action: Action,
  skillRollValues: ReturnType<typeof useAtomValue<typeof skillRollValuesAtom>>,
) => {
  if (!action.skillType) return null;
  const roll = skillRollValues[action.skillType];
  if (roll.dice === 0) return null;
  return roll.modifier !== 0
    ? `d${roll.dice} ${roll.modifier > 0 ? "+" : ""}${roll.modifier}`
    : `d${roll.dice}`;
};

const getButtonContent = (
  action: Action,
  skillRollValues: ReturnType<typeof useAtomValue<typeof skillRollValuesAtom>>,
) => {
  const roll = getRollValue(action, skillRollValues);
  if (roll) return roll;

  if (hasStaminaCost(action)) return formatStaminaCost(action);

  const effectLabels =
    action.effectsToSelf?.flatMap(immediateEffectLabels) ?? [];
  if (effectLabels.length > 0) return effectLabels.join(", ");

  return null;
};

const ActionTags = ({ action }: { action: Action }) => {
  const effectLabels =
    action.effectsToSelf?.flatMap(immediateEffectLabels) ?? [];

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {action.range !== Range.Self && (
        <ActionAttribute icon="range" value={action.range} />
      )}

      {action.areaOfEffect !== AreaOfEffect.SingleTarget && (
        <ActionAttribute icon="area" value={action.areaOfEffect} />
      )}

      {hasStaminaCost(action) && (
        <ActionAttribute
          icon="stamina"
          value={
            action.staminaCost === "variable"
              ? "variable"
              : String(action.staminaCost)
          }
        />
      )}

      {action.duration && (
        <ActionAttribute icon="duration" value={action.duration} />
      )}

      {effectLabels.map((label) => (
        <ActionAttribute key={label} label="effect" value={label} />
      ))}
    </div>
  );
};

export const ActionsList = () => {
  const unlockedActions = useAtomValue(actionsAtom);
  const [stamina, setStamina] = useAtom(currentStaminaAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);

  const basicActions: Action[] = [Brawl, Dash];

  const actions = [...basicActions, ...unlockedActions].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const handlePerformAction = (action: Action) => {
    const staminaCost =
      typeof action.staminaCost === "number" ? action.staminaCost : 0;

    if (stamina >= staminaCost) {
      setStamina(stamina - staminaCost);
    }
  };

  return (
    <div className="divide-y divide-border">
      {actions.map((action) => {
        const rollValue = action.skillType
          ? getRollValue(action, skillRollValues)
          : null;
        const showRollButton = rollValue !== null;
        const showPerformButton =
          !showRollButton &&
          (hasStaminaCost(action) || (action.effectsToSelf?.length ?? 0) > 0);
        const buttonContent = getButtonContent(action, skillRollValues);
        const rollValues = action.skillType
          ? skillRollValues[action.skillType]
          : null;
        const staminaDisabled =
          typeof action.staminaCost === "number" &&
          stamina < action.staminaCost;

        return (
          <div key={action.name} className="space-y-2 p-4">
            {/* Header: name + tags */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-semibold">{action.name}</div>
              {action.skillType && (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <SkillIcon type={action.skillType} />
                  <span>{action.skillType}</span>
                </div>
              )}
            </div>
            <div className="">
              <ActionTags action={action} />
            </div>

            {/* Description + perform */}
            <div className="flex items-start gap-4">
              <p className="min-w-0 flex-1 text-sm">
                <RichDescription text={action.description} />
              </p>
              {showRollButton && rollValues && action.skillType && (
                <RollButton
                  name={`${action.name} (${action.skillType})`}
                  skillType={action.skillType}
                  dice={rollValues.dice}
                  modifier={rollValues.modifier}
                  hasAdvantage={rollValues.hasAdvantage}
                  hasDisadvantage={rollValues.hasDisadvantage}
                  disabled={staminaDisabled}
                  onRoll={() => handlePerformAction(action)}
                />
              )}
              {showPerformButton && (
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={() => handlePerformAction(action)}
                  disabled={staminaDisabled}
                >
                  {buttonContent}
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
