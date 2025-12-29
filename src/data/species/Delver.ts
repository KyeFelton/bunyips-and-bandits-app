import { CreatureSize } from "../../enums/CreatureSize";
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
  armour: {},
  skillModifiers: {
    [SkillType.Strength]: -2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 1,
    [SkillType.Charisma]: -1,
    [SkillType.Stealth]: 2,
  },
};
