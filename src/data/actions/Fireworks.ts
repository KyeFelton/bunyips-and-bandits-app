import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Fireworks: Action = {
  name: "Fireworks",
  effect:
    "Fireworks shoot out in all directions to create chaos. Targets are stunned.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};
