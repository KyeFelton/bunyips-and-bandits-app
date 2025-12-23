import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Message: Action = {
  name: "Message",
  effect:
    "You send a telepathic message to creatures of your choosing within your psychic sense.",
  skillType: SkillType.Psychic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Far,
  staminaCost: 0,
};
