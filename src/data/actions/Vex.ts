import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Vex: Action = {
  name: "Vex",
  effect:
    "You overwhelm the mind of a near creature to perceive an illusion. They take 1 psychic damage and become deluded for one turn. Describe the illusion that they perceive to the GM.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
