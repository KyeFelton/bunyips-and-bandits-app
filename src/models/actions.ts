import { AreaOfEffect } from "../enums/AreaOfEffect";
import { Range } from "../enums/Range";
import { SkillType } from "../enums/SkillType";
import { ImmediateEffect } from "./effect";

export type Action = {
  name: string;
  description: string;
  skillType?: SkillType;
  roll?: boolean;
  range: Range;
  areaOfEffect: AreaOfEffect;
  effectsToSelf?: ImmediateEffect[];
  staminaCost: number | "variable";
  duration?: string;
};
