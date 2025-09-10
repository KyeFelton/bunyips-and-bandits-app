import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SonicCharge: Action = {
  name: "Sonic charge",
  effect:
    "You take an action to build up energy. On your next turn, deal an addition 1 force damage on all sonic attacks.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
