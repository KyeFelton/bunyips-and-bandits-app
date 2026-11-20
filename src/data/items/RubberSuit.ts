import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const RubberSuit: Item = {
  name: "Rubber suit",
  equippedEffects: [
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2000,
  itemType: ItemType.Armour,
};
