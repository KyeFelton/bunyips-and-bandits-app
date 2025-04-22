import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const MindRead: Action = {
  name: "Mind read",
  effect: "You read all the thoughts and memories of your target.",
  skillType: SkillType.Psychic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 8,
};
