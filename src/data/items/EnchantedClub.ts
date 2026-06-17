import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const EnchantedClub: Item = {
  name: "Enchanted club",
  description:
    "Your weapon attacks deal 2 force damage and stun enemies when wielded.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2,
};
