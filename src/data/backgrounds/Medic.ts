import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Medic as Trait } from "../traits/Medic";

export const Medic: Background = {
  name: "Medic",
  description:
    "You have training in treating injuries and illnesses. Whether you're a frontier doctor, a field surgeon who patched up soldiers in combat, or a traveling healer bringing aid to remote settlements, you've seen your share of blood and know how to save lives.",
  expertiseSkills: [SkillType.Intelligence, SkillType.Psychology],
  traits: [Trait],
};
