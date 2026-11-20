import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Monk as Trait } from "../traits/Monk";
import { ApothecaryKit, MagnifyingGlass, Notebook, PrayerBeads, Robes } from "../items";

export const Monk: Background = {
  name: "Monk",
  description:
    "You have devoted yourself to study, contemplation, and spiritual discipline. You may be a preacher of your faith, or scholar dedicated to your field of study.",
  startingSkillLevels: [
    {
      skill: SkillType.Lore,
      level: 5
    },
    {
      skill: SkillType.Willpower,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Preacher",
      money: 0,
      items: [Notebook, PrayerBeads, Robes],
    },
    {
      name: "Scholar",
      money: 100,
      items: [Notebook, MagnifyingGlass, ApothecaryKit],
    },
  ],
};
