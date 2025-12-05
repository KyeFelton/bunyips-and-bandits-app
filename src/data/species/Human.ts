import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Human: Species = {
  name: "Human",
  size: CreatureSize.Medium,
  body: 6,
  mind: 6,
  stamina: 6,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.Hearing],
    secondary: [SenseType.Smell],
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: 3,
    [SkillType.Dexterity]: 3,
    [SkillType.Intelligence]: 3,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 3,
    [SkillType.Stealth]: 3,
    [SkillType.Perception]: 3,
  },
};
