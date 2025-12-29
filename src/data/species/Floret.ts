import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import { Species } from "../../models/species";

export const Floret: Species = {
  name: "Floret",
  size: CreatureSize.Medium,
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
    primary: [SenseType.Smell, SenseType.Hearing, SenseType.TremorHearing],
    secondary: [],
  },
  armour: {
    [DamageType.Toxic]: 2,
  },
  skillModifiers: {
    [SkillType.Strength]: -1,
    [SkillType.Charisma]: -1,
    [SkillType.Willpower]: 1,
    [SkillType.Nature]: 1,
  },
};
