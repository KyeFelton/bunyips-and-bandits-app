import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const MirrorDome: Action = {
  name: "Mirror dome",
  effect:
    "You manifest an intangible dome that reflects light. Creatures both inside and outside the dome see a mirror. If there is no light source within the dome, then the creatures inside are enveloped in darkness. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 3,
};
