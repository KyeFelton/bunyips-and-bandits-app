import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Doctor: Class = {
  name: "Doctor",
  description:
    "Through years of study, doctors have mastered the delicate balance between healing and harm. Their knowledge of poisons allows them to weaken powerful enemies, whilst their expertise in healing makes them indispensable during the toughest times.",
  skillBonuses: {
    [SkillType.Biotic]: 3,
  },
};
