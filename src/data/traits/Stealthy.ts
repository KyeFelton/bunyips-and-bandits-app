import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Stealthy: Trait = {
  name: "Stealthy",
  description: "Gain +2 bonus to stealth checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Stealth,
        bonus: 2,
      },
    },
  ],
};
