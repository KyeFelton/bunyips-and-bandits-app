import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Mimic: Action = {
  name: "Mimic",
  effect:
    "You change your voice to perfectly mimic that of another person, creature or object.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
