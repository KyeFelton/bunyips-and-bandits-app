import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Vex: Action = {
  name: "Vex",
  effect:
    "You overwhelm your target with telepathic voices that confuse their thoughts. They are stunned.",
  skillType: SkillType.Psychic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
