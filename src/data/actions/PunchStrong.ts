import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { SkillType } from "../../enums/SkillType";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const PunchStrong: Action = {
  name: "Punch",
  description:
    "You strike your opponent with your fists. Deal 2 {{damage:force}} damage.",
  skillType: SkillType.Strength,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
