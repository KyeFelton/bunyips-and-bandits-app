import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  Telekinesis,
  Gust,
  Fly,
  Cyclone,
  Catapult,
  Tornado,
  Torrent,
} from "../actions";
import { Boomerang, Telekinetic, WindShield } from "../traits";

export const KineticProgression: SkillProgression = {
  skill: SkillType.Kinetic,
  unlockables: [
    {
      level: 1,
      actions: [Telekinesis],
      traits: [],
    },
    {
      level: 2,
      actions: [Gust],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [Boomerang],
    },
    {
      level: 4,
      actions: [Fly],
      traits: [],
    },
    {
      level: 5,
      actions: [Cyclone],
      traits: [],
    },
    {
      level: 6,
      actions: [Catapult],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [Telekinetic],
    },
    {
      level: 8,
      actions: [Torrent],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [WindShield],
    },
    {
      level: 10,
      actions: [Tornado],
      traits: [],
    },
  ],
};
