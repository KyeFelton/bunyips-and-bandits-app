import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Merchant as Trait } from "../traits/Merchant";

export const Merchant: Background = {
  name: "Merchant",
  description:
    "You've spent your life buying, selling, and negotiating deals. You could be a shopkeeper in a frontier town, a smuggler at a bustling port, or a traveling peddler hawking goods between settlements.",
  expertiseSkills: [SkillType.Charisma, SkillType.Psychology],
  traits: [Trait],
  availableMoneyTiers: ["Average", "Wealthy"],
  startingItems: [
    {
      name: "Shopkeeper",
      items: [],
    },
    {
      name: "Smuggler",
      items: [],
    },
    {
      name: "Peddler",
      items: [],
    },
  ],
};
