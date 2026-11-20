import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Traveller as Trait } from "../traits/Traveller";
import { BillyCan, FlintAndSteel, Notebook, Spyglass, Swag } from "../items";

export const Traveller: Background = {
  name: "Traveller",
  description:
    "You wander from place to place with no fixed home, relying on your wits and instincts to survive. You could be an explorer navigating the uncharted frontier, or a swagman drifting between farms and towns.",
  startingSkillLevels: [
    {
      skill: SkillType.Perception,
      level: 5
    },
    {
      skill: SkillType.Agility,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Explorer",
      money: 10,
      items: [Swag, BillyCan, FlintAndSteel, Spyglass, Notebook],
    },
    {
      name: "Swagman",
      money: 10,
      items: [Swag, BillyCan, FlintAndSteel],
    },
  ],
};
