import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Frighten: Action = {
  name: "Frighten",
  effect:
    "You plague your opponents mind with horrors. Your target takes 2 psychic damage and becomes frightened of you.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
