import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const PumpUp: Action = {
  name: "Pump up",
  effect: "You play a song that empowers your allies.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 1,
};
