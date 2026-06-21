import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { WearType } from "../../enums/WearType";

export const RainbowScaleNecklace: Item = {
  name: "Rainbow scale necklace",
  description:
    "A large, colourful scale believed to belong to the Rainbow Serpent.",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Nature,
        bonus: 2,
      },
    },
    {
      skill: {
        skillType: SkillType.Spirit,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  wearType: WearType.Accessory,
  slots: 1,
  defaultCost: 3000,
  itemType: ItemType.Gemstone,
};
