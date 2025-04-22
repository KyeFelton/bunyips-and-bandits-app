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
      actions: [Ignite, FlameTorch],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [Douse, Flamethrower],
      traits: [FriendlyFire],
    },
    {
      level: 3,
      actions: [HeatWave, Extinguish],
      traits: [FireResistance],
    },
    {
      level: 4,
      actions: [Insulator, Fireworks],
      traits: [Inflammable],
    },
    {
      level: 5,
      actions: [Inferno, Incinerate],
      traits: [Arsonist],
    },
  ],
};
