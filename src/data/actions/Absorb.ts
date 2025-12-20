import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Absorb: Action = {
  name: "Absorb",
  effect:
    "You consume the corpse of a creature to restore all physical health. If the creature is larger than you, you may morph into a creature of that size. Modify your base stats to the species that you morph into it.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
