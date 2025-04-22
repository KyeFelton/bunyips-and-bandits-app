import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { Species } from "../../models/species";

export const Jelly: Species = {
  name: "Jelly",
  size: CreatureSize.Medium,
  physique: {
    initial: 20,
    increments: 2,
  },
  morale: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [Locomotion.Walk]: 3,
    [Locomotion.Swim]: 1,
    [Locomotion.Climb]: 0,
    [Locomotion.Fly]: 0,
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
    [DamageType.Force]: 2,
  },
  skillLevels: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 3,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 3,
    [SkillType.Stealth]: 2,
    [SkillType.Sight]: 1,
    [SkillType.Hearing]: 1,
    [SkillType.Smell]: 2,
  },
};
