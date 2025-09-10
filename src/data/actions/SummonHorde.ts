import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SummonHorde: Action = {
  name: "Summon horde",
  effect:
    "You call upon the spirits of dead animals that once roamed this land to defend you and your allies. A horde of phantoms appear and attack each foe of your choosing in the area. Each foe takes 3 slash damage.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 4,
};
