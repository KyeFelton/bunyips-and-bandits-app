import { CreatureSize } from "../enums/CreatureSize";
import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { SpeedRating } from "../enums/SpeedRating";

export type Difficulty = "Easy" | "Moderate" | "Hard" | "Extreme";

export type SenseRating = "Keen" | "Poor";

export type NpcAction = {
  name: string;
  description: string;
  skill?: SkillType;
};

export type NpcTrait = {
  name: string;
  description: string;
};

export type NpcStatBlock = {
  name: string;
  size: CreatureSize;
  tags?: string[];
  difficulty: Difficulty;
  health?: number;
  speed?: Partial<Record<Locomotion, SpeedRating>>;
  senses?: Partial<Record<SenseType, SenseRating>>;
  armour?: Partial<Record<DamageType, number>>;
  skills?: Partial<Record<SkillType, Difficulty>>;
  actions?: NpcAction[];
  traits?: NpcTrait[];
};
