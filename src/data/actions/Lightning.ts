import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Lightning: Action = {
  name: "Lightning",
  description: "Target takes 5 {{damage:electric}} damage and are stunned.",
  skillType: SkillType.Electric,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
