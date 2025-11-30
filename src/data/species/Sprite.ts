import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Sprite: Species = {
  name: "Sprite",
  size: CreatureSize.Tiny,
  physique: 3,
  morale: 5,
  stamina: 10,
  speed: {
    [Locomotion.Walk]: SpeedRating.Slow,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.Fast,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: true,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 1,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 0,
    [SkillType.Agility]: 4,
    [SkillType.Dexterity]: 3,
    [SkillType.Throw]: 1,
    [SkillType.Intelligence]: 3,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 4,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 2,
    [SkillType.Smell]: 1,
  },
};
