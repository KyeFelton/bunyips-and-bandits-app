import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Hurl: Action = {
  name: "Hurl",
  effect:
    "You throw a small object in your possession to a target. They target 1 force damage.",
  skillType: SkillType.Kinetic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
