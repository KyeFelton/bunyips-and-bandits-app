import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Psychologist: Trait = {
  name: "Psychologist",
  description: "Add +1 bonus to {{skill:psychology}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Psychology,
        bonus: 1,
      },
    },
  ],
};
