import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Ignite: Action = {
  name: "Ignite",
  effect:
    "A spark of energy emits from your body towards your opponent, causing them to catch fire.",
  skillType: SkillType.Pyro,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
