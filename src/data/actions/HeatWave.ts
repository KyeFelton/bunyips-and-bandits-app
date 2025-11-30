import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const HeatWave: Action = {
  name: "Heat wave",
  effect:
    "Heat expelled from your body rapidly rises the air temperature around you for the duration of the round. All creatures in the area take 2 fire damage.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 2,
};
