import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Resuscitate: Action = {
  name: "Resuscitate",
  effect:
    "You bring back a recently slain ally from death. Their body recovers 1 health.",
  skillType: SkillType.Healing,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
