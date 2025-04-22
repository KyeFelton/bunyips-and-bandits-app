import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const GraspOfDeath: Action = {
  name: "Grasp of death",
  effect:
    "You chant to the ethereal plane, grasp your opponent and try to tear their spirit from their body. If the target has 30 health or less, their spirit is ruptured from their body and channelled to the Realm of the Dead. Their body becomes a mindless being in a vegetative state. If they have more than 30 health, they suffer no ill effect, and this action has half the stamina cost.",
  skillType: SkillType.Spirit,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 8,
};
