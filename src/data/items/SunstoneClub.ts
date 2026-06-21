import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const SunstoneClub: Item = {
  name: "Sunstone club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
    {
      custom: "Your target is blinded.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2,
  itemType: ItemType.ForceWeapon,
};
