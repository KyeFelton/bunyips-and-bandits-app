import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Pulverise: Action = {
  name: "Pulverise",
  effect:
    "You pulverise your target with powerful shockwaves to deal 8 force damage.",
  skillType: SkillType.Sonic,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
