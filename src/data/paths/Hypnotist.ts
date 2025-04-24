import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Scorn,
  Disorient,
  Vex,
  Frighten,
  Scourge,
  Aggravate,
  Purge,
  Delude,
  Hypnotise,
} from "../actions";
import { Obliterate } from "../actions/Obliterate";
import {
  PsychicSense,
  Captivating,
  Unbending,
  Psychotic,
  Unrelenting,
} from "../traits";

export const Hypnotist: Path = {
  name: "Hypnotist",
  skillTypes: [SkillType.Psychic],
  description:
    "Hypnotists are the puppeteers of the mind, bending reality through suggestion and illusion. With a mere whisper or a piercing gaze, they can lull enemies into a trance, distort perceptions, or even command others to act against their own will.",
  unlockables: [
    {
      level: 1,
      actions: [Disorient],
      traits: [PsychicSense],
    },
    {
      level: 2,
      actions: [Scorn],
      traits: [],
    },
    {
      level: 3,
      actions: [Frighten],
      traits: [Captivating],
    },
    {
      level: 4,
      actions: [Vex],
      traits: [],
    },
    {
      level: 5,
      actions: [Aggravate],
      traits: [Unbending],
    },
    {
      level: 6,
      actions: [Scourge],
      traits: [],
    },
    {
      level: 7,
      actions: [Delude],
      traits: [Psychotic],
    },
    {
      level: 8,
      actions: [Purge],
      traits: [],
    },
    {
      level: 9,
      actions: [Hypnotise],
      traits: [Unrelenting],
    },
    {
      level: 10,
      actions: [Obliterate],
      traits: [],
    },
  ],
};
