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
  body: 3,
  mind: 5,
  stamina: 10,
  speed: {
    [Locomotion.Walk]: SpeedRating.Slow,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.Fast,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.Psychic],
    secondary: [SenseType.Hearing, SenseType.Smell],
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
    [SkillType.Intelligence]: 3,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 4,
    [SkillType.Perception]: 3,
  },
};
