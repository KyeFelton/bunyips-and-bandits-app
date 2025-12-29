import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Goblin: Species = {
  name: "Goblin",
  size: CreatureSize.Small,
  body: 6,
  mind: 5,
  stamina: 7,
  speed: {
    [Locomotion.Walk]: SpeedRating.Moderate,
    [Locomotion.Swim]: SpeedRating.Slow,
    [Locomotion.Climb]: SpeedRating.Moderate,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    primary: [SenseType.Sight, SenseType.Hearing],
    secondary: [SenseType.Smell],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 1,
    [SkillType.Intelligence]: -1,
    [SkillType.Willpower]: -1,
    [SkillType.Stealth]: 1,
  },
};
