import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Dexterous: Trait = {
  name: "Dexterous",
  description: "Gain +1 bonus to dexterity checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Dexterity,
        bonus: 1,
      },
    },
  ],
};
