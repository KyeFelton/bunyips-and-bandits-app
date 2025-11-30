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
  mind: 4,
  stamina: 8,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Moderate,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 2,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 2,
    [SkillType.Smell]: 1,
  },
};
