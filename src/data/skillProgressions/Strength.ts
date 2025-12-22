import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import { Sweep } from "../actions";
import {
  Fighter,
  GuardTrait,
  Bulldozer,
  Rage,
  Taunt,
  FighterII,
} from "../traits";

export const StrengthProgression: SkillProgression = {
  skill: SkillType.Strength,
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [Fighter],
    },
    {
      level: 2,
      actions: [],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [GuardTrait],
    },
    {
      level: 4,
      actions: [],
      traits: [Bulldozer],
    },
    {
      level: 5,
      actions: [Sweep],
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
      traits: [Rage],
    },
    {
      level: 8,
      actions: [],
      traits: [Taunt],
    },
    {
      level: 9,
      actions: [],
      traits: [],
    },
    {
      level: 10,
      actions: [],
      traits: [FighterII],
    },
  ],
};
