import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Extinguish: Action = {
  name: "Extinguish",
  effect:
    "You dispel the heat of nearby fires causing them to smother immediately. Targets of your choosing are no longer burning.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 2,
};
