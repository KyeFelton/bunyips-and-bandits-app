import { SkillType } from "../enums/SkillType";
import { Path } from "./paths";
import { MovementType } from "../enums/MovementType";
import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { CharacterItem } from "./items";

export type Character = {
  name: string;
  species: string;
  gender: string;
  age: number;
  languages: string[];
  personality: string;
  image?: string;
  level: number;
  health: {
    max: number;
    current: number;
    increments: number;
  };
  sanity: {
    max: number;
    current: number;
    increments: number;
  };
  stamina: {
    max: number;
    current: number;
    increments: number;
  };
  speed: {
    [MovementType.Walk]: number;
    [MovementType.Swim]: number;
    [MovementType.Climb]: number;
    [MovementType.Fly]: number;
  };
  senses: SenseType[];
  armour: {
    [DamageType.Fire]: number;
    [DamageType.Electric]: number;
    [DamageType.Toxic]: number;
    [DamageType.Slash]: number;
    [DamageType.Force]: number;
  };
  weaponDamage: number;
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
