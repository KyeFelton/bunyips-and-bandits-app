import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Leader as Trait } from "../traits/Leader";

export const Leader: Background = {
  name: "Leader",
  description:
    "You have a natural ability to inspire and command others. Whether you were a ship's captain, a community elder, or a foreman organizing work crews, people look to you for guidance and direction in difficult situations.",
  expertiseSkills: [SkillType.Charisma, SkillType.Willpower],
  traits: [Trait],
};
