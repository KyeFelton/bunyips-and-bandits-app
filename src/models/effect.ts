import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";

export type StatModifier = {
  bonus?: number;
  multiplier?: number;
};

export type OngoingEffect = {
  actions?: StatModifier;
  armour?: StatModifier & {
    damageType: DamageType;
  };
  body?: StatModifier;
  mind?: StatModifier;
  sense?: {
    gain?: SenseType;
    lose?: SenseType;
  };
  skill?: StatModifier & {
    skillType: SkillType;
  };
  speed?: {
    locomotion: Locomotion;
    increase: boolean;
  };
  stamina?: StatModifier;
  weapon?: StatModifier & {
    damageType?: DamageType;
  };
  custom?: string;
};

export type ImmediateEffect = {
  body?: number;
  condition?: string;
  mind?: number;
  stamina?: number;
  custom?: string;
};

export type InflictedEffect = {
  damage?: {
    damageType: DamageType;
    amount: number;
  };
  condition?: string;
  custom?: string;
};
