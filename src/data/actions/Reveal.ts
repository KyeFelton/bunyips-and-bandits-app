import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Reveal: Action = {
  name: "Reveal",
  effect:
    "You probe the mind of your target. You gain some useful insights about their strengths, weaknesses, desires and/or fears.",
  skillType: SkillType.Psychic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
