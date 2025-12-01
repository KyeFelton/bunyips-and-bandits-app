import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const SharpEyes: Trait = {
  name: "Sharp eyes",
  description: "Your sight sharpens, granting you +3 bonus to Perception checks using sight.",
  effects: [
    {
      skill: {
        skillType: SkillType.Perception,
        bonus: 3,
      },
    },
  ],
};
