import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const MemoryLoss: Trait = {
  name: "Memory loss",
  description:
    "Events from the past few years are forgotten to you. Subtract 2 from {{skill:lore}}",
  effects: [
    {
      skill: {
        skillType: SkillType.Lore,
        bonus: -2,
      },
    }
  ]
};
