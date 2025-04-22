import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Guard: Action = {
  name: "Guard",
  effect:
    "You take a defensive stance to defend your allies. You and your adjacent allies are empowered. Whenever an opponent attacks an ally adjacent to you, you can attempt to counter it.",
  skillType: SkillType.Martial,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
