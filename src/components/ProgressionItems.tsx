import { RichDescription } from "./RichDescription";
import { Action } from "../models/actions";
import { Range } from "../enums/Range";
import { Trait } from "../models/traits";
import { ActionAttributeIconType, ActionIcon } from "./icons/ActionIcon";
import { AreaOfEffect } from "../enums/AreaOfEffect";
import { ImmediateEffect } from "../models/effect";

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
    </div>
  );
};

type Props = {
  level: number;
  actions: Action[];
  traits: Trait[];
};

export function ProgressionItems({ level, actions, traits }: Props) {
  const allItems = [
    ...traits.map((t) => ({ type: "trait" as const, data: t })),
    ...actions.map((a) => ({ type: "action" as const, data: a })),
  ];
  return (
    <div className="py-4 px-2 space-y-4">
      {allItems.map((item, index) => {
        const isFirst = index === 0;
        if (item.type === "trait") {
          return (
            <div key={item.data.name} className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-sm">{item.data.name}</p>
                {isFirst && (
                  <span className="text-sm px-2 py-0.5 rounded bg-primary/20 text-primary flex-shrink-0">
                    Level {level}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                <RichDescription text={item.data.description} />
              </p>
            </div>
          );
        } else {
          const action = item.data;
          return (
            <div key={action.name} className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-sm">{action.name}</p>
                {isFirst && (
                  <span className="text-sm px-2 py-0.5 rounded bg-primary/20 text-primary flex-shrink-0">
                    Level {level}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                <RichDescription text={action.description} />
              </p>
              <div className="flex flex-wrap gap-2">
                <ActionTags action={action} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
