import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import { QuickDraw } from "../actions";
import {
  Archer,
  Tracker,
  Fletcher,
  Sleuth,
  Assassin,
  Trapper,
  Sharpshooter,
  ClaimTheHunt,
  ArcherII,
} from "../traits";

export const Hunter: Path = {
  name: "Hunter",
  skillTypes: [SkillType.Stealth, SkillType.Dexterity],
  description:
    "Hunters are masters of tracking, stealth, and precision strikes. They excel at ranged combat and can pursue their prey relentlessly through any terrain.",
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [Archer],
    },
    {
      level: 2,
      actions: [],
      traits: [Tracker],
    },
    {
      level: 3,
      actions: [],
      traits: [Fletcher],
    },
    {
      level: 4,
      actions: [],
      traits: [Sleuth],
    },
    {
      level: 5,
      actions: [QuickDraw],
      traits: [],
    },
    {
      level: 6,
      actions: [],
      traits: [Assassin],
    },
    {
      level: 7,
      actions: [],
      traits: [Trapper],
    },
    {
      level: 8,
      actions: [],
      traits: [Sharpshooter],
    },
    {
      level: 9,
      actions: [],
      traits: [ClaimTheHunt],
    },
    {
      level: 10,
      actions: [],
      traits: [ArcherII],
    },
  ],
};
