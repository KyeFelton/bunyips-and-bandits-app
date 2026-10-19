import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Hunter as Trait } from "../traits/Hunter";
import { Rope } from "../items/Rope";
import { Torch } from "../items/Torch";
import { TravellingClothes } from "../items/TravellingClothes";

export const Hunter: Background = {
  name: "Hunter",
  description:
    "You've made your living tracking and hunting game in the wilderness. You could be a huntsman following game through the outback, a trapper collecting pelts, or a fisherman searching the open seas for a big catch.",
  expertiseSkills: [SkillType.Stealth, SkillType.Nature],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Huntsman",
      items: [TravellingClothes, Rope, Torch],
    },
    {
      name: "Trapper",
      items: [],
    },
    {
      name: "Fisherman",
      items: [],
    },
  ],
};
