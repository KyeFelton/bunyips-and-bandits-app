import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Inferno: Action = {
  name: "Inferno",
  description:
    "You unleash a sudden explosion of fire that leads devastation in its wake. All targets around you take 5 {{damage:fire}} damage, catch fire, and lose {{sense:sight}} for one round.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 8,
};
