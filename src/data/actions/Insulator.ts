import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Insulator: Action = {
  name: "Insulator",
  effect:
    "You focus your attention towards countering the actions of your foes. You and adjacent allies are protected with 2 fire armour.",
  skillType: SkillType.Pyro,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 1,
};
