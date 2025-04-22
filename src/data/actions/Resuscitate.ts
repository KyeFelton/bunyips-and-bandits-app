import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Resuscitate: Action = {
  name: "Resuscitate",
  effect:
    "You bring back an adjacent ally from unconsciousness. They gain +1 physique.",
  skillType: SkillType.Healing,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
