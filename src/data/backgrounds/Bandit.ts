import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Bandit as Trait } from "../traits/Bandit";
import { FullBodyCloak } from "../items/FullBodyCloak";
import { BillyCan, Caltrops, FlintAndSteel, LeatherDuster, LockpickKit, Rope, SmokeBomb, SteelDagger, SteelSword, Swag, WoodenClub } from "../items";

export const Bandit: Background = {
  name: "Bandit",
  description:
    "You've lived on the fringes of society, taking what you need from those who have more. You could be a bushranger holding up coaches on dusty roads or a pickpocket working the crowded markets of port towns.",
  startingSkillLevels: [
    {
      skill: SkillType.Stealth,
      level: 5
    },
    {
      skill: SkillType.Agility,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Bushranger",
      money: 10,
      items: [LeatherDuster, SteelSword, Caltrops, Rope, Swag, BillyCan, FlintAndSteel],
    },
    {
      name: "Pickpocket",
      money: 10,
      items: [FullBodyCloak, SteelDagger, LockpickKit, SmokeBomb],
    },
  ],
};
