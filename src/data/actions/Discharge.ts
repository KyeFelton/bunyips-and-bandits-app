import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Discharge: Action = {
  name: "Discharge",
  effect: "Targets take 20 electric damage.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 6,
};
