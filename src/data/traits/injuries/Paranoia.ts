import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const Paranoia: Trait = {
  name: "Paranoia",
  description:
    "You find it difficult to trust strangers or unfamiliar situations. You overthink situations and assume the worst. Subtract 2 from {{skill:charisma}} and {{skill:psychology}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Psychology,
        bonus: -2,
      },
    },
  ],
};
