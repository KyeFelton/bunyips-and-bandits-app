import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Avian: Species = {
  name: "Avian",
  size: CreatureSize.Medium,
  body: 5,
  mind: 6,
  stamina: 7,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Slow,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.Hearing],
    secondary: [SenseType.Smell],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Willpower]: -1,
    [SkillType.Charisma]: 1,
    [SkillType.Perception]: 1,
  },
};
