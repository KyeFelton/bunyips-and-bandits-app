import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Broadcast: Action = {
  name: "Broadcast",
  effect: "You send a telepathic message to all nearby creatures.",
  skillType: SkillType.Psychic,
  range: Range.Far,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
