import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SkillType } from "../../enums/SkillType";

export const HerbalPouch: Item = {
  name: "Herbal pouch",
  description:
    "A small leather pouch stocked with an assortment of dried medicinal herbs and roots.",
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
  itemType: ItemType.Gear,
};
