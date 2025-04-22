import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Flamethrower: Action = {
  name: "Flamethrower",
  effect:
    "Fire erupts from your body, engulfing your targets in flames. Every target takes 10 fire damage and catches fire.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 4,
};
