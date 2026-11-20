import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Artisan as Trait } from "../traits/Artisan";
import { BillyCan, BreadKnife, Hammer, IronSpikes, LeatherApron, MagnifyingGlass, Notebook, SewingKit, SpiceKit, Tongs } from "../items";

export const Artisan: Background = {
  name: "Artisan",
  description:
    "You are a skilled craftsman who creates useful and beautiful items with your hands. You could be a blacksmith forging tools, a baker cooking meat pies, or a seamstress making ornate dresses.",
  startingSkillLevels: [
    {
      skill: SkillType.Dexterity,
      level: 5
    },
    {
      skill: SkillType.Perception,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Blacksmith",
      money: 10,
      items: [Hammer, IronSpikes, Tongs, LeatherApron],
    },
    {
      name: "Baker",
      money: 10,
      items: [BillyCan, SpiceKit, BreadKnife, LeatherApron],
    },
    {
      name: "Seamstress",
      money: 10,
      items: [SewingKit, Notebook, MagnifyingGlass],
    },
  ],
};
