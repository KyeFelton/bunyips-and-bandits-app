import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Leader as Trait } from "../traits/Leader";
import { FineClothes } from "../items/FineClothes";
import { Mirror } from "../items/Mirror";
import { Rope } from "../items/Rope";
import { SoothingHerb } from "../items/SoothingHerb";
import { SteelSword } from "../items/SteelSword";
import { Torch } from "../items/Torch";
import { WalkingStaff } from "../items/WalkingStaff";
import { WorkClothes } from "../items/WorkClothes";

export const Leader: Background = {
  name: "Leader",
  description:
    "You have a natural ability to inspire and command others. Whether you were a ship's captain, a community elder, or a foreman organizing work crews, people look to you for guidance and direction in difficult situations.",
  expertiseSkills: [SkillType.Charisma, SkillType.Willpower],
  traits: [Trait],
  startingItems: [
    {
      name: "Captain",
      items: [FineClothes, SteelSword, Mirror],
    },
    {
      name: "Elder",
      items: [FineClothes, WalkingStaff, SoothingHerb],
    },
    {
      name: "Foreman",
      items: [WorkClothes, WalkingStaff, Rope, Torch],
    },
  ],
};
