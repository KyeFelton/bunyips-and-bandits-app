import { SkillType } from "../enums/SkillType";
import { Locomotion } from "../enums/Locomotion";
import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { CharacterItem } from "./items";
import { Path } from "./paths";

export type Character = {
  name: string;
  species: string;
  gender: string;
  age: number;
  languages: string[];
  background: string;
  personality: string;
  image?: string;
  level: number;
  physique: {
    max: number;
    current: number;
  };
  morale: {
    max: number;
    current: number;
  };
  stamina: {
    max: number;
    current: number;
  };
  speed: {
    [Locomotion.Walk]: number;
    [Locomotion.Swim]: number;
    [Locomotion.Climb]: number;
    [Locomotion.Fly]: number;
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
  luck: number;
  skills: {
    [SkillType.Strength]: number;
    [SkillType.Agility]: number;
    [SkillType.Dexterity]: number;
    [SkillType.Martial]: number;
    [SkillType.Throw]: number;
    [SkillType.Intelligence]: number;
    [SkillType.Nature]: number;
    [SkillType.Willpower]: number;
    [SkillType.Charisma]: number;
    [SkillType.Psychology]: number;
    [SkillType.Stealth]: number;
    [SkillType.Sight]: number;
    [SkillType.Hearing]: number;
    [SkillType.Smell]: number;
    [SkillType.Pyro]: number;
    [SkillType.Electric]: number;
    [SkillType.Kinetic]: number;
    [SkillType.Radiant]: number;
    [SkillType.Sonic]: number;
    [SkillType.Psychic]: number;
    [SkillType.Toxic]: number;
    [SkillType.Healing]: number;
    [SkillType.Spirit]: number;
  };
};
