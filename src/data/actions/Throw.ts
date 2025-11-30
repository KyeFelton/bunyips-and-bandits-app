import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Throw: Action = {
  name: "Throw weapon",
  effect:
    "You throw your weapon at your target. If you hit, they take your weapon's damage. Whether hit or miss, you are no longer wielding your weapon.",
  skillType: SkillType.Dexterity,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
