import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import { BioticProgression } from "./Biotic";
import { ElectricProgression } from "./Electric";
import { KineticProgression } from "./Kinetic";
import { PsychicProgression } from "./Psychic";
import { PyroProgression } from "./Pyro";
import { RadiantProgression } from "./Radiant";
import { SonicProgression } from "./Sonic";
import { SpiritProgression } from "./Spirit";

export const AllSkillProgressions: Record<SkillType, SkillProgression> = {
  [SkillType.Biotic]: BioticProgression,
  [SkillType.Charisma]: { skill: SkillType.Charisma, unlockables: [] },
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
  [SkillType.Willpower]: { skill: SkillType.Willpower, unlockables: [] },
};

export {
  BioticProgression,
  ElectricProgression,
  KineticProgression,
  PsychicProgression,
  PyroProgression,
  RadiantProgression,
  SonicProgression,
  SpiritProgression,
};
