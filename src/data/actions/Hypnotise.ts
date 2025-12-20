import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Hypnotise: Action = {
  name: "Hypnotise",
  effect:
    "You overpower the mind of your target and put them in a suggestive state. They are hypnotised by you and will obey your commands for the next turn.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
