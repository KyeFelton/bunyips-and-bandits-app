import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import { Sweep } from "../actions";
import {
  Fighter,
  Vigilant,
  GuardTrait,
  Bulldozer,
  Swift,
  Rage,
  Taunt,
  Opportunist,
  FighterII,
} from "../traits";

export const Warrior: Path = {
  name: "Warrior",
  skillTypes: [SkillType.Strength, SkillType.Agility],
  description:
    "Warriors are trained fighters who excel in melee combat. They have learnt the techniques of martial arts to perfect their combat, and studied morphing to push their physical capabilities to the limit.",
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [Fighter],
    },
    {
      level: 2,
      actions: [],
      traits: [Vigilant],
    },
    {
      level: 3,
      actions: [],
      traits: [GuardTrait],
    },
    {
      level: 4,
      actions: [],
      traits: [Bulldozer],
    },
    {
      level: 5,
      actions: [Sweep],
      traits: [],
    },
    {
      level: 6,
      actions: [],
      traits: [Swift],
    },
    {
      level: 7,
      actions: [],
      traits: [Rage],
    },
    {
      level: 8,
      actions: [],
      traits: [Taunt],
    },
    {
      level: 9,
      actions: [],
      traits: [Opportunist],
    },
    {
      level: 10,
      actions: [],
      traits: [FighterII],
    },
  ],
};
