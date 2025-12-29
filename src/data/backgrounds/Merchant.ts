import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Merchant as Trait } from "../traits/Merchant";

export const Merchant: Background = {
  name: "Merchant",
  description:
    "You've spent your life buying, selling, and negotiating deals. Whether you're a trader at a bustling port, a shopkeeper in a frontier town, or a traveling peddler hawking goods between settlements, you excel at reading people and persuading them to see things your way.",
  expertiseSkills: [SkillType.Charisma, SkillType.Perception],
  traits: [Trait],
};
