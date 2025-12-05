import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Delver: Species = {
  name: "Delver",
  size: CreatureSize.Tiny,
  body: 4,
  mind: 6,
  stamina: 8,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.Hearing, SenseType.TremorHearing],
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
    [SkillType.Strength]: 1,
    [SkillType.Agility]: 5,
    [SkillType.Dexterity]: 4,
    [SkillType.Intelligence]: 4,
    [SkillType.Nature]: 4,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 5,
    [SkillType.Perception]: 3,
  },
};
