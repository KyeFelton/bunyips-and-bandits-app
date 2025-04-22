import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const VenomSting: Action = {
  name: "Venom sting",
  effect:
    "You stab your target with a venomous barb. They take 6 toxic and 4 slash damage.",
  skillType: SkillType.Toxic,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
