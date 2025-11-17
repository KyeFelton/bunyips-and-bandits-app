import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { Species } from "../../models/species";

export const Reptilian: Species = {
  name: "Reptilian",
  size: CreatureSize.Medium,
  physique: 7,
  morale: 5,
  stamina: 6,
  speed: {
    [Locomotion.Walk]: 4,
    [Locomotion.Swim]: 5,
    [Locomotion.Climb]: 3,
    [Locomotion.Fly]: 0,
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
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 1,
    [SkillType.Psychology]: 1,
    [SkillType.Stealth]: 3,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 2,
    [SkillType.Smell]: 3,
  },
};
