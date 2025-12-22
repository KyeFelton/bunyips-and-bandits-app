import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Electrician: Class = {
  name: "Electrician",
  description:
    "Masters of electricity, electricians can manipulate electrical and magnetic forces to devastating effect. Their powers range from subtle magnetic control to unleashing deadly bolts of lightning.",
  skillBonuses: {
    [SkillType.Electric]: 3,
  },
};
