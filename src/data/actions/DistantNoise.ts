import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const DistantNoise: Action = {
  name: "Distant noise",
  effect:
    "You manifest an auditory illusion of a noise or creature's voice in the distance. The illusion appears real to all creatures, however close inspection will reveal it to be magically crafted. The illusion lasts until your next turn.",
  skillType: SkillType.Sonic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
