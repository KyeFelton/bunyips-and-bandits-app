import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Hypnotise: Action = {
  name: "Hypnotise",
  effect:
    "You overpower the mind of your target and put them in a suggestive state. They are hypnotised by you and will obey your commands.",
  skillType: SkillType.Psychic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
