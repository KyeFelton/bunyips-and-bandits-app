import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Spy as Trait } from "../traits/Spy";

export const Spy: Background = {
  name: "Spy",
  description:
    "You've worked in the shadows gathering information and uncovering secrets. You could be a private detective solving mysteries for hire or an intelligence agent for an organisation.",
  expertiseSkills: [SkillType.Stealth, SkillType.Perception],
  traits: [Trait],
  availableMoneyTiers: ["Average", "Wealthy"],
  startingItems: [
    {
      name: "Detective",
      items: [],
    },
    {
      name: "Informant",
      items: [],
    },
  ],
};
