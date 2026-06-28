import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Drifter as Trait } from "../traits/Drifter";
import { Crowbar } from "../items/Crowbar";
import { FlintAndSteel } from "../items/FlintAndSteel";
import { OilFlask } from "../items/OilFlask";
import { Rations } from "../items/Rations";
import { Rope } from "../items/Rope";
import { SteelDagger } from "../items/SteelDagger";
import { Torch } from "../items/Torch";
import { TravellingClothes } from "../items/TravellingClothes";
import { WoodenClub } from "../items/WoodenClub";
import { WorkClothes } from "../items/WorkClothes";

export const Drifter: Background = {
  name: "Drifter",
  description:
    "You wander from place to place with no fixed home, relying on your wits and instincts to survive. Whether you're a swagman traveling the outback tracks or a vagabond drifting between frontier towns, you've learned to read people and situations, and somehow, fortune often favors you.",
  expertiseSkills: [SkillType.Agility, SkillType.Psychology],
  traits: [Trait],
  startingItems: [
      {
        name: "Swagman",
        items: [TravellingClothes, WoodenClub, Rations, Rope],
      },
      {
        name: "Rover",
        items: [TravellingClothes, SteelDagger, Torch, FlintAndSteel],
      },
      {
        name: "Itinerant",
        items: [WorkClothes, Crowbar, Rations, OilFlask],
      },
    ],
};
