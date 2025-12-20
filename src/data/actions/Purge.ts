import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Purge: Action = {
  name: "Purge",
  effect:
    "You unleash a wave of psychic energy that muddles all nearby foes, dealing 3 psychic damage and stunning them.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 4,
};
