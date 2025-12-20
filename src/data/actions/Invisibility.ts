import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Invisibility: Action = {
  name: "Invisibility",
  effect:
    "Light passes through you or a target of your choice, making them invisible until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
