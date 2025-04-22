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
      actions: [Beacon, Disguise],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [HeatRay, BlindingFlash],
      traits: [SharpEyes],
    },
    {
      level: 3,
      actions: [SearingRadiance, Apparition],
      traits: [Photosynthetic],
    },
    {
      level: 4,
      actions: [Invisibility, MirrorDome],
      traits: [IronVision],
    },
    {
      level: 5,
      actions: [Hyperbeam, SolarFlare],
      traits: [RadiantAura],
    },
  ],
};
