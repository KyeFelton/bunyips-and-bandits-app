import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const Madness: Trait = {
  name: "Madness",
  description:
    "You are easily provoked. Subtract 2 from {{skill:perception}}, {{skill:nature}} and {{skill:lore}} checks. Roll intimidation checks with advantage.",
  effects: [
    {
      skill: {
        skillType: SkillType.Perception,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Nature,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Lore,
        bonus: -2,
      },
    },
  ],
};
