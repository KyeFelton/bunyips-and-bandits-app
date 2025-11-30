import { SkillType } from "../../enums/SkillType";
import { Ancestry } from "../../models/ancestry";

export const Englorian: Ancestry = {
  name: "Englorian",
  description:
    "Descendants of organized imperial society with strong military traditions and structured governance.",
  species: ["Avian", "Giant", "Goblin", "Human", "Sprite"],
  effects: [
    {
      skill: {
        skillType: SkillType.Intelligence,
        bonus: 1,
      },
    },
  ],
};
