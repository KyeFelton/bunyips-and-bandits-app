import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Rifle: Action = {
  name: "Rifle",
  effect:
    "You shoot a small object in your possession to a target at a rapid speed. They target 3 slash damage and 3 force damage.",
  skillType: SkillType.Kinetic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
