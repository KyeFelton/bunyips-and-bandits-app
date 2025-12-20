import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Heal: Action = {
  name: "Heal",
  effect:
    "When out of combat, you focus on healing the wounds of yourself or an ally. If healing yourself, you regain health equal to your biotic check. If healing an ally, they regain health equal to half your biotic check, rounded down.",
  skillType: SkillType.Biotic,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
