import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Purge: Action = {
  name: "Purge",
  effect: "You unleash a wave of psychic energy that stuns all nearby foes.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 2,
};
