import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Stench: Action = {
  name: "Stench",
  effect:
    "A horrendous stench radiates from your body. Nearby targets become anosmic.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 1,
};
