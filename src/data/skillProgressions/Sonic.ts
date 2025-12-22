import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  Amplify,
  Mimic,
  Shriek,
  Silence,
  DistantNoise,
  SonicBoom,
  SonicCharge,
  Pulverise,
} from "../actions";
import { TremorHearing, Rockstar } from "../traits";

export const SonicProgression: SkillProgression = {
  skill: SkillType.Sonic,
  unlockables: [
    {
      level: 1,
      actions: [Amplify],
      traits: [],
    },
    {
      level: 2,
      actions: [],
      traits: [TremorHearing],
    },
    {
      level: 3,
      actions: [Mimic],
      traits: [],
    },
    {
      level: 4,
      actions: [Shriek],
      traits: [],
    },
    {
      level: 5,
      actions: [Silence],
      traits: [],
    },
    {
      level: 6,
      actions: [DistantNoise],
      traits: [],
    },
    {
      level: 7,
      actions: [SonicBoom],
      traits: [],
    },
    {
      level: 8,
      actions: [SonicCharge],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [Rockstar],
    },
    {
      level: 10,
      actions: [Pulverise],
      traits: [],
    },
  ],
};
