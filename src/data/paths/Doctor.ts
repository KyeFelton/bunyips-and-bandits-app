import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import { PoisonSpray, Stench, Resuscitate, DeathCloud, Heal } from "../actions";
import {
  QuickRecovery,
  ToxicResistance,
  Medic,
  Pharmacist,
  Undying,
} from "../traits";

export const Doctor: Path = {
  name: "Doctor",
  skillTypes: [SkillType.Biotic],
  description:
    "Through years of study, doctors have mastered the delicate balance between healing and harm. Their knowledge of poisons allows them to weaken powerful enemies, whilst their expertise in healing makes them indispensable during the toughest times.",
  unlockables: [
    {
      level: 1,
      actions: [Heal],
      traits: [],
    },
    {
      level: 2,
      actions: [],
      traits: [Medic],
    },
    {
      level: 3,
      actions: [],
      traits: [ToxicResistance],
    },
    {
      level: 4,
      actions: [PoisonSpray],
      traits: [],
    },
    {
      level: 5,
      actions: [Resuscitate],
      traits: [],
    },
    {
      level: 6,
      actions: [Stench],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [QuickRecovery],
    },
    {
      level: 8,
      actions: [],
      traits: [Pharmacist],
    },
    {
      level: 9,
      actions: [],
      traits: [Undying],
    },
    {
      level: 10,
      actions: [DeathCloud],
      traits: [],
    },
  ],
};
