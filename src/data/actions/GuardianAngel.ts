import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const GuardianAngel: Action = {
  name: "Guardian angel",
  effect:
    "You summon a spirit to protect a creature for one round of combat. The first attack that would deal damage to the creature instead misses as the spirit absorbs the impact.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
