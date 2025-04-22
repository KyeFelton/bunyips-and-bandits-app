import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SummonCritter: Action = {
  name: "Summon critter",
  effect:
    "You call upon the spirits of dead animals that once roamed this land to defend you and your allies. The ghost of a small critter appears and attacks a foe of your choosing. They take 1d6 slash damage.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
