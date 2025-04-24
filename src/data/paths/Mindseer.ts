import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Scorn,
  Insight,
  Vex,
  Disturb,
  Scourge,
  Reveal,
  Torment,
  Foresee,
  Interference,
  MindRead,
} from "../actions";
import {
  PsychicSense,
  Psychologist,
  Unbending,
  Custodian,
  Foresight,
} from "../traits";

export const Mindseer: Path = {
  name: "Mindseer",
  skillTypes: [SkillType.Psychic],
  description:
    "Mindseers are psychics who peer beyond the surface, reading thoughts and unraveling the deepest secrets of their foes. Masters of insight, they can anticipate enemy actions and exploit weaknesses to manipulate the battlefield to their favour.",
  unlockables: [
    {
      level: 1,
      actions: [Insight],
      traits: [PsychicSense],
    },
    {
      level: 2,
      actions: [Scorn],
      traits: [],
    },
    {
      level: 3,
      actions: [Disturb],
      traits: [Psychologist],
    },
    {
      level: 4,
      actions: [Vex],
      traits: [],
    },
    {
      level: 5,
      actions: [Reveal],
      traits: [Unbending],
    },
    {
      level: 6,
      actions: [Scourge],
      traits: [],
    },
    {
      level: 7,
      actions: [Foresee],
      traits: [Custodian],
    },
    {
      level: 8,
      actions: [Torment],
      traits: [],
    },
    {
      level: 9,
      actions: [Interference],
      traits: [Foresight],
    },
    {
      level: 10,
      actions: [MindRead],
      traits: [],
    },
  ],
};
