import { SkillType } from "src/enums/SkillType";
import { Skill } from "./skills";
import { Path } from "./paths";
import { Item } from "./items";
import { MovementType } from "src/enums/MovementType";
import { DamageType } from "src/enums/DamageType";
import { SenseType } from "src/enums/SenseType";

export type LevelledSkill = Skill & {
  level: number;
};

export type CharacterItem = Item & {
  equipped: boolean;
};

export type Character = {
  name: string;
  species: string;
  gender: string;
  image?: string;
  health: {
    max: number;
    current: number;
  };
  sanity: {
    max: number;
    current: number;
  };
  stamina: {
    max: number;
    current: number;
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
    [SkillType.Strength]: LevelledSkill;
    [SkillType.Agility]: LevelledSkill;
    [SkillType.Dexterity]: LevelledSkill;
    [SkillType.Martial]: LevelledSkill;
    [SkillType.Throw]: LevelledSkill;
    [SkillType.Intelligence]: LevelledSkill;
    [SkillType.Nature]: LevelledSkill;
    [SkillType.Willpower]: LevelledSkill;
    [SkillType.Charisma]: LevelledSkill;
    [SkillType.Psychology]: LevelledSkill;
    [SkillType.Stealth]: LevelledSkill;
    [SkillType.Sight]: LevelledSkill;
    [SkillType.Hearing]: LevelledSkill;
    [SkillType.Smell]: LevelledSkill;
    [SkillType.Pyro]: LevelledSkill;
    [SkillType.Electric]: LevelledSkill;
    [SkillType.Kinetic]: LevelledSkill;
    [SkillType.Radiant]: LevelledSkill;
    [SkillType.Sonic]: LevelledSkill;
    [SkillType.Psychic]: LevelledSkill;
    [SkillType.Toxic]: LevelledSkill;
    [SkillType.Healing]: LevelledSkill;
    [SkillType.Spirit]: LevelledSkill;
  };
};
