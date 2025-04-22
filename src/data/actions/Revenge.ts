import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Revenge: Action = {
  name: "Revenge",
  effect:
    "You open a gateway that allows deceased foes of your opponent to attack their soul. Your opponent lose 5 morale. If the opponent is innocent, then this action has no effect.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
