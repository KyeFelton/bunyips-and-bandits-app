import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Stormcaller: Class = {
  name: "Stormcaller",
  description:
    "Stormcallers harness the raw power of wind and telekinetic force to dominate the battlefield. They excel at manipulating objects, controlling movement, and unleashing devastating aerial assaults.",
  skillBonuses: {
    [SkillType.Kinetic]: 1, // Grants Kinetic skill at level 1
  },
};
