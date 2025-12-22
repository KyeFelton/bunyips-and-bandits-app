import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  GlowingOrb,
  Disguise,
  HeatRay,
  BlindingFlash,
  Apparition,
  Invisibility,
  MirrorDome,
  SolarFlare,
} from "../actions";
import { Photosynthetic, RadiantAura } from "../traits";

export const RadiantProgression: SkillProgression = {
  skill: SkillType.Radiant,
  unlockables: [
    {
      level: 1,
      actions: [GlowingOrb],
      traits: [],
    },
    {
      level: 2,
      actions: [BlindingFlash],
      traits: [],
    },
    {
      level: 3,
      actions: [Disguise],
      traits: [],
    },
    {
      level: 4,
      actions: [HeatRay],
      traits: [],
    },
    {
      level: 5,
      actions: [Invisibility],
      traits: [],
    },
    {
      level: 6,
      actions: [Apparition],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [Photosynthetic],
    },
    {
      level: 8,
      actions: [],
      traits: [RadiantAura],
    },
    {
      level: 9,
      actions: [MirrorDome],
      traits: [],
    },
    {
      level: 10,
      actions: [SolarFlare],
      traits: [],
    },
  ],
};
