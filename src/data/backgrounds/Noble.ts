import { Background } from "../../models/backgrounds";
import { SignetRing, TopHat } from "../items";

export const Noble: Background = {
  name: "Noble",
  description:
    "You were born to a wealthy family, raised on money and had the quiet certainty that the world arranges itself around you.",
  startingSkillLevels: [],
  traits: [],
  startingItems: [
    {
      name: "Noble",
      money: 10000,
      items: [SignetRing, TopHat],
    },
  ],
};
