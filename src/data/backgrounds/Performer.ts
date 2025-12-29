import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Performer as Trait } from "../traits/Performer";

export const Performer: Background = {
  name: "Performer",
  description:
    "You've made your living entertaining others with your talents. Whether you're a musician playing folk songs in bush pubs, an acrobat with a traveling circus, or a theatrical actor bringing stories to life on stage, you know how to captivate an audience.",
  expertiseSkills: [SkillType.Charisma, SkillType.Dexterity],
  traits: [Trait],
};
