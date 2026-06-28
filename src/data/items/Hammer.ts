import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Hammer: Item = {
  name: "Hammer",
  description: "A heavy iron-headed work hammer. Useful for driving nails or cracking skulls.",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.ForceWeapon,
};
