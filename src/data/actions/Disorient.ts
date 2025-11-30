import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Disorient: Action = {
  name: "Disorient",
  effect:
    "You disrupt your target’s ability to perceive their environment. They take 2 psychic damage and become disoriented.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
