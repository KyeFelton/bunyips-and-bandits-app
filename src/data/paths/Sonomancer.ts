import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
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

export const Sonomancer: Path = {
  name: "Sonomancer",
  skillTypes: [SkillType.Sonic],
  description:
    "Sonomancers are attuned to the rhythms and sounds of their environment. They can weave soundwaves to conjure enchantments and blast their enemies with devastating force.",
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
