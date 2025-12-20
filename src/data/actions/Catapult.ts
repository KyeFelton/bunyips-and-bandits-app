import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Catapult: Action = {
  name: "Catapult",
  effect:
    "You throw a large sized or smaller creature to a near location. If done forcefully, they take 3 force damage from the impact.",
  skillType: SkillType.Kinetic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
