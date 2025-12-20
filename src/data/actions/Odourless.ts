import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Odourless: Action = {
  name: "Odourless",
  effect:
    "You mask your scent from detection by other creatures to make you odourless.",
  skillType: SkillType.Biotic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
