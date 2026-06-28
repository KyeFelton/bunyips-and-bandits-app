import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const HuntingKnife: Item = {
  name: "Hunting knife",
  description: "A sturdy fixed-blade knife used for field dressing game. Reliable in close combat.",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.SlashWeapon,
};
