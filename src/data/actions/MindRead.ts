import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const MindRead: Action = {
  name: "Mind read",
  effect:
    "You read all the thoughts and memories of your target. You can ask the GM as many questions as you wish about the target's thoughts, memories and feelings, and the GM will answer all of them honestly",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 8,
};
