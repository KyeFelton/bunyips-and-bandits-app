import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Insight: Action = {
  name: "Insight",
  effect:
    "You inspect the mind of your target to gain an insight about one of their strengths, weaknesses, desires and/or fears based on the GM's discretion.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
