import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const LightningstoneClub: Item = {
  name: "Lightningstone club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
    {
      custom: "Your target is stunned.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2000,
  itemType: ItemType.ForceWeapon,
};
