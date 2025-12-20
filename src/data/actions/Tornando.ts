import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Tornado: Action = {
  name: "Tornado",
  effect:
    "You summon a tornado to destroy your foes. All targets take 1 force damage for each creature or object in the area of effect, and also become anosmic. They must pass an extreme strength check otherwise they are restrained, suspended in the air and take an additional 2 force damage. Any creature that attempts to move through or throw an object in the area of effect must pass an extreme strength check to succeed.",
  skillType: SkillType.Kinetic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 4,
};
