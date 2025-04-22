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
      actions: [Taser, Shock],
      traits: [Conductive],
    },
    {
      level: 2,
      actions: [Impedance, ElectricCharge],
      traits: [ThunderBuddy],
    },
    {
      level: 3,
      actions: [Attract, Zap],
      traits: [ElectricResistance],
    },
    {
      level: 4,
      actions: [Levitate, Electrocute],
      traits: [LightningRod],
    },
    {
      level: 5,
      actions: [Lightning, Discharge],
      traits: [StaticSkin],
    },
  ],
};
