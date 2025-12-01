import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Floret: Species = {
  name: "Floret",
  size: CreatureSize.Small,
  body: 5,
  mind: 7,
  stamina: 6,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Moderate,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Smell],
    secondary: [SenseType.Sight, SenseType.Hearing, SenseType.TremorHearing],
  },
  armour: {
    [DamageType.Fire]: -1,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 3,
    [DamageType.Slash]: 1,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 1,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 3,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 4,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 3,
    [SkillType.Perception]: 3,
  },
};
