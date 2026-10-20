import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/englorian.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Human } from "../species";

export const Englorian: Kin = {
  ancestry: Engloria,
  species: Human,
  name: "Englorian",
  description:
    "Englorians descend from human settlers who originated in Engloria.",
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
    [SkillType.Lore]: 1,
  },
};
