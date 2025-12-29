import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Spy as Trait } from "../traits/Spy";

export const Spy: Background = {
  name: "Spy",
  description:
    "You've worked in the shadows gathering information and uncovering secrets. Whether you were an intelligence agent serving a government, a private investigator solving mysteries for hire, or an informant trading in whispered knowledge, you've learned to see what others miss.",
  expertiseSkills: [SkillType.Stealth, SkillType.Perception],
  traits: [Trait],
};
