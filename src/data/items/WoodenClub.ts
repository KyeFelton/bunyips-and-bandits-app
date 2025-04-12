import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const WoodenClub: Item = {
  name: "Wooden club",
  description: "Your weapon attacks deal 3 force damage when wielded.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 3,
      },
    },
  ],
  singleUse: false,
  weight: 1.5,
  defaultCost: 10,
};
