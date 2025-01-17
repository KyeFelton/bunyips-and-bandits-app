import { DamageType } from "src/enums/DamageType";
import { MovementType } from "src/enums/MovementType";
import { SkillType } from "src/enums/SkillType";

export type StatModifier = {
  static?: number;
  dynamic?: {
    skillType: SkillType;
    multiplier: number;
  };
};

export type Effect = {
  actions?: StatModifier;
  armour?: StatModifier & {
    damageType: DamageType;
  };
  evasions?: StatModifier;
  health?: StatModifier;
  sanity?: StatModifier;
  skill?: StatModifier & {
    skillType: SkillType;
  };
  speed?: StatModifier & {
    movementType: MovementType;
  };
  stamina?: StatModifier;
  weaponDamage?: StatModifier;
};
