import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Meditate: Action = {
  name: "Meditate",
  effect:
    "Once per day when out of combat, you can meditate for 10min to fully restore your mind health. If your allies join the meditation, their minds restore 2 health.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
