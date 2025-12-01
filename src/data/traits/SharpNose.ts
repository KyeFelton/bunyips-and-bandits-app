import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const SharpNose: Trait = {
  name: "Sharp nose",
  description:
    "Your smell sharpens, allowing you to trace faint scents and track down other creatures. You gain +3 bonus to Perception checks using smell.",
  effects: [
    {
      skill: {
        skillType: SkillType.Perception,
        bonus: 3,
      },
    },
  ],
};
