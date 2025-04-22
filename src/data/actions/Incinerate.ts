import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Incinerate: Action = {
  name: "Incinerate",
  effect:
    "You destroy your target with fire. Your target takes 25 fire damage and catches fire.",
  skillType: SkillType.Pyro,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
