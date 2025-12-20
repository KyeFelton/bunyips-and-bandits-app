import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Pandemonium: Action = {
  name: "Pandemonium",
  effect:
    "You bombard the minds of near creatures with illusions. They all take 1 psychic damage and become deluded for one turn. Describe the illusions that they perceive to the GM.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 6,
};
