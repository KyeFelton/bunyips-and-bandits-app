import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const LavastoneClub: Item = {
  name: "Lavastone club",
  description:
    "Your weapon attacks deal 1 force damage when wielded and your target catches fire.",
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
  defaultCost: 2000,
};
