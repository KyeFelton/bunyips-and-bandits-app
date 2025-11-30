import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Disguise: Action = {
  name: "Disguise",
  effect:
    "You manipulate the light reflected off your target to alter their appearance. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
