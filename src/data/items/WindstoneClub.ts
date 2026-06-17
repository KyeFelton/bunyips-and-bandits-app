import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const WindstoneClub: Item = {
  name: "Windstone club",
  description:
    "Your weapon attacks deal 1 force damage when wielded and your target is knocked back 5m if medium sized or smaller.",
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
