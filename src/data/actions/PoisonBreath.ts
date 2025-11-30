import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const PoisonBreath: Action = {
  name: "Poison breath",
  effect:
    "You breathe a mist of poisonous gas towards your targets. They take 1 toxic damage.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 2,
};
