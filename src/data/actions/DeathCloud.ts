import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const DeathCloud: Action = {
  name: "Death cloud",
  description:
    "The air around you is overwhelmed with a toxic haze. Targets take 5 {{damage:toxic}} damage and lose {{sense:smell}} for one round.",
  skillType: SkillType.Biotic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 4,
};
