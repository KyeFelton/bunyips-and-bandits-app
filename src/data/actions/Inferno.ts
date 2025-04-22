import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Inferno: Action = {
  name: "Inferno",
  effect:
    "You unleash a sudden explosion of fire that leads devastation in its wake. All targets around you take 15 fire damage, catch fire, and are blinded.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 8,
};
