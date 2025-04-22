import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Avenge: Action = {
  name: "Avenge",
  effect:
    "You sense and commune with the spirit of a creature recently slain by your opponent. You become empowered. The GM may reveal a useful insight about your opponent. If the opponent is innocent, then this action has no effect.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
