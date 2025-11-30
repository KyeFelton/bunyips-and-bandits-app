import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const GuardianAngel: Action = {
  name: "Guardian angel",
  effect:
    "You summon a spirit to protect a creature for one round of combat. Your target takes 5 less damage on the next attack that hits them.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
