import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Plough: Action = {
  name: "Plough",
  effect:
    "Move up to three times your speed towards your target then deal your weapon's damage. If the creature is equal size to you or smaller, they are stunned.",
  skillType: SkillType.Martial,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
