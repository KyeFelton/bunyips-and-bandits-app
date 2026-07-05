import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const BlindingFlash: Action = {
  name: "Blinding flash",
  description:
    "You emit a bright light that scars the eyes of your targets. They lose {{sense:sight}} for one round.",
  skillType: SkillType.Radiant,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 1,
};
