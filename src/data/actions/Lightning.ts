import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Lightning: Action = {
  name: "Lightning",
  effect: "Target takes 30 electric damage and are stunned.",
  skillType: SkillType.Electric,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 6,
};
