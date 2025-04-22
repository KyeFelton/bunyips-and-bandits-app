import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Attract: Action = {
  name: "Attract",
  effect:
    "Your body turns into a super magnet that attracts magnetic metals. Nearby, unsecured metal objects are pulled towards you.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};
