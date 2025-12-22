import { SkillType } from "../enums/SkillType";
import { Action } from "./actions";
import { Trait } from "./traits";

export type Class = {
  name: string;
  description: string;
  skillBonuses: Partial<Record<SkillType, number>>;
  startingTraits?: Trait[];
  startingActions?: Action[];
};
