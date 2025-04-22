import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Agile: Trait = {
  name: "Agile",
  description: "Gain +2 bonus to agility checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: 2,
      },
    },
  ],
};
