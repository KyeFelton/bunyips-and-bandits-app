import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  Vex,
  Scourge,
  Purge,
  Hypnotise,
  Message,
  Implant,
  Pandemonium,
  Insight,
  MindRead,
  Envisage,
} from "../actions";
import { PsychicSense } from "../traits";

export const PsychicProgression: SkillProgression = {
  skill: SkillType.Psychic,
  unlockables: [
    {
      level: 1,
      actions: [Message],
      traits: [PsychicSense],
    },
    {
      level: 2,
      actions: [Scourge],
      traits: [],
    },
    {
      level: 3,
      actions: [Insight],
      traits: [],
    },
    {
      level: 4,
      actions: [Vex],
      traits: [],
    },
    {
      level: 5,
      actions: [MindRead],
      traits: [],
    },
    {
      level: 6,
      actions: [Purge],
      traits: [],
    },
    {
      level: 7,
      actions: [Hypnotise],
      traits: [],
    },
    {
      level: 8,
      actions: [Envisage],
      traits: [],
    },
    {
      level: 9,
      actions: [Implant],
      traits: [],
    },
    {
      level: 10,
      actions: [Pandemonium],
      traits: [],
    },
  ],
};
