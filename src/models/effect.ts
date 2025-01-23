import { DamageType } from "src/enums/DamageType";
import { MovementType } from "src/enums/MovementType";
import { SenseType } from "src/enums/SenseType";
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
  luck?: StatModifier;
  sanity?: StatModifier;
  senses?: SenseType[];
  skill?: StatModifier & {
    skillType: SkillType;
  };
  speed?: StatModifier & {
    movementType: MovementType;
  };
  stamina?: StatModifier;
  weaponDamage?: StatModifier;
};
