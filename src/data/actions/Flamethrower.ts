import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Flamethrower: Action = {
  name: "Flamethrower",
  description:
    "Fire erupts from your body, engulfing your target in flames and dealing 3 {{damage:fire}} damage and catches fire.",
  skillType: SkillType.Pyro,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
