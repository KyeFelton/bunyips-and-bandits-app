import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SkillType } from "../../enums/SkillType";
import { WearType } from "../../enums/WearType";

export const FineClothes: Item = {
  name: "Fine clothes",
  description: "Well-tailored garments that command respect in any room.",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  slots: 0,
  wearType: WearType.Clothes,
  itemType: ItemType.Clothing,
};
