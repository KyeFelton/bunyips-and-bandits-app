import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Bandit as Trait } from "../traits/Bandit";

export const Bandit: Background = {
  name: "Bandit",
  description:
    "You've lived on the fringes of society, taking what you need from those who have more. Whether you were a bushranger holding up coaches on dusty roads or a pickpocket working the crowded markets of port towns, you've learned to move quietly and strike quickly.",
  expertiseSkills: [SkillType.Agility, SkillType.Stealth],
  traits: [Trait],
};
