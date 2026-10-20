import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/skerrig.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Avian } from "../species";

export const Skerrig: Kin = {
  ancestry: Engloria,
  species: Avian,
  name: "Skerrig",
  description:
    "The Skerrig are an avian kin native to the coasts and rivers of Engloria and Downunda. Their plumage varies widely, often resembling seabirds such as gulls and cormorants.",
  imageSrc,
  size: CreatureSize.Medium,
  body: 5,
  mind: 6,
  stamina: 7,
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
  armour: {},
  skillModifiers: {
    [SkillType.Willpower]: -2,
    [SkillType.Charisma]: 2,
  },
};
