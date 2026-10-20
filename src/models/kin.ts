import { CreatureSize } from "../enums/CreatureSize";
import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { SpeedRating } from "../enums/SpeedRating";
import { Ancestry } from "./ancestry";
import { Species } from "./species";

export type Kin = {
  ancestry: Ancestry;
  species: Species;
  name: string;
  description: string;
  imageSrc: string;
  size: CreatureSize;
  body: number;
  mind: number;
  stamina: number;
  speed: {
    [Locomotion.Run]: SpeedRating;
    [Locomotion.Swim]: SpeedRating;
    [Locomotion.Climb]: SpeedRating;
    [Locomotion.Fly]: SpeedRating;
  };
  senses: {
    keen: SenseType[];
    poor: SenseType[];
  };
  armour: Partial<Record<DamageType, number>>;
  skillModifiers: Partial<Record<SkillType, number>>;
};
