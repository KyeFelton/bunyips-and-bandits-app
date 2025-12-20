import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import { Regenerate, Mask, Mutate, Morph, Absorb, Burst } from "../actions";
import {
  SharpSenses,
  ToxicResistance,
  RapidShift,
  Poisonous,
  ThickSkin,
} from "../traits";

export const Shapeshifter: Path = {
  name: "Shapeshifter",
  skillTypes: [SkillType.Biotic],
  description:
    "Shapeshifters are masters of transformation, able to alter their physical form to adapt to any situation. Through control of their own biology, they can mimic other creatures, regenerate wounds, and evolve their bodies in remarkable ways.",
  unlockables: [
    {
      level: 1,
      actions: [Regenerate],
      traits: [],
    },
    {
      level: 2,
      actions: [Mask],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [SharpSenses],
    },
    {
      level: 4,
      actions: [Mutate],
      traits: [],
    },
    {
      level: 5,
      actions: [],
      traits: [ToxicResistance],
    },
    {
      level: 6,
      actions: [Morph],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [RapidShift],
    },
    {
      level: 8,
      actions: [Absorb, Burst],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [Poisonous],
    },
    {
      level: 10,
      actions: [],
      traits: [ThickSkin],
    },
  ],
};
