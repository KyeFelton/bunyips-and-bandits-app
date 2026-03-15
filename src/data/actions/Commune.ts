import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Commune: Action = {
  name: "Commune",
  effect:
    "You touch a corpse and open communication with its spirit. The creature must have died within the last 100 years. Costs 1 stamina per minute of communion.",
  skillType: SkillType.Spirit,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
  duration: "1 minute",
};
