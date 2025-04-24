import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Ignite,
  FlameTorch,
  Douse,
  Flamethrower,
  HeatWave,
  Extinguish,
  Insulator,
  Fireworks,
  Inferno,
  Incinerate,
} from "../actions";
import {
  InfraredSight,
  FriendlyFire,
  Inflammable,
  Arsonist,
  FireResistance,
} from "../traits";

export const Pyromaniac: Path = {
  name: "Pyromaniac",
  skillTypes: [SkillType.Pyro],
  description:
    "Pyromaniacs are the masters of controlled chaos, using flames to disrupt and destroy their enemies. This specialty uses a combination of sorcery and morphing to produce fire at will.",
  unlockables: [
    {
      level: 1,
      actions: [Ignite],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [FlameTorch],
      traits: [],
    },
    {
      level: 3,
      actions: [Douse],
      traits: [FriendlyFire],
    },
    {
      level: 4,
      actions: [Flamethrower],
      traits: [],
    },
    {
      level: 5,
      actions: [Extinguish],
      traits: [FireResistance],
    },
    {
      level: 6,
      actions: [HeatWave],
      traits: [],
    },
    {
      level: 7,
      actions: [Insulator],
      traits: [Inflammable],
    },
    {
      level: 8,
      actions: [Fireworks],
      traits: [],
    },
    {
      level: 9,
      actions: [Incinerate],
      traits: [Arsonist],
    },
    {
      level: 10,
      actions: [Inferno],
      traits: [],
    },
  ],
};
