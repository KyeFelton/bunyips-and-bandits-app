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
  body: 10,
  mind: 5,
  stamina: 4,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.None,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Hearing, SenseType.Smell],
    secondary: [SenseType.Sight],
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 6,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 2,
    [SkillType.Intelligence]: 3,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 3,
    [SkillType.Stealth]: 1,
    [SkillType.Perception]: 2,
  },
};
