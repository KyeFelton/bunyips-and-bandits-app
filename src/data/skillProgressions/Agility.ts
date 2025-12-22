import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import { Vigilant, Swift, Opportunist } from "../traits";

export const AgilityProgression: SkillProgression = {
  skill: SkillType.Agility,
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [],
    },
    {
      level: 2,
      actions: [],
      traits: [Vigilant],
    },
    {
      level: 3,
      actions: [],
      traits: [],
    },
    {
      level: 4,
      actions: [],
      traits: [],
    },
    {
      level: 5,
      actions: [],
      traits: [],
    },
    {
      level: 6,
      actions: [],
      traits: [Swift],
    },
    {
      level: 7,
      actions: [],
      traits: [],
    },
    {
      level: 8,
      actions: [],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [Opportunist],
    },
    {
      level: 10,
      actions: [],
      traits: [],
    },
  ],
};
