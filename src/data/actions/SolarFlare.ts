import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SolarFlare: Action = {
  name: "Solar flare",
  effect:
    "Thermal energy radiates from a point you choose. Targets in the affected area take 10 fire damage and catch fire. If they have sight sense, they are also stunned and blinded.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 7,
};
