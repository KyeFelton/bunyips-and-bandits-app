import { AreaOfEffect } from "src/enums/AreaOfEffect";
import { Range } from "src/enums/Range";
import { SkillType } from "src/enums/SkillType";

export type Action = {
  name: string;
  effect: string;
  skillType: SkillType;
  range: Range;
  areaOfEffect: AreaOfEffect;
  staminaCost: number;
};

export const Strike: Action = {
  name: "Strike",
  effect: "You strike your opponent and deal your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Throw: Action = {
  name: "Throw",
  effect:
    "You throw your weapon at your target. If you hit, they take your weapon’s damage. Whether hit or miss, you are no longer wielding your weapon.",
  skillType: SkillType.Throw,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Swipe: Action = {
  name: "Swipe",
  effect:
    "You attack two targets who are next to each other. They take your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 2,
};

export const Charge: Action = {
  name: "Charge",
  effect:
    "Move up to three times your speed towards your target then deal your weapon’s damage. If the creature is equal size to you or smaller, they are stunned. If they are smaller than you, they are also knocked back 2m.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Sweep: Action = {
  name: "Sweep",
  effect:
    "You attack all targets who are next to you. They take your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 3,
};

export const Decimate: Action = {
  name: "Decimate",
  effect:
    "You focus all your attention to smashing your target’s weak spot. On hit, deal double your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
