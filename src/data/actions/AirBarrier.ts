import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const AirBarrier: Action = {
  name: "Air barrier",
  effect:
    "You protect an area with rapid winds. Until your next turn, any creature that attempts to enter the area must pass a hard strength check, or be thrown back 5m and take 5 force damage.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 3,
};
