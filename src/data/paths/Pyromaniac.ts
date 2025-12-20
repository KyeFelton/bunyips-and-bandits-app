import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Heat,
  Flamethrower,
  Extinguish,
  Fireworks,
  Inferno,
  Incinerate,
} from "../actions";
import { InfraredSight, FriendlyFire, FireResistance, Ablaze } from "../traits";

export const Pyromaniac: Path = {
  name: "Pyromaniac",
  skillTypes: [SkillType.Pyro],
  description:
    "Pyromaniacs are the masters of controlled chaos, using flames to disrupt and destroy their enemies. This specialty uses a combination of sorcery and morphing to produce fire at will.",
  unlockables: [
    {
      level: 1,
      actions: [Heat],
      traits: [],
    },
    {
      level: 2,
      actions: [Flamethrower],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [InfraredSight],
    },
    {
      level: 4,
      actions: [Extinguish],
      traits: [],
    },
    {
      level: 5,
      actions: [],
      traits: [FireResistance],
    },
    {
      level: 6,
      actions: [Fireworks],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [FriendlyFire],
    },
    {
      level: 8,
      actions: [Inferno],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [Ablaze],
    },
    {
      level: 10,
      actions: [Incinerate],
      traits: [],
    },
  ],
};
