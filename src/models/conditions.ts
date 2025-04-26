import { Effect } from "./effect";

export type Condition = {
  name: string;
  description: string;
  effect?: Effect;
};

export const Deluded: Condition = {
  name: "Deluded",
  description:
    "Your perception of reality is warped. You may mistake people for monsters, monsters for people or have flashbacks of past experiences.",
};

export const Hysteric: Condition = {
  name: "Hysteric",
  description:
    "You experience uncontrollable emotional outbursts—laughing, crying, screaming.",
};

export const Amnesiac: Condition = {
  name: "Amnesiac",
  description: " You forget who you are and why you’re here.",
};

export const Frightened: Condition = {
  name: "Frightened",
  description:
    "You’re overwhelmed with fear, easily startled and flee from all danger. You even have trouble trusting your friends.",
};

export const AllConditions = [Deluded, Hysteric, Amnesiac, Frightened];
