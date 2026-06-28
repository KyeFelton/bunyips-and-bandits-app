import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { Effect } from "../models/effect";
import { ImmediateEffect } from "../models/items";

type Props = {
  equippedEffects?: Effect[];
  consumedEffect?: ImmediateEffect;
  inline?: boolean;
};

const formatBonus = (bonus: number) => (bonus >= 0 ? `+${bonus}` : `${bonus}`);

const groupByBonus = <T extends string>(
  items: { bonus: number; label: T }[],
): Map<number, T[]> => {
  const map = new Map<number, T[]>();
  for (const { bonus, label } of items) {
    const existing = map.get(bonus);
    if (existing) {
      existing.push(label);
    } else {
      map.set(bonus, [label]);
    }
  }
  return map;
};

const groupArmourEffects = (effects: Effect[]): string[] => {
  const entries = effects
    .filter((e) => e.armour?.bonus !== undefined)
    .map((e) => ({ bonus: e.armour!.bonus!, label: e.armour!.damageType }));

  return Array.from(groupByBonus<DamageType>(entries)).map(
    ([bonus, types]) => `${formatBonus(bonus)} Armour (${types.join(", ")})`,
  );
};

const groupSkillEffects = (effects: Effect[]): string[] => {
  const entries = effects
    .filter((e) => e.skill?.bonus !== undefined)
    .map((e) => ({ bonus: e.skill!.bonus!, label: e.skill!.skillType }));

  return Array.from(groupByBonus<SkillType>(entries)).map(
    ([bonus, skills]) => `${formatBonus(bonus)} ${skills.join(", ")}`,
  );
};

type StatKey = "body" | "mind" | "stamina";
const STAT_LABELS: Record<StatKey, string> = {
  body: "Body",
  mind: "Mind",
  stamina: "Stamina",
};

const groupStatEffects = (effects: Effect[]): string[] => {
  const entries: { bonus: number; label: string }[] = [];
  for (const effect of effects) {
    for (const key of ["body", "mind", "stamina"] as StatKey[]) {
      const bonus = effect[key]?.bonus;
      if (bonus !== undefined) entries.push({ bonus, label: STAT_LABELS[key] });
    }
  }
  return Array.from(groupByBonus<string>(entries)).map(
    ([bonus, stats]) => `${formatBonus(bonus)} Health (${stats.join(", ")})`,
  );
};

const groupSenseEffects = (effects: Effect[]): string[] => {
  const gained: SenseType[] = [];
  const lost: SenseType[] = [];
  for (const effect of effects) {
    if (effect.sense?.gain) gained.push(effect.sense.gain);
    if (effect.sense?.lose) lost.push(effect.sense.lose);
  }
  const labels: string[] = [];
  if (gained.length) labels.push(`Gain ${gained.join(", ")}`);
  if (lost.length) labels.push(`Lose ${lost.join(", ")}`);
  return labels;
};

const groupSpeedEffects = (effects: Effect[]): string[] => {
  const increased: string[] = [];
  const decreased: string[] = [];
  for (const effect of effects) {
    if (!effect.speed) continue;
    const name = effect.speed.locomotion.toLowerCase();
    if (effect.speed.increase) {
      increased.push(name);
    } else {
      decreased.push(name);
    }
  }
  const labels: string[] = [];
  if (increased.length) labels.push(`Increased ${increased.join(", ")} speed`);
  if (decreased.length) labels.push(`Decreased ${decreased.join(", ")} speed`);
  return labels;
};

const remainingEffectToLabel = (effect: Effect): string | null => {
  if (effect.custom) return effect.custom;
  if (
    effect.armour ||
    effect.skill ||
    effect.body ||
    effect.mind ||
    effect.stamina ||
    effect.sense ||
    effect.speed
  )
    return null; // handled by grouping

  if (effect.weapon) {
    const { bonus, damageType } = effect.weapon;
    if (bonus === undefined) return null;
    return damageType
      ? `Deals ${formatBonus(bonus)} ${damageType} weapon damage`
      : `Deals ${formatBonus(bonus)} weapon damage`;
  }

  if (effect.actions?.bonus !== undefined)
    return `${formatBonus(effect.actions.bonus)} Actions`;
  if (effect.evasions?.bonus !== undefined)
    return `${formatBonus(effect.evasions.bonus)} Evasions`;

  return null;
};

const groupConsumedStats = (effect: ImmediateEffect): string[] => {
  const entries: { bonus: number; label: string }[] = [];
  if (effect.body !== undefined) entries.push({ bonus: effect.body, label: "Body" });
  if (effect.mind !== undefined) entries.push({ bonus: effect.mind, label: "Mind" });
  if (effect.stamina !== undefined)
    entries.push({ bonus: effect.stamina, label: "Stamina" });

  return Array.from(groupByBonus<string>(entries)).map(
    ([bonus, stats]) => `${formatBonus(bonus)} ${stats.join(", ")} (on use)`,
  );
};

const consumedEffectLabels = (effect: ImmediateEffect): string[] => {
  const labels: string[] = [];
  if (effect.custom) labels.push(effect.custom);
  labels.push(...groupConsumedStats(effect));
  if (effect.condition) labels.push(`Applies condition: ${effect.condition}`);
  return labels;
};

export const buildEffectLabels = (
  equippedEffects?: Effect[],
  consumedEffect?: ImmediateEffect,
): string[] => {
  const effects = equippedEffects ?? [];
  return [
    ...groupArmourEffects(effects),
    ...groupSkillEffects(effects),
    ...groupStatEffects(effects),
    ...groupSenseEffects(effects),
    ...groupSpeedEffects(effects),
    ...effects.map(remainingEffectToLabel).filter((l): l is string => l !== null),
    ...(consumedEffect ? consumedEffectLabels(consumedEffect) : []),
  ];
};

export const ItemEffectList = ({ equippedEffects, consumedEffect, inline }: Props) => {
  const allLabels = buildEffectLabels(equippedEffects, consumedEffect);

  if (allLabels.length === 0) return null;

  if (inline) {
    return (
      <span className="text-sm text-muted-foreground">
        {allLabels.join(", ")}
      </span>
    );
  }

  // Other bullets: ◆ ◇ ◈ ▸ ✦ ✶ ⟡
  return (
    <ul className="space-y-1">
      {allLabels.map((label, index) => (
        <li key={index} className="flex items-baseline gap-1.5 text-sm text-muted-foreground">
            <span className="text-border shrink-0 select-none">⟡</span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
};
