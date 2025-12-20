import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const Heat: Action = {
  name: "Heat",
  effect:
    "You release a surge of heat from your hands to heat an object. You can bring water to boil or cause wood to ignite with your touch. If done against a creature, they catch fire.",
  skillType: SkillType.Pyro,
  range: Range.Close,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};
