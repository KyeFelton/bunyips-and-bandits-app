import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Farmer as Trait } from "../traits/Farmer";
import { HuntingKnife, Rope, Shears, Whip } from "../items";

export const Farmer: Background = {
  name: "Farmer",
  description:
    "You've spent your life working the land, tending crops and livestock. You could be a drover herding cattle across vast stations, a shearer working the wool sheds, or a homesteader growing your own crops.",
  startingSkillLevels: [
    {
      skill: SkillType.Nature,
      level: 5
    },
    {
      skill: SkillType.Strength,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Shearer",
      money: 10,
      items: [Shears, Rope, HuntingKnife],
    },
    {
      name: "Drover",
      money: 10,
      items: [Whip, Rope, HuntingKnife],
    },
  ],
};
