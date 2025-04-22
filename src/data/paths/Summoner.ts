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
      actions: [SummonCritter, GuardianAngel],
      traits: [ParanormalSense],
    },
    {
      level: 2,
      actions: [Avenge, Revenge],
      traits: [Medium],
    },
    {
      level: 3,
      actions: [SummonBeast, SpectralHands],
      traits: [Undying],
    },
    {
      level: 4,
      actions: [SummonHorde, Sanctuary],
      traits: [SuperiorMedium],
    },
    {
      level: 5,
      actions: [GraspOfDeath, Resurrect],
      traits: [Blessed],
    },
  ],
};
