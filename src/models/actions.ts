import { AreaOfEffect } from "../enums/AreaOfEffect";
import { Range } from "../enums/Range";
import { SkillType } from "../enums/SkillType";

export type Action = {
  name: string;
  effect: string;
  skillType?: SkillType;
  range: Range;
  areaOfEffect: AreaOfEffect;
  staminaCost: number | "variable";
};
