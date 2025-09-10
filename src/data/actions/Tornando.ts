import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Tornado: Action = {
  name: "Tornado",
  effect:
    "You summon a tornado to destroy your foes. They take 6 force damage and become anosmic. They must pass a hard strength check otherwise they are restrained.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 8,
};
