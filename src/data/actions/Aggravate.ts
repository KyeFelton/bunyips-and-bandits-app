import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Aggravate: Action = {
  name: "Aggravate",
  effect:
    "You bewilder your opponents mind to mistake all nearby creatures as enemies. They take 2 psychic damage and gain madness.",
  skillType: SkillType.Psychic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
