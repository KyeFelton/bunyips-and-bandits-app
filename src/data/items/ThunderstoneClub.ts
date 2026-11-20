import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const ThunderstoneClub: Item = {
  name: "Thunderstone club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
    {
      custom: "Your target is deafened.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2000,
  itemType: ItemType.Weapon,
};
