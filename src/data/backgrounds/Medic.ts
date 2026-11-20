import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Medic as Trait } from "../traits/Medic";
import { Adrenaline, Antidote, ApothecaryKit, FirstAidKit, GasMask, HuntingKnife, LeatherApron, LovePotion, Psychedelic, SleepingAid, SoothingHerb } from "../items";

export const Medic: Background = {
  name: "Medic",
  description:
    "You have training in treating injuries and illnesses. You could be a surgeon who has patched up soldiers in combat, a bush healer bringing spiritual aid to remote communities, or a herablist crafting ointments and potions.",
  startingSkillLevels: [
    {
      skill: SkillType.Lore,
      level: 5
    },
    {
      skill: SkillType.Nature,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Surgeon",
      money: 100,
      items: [FirstAidKit, HuntingKnife, Adrenaline, SleepingAid, LeatherApron],
    },
    {
      name: "Herbalist",
      money: 100,
      items: [ApothecaryKit, GasMask, SoothingHerb, Psychedelic, Antidote, LovePotion],
    }
  ],
};
