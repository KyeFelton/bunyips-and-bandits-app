import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Telekinesis: Action = {
  name: "Telekinesis",
  effect: "You can magically suspend, move and/or throw a small object in the air.",
  skillType: SkillType.Kinetic,
  range: Range.Near,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
