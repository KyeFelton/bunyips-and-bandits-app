import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/joonyar.png";
import { Kin } from "../../models/kin";
import { Punch } from "../actions";
import { Downunda } from "../ancestries";
import { Delver } from "../species";

export const Joonyar: Kin = {
  ancestry: Downunda,
  species: Delver,
  name: "Joonyar",
  description:
    "The Joonyar are a delver kin that live in the underground regions of Downunda. They are small humanoids with skin in shades of eucalyptus, brown hair, and glowing orange eyes that provide illumination in low-light environments.",
  imageSrc,
  size: CreatureSize.Small,
  body: 4,
  mind: 6,
  stamina: 8,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Near,
    [Locomotion.Climb]: SpeedRating.Close,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    keen: [SenseType.Sight, SenseType.Hearing],
    poor: [SenseType.Smell],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Strength]: -2,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 1,
    [SkillType.Stealth]: 1,
  },
  actions: [Punch],
};
