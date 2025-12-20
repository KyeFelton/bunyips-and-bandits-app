import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Morph: Action = {
  name: "Morph",
  effect:
    "You morph your body into the form of any species of your size or smaller. You choose the appearance of your new form. Modify your base stats according to the species you've morphed into.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
