import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Impedance: Action = {
  name: "Impedance",
  effect:
    "You focus your attention towards countering the actions of your foes. You and your adjacent allies are are protected with 2 electric armour.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 2,
};
