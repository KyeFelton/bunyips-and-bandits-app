import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SummonBeast: Action = {
  name: "Summon beast",
  effect:
    "You call upon the spirits of dead animals that once roamed this land to defend you and your allies. The ghost of a large beast appears and attacks a foe of your choosing. They take 4 force damage.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
