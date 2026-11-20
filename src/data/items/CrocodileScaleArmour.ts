import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const CrocodileScaleArmour: Item = {
  name: "Crocodile scale armour",
  equippedEffects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  itemType: ItemType.Armour,
  slots: 3,
  defaultCost: 3500,
};
