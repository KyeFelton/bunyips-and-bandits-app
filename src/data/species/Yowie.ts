import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { Species } from "../../models/species";

export const Yowie: Species = {
  name: "Yowie",
  size: CreatureSize.Large,
  physique: 8,
  morale: 6,
  stamina: 4,
  speed: {
    [Locomotion.Walk]: 4,
    [Locomotion.Swim]: 1,
    [Locomotion.Climb]: 1,
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
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 1,
    [SkillType.Sight]: 1,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 2,
  },
};
