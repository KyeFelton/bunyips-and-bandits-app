import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Shriek: Action = {
  name: "Shriek",
  description:
    "You make an earsplitting sound that causes targets to lose {{sense:hearing}} for one round and stuns near creatures with {{sense:hearing}} sense. Glass and other fragile materials instantly shatter.",
  skillType: SkillType.Sonic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 1,
};
