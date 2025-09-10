import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const EnchantedClub: Item = {
  name: "Enchanted club",
  description:
    "Your weapon attacks deal 2 force damage when wielded and your target loses 2 morale.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  weight: 1.5,
  defaultCost: 2,
};
