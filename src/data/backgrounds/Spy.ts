import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Spy as Trait } from "../traits/Spy";
import { ChloroformAndCloth } from "../items/ChloroformAndCloth";
import { Disguise } from "../items/Disguise";
import { Mirror } from "../items/Mirror";
import { SmokeBomb } from "../items/SmokeBomb";
import { SteelDagger } from "../items/SteelDagger";
import { TravellingClothes } from "../items/TravellingClothes";

export const Spy: Background = {
  name: "Spy",
  description:
    "You've worked in the shadows gathering information and uncovering secrets. Whether you were an intelligence agent serving a government, a private investigator solving mysteries for hire, or an informant trading in whispered knowledge, you've learned to see what others miss.",
  expertiseSkills: [SkillType.Stealth, SkillType.Perception],
  traits: [Trait],
  availableMoneyTiers: ["Average", "Wealthy"],
  startingItems: [
    {
      name: "Intelligence agent",
      items: [Disguise, SteelDagger, SmokeBomb],
    },
    {
      name: "Private investigator",
      items: [TravellingClothes, Mirror, SteelDagger],
    },
    {
      name: "Informant",
      items: [TravellingClothes, SteelDagger, ChloroformAndCloth],
    },
  ],
};
