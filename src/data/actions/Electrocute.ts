import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Electrocute: Action = {
  name: "Electrocute",
  effect: "Target takes 25 electric damage and are stunned.",
  skillType: SkillType.Electric,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
