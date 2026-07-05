import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Cyclone: Action = {
  name: "Cyclone",
  description:
    "A storm rages around you. Targets lose {{sense:smell}} for one round. Any creature that attempts to move through or throw an object must pass a hard strength check to succeed.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 2,
  duration: "1 round",
};
