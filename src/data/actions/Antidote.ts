import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Antidote: Action = {
  name: "Antidote",
  effect:
    "You focus your attention towards countering the actions of your foes. You and adjacent allies are protected with 2 toxic armour.",
  skillType: SkillType.Biotic,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 1,
};
