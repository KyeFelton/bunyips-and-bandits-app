import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Performer as Trait } from "../traits/Performer";
import { Didgeridoo } from "../items/Didgeridoo";
import { Violin } from "../items/Violin";

export const Performer: Background = {
  name: "Performer",
  description:
    "You've made your living entertaining others with your talents. You could be a musician playing folk songs in bush pubs, an acrobat with a traveling circus, or a theatrical actor bringing stories to life on stage.",
  expertiseSkills: [SkillType.Charisma, SkillType.Dexterity],
  traits: [Trait],
  availableMoneyTiers: ["Poor", "Average"],
  startingItems: [
    {
      name: "Musician",
      items: [Violin, Didgeridoo],
    },
    {
      name: "Acrobat",
      items: [],
    },
    {
      name: "Actor",
      items: [],
    },
  ],
};
