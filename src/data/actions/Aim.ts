import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Aim: Action = {
  name: "Aim",
  description:
    "You focus on hitting your next target. You have advantage on your next action if at a single target.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
