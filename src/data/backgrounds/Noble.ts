import { Background } from "../../models/backgrounds";
import { FineClothes } from "../items/FineClothes";

export const Noble: Background = {
  name: "Noble",
  description:
    "You were born to a great station family, raised on wool money and the quiet certainty that the world arranges itself around old names. The land worked for you. You simply spent its rewards.",
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
