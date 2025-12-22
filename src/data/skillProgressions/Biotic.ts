import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  PoisonSpray,
  Stench,
  Resuscitate,
  DeathCloud,
  Heal,
  Regenerate,
  Mask,
  Mutate,
  Morph,
  Absorb,
  Burst,
} from "../actions";
import {
  QuickRecovery,
  ToxicResistance,
  Medic,
  Pharmacist,
  Undying,
  SharpSenses,
  RapidShift,
  Poisonous,
  ThickSkin,
} from "../traits";

export const BioticProgression: SkillProgression = {
  skill: SkillType.Biotic,
  unlockables: [
    {
      level: 1,
      actions: [Heal, Regenerate],
      traits: [],
    },
    {
      level: 2,
      actions: [Mask],
      traits: [Medic],
    },
    {
      level: 3,
      actions: [],
      traits: [ToxicResistance, SharpSenses],
    },
    {
      level: 4,
      actions: [PoisonSpray, Mutate],
      traits: [],
    },
    {
      level: 5,
      actions: [Resuscitate],
      traits: [],
    },
    {
      level: 6,
      actions: [Stench, Morph],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [QuickRecovery, RapidShift],
    },
    {
      level: 8,
      actions: [Absorb, Burst],
      traits: [Pharmacist],
    },
    {
      level: 9,
      actions: [],
      traits: [Undying, Poisonous],
    },
    {
      level: 10,
      actions: [DeathCloud],
      traits: [ThickSkin],
    },
  ],
};
