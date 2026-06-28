import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Bandit as Trait } from "../traits/Bandit";
import { Caltrops } from "../items/Caltrops";
import { Disguise } from "../items/Disguise";
import { KangarooHideArmour } from "../items/KangarooHideArmour";
import { Rope } from "../items/Rope";
import { SmokeBomb } from "../items/SmokeBomb";
import { SteelDagger } from "../items/SteelDagger";
import { TravellingClothes } from "../items/TravellingClothes";
import { WoodenClub } from "../items/WoodenClub";

export const Bandit: Background = {
  name: "Bandit",
  description:
    "You've lived on the fringes of society, taking what you need from those who have more. Whether you were a bushranger holding up coaches on dusty roads or a pickpocket working the crowded markets of port towns, you've learned to move quietly and strike quickly.",
  expertiseSkills: [SkillType.Agility, SkillType.Stealth],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Bushranger",
      items: [Disguise, WoodenClub, SmokeBomb, Rope],
    },
    {
      name: "Pickpocket",
      items: [TravellingClothes, SteelDagger, Caltrops, SmokeBomb],
    },
    {
      name: "Road agent",
      items: [KangarooHideArmour, WoodenClub, Rope],
    },
  ],
};
