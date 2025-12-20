import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import { Insight, Reveal, MindRead, Envisage, Meditate } from "../actions";
import {
  PsychicSense,
  Unbending,
  Foresight,
  Detector,
  Omnipresent,
} from "../traits";

export const Mindseer: Path = {
  name: "Mindseer",
  skillTypes: [SkillType.Psychic],
  description:
    "Mindseers are psychics who peer beyond the surface, reading thoughts and unraveling the deepest secrets of their foes. Masters of insight, they can anticipate enemy actions and exploit weaknesses to manipulate the battlefield to their favour.",
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [PsychicSense],
    },
    {
      level: 2,
      actions: [Insight],
      traits: [],
    },
    {
      level: 3,
      actions: [Meditate],
      traits: [],
    },
    {
      level: 4,
      actions: [],
      traits: [Detector],
    },
    {
      level: 5,
      actions: [Reveal],
      traits: [],
    },
    {
      level: 6,
      actions: [],
      traits: [Foresight],
    },
    {
      level: 7,
      actions: [],
      traits: [Omnipresent],
    },
    {
      level: 8,
      actions: [MindRead],
      traits: [],
    },
    {
      level: 9,
      actions: [Envisage],
      traits: [],
    },
    {
      level: 10,
      actions: [],
      traits: [Unbending],
    },
  ],
};
