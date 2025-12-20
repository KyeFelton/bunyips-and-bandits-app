import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Mask: Action = {
  name: "Mask",
  effect:
    "You alter your appearance, scent and voice to resemble another individual of your species that you have met.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
