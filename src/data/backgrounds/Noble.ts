import { Background } from "../../models/backgrounds";
import { FineClothes } from "../items/FineClothes";

export const Noble: Background = {
  name: "Noble",
  description:
    "You were born to a wealthy family, raised on money and had the quiet certainty that the world arranges itself around you.",
  expertiseSkills: [],
  traits: [],
  startingItems: [
    {
      name: "Noble",
      items: [FineClothes],
    },
  ],
  availableMoneyTiers: ["Prosperous"],
};
