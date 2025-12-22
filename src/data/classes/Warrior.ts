import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";
import { Fighter } from "../traits";

export const Warrior: Class = {
  name: "Warrior",
  description:
    "Warriors are trained fighters who excel in melee combat. They have learnt the techniques of martial arts to perfect their combat, and studied morphing to push their physical capabilities to the limit.",
  skillBonuses: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 1,
  },
  startingTraits: [Fighter],
};
