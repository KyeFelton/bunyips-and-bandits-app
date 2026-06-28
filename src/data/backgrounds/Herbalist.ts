import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Herbalist as Trait } from "../traits/Herbalist";
import { Antidote } from "../items/Antidote";
import { FineClothes } from "../items/FineClothes";
import { HerbalPouch } from "../items/HerbalPouch";
import { SoothingHerb } from "../items/SoothingHerb";
import { SteelDagger } from "../items/SteelDagger";
import { TravellingClothes } from "../items/TravellingClothes";

export const Herbalist: Background = {
  name: "Herbalist",
  description:
    "You have deep knowledge of plants, fungi, and natural remedies. Whether you're a bush medicine practitioner gathering native herbs or an apothecary mixing tinctures and salves, you understand which plants heal and which ones harm.",
  expertiseSkills: [SkillType.Nature, SkillType.Perception],
  traits: [Trait],
  startingItems: [
    {
      name: "Bush healer",
      items: [TravellingClothes, HerbalPouch, SoothingHerb, Antidote],
    },
    {
      name: "Apothecary",
      items: [FineClothes, HerbalPouch, SoothingHerb, SteelDagger],
    },
  ],
};
