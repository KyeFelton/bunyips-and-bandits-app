import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const WalkingStaff: Item = {
  name: "Walking staff",
  description: "A stout wooden staff, useful for travel and capable of delivering a firm strike.",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  itemType: ItemType.ForceWeapon,
};
