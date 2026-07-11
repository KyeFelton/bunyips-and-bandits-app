import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Stealthy: Trait = {
  name: "Stealthy",
  description: "Add +1 bonus to {{skill:stealth}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Stealth,
        bonus: 1,
      },
    },
  ],
};
