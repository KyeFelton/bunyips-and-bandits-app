import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Torrent: Action = {
  name: "Torrent",
  description:
    "You manifest a powerful torrent of wind. Targets lose {{sense:sight}} and {{sense:smell}} for one round and must pass a hard strength check otherwise be pushed back a near distance and take 3 {{damage:force}} damage from the impact.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Near,
  staminaCost: 3,
};
