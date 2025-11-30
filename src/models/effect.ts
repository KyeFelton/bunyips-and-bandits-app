import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";

export type StatModifier = {
  bonus?: number;
  multiplier?: number;
};

export type Effect = {
  actions?: StatModifier;
  armour?: StatModifier & {
    damageType: DamageType;
  };
  evasions?: StatModifier;
  body?: StatModifier;
  luck?: StatModifier;
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
};
