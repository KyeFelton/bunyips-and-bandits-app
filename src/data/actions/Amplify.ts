import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Amplify: Action = {
  name: "Amplify",
  effect:
    "You amplify your voice or a sound nearby. You can use this ability to draw attention and intimidate near creatures with hearing sense, as well as stun those who are close.",
  skillType: SkillType.Sonic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};
