import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const MithrilMace: Item = {
  name: "Mithril mace",
  equippedEffects: [
    {
      weapon: {
        bonus: 4,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 1000,
  itemType: ItemType.ForceWeapon,
};
