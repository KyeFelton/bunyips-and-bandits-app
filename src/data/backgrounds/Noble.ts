import { Background } from "../../models/backgrounds";
import { FineClothes } from "../items/FineClothes";

export const Noble: Background = {
  name: "Noble",
  description: "Noble",
  expertiseSkills: [],
  traits: [],
  startingItems: [
    {
      name: "Noble",
      items: [FineClothes],
    },
  ],
};
