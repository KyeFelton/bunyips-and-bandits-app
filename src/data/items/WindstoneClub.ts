import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const WindstoneClub: Item = {
  name: "Windstone club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
    {
      custom: "Your target is knocked back a Near distance if medium sized or smaller.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2000,
  itemType: ItemType.Weapon,
};
