import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Catapult: Action = {
  name: "Catapult",
  effect:
    "You throw a large sized or smaller creature up to 20m through the air. They take 5 force damage for every 5m thrown.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 6,
};
