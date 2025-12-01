import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Reptilian: Species = {
  name: "Reptilian",
  size: CreatureSize.Medium,
  body: 7,
  mind: 5,
  stamina: 6,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Fast,
    [Locomotion.Climb]: SpeedRating.Moderate,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.InfraredSight, SenseType.Smell],
    secondary: [SenseType.Hearing],
  },
  armour: {
    [DamageType.Fire]: 1,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 2,
    [DamageType.Slash]: 3,
    [DamageType.Force]: 2,
  },
  skillLevels: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 1,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 1,
    [SkillType.Psychology]: 1,
    [SkillType.Stealth]: 3,
    [SkillType.Perception]: 3,
  },
};
