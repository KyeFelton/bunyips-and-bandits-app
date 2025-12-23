import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  PoisonSpray,
  Stench,
  DeathCloud,
  Regenerate,
  Mutate,
  Morph,
  Absorb,
  Burst,
} from "../actions";
import { ToxicResistance, Poisonous, ThickSkin } from "../traits";

export const BioticProgression: SkillProgression = {
  skill: SkillType.Biotic,
  unlockables: [
    {
      level: 1,
      actions: [Regenerate],
      traits: [],
    },
    {
      level: 2,
      actions: [Stench],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [ToxicResistance],
    },
    {
      level: 4,
      actions: [Mutate],
      traits: [],
    },
    {
      level: 5,
      actions: [PoisonSpray],
      traits: [],
    },
    {
      level: 6,
      actions: [Morph],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [ThickSkin],
    },
    {
      level: 8,
      actions: [DeathCloud],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [Poisonous],
    },
    {
      level: 10,
      actions: [Absorb, Burst],
      traits: [],
    },
  ],
};
