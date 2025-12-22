import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Sonomancer: Class = {
  name: "Sonomancer",
  description:
    "Sonomancers are attuned to the rhythms and sounds of their environment. They can weave soundwaves to conjure enchantments and blast their enemies with devastating force.",
  skillBonuses: {
    [SkillType.Sonic]: 3,
  },
};
