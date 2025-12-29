import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";

export const Scholar: Background = {
  name: "Scholar",
  description:
    "You have dedicated yourself to the pursuit of knowledge, studying books, nature, and the world around you. Your education has sharpened your intellect and understanding of the natural world.",
  expertiseSkills: [SkillType.Intelligence, SkillType.Nature],
};
