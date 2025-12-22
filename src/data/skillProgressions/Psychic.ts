import { SkillType } from "../../enums/SkillType";
import { SkillProgression } from "../../models/skillProgression";
import {
  Vex,
  Scourge,
  Purge,
  Hypnotise,
  Message,
  Broadcast,
  Implant,
  Pandemonium,
  Insight,
  Reveal,
  MindRead,
  Envisage,
  Meditate,
} from "../actions";
import {
  Psychotic,
  Unrelenting,
  PsychicSense,
  Unbending,
  Foresight,
  Detector,
  Omnipresent,
} from "../traits";

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
      actions: [Scourge, Insight],
      traits: [],
    },
    {
      level: 3,
      actions: [Vex, Meditate],
      traits: [],
    },
    {
      level: 4,
      actions: [],
      traits: [Unrelenting, Detector],
    },
    {
      level: 5,
      actions: [Broadcast, Reveal],
      traits: [],
    },
    {
      level: 6,
      actions: [Hypnotise],
      traits: [Foresight],
    },
    {
      level: 7,
      actions: [Purge],
      traits: [Omnipresent],
    },
    {
      level: 8,
      actions: [MindRead],
      traits: [Psychotic],
    },
    {
      level: 9,
      actions: [Implant, Envisage],
      traits: [],
    },
    {
      level: 10,
      actions: [Pandemonium],
      traits: [Unbending],
    },
  ],
};
