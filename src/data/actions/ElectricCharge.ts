import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const ElectricCharge: Action = {
  name: "Electric charge",
  effect:
    "You take an action to build up energy. On your next turn, deal an additional 5 electric damage on all electric attacks.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
