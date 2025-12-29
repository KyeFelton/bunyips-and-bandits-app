import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Mystic: Class = {
  name: "Mystic",
  description:
    "Mystics are intermediaries between the living and the dead, calling forth spirits to aid them. Whether raising spectral warriors or seeking counsel from lost souls, mystics wield the power of the afterlife.",
  skillBonuses: {
    [SkillType.Spirit]: 1, // Grants Spirit skill at level 1
  },
};
