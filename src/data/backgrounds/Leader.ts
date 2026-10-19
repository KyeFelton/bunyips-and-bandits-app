import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Leader as Trait } from "../traits/Leader";

export const Leader: Background = {
  name: "Leader",
  description:
    "You have a natural ability to inspire and command others. You could be a ship's captain, a respected community elder, or a renowned folk hero.",
  expertiseSkills: [SkillType.Charisma, SkillType.Willpower],
  traits: [Trait],
  availableMoneyTiers: ["Average", "Wealthy"],
  startingItems: [
    {
      name: "Captain",
      items: [],
    },
    {
      name: "Elder",
      items: [],
    },
    {
      name: "Folk hero",
      items: [],
    },
  ],
};
