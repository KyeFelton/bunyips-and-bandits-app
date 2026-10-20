import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/yowie.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Giant } from "../species";

export const Yowie: Kin = {
  ancestry: Downunda,
  species: Giant,
  name: "Yowie",
  description:
    "Yowies are a giant kin found in the highlands of Downunda. They are large, fur-covered humanoids with features resembling marsupials.",
  imageSrc,
  size: CreatureSize.Large,
  body: 10,
  mind: 5,
  stamina: 5,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Close,
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
    [SkillType.Agility]: -1,
    [SkillType.Dexterity]: -2,
    [SkillType.Stealth]: -1,
  },
};
