import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Shapeshifter: Class = {
  name: "Shapeshifter",
  description:
    "Shapeshifters are masters of transformation, able to alter their physical form to adapt to any situation. Through control of their own biology, they can mimic other creatures, regenerate wounds, and produce deadly poisons.",
  skillBonuses: {
    [SkillType.Biotic]: 3,
  },
};
