import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Shriek: Action = {
  name: "Shriek",
  effect:
    "You make an earsplitting sound that stuns, deafens and deals 2 psychic damage to near creatures with hearing sense. Glass and other fragile materials instantly shatter.",
  skillType: SkillType.Sonic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 1,
};
