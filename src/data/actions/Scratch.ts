import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { SkillType } from "../../enums/SkillType";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Scratch: Action = {
  name: "Scratch",
  description:
    "You strike your opponent with your claws. Deal 1 {{damage:slash}} damage.",
  skillType: SkillType.Strength,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
