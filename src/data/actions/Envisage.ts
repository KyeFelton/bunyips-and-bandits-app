import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Envisage: Action = {
  name: "Envisage",
  effect:
    "You assess the minds of all nearby creatures and predict their next actions, enabling you to foresee the next minute of gameplay. After completing one minute in-game, you can decide whether to proceed with those actions, or go back and change your actions to a new course of events.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};
