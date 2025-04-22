import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Cyclone: Action = {
  name: "Cyclone",
  effect:
    "You unleash a tempest. Targets take 5 electric, 5 slash and 5 force damage as they are struck by objects from their environment. They also become anosmic. They must pass a hard strength check otherwise they are restrained.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 6,
};
