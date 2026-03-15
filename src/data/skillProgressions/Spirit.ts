import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  GuardianAngel,
  Revenge,
  SummonBeast,
  SpectralHands,
  SummonHorde,
  Sanctuary,
  Resurrect,
  GraspOfDeath,
  Commune,
  SpiritLink,
} from "../actions";
import { ParanormalSense } from "../traits";

export const SpiritProgression: SkillProgression = {
  skill: SkillType.Spirit,
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [ParanormalSense],
    },
    {
      level: 2,
      actions: [Commune],
      traits: [],
    },
    {
      level: 3,
      actions: [SummonBeast],
      traits: [],
    },
    {
      level: 4,
      actions: [GuardianAngel],
      traits: [],
    },
    {
      level: 5,
      actions: [SpectralHands],
      traits: [],
    },
    {
      level: 6,
      actions: [SpiritLink],
      traits: [],
    },
    {
      level: 7,
      actions: [Revenge],
      traits: [],
    },
    {
      level: 8,
      actions: [Sanctuary],
      traits: [],
    },
    {
      level: 9,
      actions: [SummonHorde],
      traits: [],
    },
    {
      level: 10,
      actions: [GraspOfDeath, Resurrect],
      traits: [],
    },
  ],
};
