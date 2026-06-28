import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Artisan as Trait } from "../traits/Artisan";
import { Crowbar } from "../items/Crowbar";
import { FineClothes } from "../items/FineClothes";
import { FlintAndSteel } from "../items/FlintAndSteel";
import { Hammer } from "../items/Hammer";
import { IronSpikes } from "../items/IronSpikes";
import { Mirror } from "../items/Mirror";
import { Rope } from "../items/Rope";
import { SteelDagger } from "../items/SteelDagger";
import { Torch } from "../items/Torch";
import { WorkClothes } from "../items/WorkClothes";

export const Artisan: Background = {
  name: "Artisan",
  description:
    "You are a skilled craftsperson who creates useful and beautiful items with your hands. Whether you're a blacksmith forging tools, a potter shaping clay, or a weaver working wool from the shearing sheds, your trade demands precision and patience.",
  expertiseSkills: [SkillType.Dexterity, SkillType.Perception],
  traits: [Trait],
  startingItems: [
    {
      name: "Blacksmith",
      items: [WorkClothes, Hammer, IronSpikes, Torch],
    },
    {
      name: "Woodworker",
      items: [WorkClothes, Crowbar, Rope, FlintAndSteel],
    },
    {
      name: "Jeweller",
      items: [FineClothes, Mirror, SteelDagger],
    },
  ],
};
