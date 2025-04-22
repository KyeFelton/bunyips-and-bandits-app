import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Psychologist: Trait = {
  name: "Psychologist",
  description: "Gain +5 bonus to psychology checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Psychology,
        bonus: 5,
      },
    },
  ],
};
