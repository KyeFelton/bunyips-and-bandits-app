import { DamageType } from "../enums/DamageType";
import { MovementType } from "../enums/MovementType";
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
  health?: StatModifier;
  luck?: StatModifier;
  sanity?: StatModifier;
  sense?: SenseType;
  skill?: StatModifier & {
    skillType: SkillType;
  };
  speed?: StatModifier & {
    movementType: MovementType;
  };
  stamina?: StatModifier;
  weaponDamage?: StatModifier;
};
