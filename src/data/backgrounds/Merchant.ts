import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Merchant as Trait } from "../traits/Merchant";
import { FineClothes } from "../items/FineClothes";
import { Mirror } from "../items/Mirror";
import { Rations } from "../items/Rations";
import { Rope } from "../items/Rope";
import { SmokeBomb } from "../items/SmokeBomb";
import { SteelDagger } from "../items/SteelDagger";
import { TravellingClothes } from "../items/TravellingClothes";

export const Merchant: Background = {
  name: "Merchant",
  description:
    "You've spent your life buying, selling, and negotiating deals. Whether you're a trader at a bustling port, a shopkeeper in a frontier town, or a traveling peddler hawking goods between settlements, you excel at reading people and persuading them to see things your way.",
  expertiseSkills: [SkillType.Charisma, SkillType.Psychology],
  traits: [Trait],
  availableMoneyTiers: ["Average", "Wealthy"],
  startingItems: [
    {
      name: "Trader",
      items: [FineClothes, Mirror, SteelDagger, Rations],
    },
    {
      name: "Peddler",
      items: [TravellingClothes, Mirror, Rope, Rations],
    },
    {
      name: "Smuggler",
      items: [TravellingClothes, SteelDagger, SmokeBomb, Rope],
    },
  ],
};
