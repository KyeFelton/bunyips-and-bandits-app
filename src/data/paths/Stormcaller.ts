import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  AirBarrier,
  Catapult,
  Cyclone,
  Fly,
  Gust,
  Rifle,
  Tornado,
  Torrent,
} from "../actions";
import { Hurl } from "../actions/Hurl";
import { Restrain } from "../actions/Restrain";
import { Agile, Bellow, Swift, Boomerang, WindShield } from "../traits";

export const Stormcaller: Path = {
  name: "Stormcaller",
  skillTypes: [SkillType.Kinetic],
  description:
    "Stormcallers harness the raw power of the elements to control the battlefield. They excel at hurling objects and creatures through the air and dealing devastating damage.",
  unlockables: [
    {
      level: 1,
      actions: [Gust],
      traits: [Agile],
    },
    {
      level: 2,
      actions: [Hurl],
      traits: [],
    },
    {
      level: 3,
      actions: [Torrent],
      traits: [Bellow],
    },
    {
      level: 4,
      actions: [Restrain],
      traits: [],
    },
    {
      level: 5,
      actions: [AirBarrier],
      traits: [Swift],
    },
    {
      level: 6,
      actions: [Rifle],
      traits: [],
    },
    {
      level: 7,
      actions: [Fly],
      traits: [Boomerang],
    },
    {
      level: 8,
      actions: [Catapult],
      traits: [],
    },
    {
      level: 9,
      actions: [Tornado],
      traits: [WindShield],
    },
    {
      level: 10,
      actions: [Cyclone],
      traits: [],
    },
  ],
};
