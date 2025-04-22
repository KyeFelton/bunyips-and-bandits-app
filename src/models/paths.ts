import { SkillType } from "../enums/SkillType";
import { Action } from "./actions";
import { Trait } from "./traits";

export type Path = {
  name: string;
  description: string;
  skillTypes: SkillType[];
  unlockables: {
    level: number;
    actions: Action[];
    traits: Trait[];
  }[];
};

export type SelectedPath = Path & {
  level: number;
};
