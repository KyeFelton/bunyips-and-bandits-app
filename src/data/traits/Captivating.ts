import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Captivating: Trait = {
  name: "Captivating",
  description: "You gain +3 bonus to charisma checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: 3,
      },
    },
  ],
};
