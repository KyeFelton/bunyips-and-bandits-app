import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const MindRead: Action = {
  name: "Mind read",
  effect:
    "You probe the mind of your target. You can ask the GM one question about the target's thoughts, memories or feelings, and the GM will answer honestly. If the target willingly lets you read their mind, no skill check is required and this action uses no stamina.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
