import { SkillType } from "../enums/SkillType";
import { Action } from "./actions";
import { Trait } from "./traits";

export type SkillProgression = {
  skill: SkillType;
  unlockables: {
    level: number;
    actions: Action[];
    traits: Trait[];
  }[];
};
