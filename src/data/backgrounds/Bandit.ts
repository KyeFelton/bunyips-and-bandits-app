import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Bandit as Trait } from "../traits/Bandit";
import { Cloak } from "../items/Disguise";
import { Rope } from "../items/Rope";
import { SmokeBomb } from "../items/SmokeBomb";
import { TravellingClothes } from "../items/TravellingClothes";
import { WoodenClub } from "../items/WoodenClub";

export const Bandit: Background = {
  name: "Bandit",
  description:
    "You've lived on the fringes of society, taking what you need from those who have more. You could be a bushranger holding up coaches on dusty roads or a pickpocket working the crowded markets of port towns.",
  expertiseSkills: [SkillType.Agility, SkillType.Stealth],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Bushranger",
      items: [Cloak, WoodenClub, SmokeBomb, Rope],
    },
    {
      name: "Pickpocket",
      items: [TravellingClothes],
    },
  ],
};
