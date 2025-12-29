import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Reptilian: Species = {
  name: "Reptilian",
  size: CreatureSize.Large,
  body: 6,
  mind: 7,
  stamina: 5,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.InfraredSight, SenseType.Smell],
    secondary: [SenseType.Hearing],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Agility]: -2,
    [SkillType.Dexterity]: -1,
    [SkillType.Willpower]: 1,
    [SkillType.Psychology]: 1,
    [SkillType.Perception]: 1,
  },
};
