import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Discharge: Action = {
  name: "Discharge",
  effect: "Targets take 3 electric damage and are stunned.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 4,
};
