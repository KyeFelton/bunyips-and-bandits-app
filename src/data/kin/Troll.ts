import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/troll.png";
import { Kin } from "../../models/kin";
import { PunchStrong } from "../actions";
import { Engloria } from "../ancestries";
import { Giant } from "../species";

export const Troll: Kin = {
  ancestry: Engloria,
  species: Giant,
  name: "Troll",
  description:
    "Trolls are a giant kin native to the swamps and mountains of Engloria. They are large humanoids with broad noses, heavy brows, mossy hair, and enormous hands and feet.",
  imageSrc,
  size: CreatureSize.Large,
  body: 10,
  mind: 6,
  stamina: 4,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Close,
    [Locomotion.Climb]: SpeedRating.None,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    keen: [SenseType.Sight, SenseType.Smell],
    poor: [SenseType.Hearing],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: -2,
    [SkillType.Dexterity]: -1,
    [SkillType.Stealth]: -1,
  },
  actions: [PunchStrong],
};
