import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";

export const Labourer: Background = {
  name: "Labourer",
  description:
    "Years of hard physical work have built your strength and mental fortitude. You can push through pain and exhaustion that would break others.",
  expertiseSkills: [SkillType.Strength, SkillType.Willpower],
};
