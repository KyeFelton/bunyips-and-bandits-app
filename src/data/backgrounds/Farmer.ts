import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Farmer as Trait } from "../traits/Farmer";

export const Farmer: Background = {
  name: "Farmer",
  description:
    "You've spent your life working the land, tending crops and livestock. Whether you were a drover herding cattle across vast stations, a shearer working the wool sheds, or a homesteader growing wheat in the bush, you know the rhythms of nature and the value of hard work.",
  expertiseSkills: [SkillType.Strength, SkillType.Nature],
  traits: [Trait],
};
