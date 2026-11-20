import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Performer as Trait } from "../traits/Performer";
import { Chalk, Didgeridoo, GrapplingHook, MakeupKit, SewingKit, StageCostume, Violin } from "../items";

export const Performer: Background = {
  name: "Performer",
  description:
    "You've made your living entertaining others with your talents. You could be a musician playing tunes in bush pubs, an acrobat with a traveling circus, or a theatrical actor working on stage.",
  startingSkillLevels: [
    {
      skill: SkillType.Charisma,
      level: 5
    },
    {
      skill: SkillType.Dexterity,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Musician",
      money: 10,
      items: [Violin, Didgeridoo],
    },
    {
      name: "Clown",
      money: 10,
      items: [StageCostume, MakeupKit],
    },
    {
      name: "Actor",
      money: 10,
      items: [StageCostume, MakeupKit, SewingKit],
    },
  ],
};
