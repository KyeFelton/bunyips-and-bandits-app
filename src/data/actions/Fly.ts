import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Fly: Action = {
  name: "Fly",
  effect: "You fly at a fast speed.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
