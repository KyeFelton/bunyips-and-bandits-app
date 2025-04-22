import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Disturb: Action = {
  name: "Disturb",
  effect: "You block your target’s ability to psychic sense.",
  skillType: SkillType.Psychic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};
