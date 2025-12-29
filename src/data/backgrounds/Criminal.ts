import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";

export const Criminal: Background = {
  name: "Criminal",
  description:
    "You have lived on the wrong side of the law, developing skills in stealth and sleight of hand. Whether pickpocket, burglar, or smuggler, you know how to move unseen and work with precision.",
  expertiseSkills: [SkillType.Stealth, SkillType.Dexterity],
};
