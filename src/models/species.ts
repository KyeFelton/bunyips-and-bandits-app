import { CreatureSize } from "../enums/CreatureSize";
import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { SpeedRating } from "../enums/SpeedRating";

export type Species = {
  name: string;
  size: CreatureSize;
  physique: number;
  morale: number;
  stamina: number;
  speed: {
    [Locomotion.Walk]: SpeedRating;
    [Locomotion.Swim]: SpeedRating;
    [Locomotion.Climb]: SpeedRating;
    [Locomotion.Fly]: SpeedRating;
  };
  senses: {
    [SenseType.Sight]: boolean;
    [SenseType.InfraredSight]: boolean;
    [SenseType.Hearing]: boolean;
    [SenseType.TremorHearing]: boolean;
    [SenseType.Smell]: boolean;
    [SenseType.Psychic]: boolean;
  };
  armour: {
    [DamageType.Fire]: number;
    [DamageType.Electric]: number;
    [DamageType.Toxic]: number;
    [DamageType.Slash]: number;
    [DamageType.Force]: number;
  };
  skillLevels: {
    [SkillType.Strength]: number;
    [SkillType.Agility]: number;
    [SkillType.Dexterity]: number;
    [SkillType.Intelligence]: number;
    [SkillType.Nature]: number;
    [SkillType.Willpower]: number;
    [SkillType.Charisma]: number;
    [SkillType.Psychology]: number;
    [SkillType.Stealth]: number;
    [SkillType.Sight]: number;
    [SkillType.Hearing]: number;
    [SkillType.Smell]: number;
  };
};
