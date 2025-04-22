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
      actions: [Gust, Hurl],
      traits: [Agile],
    },
    {
      level: 2,
      actions: [Torrent, Restrain],
      traits: [Bellow],
    },
    {
      level: 3,
      actions: [AirBarrier, Rifle],
      traits: [Swift],
    },
    {
      level: 4,
      actions: [Fly, Catapult],
      traits: [Boomerang],
    },
    {
      level: 5,
      actions: [Tornado, Cyclone],
      traits: [WindShield],
    },
  ],
};
