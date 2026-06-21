import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const EnchantedClub: Item = {
  name: "Enchanted club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
    {
      custom: "Stun enemies when wielded.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2,
};
