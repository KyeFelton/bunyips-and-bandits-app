import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const AcidBomb: Action = {
  name: "Acid bomb",
  effect:
    "You hurl a ball of corrosive acid towards your target. They take 5 toxic damage.",
  skillType: SkillType.Toxic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
