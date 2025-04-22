import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Interference: Action = {
  name: "Interference",
  effect: "Nearby target’s psychic sense is blocked.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 5,
};
