import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Artisan as Trait } from "../traits/Artisan";
import { FineClothes } from "../items/FineClothes";
import { Hammer } from "../items/Hammer";
import { IronSpikes } from "../items/IronSpikes";
import { Torch } from "../items/Torch";
import { PlainClothes } from "../items/WorkClothes";

export const Artisan: Background = {
  name: "Artisan",
  description:
    "You are a skilled craftsman who creates useful and beautiful items with your hands. You could be a blacksmith forging tools, a baker cooking meat pies, or a seamstress making ornate dresses.",
  expertiseSkills: [SkillType.Dexterity, SkillType.Perception],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average", "Wealthy"],
  startingItems: [
    {
      name: "Blacksmith",
      items: [PlainClothes, Hammer, IronSpikes, Torch],
    },
    {
      name: "Baker",
      items: [PlainClothes],
    },
    {
      name: "Seamstress",
      items: [FineClothes],
    },
  ],
};
