import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/birim.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Reptilian } from "../species";

export const Birim: Kin = {
  ancestry: Downunda,
  species: Reptilian,
  name: "Birim",
  description:
    "The Birim are a reptilian kin originating from the deserts of Downunda. They are distinguished by their tall and slender physique, with features resembling goannas.",
  imageSrc,
  size: CreatureSize.Large,
  body: 6,
  mind: 7,
  stamina: 5,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Close,
    [Locomotion.Climb]: SpeedRating.Close,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    keen: [SenseType.Sight, SenseType.InfraredSight, SenseType.Smell],
    poor: [SenseType.Hearing],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Charisma]: -2,
    [SkillType.Willpower]: 2,
  },
};
