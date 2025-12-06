import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { SkillType } from "../../enums/SkillType";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Brawl: Action = {
  name: "Brawl",
  effect: "You strike your opponent with your fists to deal 1 force damage.",
  skillType: SkillType.Strength,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
