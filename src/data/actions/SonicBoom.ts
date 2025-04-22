import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SonicBoom: Action = {
  name: "Sonic boom",
  effect:
    "You blast your targets with a sonic boom. They take 10 force damage and are deafened. If they are medium size or smaller, they are thrown back 5m. If performed inside an enclosed room or chamber, then deal an additional 5 force damage",
  skillType: SkillType.Sonic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 5,
};
