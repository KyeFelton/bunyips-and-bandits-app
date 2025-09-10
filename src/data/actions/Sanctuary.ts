import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Sanctuary: Action = {
  name: "Sanctuary",
  effect:
    "You can summon a spectral, dome barrier that confines a group of targets. The barrier prevents anything from entering or exiting the dome, including magical attacks. The barrier lasts until something breaks it or you dismiss it. The health of the barrier is double the number of stamina points you choose to expend in order to create it.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: "variable",
};
