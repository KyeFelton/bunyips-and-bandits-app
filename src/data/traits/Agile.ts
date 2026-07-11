import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Agile: Trait = {
  name: "Agile",
  description: "Add +1 bonus to {{skill:agility}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: 1,
      },
    },
  ],
};
