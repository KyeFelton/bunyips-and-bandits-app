import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { Species } from "../../models/species";

export const Pixie: Species = {
  name: "Pixie",
  size: CreatureSize.Tiny,
  physique: {
    initial: 5,
    increments: 0.5,
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
    [Locomotion.Walk]: 1,
    [Locomotion.Swim]: 1,
    [Locomotion.Climb]: 1,
    [Locomotion.Fly]: 4,
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
    [DamageType.Slash]: 2,
    [DamageType.Force]: 2,
  },
  skillLevels: {
    [SkillType.Strength]: 0,
    [SkillType.Agility]: 4,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 4,
    [SkillType.Sight]: 2,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 2,
  },
};
