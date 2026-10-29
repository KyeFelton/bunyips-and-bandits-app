import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/dharrigal.png";
import { Kin } from "../../models/kin";
import { Punch } from "../actions";
import { Downunda } from "../ancestries";
import { Human } from "../species";

export const Dharrigal: Kin = {
  ancestry: Downunda,
  species: Human,
  name: "Dharrigal",
  description:
    "Humans of Downunda are diverse in culture, with many tracing their lineage to the Dharrigal peoples who have inhabited these lands for countless generations.",
  imageSrc,
  size: CreatureSize.Medium,
  body: 6,
  mind: 6,
  stamina: 6,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Close,
    [Locomotion.Climb]: SpeedRating.Close,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    keen: [SenseType.Sight, SenseType.Hearing],
    poor: [SenseType.Smell],
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillModifiers: {
    [SkillType.Nature]: 1,
  },
  actions: [Punch],
};
