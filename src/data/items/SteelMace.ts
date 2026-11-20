import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const SteelMace: Item = {
  name: "Steel mace",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 500,
  itemType: ItemType.Weapon,
};
