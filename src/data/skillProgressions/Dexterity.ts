import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import { Fletcher, ArcherII } from "../traits";

export const DexterityProgression: SkillProgression = {
  skill: SkillType.Dexterity,
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [],
    },
    {
      level: 2,
      actions: [],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [Fletcher],
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
      traits: [],
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
      traits: [],
    },
    {
      level: 10,
      actions: [],
      traits: [ArcherII],
    },
  ],
};
