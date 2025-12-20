import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const GraspOfDeath: Action = {
  name: "Grasp of death",
  effect:
    "You chant to the ethereal plane, grasp your opponent and try to tear their spirit from their body. If the target has lost more than half their physical and mental health, their spirit is ruptured from their body and channelled to the Spirit Realm. Their body becomes a mindless being in a vegetative state. If they have more than half health, then they suffer no ill effect, but the GM will reveal how much health they have left.",
  skillType: SkillType.Spirit,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};
