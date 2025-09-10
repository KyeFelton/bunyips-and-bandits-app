import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Torrent: Action = {
  name: "Torrent",
  effect:
    "Targets become anosmic and roll a hard strength check. If they fail, they are thrown back 5m and take 1 force damage.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 3,
};
