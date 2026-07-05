import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SolarFlare: Action = {
  name: "Solar flare",
  description:
    "Thermal energy radiates from a point you choose. Targets in the affected area take 4 {{damage:fire}} damage and catch fire. If they have {{sense:sight}} sense, they are also stunned and lose {{sense:sight}} for one round.",
  skillType: SkillType.Radiant,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 7,
};
