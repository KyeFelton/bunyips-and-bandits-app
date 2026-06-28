import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Farmer as Trait } from "../traits/Farmer";
import { FlintAndSteel } from "../items/FlintAndSteel";
import { Pitchfork } from "../items/Pitchfork";
import { Rations } from "../items/Rations";
import { Rope } from "../items/Rope";
import { Scythe } from "../items/Scythe";
import { WoodenClub } from "../items/WoodenClub";
import { WorkClothes } from "../items/WorkClothes";

export const Farmer: Background = {
  name: "Farmer",
  description:
    "You've spent your life working the land, tending crops and livestock. Whether you were a drover herding cattle across vast stations, a shearer working the wool sheds, or a homesteader growing wheat in the bush, you know the rhythms of nature and the value of hard work.",
  expertiseSkills: [SkillType.Strength, SkillType.Nature],
  traits: [Trait],
  startingItems: [
      {
        name: "Shearer",
        items: [WorkClothes, Scythe, Rope, Rations],
      },
      {
        name: "Drover",
        items: [WorkClothes, WoodenClub, Rope, Rations],
      },
      {
        name: "Homesteader",
        items: [WorkClothes, Pitchfork, FlintAndSteel, Rations],
      },
    ],
};
