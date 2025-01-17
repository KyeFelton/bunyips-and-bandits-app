import { SkillType } from "src/enums/SkillType";
import {
  Action,
  Charge,
  Decimate,
  Strike,
  Sweep,
  Swipe,
  Throw,
} from "./actions";
import {
  Instinctive,
  Opportunist,
  Strong,
  ThickSkin,
  Trait,
  Vigilant,
} from "./traits";

export type Path = {
  name: string;
  description: string;
  skillType: SkillType;
  unlockables: {
    level: number;
    actions: Action[];
    traits: Trait[];
  }[];
};

export const WeaponMaster: Path = {
  name: "Weapon Master",
  skillType: SkillType.Martial,
  description:
    "Weapon masters are trained warriors who excel in melee combat. They have learnt the techniques of martial arts to perfect their combat, and studied morphing to push their physical capabilities to the limit.",
  unlockables: [
    {
      level: 1,
      actions: [],
      traits: [Strong, Vigilant],
    },
    {
      level: 2,
      actions: [Swipe],
      traits: [Opportunist],
    },
    {
      level: 3,
      actions: [Charge],
      traits: [Strong, Vigilant],
    },
    {
      level: 4,
      actions: [Sweep],
      traits: [ThickSkin],
    },
    {
      level: 5,
      actions: [Decimate],
      traits: [Instinctive],
    },
  ],
};
