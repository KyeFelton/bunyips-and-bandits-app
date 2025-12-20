import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SummonHorde: Action = {
  name: "Summon horde",
  effect:
    "You call upon the spirits of dead animals that once roamed this land to aid you and your allies. A horde of phantom animals appear and perform a task of your choosing. If attacking, each foe in the area takes 3 slash damage.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 4,
};
