import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/drop bear.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Goblin } from "../species";

export const DropBear: Kin = {
  ancestry: Downunda,
  species: Goblin,
  name: "Drop Bear",
  description:
    "Drop Bears are a koala-like, goblin kin native to the forests of Downunda. They possess stocky, hunched bodies, with strong arms suited for climbing and wrestling.",
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
  armour: {},
  skillModifiers: {
    [SkillType.Psychology]: -2,
    [SkillType.Perception]: 1,
    [SkillType.Agility]: 1,
  },
};
