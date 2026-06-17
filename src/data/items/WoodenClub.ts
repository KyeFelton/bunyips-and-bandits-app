import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const WoodenClub: Item = {
  name: "Wooden club",
  description: "Your weapon attacks deal 1 force damage when wielded.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 10,
};
