import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Hyperbeam: Action = {
  name: "Hyperbeam",
  effect:
    "You channel light into a focalised beam that vaporises your target. They take 20 fire damage and catch fire.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
