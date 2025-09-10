import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SearingRadiance: Action = {
  name: "Searing radiance",
  effect:
    "You discharge an intense ray of infrared light at your target. They take 2 fire damage and catch fire.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 4,
};
