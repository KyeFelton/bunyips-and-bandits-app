import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Zap: Action = {
  name: "Zap",
  effect: "Nearby targets take 10 electric damage.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};
