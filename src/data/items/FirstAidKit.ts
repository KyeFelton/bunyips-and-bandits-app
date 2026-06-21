import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";

export const FirstAidKit: Item = {
  name: "First aid kit",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Biotic,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  slots: 1,
};
