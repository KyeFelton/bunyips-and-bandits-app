import { SkillType } from "../enums/SkillType";
import { Trait } from "./traits";

export type Background = {
  name: string;
  description: string;
  expertiseSkills: SkillType[];
  traits: Trait[];
};
