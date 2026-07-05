import { SenseType } from "../enums/SenseType";
import { SkillType } from "../enums/SkillType";
import { OngoingEffect } from "./effect";

export type Condition = {
  name: string;
  description?: string;
  effects?: OngoingEffect[];
  stackable: number; // 0 = not stackable, >0 = max stack count
};

export const Amnesia: Condition = {
  name: "Amnesia",
  description: "You forget who you are and why you're here.",
  stackable: 0,
};

export const Anosmic: Condition = {
  name: "Anosmic",
  effects: [
    {
      sense: {
        lose: SenseType.Smell,
      },
    },
  ],
  stackable: 0,
};

export const Blinded: Condition = {
  name: "Blinded",
  effects: [
    {
      sense: {
        lose: SenseType.Sight,
      },
    },
  ],
  stackable: 0,
};

export const Burning: Condition = {
  name: "Burning",
  description:
    "You take 2 fire damage at the start of each of your turns. After taking the damage, you may use an action to douse the flame and remove the status.",
  stackable: 0,
};

export const Deaf: Condition = {
  name: "Deaf",
  effects: [
    {
      sense: {
        lose: SenseType.Hearing,
      },
    },
  ],
  stackable: 0,
};

export const Deluded: Condition = {
  name: "Deluded",
  description:
    "Your perception of reality is warped. You may mistake people for monsters, monsters for people or have flashbacks of past experiences.",
  stackable: 0,
};

export const Disrupted: Condition = {
  name: "Disrupted",
  effects: [
    {
      sense: {
        lose: SenseType.Psychic,
      },
    },
  ],
  stackable: 0,
};

export const Empowered: Condition = {
  name: "Empowered",
  stackable: 3,
  effects: [
    {
      actions: {
        bonus: 1,
      },
    },
  ],
};

export const Frightened: Condition = {
  name: "Frightened",
  description:
    "You're overwhelmed with fear, easily startled and flee from all danger. You even have trouble trusting your friends.",
  stackable: 0,
};

export const Hysteria: Condition = {
  name: "Hysteria",
  description:
    "You experience uncontrollable emotional outbursts—laughing, crying, screaming.",
  stackable: 0,
};

export const Hypnotised: Condition = {
  name: "Hypnotised",
  description:
    "You cannot harm the caster. You must obey any commands and act with the best interest of the caster. If you are attacked by anyone from the opposing side, this status is removed.",
  stackable: 0,
};

export const Invisible: Condition = {
  name: "Invisible",
  description: "You cannot be detected through sight or infrared.",
  stackable: 0,
};

export const Madness: Condition = {
  name: "Madness",
  description: "You must attack the closest creature near you.",
  stackable: 0,
};

export const Odourless: Condition = {
  name: "Odourless",
  description: "You cannot be detected through smell.",
  stackable: 0,
};

export const Provoked: Condition = {
  name: "Provoked",
  description:
    "You must use at least one of your actions to attempt to harm the opponent who provoked you.",
  stackable: 0,
};

export const Restrained: Condition = {
  name: "Restrained",
  description: "You cannot move.",
  stackable: 0,
};

export const Silent: Condition = {
  name: "Silent",
  description: "You cannot be detected through hearing or tremor hearing.",
  stackable: 0,
};

export const Stunned: Condition = {
  name: "Stunned",
  description: "You lose an action.",
  stackable: 3,
  effects: [
    {
      actions: {
        bonus: -1,
      },
    },
  ],
};

export const StrengthBoost: Condition = {
  name: "Strength Boost",
  stackable: 3,
  effects: [
    {
      skill: {
        skillType: SkillType.Strength,
        bonus: 1,
      },
    },
  ],
};

export const AgilityBoost: Condition = {
  name: "Agility Boost",
  stackable: 3,
  effects: [
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: 1,
      },
    },
  ],
};

export const PsychicBoost: Condition = {
  name: "Psychic Boost",
  stackable: 3,
  effects: [
    {
      skill: {
        skillType: SkillType.Psychic,
        bonus: 1,
      },
    },
  ],
};

export const Infatuated: Condition = {
  name: "Infatuated",
  description:
    "You are deeply infatuated with another creature. You cannot harm them and will act in their best interest. This effect lasts until your next rest or until they harm you.",
  stackable: 0,
};

export const Sleeping: Condition = {
  name: "Sleeping",
  description:
    "You are in a deep sleep. Loud noises or physical contact may wake you.",
  stackable: 0,
};

export const Unconscious: Condition = {
  name: "Unconscious",
  description:
    "You are unconscious. You cannot perceive your surroundings or take actions.",
  stackable: 0,
};

export const AllConditions = [
  Amnesia,
  Anosmic,
  Disrupted,
  Blinded,
  Burning,
  Deaf,
  Deluded,
  Empowered,
  Frightened,
  Hysteria,
  Hypnotised,
  Infatuated,
  Invisible,
  Madness,
  Odourless,
  Provoked,
  Restrained,
  Silent,
  Sleeping,
  Stunned,
  Unconscious,
];
