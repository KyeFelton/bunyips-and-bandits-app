import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const DeathCloud: Action = {
  name: "Death cloud",
  effect:
    "The air around you is overwhelmed with a toxic haze. Targets take 5 toxic damage and become anosmic.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 4,
};
