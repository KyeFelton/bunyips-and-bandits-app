import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";
import { PsychicSense } from "../traits";

export const Mindseer: Class = {
  name: "Mindseer",
  description:
    "Mindseers are the puppeteers of the mind, reading thoughts and bending reality through suggestion and illusion. Masters of insight, they can anticipate enemy actions, exploit weaknesses and distort perception to manipulate a scenario to their favour,",
  skillBonuses: {
    [SkillType.Psychic]: 1, // Grants Psychic skill at level 1
  },
  startingTraits: [PsychicSense],
};
