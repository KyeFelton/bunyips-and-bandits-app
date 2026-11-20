import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Pickaxe: Item = {
  name: "Pickaxe",
  description:
    "A heavy iron pick used for breaking rock. ",
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
  itemType: ItemType.Weapon,
};
