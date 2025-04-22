import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const BlindingFlash: Action = {
  name: "Blinding flash",
  effect:
    "You emit a bright light that scars the eyes of your target. Targets with sight sense are blinded, stunned and lose 1 morale.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
