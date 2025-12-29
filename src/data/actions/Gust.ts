import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Gust: Action = {
  name: "Gust",
  effect:
    "You manifest a large gust of wind. Targets become anosmic, blinded and must pass a moderate strength check otherwise be pushed back a close distance.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 1,
};
