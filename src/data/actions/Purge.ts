import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Purge: Action = {
  name: "Purge",
  effect:
    "You unleash a wave of psychic energy that muddles all nearby foes. Creatures of your choosing are stunned.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 4,
};
