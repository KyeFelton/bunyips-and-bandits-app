import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const Bard: Trait = {
  name: "Bard",
  description:
    "You are a master of song and speech. People tend to find you more captivating and enjoy your presence. You gain +3 bonus to charisma checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: 3,
      },
    },
  ],
};
