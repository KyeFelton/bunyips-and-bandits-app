import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  SummonCritter,
  GuardianAngel,
  Avenge,
  Revenge,
  SummonBeast,
  SpectralHands,
  SummonHorde,
  Sanctuary,
  GraspOfDeath,
  Resurrect,
} from "../actions";
import {
  ParanormalSense,
  Medium,
  Undying,
  SuperiorMedium,
  Blessed,
} from "../traits";

export const Summoner: Path = {
  name: "Summoner",
  skillTypes: [SkillType.Spirit],
  description:
    "Summoners are intermediaries between the living and the dead, calling forth spirits to aid them in battle. Whether raising spectral warriors or seeking counsel from lost souls, summoners wield the power of the afterlife.",
  unlockables: [
    {
      level: 1,
      actions: [SummonCritter],
      traits: [ParanormalSense],
    },
    {
      level: 2,
      actions: [GuardianAngel],
      traits: [],
    },
    {
      level: 3,
      actions: [Avenge],
      traits: [Medium],
    },
    {
      level: 4,
      actions: [Revenge],
      traits: [],
    },
    {
      level: 5,
      actions: [SummonBeast],
      traits: [Undying],
    },
    {
      level: 6,
      actions: [SpectralHands],
      traits: [],
    },
    {
      level: 7,
      actions: [SummonHorde],
      traits: [SuperiorMedium],
    },
    {
      level: 8,
      actions: [Sanctuary],
      traits: [],
    },
    {
      level: 9,
      actions: [Resurrect],
      traits: [Blessed],
    },
    {
      level: 10,
      actions: [GraspOfDeath],
      traits: [],
    },
  ],
};
