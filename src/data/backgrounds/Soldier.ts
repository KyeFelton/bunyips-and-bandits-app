import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";

export const Soldier: Background = {
  name: "Soldier",
  description:
    "Military training has honed your physical prowess and sharpened your awareness. You are skilled at spotting threats and using your strength in combat.",
  expertiseSkills: [SkillType.Strength, SkillType.Perception],
};
