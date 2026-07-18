import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const Frightened: Trait = {
  name: "Frightened",
  description:
    "When in combat, you must pass a {{skill:willpower}} check to fight. Otherwise, you must either stay immobilised from fear, hide, or flee the battle. Subtract 2 from {{skill:willpower}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Willpower,
        bonus: -2,
      },
    },
  ],
};
