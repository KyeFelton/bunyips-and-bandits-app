import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const Depression: Trait = {
  name: "Depression",
  description:
    "You lose interest in your current objective, and are hard to motivate. Subtract 2 from {{skill:charisma}} and {{skill:willpower}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Willpower,
        bonus: -2,
      },
    },
  ],
};
