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
  physique?: StatModifier;
  luck?: StatModifier;
  morale?: StatModifier;
  sense?: SenseType;
  skill?: StatModifier & {
    skillType: SkillType;
  };
  speed?: StatModifier & {
    locomotion: Locomotion;
  };
  stamina?: StatModifier;
  weapon?: StatModifier & {
    damageType?: DamageType;
  };
};
