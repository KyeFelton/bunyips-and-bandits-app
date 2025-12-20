import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Taser,
  ElectricCharge,
  Attract,
  Levitate,
  Electrocute,
  Lightning,
  Discharge,
} from "../actions";
import { ElectricResistance, LightningRod, StaticSkin } from "../traits";

export const Electrician: Path = {
  name: "Electrician",
  skillTypes: [SkillType.Electric],
  description:
    "Masters of electricity, electrcians can manipulate electrical and magnetic forces to devastating effect. Their powers range from subtle magnetic control to unleashing deadly bolts of lightning.",
  unlockables: [
    {
      level: 1,
      actions: [Taser],
      traits: [],
    },
    {
      level: 2,
      actions: [Attract],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [ElectricResistance],
    },
    {
      level: 4,
      actions: [Lightning],
      traits: [],
    },
    {
      level: 5,
      actions: [ElectricCharge],
      traits: [],
    },
    {
      level: 6,
      actions: [Levitate],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [LightningRod],
    },
    {
      level: 8,
      actions: [Discharge],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [StaticSkin],
    },
    {
      level: 10,
      actions: [Electrocute],
      traits: [],
    },
  ],
};
