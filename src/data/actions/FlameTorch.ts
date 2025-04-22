import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const FlameTorch: Action = {
  name: "Flame torch",
  effect:
    "You produce a small flame that illuminates your surroundings. The torch lasts until your next turn.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};
