import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Mutate: Action = {
  name: "Mutate",
  effect:
    "You mutate your body into the form of an anatomically similar species of your size. You choose the appearance of your new form. Modify your base stats according to the species you've mutated into.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
