import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import { AgilityProgression } from "./Agility";
import { BioticProgression } from "./Biotic";
import { DexterityProgression } from "./Dexterity";
import { ElectricProgression } from "./Electric";
import { KineticProgression } from "./Kinetic";
import { PsychicProgression } from "./Psychic";
import { PyroProgression } from "./Pyro";
import { RadiantProgression } from "./Radiant";
import { SonicProgression } from "./Sonic";
import { SpiritProgression } from "./Spirit";
import { StealthProgression } from "./Stealth";
import { StrengthProgression } from "./Strength";

export const AllSkillProgressions: Record<SkillType, SkillProgression> = {
  [SkillType.Agility]: AgilityProgression,
  [SkillType.Biotic]: BioticProgression,
  [SkillType.Charisma]: { skill: SkillType.Charisma, unlockables: [] },
  [SkillType.Dexterity]: DexterityProgression,
  [SkillType.Electric]: ElectricProgression,
  [SkillType.Intelligence]: { skill: SkillType.Intelligence, unlockables: [] },
  [SkillType.Kinetic]: KineticProgression,
  [SkillType.Nature]: { skill: SkillType.Nature, unlockables: [] },
  [SkillType.Perception]: { skill: SkillType.Perception, unlockables: [] },
  [SkillType.Psychic]: PsychicProgression,
  [SkillType.Psychology]: { skill: SkillType.Psychology, unlockables: [] },
  [SkillType.Pyro]: PyroProgression,
  [SkillType.Radiant]: RadiantProgression,
  [SkillType.Sonic]: SonicProgression,
  [SkillType.Spirit]: SpiritProgression,
  [SkillType.Stealth]: StealthProgression,
  [SkillType.Strength]: StrengthProgression,
  [SkillType.Willpower]: { skill: SkillType.Willpower, unlockables: [] },
};

export {
  AgilityProgression,
  BioticProgression,
  DexterityProgression,
  ElectricProgression,
  KineticProgression,
  PsychicProgression,
  PyroProgression,
  RadiantProgression,
  SonicProgression,
  SpiritProgression,
  StealthProgression,
  StrengthProgression,
};
