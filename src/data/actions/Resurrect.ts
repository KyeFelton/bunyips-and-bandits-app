import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Resurrect: Action = {
  name: "Resurrect",
  effect:
    "Resurrect a recently slain creature. The creature must have been dead for less than a day, and their body must be healed first.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 10,
};
