import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const CrushedArm: Trait = {
  name: "Crushed arm",
  description:
    "Subtract 2 from {{skill:dexterity}} and {{skill:strength}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Dexterity,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Strength,
        bonus: -2,
      },
    },
  ],
};
