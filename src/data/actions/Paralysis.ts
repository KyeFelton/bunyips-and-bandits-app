import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Paralysis: Action = {
  name: "Paralysis",
  effect:
    "Your infect your opponent with a deadly dose of debilitating venom. They take 20 toxic damage and become restrained.",
  skillType: SkillType.Toxic,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
