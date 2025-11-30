import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Goblin: Species = {
  name: "Goblin",
  size: CreatureSize.Small,
  body: 4,
  mind: 6,
  stamina: 8,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Moderate,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: true,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 1,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 1,
    [SkillType.Agility]: 3,
    [SkillType.Dexterity]: 4,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 1,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 4,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 2,
  },
};
