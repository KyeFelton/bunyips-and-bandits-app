import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SummonBeast: Action = {
  name: "Summon beast",
  effect:
    "You call upon the spirit of dead animal that once roamed this land to aid you and your allies. The ghost of a large beast appears and performs a task for you. If attacking a foe, they deal 4 force damage.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
