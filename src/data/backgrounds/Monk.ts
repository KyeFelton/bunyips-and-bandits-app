import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Monk as Trait } from "../traits/Monk";

export const Monk: Background = {
  name: "Monk",
  description:
    "You have devoted yourself to study, contemplation, and spiritual discipline. Whether you served in a temple, monastery, or as a wandering ascetic, you've spent years learning the histories, philosophies, and sacred texts of your faith.",
  expertiseSkills: [SkillType.Intelligence, SkillType.Willpower],
  traits: [Trait],
};
