import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Soldier as Trait } from "../traits/Soldier";
import { MilitaryCap, SteelMailArmour, SteelSword } from "../items";

export const Soldier: Background = {
  name: "Soldier",
  description:
    "Military training has honed your physical prowess and fighting spirit. You could be a member of an organized army, a rebel warrior or worked as a hired guard.",
  startingSkillLevels: [
    {
      skill: SkillType.Agility,
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
      name: "Infantry",
      money: 10,
      items: [SteelSword, SteelMailArmour, MilitaryCap],
    },
  ],
};
