import { SkillType } from "../enums/SkillType";

export type Background = {
  name: string;
  description: string;
  expertiseSkills: SkillType[]; // Skills that start at level 5
};
