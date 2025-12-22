import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import { QuickDraw } from "../actions";
import {
  Archer,
  Tracker,
  Sleuth,
  Assassin,
  Trapper,
  Sharpshooter,
  ClaimTheHunt,
} from "../traits";

export const StealthProgression: SkillProgression = {
  skill: SkillType.Stealth,
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
      traits: [],
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
      traits: [],
    },
  ],
};
