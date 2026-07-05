import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const SonicBoom: Action = {
  name: "Sonic boom",
  description:
    "You blast your surroundings with compressed air. Near creatures take 3 {{damage:force}} damage, lose {{sense:hearing}} for one round, and are stunned. They must also pass a hard strength check otherwise be pushed back a close distance. If performed inside a small, enclosed room, then deal an additional 1 {{damage:force}} damage.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 3,
};
