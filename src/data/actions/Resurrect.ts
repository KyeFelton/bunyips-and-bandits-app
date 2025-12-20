import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Resurrect: Action = {
  name: "Resurrect",
  effect:
    "You resurrect a spirit that has been dead for less than one hundred years. True ressurection requires a living body that has had its soul torn out in order for the new spirit to occupy it. For false resurrection, you need an object for the spirit to posess. Spirits summoned through false resurrection will slowly degenerate into a wight over 1d20 days.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 10,
};
