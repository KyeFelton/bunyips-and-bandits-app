import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Torment: Action = {
  name: "Torment",
  effect:
    "You torture the minds of your enemies. Targets of your choosing lose 2 morale.",
  skillType: SkillType.Psychic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
