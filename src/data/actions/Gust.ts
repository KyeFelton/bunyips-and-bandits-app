import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Gust: Action = {
  name: "Gust",
  effect:
    "Targets become anosmic and roll an easy strength check. If they fail, they are restrained.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 1,
};
