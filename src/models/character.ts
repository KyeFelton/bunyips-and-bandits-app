import { SkillType } from "../enums/SkillType";
import { Locomotion } from "../enums/Locomotion";
import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { SpeedRating } from "../enums/SpeedRating";
import { CharacterItem } from "./items";
import { Path } from "./paths";

export type Character = {
  name: string;
  origin: string;
  species: string;
  gender: string;
  age: number;
  languages: string[];
  background: string;
  personality: string;
  image?: string;
  level: number;
  body: {
    max: number;
    current: number;
  };
  mind: {
    max: number;
    current: number;
  };
  stamina: {
    max: number;
    current: number;
  };
  speed: {
    [Locomotion.Walk]: SpeedRating;
    [Locomotion.Swim]: SpeedRating;
    [Locomotion.Climb]: SpeedRating;
    [Locomotion.Fly]: SpeedRating;
  };
  senses: SenseType[];
  armour: {
    [DamageType.Fire]: number;
    [DamageType.Electric]: number;
    [DamageType.Toxic]: number;
    [DamageType.Slash]: number;
    [DamageType.Force]: number;
  };
  weapon: number;
  paths: Path[];
  items: CharacterItem[];
  money: number;
  skills: {
    [SkillType.Agility]: number;
    [SkillType.Charisma]: number;
    [SkillType.Dexterity]: number;
    [SkillType.Electric]: number;
    [SkillType.Intelligence]: number;
    [SkillType.Healing]: number;
    [SkillType.Kinetic]: number;
    [SkillType.Martial]: number;
    [SkillType.Nature]: number;
    [SkillType.Perception]: number;
    [SkillType.Psychic]: number;
    [SkillType.Psychology]: number;
    [SkillType.Pyro]: number;
    [SkillType.Radiant]: number;
    [SkillType.Sonic]: number;
    [SkillType.Spirit]: number;
    [SkillType.Stealth]: number;
    [SkillType.Strength]: number;
    [SkillType.Toxic]: number;
    [SkillType.Willpower]: number;
  };
};
