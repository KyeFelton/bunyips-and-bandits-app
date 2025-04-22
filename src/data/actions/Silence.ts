import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Silence: Action = {
  name: "Silence",
  effect:
    "You soften all vibrations around you, making you and adjacent allies silent.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};
