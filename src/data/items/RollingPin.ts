import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const RollingPin: Item = {
  name: "Rolling knife",
  description:
    "A rolling pin for flattening dough.",
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
  itemType: ItemType.Tool,
};
