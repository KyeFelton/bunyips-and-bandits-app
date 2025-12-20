import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const SharpSenses: Trait = {
  name: "Sharp senses",
  description: "You gain +1 to perception checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Perception,
        bonus: 1,
      },
    },
  ],
};
