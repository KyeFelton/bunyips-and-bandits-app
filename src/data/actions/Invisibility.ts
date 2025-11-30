import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Invisibility: Action = {
  name: "Invisibility",
  effect:
    "Light passes through your body and adjacent allies, making you invisible.",
  skillType: SkillType.Radiant,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.Close,
  staminaCost: 1,
};
