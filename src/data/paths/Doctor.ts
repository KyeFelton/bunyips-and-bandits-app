import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  PoisonBreath,
  Stench,
  VenomSting,
  Resuscitate,
  ToxicPlume,
  Odourless,
  AcidBomb,
  Paralysis,
  DeathCloud,
  Antidote,
} from "../actions";
import {
  Healer,
  SharpNose,
  QuickRecovery,
  ToxicResistance,
  AcidicSkin,
} from "../traits";

export const Doctor: Path = {
  name: "Doctor",
  skillTypes: [SkillType.Healing, SkillType.Toxic],
  description:
    "Through years of study in morphing, doctors have mastered the delicate balance between healing and harm. Their knowledge of poisons allows them to weaken powerful enemies, whilst their expertise in healing makes them indispensable during the toughest times.",
  unlockables: [
    {
      level: 1,
      actions: [PoisonBreath],
      traits: [Healer],
    },
    {
      level: 2,
      actions: [Stench],
      traits: [],
    },
    {
      level: 3,
      actions: [VenomSting],
      traits: [SharpNose],
    },
    {
      level: 4,
      actions: [Resuscitate],
      traits: [],
    },
    {
      level: 5,
      actions: [Antidote],
      traits: [QuickRecovery],
    },
    {
      level: 6,
      actions: [ToxicPlume],
      traits: [],
    },
    {
      level: 7,
      actions: [Odourless],
      traits: [ToxicResistance],
    },
    {
      level: 8,
      actions: [AcidBomb],
      traits: [],
    },
    {
      level: 9,
      actions: [Paralysis],
      traits: [AcidicSkin],
    },
    {
      level: 10,
      actions: [DeathCloud],
      traits: [],
    },
  ],
};
