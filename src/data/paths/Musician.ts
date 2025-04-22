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
      actions: [Distort, Shriek],
      traits: [TremorHearing],
    },
    {
      level: 2,
      actions: [ThunderPunch, PumpUp],
      traits: [SharpEars],
    },
    {
      level: 3,
      actions: [Shockwave, Mimic],
      traits: [Bard],
    },
    {
      level: 4,
      actions: [Silence, SonicCharge],
      traits: [IronHearing],
    },
    {
      level: 5,
      actions: [SonicBoom, Pulverise],
      traits: [Rockstar],
    },
  ],
};
