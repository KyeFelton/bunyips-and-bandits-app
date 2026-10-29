import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  actionsAtom,
  bodyAtom,
  conditionsAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  mindAtom,
  skillRollValuesAtom,
  staminaAtom,
} from "../state/character";
import { AreaOfEffect } from "../enums/AreaOfEffect";
import { Range } from "../enums/Range";
import { Action } from "../models/actions";
import { ImmediateEffect } from "../models/effect";
import { Dash } from "../data/actions/Dash";
import { Button } from "./ui/button";
import { ActionAttributeIconType, ActionIcon } from "./icons/ActionIcon";
import { SkillIcon } from "./icons/SkillIcon";
import { RichDescription } from "./RichDescription";
import { RollButton } from "./RollButton";
import { AllConditions } from "../models/conditions";

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
    </div>
  );
};

export const ActionsList = () => {
  const unlockedActions = useAtomValue(actionsAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);

  const body = useAtomValue(bodyAtom);
  const mind = useAtomValue(mindAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [conditions, setConditions] = useAtom(conditionsAtom);

  const commonActions: Action[] = [Dash];

  const actions = [...commonActions, ...unlockedActions].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const applyCondition = (conditionName: string) => {
    const conditionData = AllConditions.find((c) => c.name === conditionName);
    if (!conditionData) return;

    const existingCount = conditions.filter(
      (c) => c.name === conditionName,
    ).length;

    // Repeatedly using a stackable condition item costs body.
    if (existingCount > 0) {
      setCurrentBody((prev) => Math.max(0, prev - 2));
    }

    setConditions((prev) => {
      if (conditionData.stackable > 0) {
        return existingCount < conditionData.stackable
          ? [...prev, conditionData]
          : prev;
      }
      return prev.some((c) => c.name === conditionName)
        ? prev
        : [...prev, conditionData];
    });
  };

  const handlePerformAction = (action: Action) => {
    const staminaCost =
      typeof action.staminaCost === "number" ? action.staminaCost : 0;

    if (stamina.current >= staminaCost) {
      setCurrentStamina(stamina.current - staminaCost);
    }

    const effects = action.effectsToSelf;
    if (effects) {
      for (const effect of effects) {
        if (effect.body) {
          setCurrentBody((prev) => Math.min(prev + effect.body!, body.max));
        }
        if (effect.mind) {
          setCurrentMind((prev) => Math.min(prev + effect.mind!, mind.max));
        }
        if (effect.stamina) {
          setCurrentStamina((prev) =>
            Math.min(prev + effect.stamina!, stamina.max),
          );
        }
        if (effect.condition) {
          applyCondition(effect.condition);
        }
      }
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
          stamina.current < action.staminaCost;

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
