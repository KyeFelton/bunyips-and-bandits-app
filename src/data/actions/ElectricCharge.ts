import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const ElectricCharge: Action = {
  name: "Electric charge",
  effect:
    "You spend your action building up energy. Double the electric damage dealt on your next action.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
