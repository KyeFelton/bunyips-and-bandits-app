import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Stench: Action = {
  name: "Stench",
  effect:
    "A horrendous stench radiates from your body. Nearby targets take 1 psychic damage, become anosmic and are stunned.",
  skillType: SkillType.Biotic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 2,
};
