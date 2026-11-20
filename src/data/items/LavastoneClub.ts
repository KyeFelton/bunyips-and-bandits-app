import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const LavastoneClub: Item = {
  name: "Lavastone club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
    {
      custom: "Your target catches fire.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2000,
  itemType: ItemType.Weapon,
};
