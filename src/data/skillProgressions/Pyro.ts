import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  Heat,
  Flamethrower,
  Extinguish,
  Fireworks,
  Inferno,
  Incinerate,
} from "../actions";
import { InfraredSight, FriendlyFire, FireResistance, Ablaze } from "../traits";

export const PyroProgression: SkillProgression = {
  skill: SkillType.Pyro,
  unlockables: [
    {
      level: 1,
      actions: [Heat],
      traits: [],
    },
    {
      level: 2,
      actions: [],
      traits: [InfraredSight],
    },
    {
      level: 3,
      actions: [Flamethrower],
      traits: [],
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
