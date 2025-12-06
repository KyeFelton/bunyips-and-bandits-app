import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Dash: Action = {
  name: "Dash",
  effect:
    "You move quickly, reaching one speed tier higher than your normal movement. Slow→Close, Moderate→Near, Fast→Far. Extreme speed cannot dash further.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
