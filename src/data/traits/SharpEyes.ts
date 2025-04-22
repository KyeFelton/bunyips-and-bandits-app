import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const SharpEyes: Trait = {
  name: "Sharp eyes",
  description: "Your sight sharpens, granting you +3 bonus to sight checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Sight,
        bonus: 3,
      },
    },
  ],
};
