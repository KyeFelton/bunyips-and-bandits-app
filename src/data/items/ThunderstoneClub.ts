import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const ThunderstoneClub: Item = {
  name: "Thunderstone club",
  description:
    "Your weapon attacks deal 1 force damage when wielded and your target is deafened.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  weight: 2.0,
  defaultCost: 2000,
};
