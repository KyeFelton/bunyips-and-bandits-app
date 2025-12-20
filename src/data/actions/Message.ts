import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Message: Action = {
  name: "Message",
  effect: "You send a telepathic message to a creature.",
  skillType: SkillType.Psychic,
  range: Range.Far,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
