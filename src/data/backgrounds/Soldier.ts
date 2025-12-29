import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Soldier as Trait } from "../traits/Soldier";

export const Soldier: Background = {
  name: "Soldier",
  description:
    "Military training has honed your physical prowess and fighting spirit. Whether you served in an organized army, fought as a militia member defending your settlement, or worked as a hired guard, you understand discipline, tactics, and how to command respect through strength.",
  expertiseSkills: [SkillType.Strength, SkillType.Agility],
  traits: [Trait],
};
