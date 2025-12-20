import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Reveal: Action = {
  name: "Reveal",
  effect:
    "You probe the mind of your target. You can ask the GM one question about the target's thoughts, memories or feelings, and the GM will answer honestly.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
