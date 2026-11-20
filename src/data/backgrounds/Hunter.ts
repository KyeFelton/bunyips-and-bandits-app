import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Hunter as Trait } from "../traits/Hunter";
import { FishingNet, FlintAndSteel, FootholdTrap, HuntingKnife, Rope, SteelJavelin, Torch } from "../items";

export const Hunter: Background = {
  name: "Hunter",
  description:
    "You've made your living tracking and hunting game in the wilderness. You could be a huntsman following game through the outback, a trapper collecting pelts, or a fisherman searching the open seas for a big catch.",
  startingSkillLevels: [
    {
      skill: SkillType.Nature,
      level: 5
    },
    {
      skill: SkillType.Perception,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Huntsman",
      money: 10,
      items: [HuntingKnife, SteelJavelin, Rope, Torch, FlintAndSteel],
    },
    {
      name: "Trapper",
      money: 10,
      items: [HuntingKnife, FootholdTrap, Rope],
    },
    {
      name: "Fisherman",
      money: 10,
      items: [HuntingKnife, FishingNet, SteelJavelin],
    },
  ],
};
