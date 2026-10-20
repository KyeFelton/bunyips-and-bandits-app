import { CreatureSize } from "../../enums/CreatureSize";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";
import { SpeedRating } from "../../enums/SpeedRating";
import imageSrc from "../../images/kin/gnome.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Delver } from "../species";

export const Gnome: Kin = {
  ancestry: Engloria,
  species: Delver,
  name: "Gnome",
  description:
    "Gnomes are delvers originating from the underground regions of Engloria. They are small in stature and are recognised by their sky-blue skin, white hair, and glowing yellow eyes.",
  imageSrc,
  size: CreatureSize.Small,
  body: 4,
  mind: 6,
  stamina: 8,
  speed: {
    [Locomotion.Run]: SpeedRating.Near,
    [Locomotion.Swim]: SpeedRating.Close,
    [Locomotion.Climb]: SpeedRating.Close,
    [Locomotion.Fly]: SpeedRating.None,
  },
  senses: {
    keen: [SenseType.Hearing, SenseType.TremorHearing, SenseType.Smell],
    poor: [SenseType.Sight],
  },
  armour: {},
  skillModifiers: {
    [SkillType.Strength]: -2,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 1,
    [SkillType.Stealth]: 1,
  },
};
