import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const RainbowScaleNecklace: Item = {
  name: "Rainbow scale necklace",
  description:
    "A necklace with a large, colourful scale believed to belong to the Rainbow Serpent.",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Nature,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 3000,
  itemType: ItemType.Accessory,
};
