import { CreatureSize } from "../enums/CreatureSize";
import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { SpeedRating } from "../enums/SpeedRating";

export type Species = {
  name: string;
  size: CreatureSize;
  body: number;
  mind: number;
  stamina: number;
  speed: {
    [Locomotion.Walk]: SpeedRating;
    [Locomotion.Swim]: SpeedRating;
    [Locomotion.Climb]: SpeedRating;
    [Locomotion.Fly]: SpeedRating;
  };
  senses: {
    primary: SenseType[];
    secondary: SenseType[];
  };
  armour: {
    [DamageType.Fire]: number;
    [DamageType.Electric]: number;
    [DamageType.Toxic]: number;
    [DamageType.Slash]: number;
    [DamageType.Force]: number;
  };
  skillLevels: {
    [SkillType.Agility]: number;
    [SkillType.Charisma]: number;
    [SkillType.Dexterity]: number;
    [SkillType.Intelligence]: number;
    [SkillType.Nature]: number;
    [SkillType.Perception]: number;
    [SkillType.Psychology]: number;
    [SkillType.Stealth]: number;
    [SkillType.Strength]: number;
    [SkillType.Willpower]: number;
  };
};
