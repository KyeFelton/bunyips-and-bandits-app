import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { SkillType } from "../../enums/SkillType";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Strike: Action = {
  name: "Strike",
  effect: "You strike your opponent and deal your weapon's damage.",
  skillType: SkillType.Martial,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
