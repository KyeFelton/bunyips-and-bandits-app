import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SpiritLink: Action = {
  name: "Spirit link",
  effect:
    "You commune with a spirit through a sentimental object they once possessed, a place they once called home, or the creature that slayed them. Costs 2 stamina per minute of communion.",
  skillType: SkillType.Spirit,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
  duration: "1 minute",
};
