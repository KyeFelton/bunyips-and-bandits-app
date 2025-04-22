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
      actions: [PoisonBreath, Stench],
      traits: [Healer],
    },
    {
      level: 2,
      actions: [VenomSting, Resuscitate],
      traits: [SharpNose],
    },
    {
      level: 3,
      actions: [Antidote, ToxicPlume],
      traits: [QuickRecovery],
    },
    {
      level: 4,
      actions: [Odourless, AcidBomb],
      traits: [ToxicResistance],
    },
    {
      level: 5,
      actions: [Paralysis, DeathCloud],
      traits: [AcidicSkin],
    },
  ],
};
