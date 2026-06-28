import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Soldier as Trait } from "../traits/Soldier";
import { KangarooHideArmour } from "../items/KangarooHideArmour";
import { Rations } from "../items/Rations";
import { Rope } from "../items/Rope";
import { SteelMace } from "../items/SteelMace";
import { SteelMailArmour } from "../items/SteelMailArmour";
import { SteelSpear } from "../items/SteelSpear";
import { SteelSword } from "../items/SteelSword";

export const Soldier: Background = {
  name: "Soldier",
  description:
    "Military training has honed your physical prowess and fighting spirit. Whether you served in an organized army, fought as a militia member defending your settlement, or worked as a hired guard, you understand discipline, tactics, and how to command respect through strength.",
  expertiseSkills: [SkillType.Strength, SkillType.Agility],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Infantry",
      items: [SteelMailArmour, SteelSword, Rations],
    },
    {
      name: "Militia",
      items: [KangarooHideArmour, SteelSpear, Rations],
    },
    {
      name: "Guard",
      items: [KangarooHideArmour, SteelMace, Rope],
    },
  ],
};
