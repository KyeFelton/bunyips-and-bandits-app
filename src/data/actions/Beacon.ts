import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Beacon: Action = {
  name: "Beacon",
  effect: "You illuminate your surroundings with light.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};
