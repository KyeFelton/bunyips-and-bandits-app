import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Fly: Action = {
  name: "Fly",
  effect: "You can fly at a speed equal to 5 times your walking speed.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
