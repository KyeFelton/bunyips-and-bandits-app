import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Beacon,
  Disguise,
  HeatRay,
  BlindingFlash,
  SearingRadiance,
  Apparition,
  Invisibility,
  MirrorDome,
  Hyperbeam,
  SolarFlare,
} from "../actions";
import {
  InfraredSight,
  SharpEyes,
  Photosynthetic,
  IronVision,
  RadiantAura,
} from "../traits";

export const Lightbender: Path = {
  name: "Lightbender",
  skillTypes: [SkillType.Radiant],
  description:
    "Lightbenders are the artisans of light. Whether crafting dazzling illusions or blinding adversaries with radiant bursts, lightbenders are a versatile ally to any team.",
  unlockables: [
    {
      level: 1,
      actions: [Beacon],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [Disguise],
      traits: [],
    },
    {
      level: 3,
      actions: [BlindingFlash],
      traits: [SharpEyes],
    },
    {
      level: 4,
      actions: [HeatRay],
      traits: [],
    },
    {
      level: 5,
      actions: [Apparition],
      traits: [Photosynthetic],
    },
    {
      level: 6,
      actions: [SearingRadiance],
      traits: [],
    },
    {
      level: 7,
      actions: [Invisibility],
      traits: [IronVision],
    },
    {
      level: 8,
      actions: [MirrorDome],
      traits: [],
    },
    {
      level: 9,
      actions: [Hyperbeam],
      traits: [RadiantAura],
    },
    {
      level: 10,
      actions: [SolarFlare],
      traits: [],
    },
  ],
};
