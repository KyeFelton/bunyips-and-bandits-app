import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Shockwave: Action = {
  name: "Shockwave",
  effect:
    "A thunderous shockwave erupts from a point of your choosing. All targets take 2 force damage and become deafened. If performed inside an enclosed room or chamber, then deal an additional 2 force damage.",
  skillType: SkillType.Sonic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 3,
};
