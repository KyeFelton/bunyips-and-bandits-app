import { SkillType } from "../../../enums/SkillType";
import { Trait } from "../../../models/traits";

export const RuinedLeg: Trait = {
  name: "Ruined leg",
  description:
    "You cannot dash. Subtract 2 from {{skill:agility}} checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: -2,
      },
    },
  ],
};
