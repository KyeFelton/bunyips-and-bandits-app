import { SkillType } from "../../enums/SkillType";
import { Path } from "../../models/paths";
import { Swipe, Plough, Guard, Decimate, Sweep } from "../actions";
import { Strong, Opportunist, Lethal, Vigilant, Instinctive } from "../traits";

export const WeaponMaster: Path = {
  name: "Weapon Master",
  skillTypes: [SkillType.Martial],
  description:
    "Weapon masters are trained warriors who excel in melee combat. They have learnt the techniques of martial arts to perfect their combat, and studied morphing to push their physical capabilities to the limit.",
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [Strong],
    },
    {
      level: 2,
      actions: [Swipe],
      traits: [],
    },
    {
      level: 3,
      actions: [],
      traits: [Opportunist],
    },
    {
      level: 4,
      actions: [Plough],
      traits: [],
    },
    {
      level: 5,
      actions: [],
      traits: [Lethal],
    },
    {
      level: 6,
      actions: [Guard],
      traits: [],
    },
    {
      level: 7,
      actions: [],
      traits: [Vigilant],
    },
    {
      level: 8,
      actions: [Decimate],
      traits: [],
    },
    {
      level: 9,
      actions: [],
      traits: [Instinctive],
    },
    {
      level: 10,
      actions: [Sweep],
      traits: [],
    },
  ],
};
