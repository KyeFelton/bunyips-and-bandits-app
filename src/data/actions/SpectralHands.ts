import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SpectralHands: Action = {
  name: "Spectral hands",
  effect:
    "Shadowy hands emerge from the ground and grapple your target. They are now restrained.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
