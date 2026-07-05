import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Taser: Action = {
  name: "Taser",
  description:
    "You zap your target to deal 1 {{damage:electric}} damage. They are stunned.",
  skillType: SkillType.Electric,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
