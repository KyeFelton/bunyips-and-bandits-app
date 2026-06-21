import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";
import { ItemType } from "../../enums/ItemType";

export const AdamantineMace: Item = {
  name: "Adamantine mace",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 6000,
  itemType: ItemType.ForceWeapon,
};
