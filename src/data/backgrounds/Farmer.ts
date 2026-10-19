import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Farmer as Trait } from "../traits/Farmer";
import { PlainClothes } from "../items/WorkClothes";

export const Farmer: Background = {
  name: "Farmer",
  description:
    "You've spent your life working the land, tending crops and livestock. You could be a drover herding cattle across vast stations, a shearer working the wool sheds, or a homesteader growing your own crops.",
  expertiseSkills: [SkillType.Strength, SkillType.Nature],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Shearer",
      items: [PlainClothes],
    },
    {
      name: "Drover",
      items: [PlainClothes],
    },
    {
      name: "Homesteader",
      items: [PlainClothes],
    },
  ],
};
