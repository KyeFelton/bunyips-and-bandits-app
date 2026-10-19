import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Traveller as Trait } from "../traits/Traveller";

export const Traveller: Background = {
  name: "Traveller",
  description:
    "You wander from place to place with no fixed home, relying on your wits and instincts to survive. You could be an explorer navigating the uncharted frontier, or a swagman drifting between farms and towns.",
  expertiseSkills: [SkillType.Agility, SkillType.Psychology],
  traits: [Trait],
  availableMoneyTiers: ["Poor"],
  startingItems: [
    {
      name: "Explorer",
      items: [],
    },
    {
      name: "Swagman",
      items: [],
    },
  ],
};
