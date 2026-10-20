import { CreatureSize } from "../../enums/CreatureSize";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/hob.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Goblin } from "../species";

export const Hob: Kin = {
  ancestry: Engloria,
  species: Goblin,
  name: "Hob",
  description:
    "Hobs are a goblin kin with ancestral ties to Engloria. They are slightly shorter than humans, with a stocky build, coarse body hair, and facial features often likened to bats, including wide-set eyes, flat nose and pointed ears.",
  imageSrc,
  size: CreatureSize.Small,
  body: 6,
  mind: 5,
  stamina: 7,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Close,
    [Locomotion.Climb]: SpeedRating.Near,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    keen: [SenseType.Sight, SenseType.Hearing],
    poor: [SenseType.Smell],
  },
  armour: {
    [DamageType.Toxic]: 1,
  },
  skillModifiers: {
    [SkillType.Perception]: -2,
    [SkillType.Psychology]: 2,
  },
};
