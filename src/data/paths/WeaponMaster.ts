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
      actions: [Swipe],
      traits: [Strong],
    },
    {
      level: 2,
      actions: [Plough],
      traits: [Opportunist],
    },
    {
      level: 3,
      actions: [Guard],
      traits: [Lethal],
    },
    {
      level: 4,
      actions: [Decimate],
      traits: [Vigilant],
    },
    {
      level: 5,
      actions: [Sweep],
      traits: [Instinctive],
    },
  ],
};
