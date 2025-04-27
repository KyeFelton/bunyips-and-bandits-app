import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
import { Effect } from "./effect";

export type Condition = {
  name: string;
  description: string;
  effects?: Effect[];
  stackable: boolean;
};

export const Amnesia: Condition = {
  name: "Amnesia",
  description: "You forget who you are and why you're here.",
  stackable: false,
};

export const Anosmic: Condition = {
  name: "Anosmic",
  description: "You cannot smell until the end of your next turn.",
  stackable: false,
};

export const Blocked: Condition = {
  name: "Blocked",
  description: "You cannot use psychic sense until the end of your next turn.",
  stackable: false,
};

export const Blinded: Condition = {
  name: "Blinded",
  description:
    "You cannot see visible or infrared light until the end of your next turn.",
  stackable: false,
};

export const Burning: Condition = {
  name: "Burning",
  description:
    "You take 1 fire damage at the start of each of your turns. After taking the damage, you may use an action to douse the flame and remove the status.",
  stackable: false,
};

export const Composed: Condition = {
  name: "Composed",
  description:
    "You cannot be detected by psychic sense until the end of your next turn.",
  stackable: false,
};

export const Deafened: Condition = {
  name: "Deafened",
  description:
    "You cannot hear sounds in the air or tremors in the earth or water until the end of your next turn.",
  stackable: false,
};

export const Deluded: Condition = {
  name: "Deluded",
  description:
    "Your perception of reality is warped. You may mistake people for monsters, monsters for people or have flashbacks of past experiences.",
  stackable: false,
};

export const Disoriented: Condition = {
  name: "Disoriented",
  description: "You are blind, deaf and anosmic.",
  stackable: false,
};

export const Empowered: Condition = {
  name: "Empowered",
  description: "You gain an evasion until your next turn.",
  stackable: true,
  effects: [
    {
      evasions: {
        bonus: 1,
      },
    },
  ],
};

export const Frightened: Condition = {
  name: "Frightened",
  description:
    "You're overwhelmed with fear, easily startled and flee from all danger. You even have trouble trusting your friends.",
  stackable: false,
};

export const Hysteria: Condition = {
  name: "Hysteria",
  description:
    "You experience uncontrollable emotional outbursts—laughing, crying, screaming.",
  stackable: false,
};

export const Hypnotised: Condition = {
  name: "Hypnotised",
  description:
    "You cannot harm the caster. You must obey any commands and act with the best interest of the caster. If you are attacked by anyone from the opposing side, this status is removed.",
  stackable: false,
};

export const Invisible: Condition = {
  name: "Invisible",
  description:
    "You cannot be detected through sight or infrared sight until your next turn.",
  stackable: false,
};

export const Madness: Condition = {
  name: "Madness",
  description: "You can only attack the closest creature near you.",
  stackable: false,
};

export const Odourless: Condition = {
  name: "Odourless",
  description: "You cannot be detected through smell until your next turn.",
  stackable: false,
};

export const ProtectedElectric: Condition = {
  name: "Protected - Electric",
  description: "You gain +1 armour for electric damage until your next turn.",
  stackable: true,
  effects: [
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 1,
      },
    },
  ],
};

export const ProtectedFire: Condition = {
  name: "Protected - Fire",
  description: "You gain +1 armour for fire damage until your next turn.",
  stackable: true,
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 1,
      },
    },
  ],
};

export const ProtectedForce: Condition = {
  name: "Protected - Force",
  description: "You gain +1 armour for force damage until your next turn.",
  stackable: true,
  effects: [
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
};

export const ProtectedSlash: Condition = {
  name: "Protected - Slash",
  description: "You gain +1 armour for slash damage until your next turn.",
  stackable: true,
  effects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 1,
      },
    },
  ],
};

export const ProtectedToxic: Condition = {
  name: "Protected - Toxic",
  description: "You gain +1 armour for toxic damage until your next turn.",
  stackable: true,
  effects: [
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 1,
      },
    },
  ],
};

export const Provoked: Condition = {
  name: "Provoked",
  description:
    "You must use at least one of your actions to attempt to harm the opponent who provoked you.",
  stackable: false,
};

export const Restrained: Condition = {
  name: "Restrained",
  description: "You cannot move on your next turn.",
  stackable: false,
  effects: [
    {
      speed: {
        locomotion: Locomotion.Climb,
        multiplier: 0,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Fly,
        multiplier: 0,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Swim,
        multiplier: 0,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Walk,
        multiplier: 0,
      },
    },
  ],
};

export const Silent: Condition = {
  name: "Silent",
  description:
    "You cannot be detected through hearing or tremor hearing until your next turn.",
  stackable: false,
};

export const Stunned: Condition = {
  name: "Stunned",
  description:
    "You lose an evasion until your next turn. If you have no evasions, then you lose an action on your next turn.",
  stackable: true,
  effects: [
    {
      evasions: {
        bonus: -1,
      },
    },
  ],
};

export const AllConditions = [
  Amnesia,
  Anosmic,
  Blocked,
  Blinded,
  Burning,
  Composed,
  Deafened,
  Deluded,
  Disoriented,
  Empowered,
  Frightened,
  Hysteria,
  Hypnotised,
  Invisible,
  Madness,
  Odourless,
  ProtectedElectric,
  ProtectedFire,
  ProtectedForce,
  ProtectedSlash,
  ProtectedToxic,
  Provoked,
  Restrained,
  Silent,
  Stunned,
];
