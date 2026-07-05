import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Tornado: Action = {
  name: "Tornado",
  description:
    "You summon a tornado to destroy your foes. All targets take 1 {{damage:force}} damage for each creature or object in the area of effect, and also lose {{sense:sight}} and {{sense:smell}} for one round. They must pass an extreme strength check otherwise they are held in place for one round, suspended in the air and take an additional 2 {{damage:force}} damage when they fall. Any creature that attempts to move through or throw an object in the area of effect must pass an extreme strength check to succeed.",
  skillType: SkillType.Kinetic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 4,
  duration: "1 round",
};
