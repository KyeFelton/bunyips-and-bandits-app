import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const HeatRay: Action = {
  name: "Heat ray",
  effect:
    "You cast a beam of infrared light at your target. Your target takes 2 fire damage and catches fire.",
  skillType: SkillType.Radiant,
  range: Range.Far,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
