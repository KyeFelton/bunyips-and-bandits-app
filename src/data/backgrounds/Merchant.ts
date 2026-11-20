import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Merchant as Trait } from "../traits/Merchant";
import { BowlerHat, GrapplingHook, Lantern, MagnifyingGlass, Notebook, OilFlask } from "../items";

export const Merchant: Background = {
  name: "Merchant",
  description:
    "You've spent your life buying, selling, and negotiating deals. You could be a shopkeeper in a frontier town, a smuggler at a bustling port, or a traveling peddler hawking goods between settlements.",
  startingSkillLevels: [
    {
      skill: SkillType.Psychology,
      level: 5
    },
    {
      skill: SkillType.Charisma,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Shopkeeper",
      money: 100,
      items: [Notebook, MagnifyingGlass, BowlerHat],
    },
    {
      name: "Smuggler",
      money: 100,
      items: [GrapplingHook, Lantern, OilFlask],
    },
  ],
};
