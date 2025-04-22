import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Levitate: Action = {
  name: "Levitate",
  effect:
    "You can charge your body to repel the ground and levitate at will. Whilst hovering, you can move at your walking speed.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
