import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Apparition: Action = {
  name: "Apparition",
  effect:
    "You fabricate an image of a creature or object of a medium size or smaller. The image appears real to all creatures, however physical interaction reveals that it is just an illusion. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};
