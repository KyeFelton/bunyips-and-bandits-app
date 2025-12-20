import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Burst: Action = {
  name: "Burst",
  effect:
    "You violently expel tissue from your body as you morph into a smaller creature. Close creatures take 3 force damage, 3 mental damage, stun and become anosmic. You then modify your base stats to the species that you morph into. This action cannot be performed if you are tiny sized.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 2,
};
