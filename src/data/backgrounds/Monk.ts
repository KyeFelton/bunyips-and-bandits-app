import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Monk as Trait } from "../traits/Monk";

export const Monk: Background = {
  name: "Monk",
  description:
    "You have devoted yourself to study, contemplation, and spiritual discipline. You may be a preacher of your faith, or scholar dedicated to your field of study.",
  expertiseSkills: [SkillType.Lore, SkillType.Willpower],
  traits: [Trait],
  availableMoneyTiers: ["Poor"],
  startingItems: [
    {
      name: "Preacher",
      items: [],
    },
    {
      name: "Scholar",
      items: [],
    },
  ],
};
