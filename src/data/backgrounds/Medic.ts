import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Medic as Trait } from "../traits/Medic";
import { Antidote } from "../items/Antidote";
import { FineClothes } from "../items/FineClothes";
import { FirstAidKit } from "../items/FirstAidKit";
import { Rope } from "../items/Rope";
import { SoothingHerb } from "../items/SoothingHerb";
import { TravellingClothes } from "../items/TravellingClothes";
import { WorkClothes } from "../items/WorkClothes";

export const Medic: Background = {
  name: "Medic",
  description:
    "You have training in treating injuries and illnesses. Whether you're a frontier doctor, a field surgeon who patched up soldiers in combat, or a traveling healer bringing aid to remote settlements, you've seen your share of blood and know how to save lives.",
  expertiseSkills: [SkillType.Lore, SkillType.Psychology],
  traits: [Trait],
  startingItems: [
    {
      name: "Field surgeon",
      items: [WorkClothes, FirstAidKit, SoothingHerb, Antidote],
    },
    {
      name: "Frontier doctor",
      items: [FineClothes, FirstAidKit, Antidote],
    },
    {
      name: "Travelling healer",
      items: [TravellingClothes, SoothingHerb, Antidote, Rope],
    },
  ],
};
