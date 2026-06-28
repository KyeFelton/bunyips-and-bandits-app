import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Performer as Trait } from "../traits/Performer";
import { Didgeridoo } from "../items/Didgeridoo";
import { DrumKit } from "../items/DrumKit";
import { FineClothes } from "../items/FineClothes";
import { SmokeBomb } from "../items/SmokeBomb";
import { SteelDagger } from "../items/SteelDagger";
import { TravellingClothes } from "../items/TravellingClothes";
import { Violin } from "../items/Violin";

export const Performer: Background = {
  name: "Performer",
  description:
    "You've made your living entertaining others with your talents. Whether you're a musician playing folk songs in bush pubs, an acrobat with a traveling circus, or a theatrical actor bringing stories to life on stage, you know how to captivate an audience.",
  expertiseSkills: [SkillType.Charisma, SkillType.Dexterity],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Drummer",
      items: [FineClothes, DrumKit, SteelDagger],
    },
    {
      name: "Fiddler",
      items: [FineClothes, Violin, SteelDagger],
    },
    {
      name: "Didgeridoo player",
      items: [TravellingClothes, Didgeridoo, SmokeBomb],
    },
  ],
};
