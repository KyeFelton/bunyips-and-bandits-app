import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";

export const FirstAidKit: Item = {
  name: "First aid kit",
  description: " You gain +1 bonus to healing checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Healing,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  weight: 1,
};
