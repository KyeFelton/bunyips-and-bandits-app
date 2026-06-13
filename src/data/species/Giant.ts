import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Giant: Species = {
  name: "Giant",
  size: CreatureSize.Large,
  ancestries: ["Downunda", "Engloria"],
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
    keen: [SenseType.Hearing, SenseType.Smell],
    poor: [SenseType.Sight],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: -2,
    [SkillType.Dexterity]: -1,
    [SkillType.Stealth]: -2,
  },
};
