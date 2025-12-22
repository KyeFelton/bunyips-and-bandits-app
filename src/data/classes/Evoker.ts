import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Evoker: Class = {
  name: "Evoker",
  description:
    "Evokers are intermediaries between the living and the dead, calling forth spirits to aid them in battle. Whether raising spectral warriors or seeking counsel from lost souls, evokers wield the power of the afterlife.",
  skillBonuses: {
    [SkillType.Spirit]: 3,
  },
};
