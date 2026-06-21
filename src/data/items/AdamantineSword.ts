import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";
import { ItemType } from "../../enums/ItemType";

export const AdamantineSword: Item = {
  name: "Adamantine sword",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 6000,
  itemType: ItemType.SlashWeapon,
};
