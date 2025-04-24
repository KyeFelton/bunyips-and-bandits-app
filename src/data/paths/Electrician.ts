import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Taser,
  Shock,
  Impedance,
  ElectricCharge,
  Attract,
  Levitate,
  Electrocute,
  Lightning,
  Discharge,
  Zap,
} from "../actions";
import {
  Conductive,
  ThunderBuddy,
  ElectricResistance,
  LightningRod,
  StaticSkin,
} from "../traits";

export const Electrician: Path = {
  name: "Electrician",
  skillTypes: [SkillType.Electric],
  description:
    "Masters of electricity, electrcians can manipulate electrical and magnetic forces to devastating effect. Their powers range from subtle magnetic control to unleashing deadly bolts of lightning.",
  unlockables: [
    {
      level: 1,
      actions: [Taser],
      traits: [Conductive],
    },
    {
      level: 2,
      actions: [Shock],
      traits: [],
    },
    {
      level: 3,
      actions: [Impedance],
      traits: [ThunderBuddy],
    },
    {
      level: 4,
      actions: [ElectricCharge],
      traits: [],
    },
    {
      level: 5,
      actions: [Zap],
      traits: [ElectricResistance],
    },
    {
      level: 6,
      actions: [Attract],
      traits: [],
    },
    {
      level: 7,
      actions: [Electrocute],
      traits: [LightningRod],
    },
    {
      level: 8,
      actions: [Levitate],
      traits: [],
    },
    {
      level: 9,
      actions: [Lightning],
      traits: [StaticSkin],
    },
    {
      level: 10,
      actions: [Discharge],
      traits: [],
    },
  ],
};
