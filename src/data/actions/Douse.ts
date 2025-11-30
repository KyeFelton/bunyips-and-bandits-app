import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Douse: Action = {
  name: "Douse",
  effect:
    "You dispel the heat of a nearby fire causing it to smother immediately. The target is no longer burning.",
  skillType: SkillType.Pyro,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
