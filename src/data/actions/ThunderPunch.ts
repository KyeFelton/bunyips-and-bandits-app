import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const ThunderPunch: Action = {
  name: "Thunder punch",
  effect:
    "You punch your foe with devastating force embued with sonic energy, dealing 10 force damage. If they are medium size or smaller, they are knocked back 5m.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
