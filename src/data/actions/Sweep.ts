import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Sweep: Action = {
  name: "Sweep",
  effect:
    "You melee attack all targets who are close to you. They take your weapon's damage.",
  skillType: SkillType.Strength,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 3,
};
