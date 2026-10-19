import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Medic as Trait } from "../traits/Medic";

export const Medic: Background = {
  name: "Medic",
  description:
    "You have training in treating injuries and illnesses. You could be a surgeon who has patched up soldiers in combat, a bush healer bringing spiritual aid to remote communities, or a herablist crafting ointments and potions.",
  expertiseSkills: [SkillType.Lore, SkillType.Nature],
  traits: [Trait],
  availableMoneyTiers: ["Average", "Wealthy"],
  startingItems: [
    {
      name: "Surgeon",
      items: [],
    },
    {
      name: "Bush healer",
      items: [],
    },
    {
      name: "Herbalist",
      items: [],
    },
  ],
};
