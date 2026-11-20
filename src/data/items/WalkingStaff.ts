import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const WalkingStaff: Item = {
  name: "Walking staff",
  description:
    "A stout wooden staff, useful for travel.",
  equippedEffects: [
    {
      weapon: {
        bonus: 1,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
