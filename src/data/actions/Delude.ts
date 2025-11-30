import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Delude: Action = {
  name: "Delude",
  effect:
    "Your target sees and hears a hallucination that you’ve crafted. They lose 2 morale and are deluded.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
