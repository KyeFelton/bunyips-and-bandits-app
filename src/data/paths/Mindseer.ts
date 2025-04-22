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
      actions: [Scorn, Insight],
      traits: [PsychicSense],
    },
    {
      level: 2,
      actions: [Vex, Disturb],
      traits: [Psychologist],
    },
    {
      level: 3,
      actions: [Scourge, Reveal],
      traits: [Unbending],
    },
    {
      level: 4,
      actions: [Torment, Foresee],
      traits: [Custodian],
    },
    {
      level: 5,
      actions: [Interference, MindRead],
      traits: [Foresight],
    },
  ],
};
