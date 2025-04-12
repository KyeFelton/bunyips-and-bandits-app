import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const WindstoneClub: Item = {
  name: "Windstone club",
  description:
    "Your weapon attacks deal 4 force damage when wielded and your target is knocked back 5m if medium sized or smaller.",
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
