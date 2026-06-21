import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

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
  itemType: ItemType.Medical,
};
