import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";
import { ItemType } from "../../enums/ItemType";

export const AdamantineSpear: Item = {
  name: "Adamantine spear",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Slash,
      },
    },
    {
      custom:
        "Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 6000,
  itemType: ItemType.SlashWeapon,
};
