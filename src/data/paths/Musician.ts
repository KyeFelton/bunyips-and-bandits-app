import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Distort,
  Shriek,
  ThunderPunch,
  PumpUp,
  Shockwave,
  Silence,
  SonicCharge,
  SonicBoom,
  Pulverise,
} from "../actions";
import { Mimic } from "../actions/Mimic";
import {
  TremorHearing,
  SharpEars,
  Bard,
  IronHearing,
  Rockstar,
} from "../traits";

export const Musician: Path = {
  name: "Musician",
  skillTypes: [SkillType.Sonic],
  description:
    "Musicians are attuned to the rhythms and sounds of their environment. They can weave soundwaves to conjure enchantments and blast their enemies.",
  unlockables: [
    {
      level: 1,
      actions: [Distort],
      traits: [TremorHearing],
    },
    {
      level: 2,
      actions: [Shriek],
      traits: [],
    },
    {
      level: 3,
      actions: [PumpUp],
      traits: [SharpEars],
    },
    {
      level: 4,
      actions: [ThunderPunch],
      traits: [],
    },
    {
      level: 5,
      actions: [Mimic],
      traits: [Bard],
    },
    {
      level: 6,
      actions: [Shockwave],
      traits: [],
    },
    {
      level: 7,
      actions: [Silence],
      traits: [IronHearing],
    },
    {
      level: 8,
      actions: [SonicCharge],
      traits: [],
    },
    {
      level: 9,
      actions: [SonicBoom],
      traits: [Rockstar],
    },
    {
      level: 10,
      actions: [Pulverise],
      traits: [],
    },
  ],
};
