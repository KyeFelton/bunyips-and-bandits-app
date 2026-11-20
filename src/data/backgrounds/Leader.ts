import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Leader as Trait } from "../traits/Leader";
import { Notebook, SoothingHerb, Spyglass, SteelSword } from "../items";

export const Leader: Background = {
  name: "Leader",
  description:
    "You have a natural ability to inspire and command others. You could be a ship's captain, a respected community elder, or a renowned folk hero.",
  startingSkillLevels: [
    {
      skill: SkillType.Willpower,
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
      name: "Captain",
      money: 100,
      items: [Spyglass, Notebook, SteelSword],
    },
    {
      name: "Elder",
      money: 100,
      items: [SoothingHerb],
    },
    {
      name: "Folk hero",
      money: 100,
      items: [SteelSword],
    },
  ],
};
