import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Scythe: Item = {
  name: "Scythe",
  description: "A long-handled farming tool with a curved blade. Unwieldy but brutal in close combat.",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  itemType: ItemType.SlashWeapon,
};
