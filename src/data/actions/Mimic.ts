import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Mimic: Action = {
  name: "Mimic",
  effect:
    "You perfectly emulate the sounds and voices of a creature or object. The illusion lasts until your next turn.",
  skillType: SkillType.Sonic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
