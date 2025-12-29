import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Lightbender: Class = {
  name: "Lightbender",
  description:
    "Lightbenders are the artisans of light. Whether crafting dazzling illusions or blinding adversaries with radiant bursts, lightbenders are a versatile ally to any team.",
  skillBonuses: {
    [SkillType.Radiant]: 1, // Grants Radiant skill at level 1
  },
};
