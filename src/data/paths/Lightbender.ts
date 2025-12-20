import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
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

export const Lightbender: Path = {
  name: "Lightbender",
  skillTypes: [SkillType.Radiant],
  description:
    "Lightbenders are the artisans of light. Whether crafting dazzling illusions or blinding adversaries with radiant bursts, lightbenders are a versatile ally to any team.",
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
