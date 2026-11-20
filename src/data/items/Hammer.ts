import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Hammer: Item = {
  name: "Hammer",
  description:
    "A heavy iron-headed work hammer useful for driving nails. Deals 2 {{damage:force}} damage when wielded.",
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
