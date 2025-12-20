import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Cyclone: Action = {
  name: "Cyclone",
  effect:
    "You bombard an area with rapid winds. Targets become anosmic. Any creature that attempts to move through or throw an object must pass a hard strength check to succeed.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 2,
};
