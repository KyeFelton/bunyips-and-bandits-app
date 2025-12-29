import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";

export const Merchant: Background = {
  name: "Merchant",
  description:
    "You have spent your life buying, selling, and negotiating deals. You excel at reading people and persuading them to see things your way.",
  expertiseSkills: [SkillType.Charisma, SkillType.Psychology],
};
