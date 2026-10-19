import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Soldier as Trait } from "../traits/Soldier";

export const Soldier: Background = {
  name: "Soldier",
  description:
    "Military training has honed your physical prowess and fighting spirit. You could be a member of an organized army, a rebel warrior or worked as a hired guard.",
  expertiseSkills: [SkillType.Strength, SkillType.Agility],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Infantry",
      items: [],
    },
    {
      name: "Rebel",
      items: [],
    },
    {
      name: "Hired guard",
      items: [],
    },
  ],
};
