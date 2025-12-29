import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Nimble: Trait = {
  name: "Nimble",
  description: "Gain +1 bonus to agility checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: 1,
      },
    },
  ],
};
