import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const LavastoneClub: Item = {
  name: "Lavastone club",
  description:
    "Your weapon attacks deal 4 force damage when wielded and your target catches fire.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 4,
      },
    },
  ],
  singleUse: false,
  weight: 2.0,
  defaultCost: 2000,
};
