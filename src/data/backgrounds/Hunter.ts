import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Hunter as Trait } from "../traits/Hunter";
import { Boomerang } from "../items/Boomerang";
import { Caltrops } from "../items/Caltrops";
import { Disguise } from "../items/Disguise";
import { HuntingKnife } from "../items/HuntingKnife";
import { IronSpikes } from "../items/IronSpikes";
import { Rope } from "../items/Rope";
import { Torch } from "../items/Torch";
import { TravellingClothes } from "../items/TravellingClothes";

export const Hunter: Background = {
  name: "Hunter",
  description:
    "You've made your living tracking and hunting game in the wilderness. Whether you're a tracker following game through the outback, a ranger patrolling the bush, or a professional hunter supplying meat to settlements, you know how to read the land and survive in the wild.",
  expertiseSkills: [SkillType.Stealth, SkillType.Nature],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
      {
        name: "Tracker",
        items: [TravellingClothes, HuntingKnife, Rope, Torch],
      },
      {
        name: "Ranger",
        items: [Disguise, HuntingKnife, Boomerang, Rope],
      },
      {
        name: "Trapper",
        items: [TravellingClothes, HuntingKnife, IronSpikes, Caltrops],
      },
    ],
};
