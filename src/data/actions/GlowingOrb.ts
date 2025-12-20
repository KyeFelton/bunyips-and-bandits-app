import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const GlowingOrb: Action = {
  name: "Glowing orb",
  effect: "You manifest a glowing orb that illuminates your surroundings.",
  skillType: SkillType.Radiant,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 0,
};
