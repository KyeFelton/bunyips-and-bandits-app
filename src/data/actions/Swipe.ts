import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Swipe: Action = {
  name: "Swipe",
  effect:
    "You attack two targets who are next to each other. They take your weapon's damage.",
  skillType: SkillType.Martial,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 2,
};
