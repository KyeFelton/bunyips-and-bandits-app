import { SkillType } from "../../enums/SkillType";
import { Trait } from "./../../models/traits";

export const SharpEars: Trait = {
  name: "Sharp ears",
  description:
    "Your hearing sharpens, granting you +3 bonus to hearing checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Hearing,
        bonus: 3,
      },
    },
  ],
};
