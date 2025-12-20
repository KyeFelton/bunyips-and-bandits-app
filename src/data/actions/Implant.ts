import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Implant: Action = {
  name: "Implant",
  effect:
    "You plant a fake memory or idea in your target's mind that they believe to be true.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 4,
};
