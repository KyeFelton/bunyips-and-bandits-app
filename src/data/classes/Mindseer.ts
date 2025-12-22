import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";
import { PsychicSense } from "../traits";

export const Mindseer: Class = {
  name: "Mindseer",
  description:
    "Mindseers are psychics who peer beyond the surface, reading thoughts and unraveling the deepest secrets of their foes. Masters of insight, they can anticipate enemy actions and exploit weaknesses to manipulate the battlefield to their favour.",
  skillBonuses: {
    [SkillType.Psychic]: 3,
  },
  startingTraits: [PsychicSense],
};
