import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Decimate: Action = {
  name: "Decimate",
  effect:
    "You focus all your attention to smashing your target's weak spot. Deal your weapon's damage doubled to your opponent.",
  skillType: SkillType.Martial,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
