import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const PoisonSpray: Action = {
  name: "Poison spray",
  effect:
    "You spray a mist of poisonous vapour towards your target. They take 3 toxic damage.",
  skillType: SkillType.Biotic,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 2,
};
