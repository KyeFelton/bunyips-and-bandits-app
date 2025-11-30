import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Giant: Species = {
  name: "Giant",
  size: CreatureSize.Large,
  body: 8,
  mind: 6,
  stamina: 4,
  speed: {
    [Locomotion.Walk]: SpeedRating.Fast,
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
    [DamageType.Toxic]: 1,
    [DamageType.Slash]: 1,
    [DamageType.Force]: 2,
  },
  skillLevels: {
    [SkillType.Strength]: 4,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 1,
    [SkillType.Intelligence]: 1,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 1,
    [SkillType.Stealth]: 1,
    [SkillType.Sight]: 2,
    [SkillType.Hearing]: 2,
    [SkillType.Smell]: 2,
  },
};
