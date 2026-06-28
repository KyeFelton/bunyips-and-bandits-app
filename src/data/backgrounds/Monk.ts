import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Monk as Trait } from "../traits/Monk";
import { FineClothes } from "../items/FineClothes";
import { FlintAndSteel } from "../items/FlintAndSteel";
import { PrayerBeads } from "../items/PrayerBeads";
import { Rations } from "../items/Rations";
import { Torch } from "../items/Torch";
import { TravellingClothes } from "../items/TravellingClothes";
import { WalkingStaff } from "../items/WalkingStaff";

export const Monk: Background = {
  name: "Monk",
  description:
    "You have devoted yourself to study, contemplation, and spiritual discipline. Whether you served in a temple, monastery, or as a wandering ascetic, you've spent years learning the histories, philosophies, and sacred texts of your faith.",
  expertiseSkills: [SkillType.Lore, SkillType.Willpower],
  traits: [Trait],
  startingItems: [
    {
      name: "Contemplative",
      items: [FineClothes, PrayerBeads, WalkingStaff],
    },
    {
      name: "Wandering ascetic",
      items: [TravellingClothes, PrayerBeads, WalkingStaff, Rations],
    },
    {
      name: "Scholar",
      items: [FineClothes, PrayerBeads, Torch, FlintAndSteel],
    },
  ],
};
