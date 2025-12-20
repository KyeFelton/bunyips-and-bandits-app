import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const QuickDraw: Action = {
  name: "Quick Draw",
  effect: "You rapidly attack two targets with your ranged weapon.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
