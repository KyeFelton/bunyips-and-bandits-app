import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Labourer as Trait } from "../traits/Labourer";
import { BottleOfRum } from "../items/BottleOfRum";
import { FishingNet } from "../items/FishingNet";
import { Lantern } from "../items/Lantern";
import { OilFlask } from "../items/OilFlask";
import { Pickaxe } from "../items/Pickaxe";
import { Rope } from "../items/Rope";
import { SteelDagger } from "../items/SteelDagger";
import { TravellingClothes } from "../items/TravellingClothes";
import { WoodcutterAxe } from "../items/WoodcutterAxe";
import { WorkClothes } from "../items/WorkClothes";

export const Labourer: Background = {
  name: "Labourer",
  description:
    "Years of hard physical work have built your strength and endurance. Whether you were a miner digging for gold, a logger felling timber in the bush, or a sailor working the docks of a bustling port, you've learned to push through exhaustion and keep working when others would quit.",
  expertiseSkills: [SkillType.Strength, SkillType.Willpower],
  traits: [Trait],
  startingItems: [
      {
        name: "Miner",
        items: [WorkClothes, Pickaxe, OilFlask, Lantern, BottleOfRum],
      },
      {
        name: "Logger",
        items: [WorkClothes, WoodcutterAxe, Rope, BottleOfRum],
      },
      {
        name: "Sailor",
        items: [TravellingClothes, FishingNet, Rope, SteelDagger, BottleOfRum],
      },
    ],
};
