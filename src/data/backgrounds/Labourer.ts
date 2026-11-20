import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Labourer as Trait } from "../traits/Labourer";
import { BottleOfRum, FishingNet, Lantern, OilFlask, Pickaxe, Rope, SteelDagger, WoodcutterAxe, TimberWedge, SewingKit, FeatherDuster, MobCap } from "../items";

export const Labourer: Background = {
  name: "Labourer",
  description:
    "Years of hard physical work have built your strength and endurance. You could be a miner digging for gold, a logger felling timber in the bush, or a sailor working on a ship.",
  startingSkillLevels: [
    {
      skill: SkillType.Strength,
      level: 5
    },
    {
      skill: SkillType.Willpower,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Digger",
      money: 10,
      items: [Pickaxe, OilFlask, Lantern, BottleOfRum],
    },
    {
      name: "Logger",
      money: 10,
      items: [WoodcutterAxe, TimberWedge, Rope, BottleOfRum],
    },
    {
      name: "Sailor",
      money: 10,
      items: [FishingNet, Rope, SteelDagger, BottleOfRum],
    },
    {
      name: "Maid",
      money: 10,
      items: [SewingKit, FeatherDuster, MobCap],
    },
  ],
};
