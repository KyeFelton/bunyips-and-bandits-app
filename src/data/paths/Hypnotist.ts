import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import {
  Vex,
  Scourge,
  Purge,
  Hypnotise,
  Message,
  Broadcast,
  Implant,
  Pandemonium,
} from "../actions";
import { Psychotic, Unrelenting } from "../traits";

export const Hypnotist: Path = {
  name: "Hypnotist",
  skillTypes: [SkillType.Psychic],
  description:
    "Hypnotists are the puppeteers of the mind, bending reality through suggestion and illusion. With a mere whisper or a piercing gaze, they can lull enemies into a trance, distort perceptions, or even command others to act against their own will.",
  unlockables: [
    {
      level: 1,
      actions: [Message],
      traits: [],
    },
    {
      level: 2,
      actions: [Scourge],
      traits: [],
    },
    {
      level: 3,
      actions: [Vex],
      traits: [],
    },
    {
      level: 4,
      actions: [],
      traits: [Unrelenting],
    },
    {
      level: 5,
      actions: [Broadcast],
      traits: [],
    },
    {
      level: 6,
      actions: [Hypnotise],
      traits: [],
    },
    {
      level: 7,
      actions: [Purge],
      traits: [],
    },
    {
      level: 8,
      actions: [],
      traits: [Psychotic],
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
