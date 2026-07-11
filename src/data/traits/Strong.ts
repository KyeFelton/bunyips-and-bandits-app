import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Strong: Trait = {
  name: "Strong",
  description: "Gain +1 bonus to {{skill:strength}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Strength,
        bonus: 1,
      },
    },
  ],
};
