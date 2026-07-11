import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const SharpSenses: Trait = {
  name: "Sharp senses",
  description: "Add +1 bonus to {{skill:perception}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Perception,
        bonus: 1,
      },
    },
  ],
};
