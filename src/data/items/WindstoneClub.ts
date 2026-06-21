import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const WindstoneClub: Item = {
  name: "Windstone club",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
    {
      custom: "Your target is knocked back 5m if medium sized or smaller.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 2000,
};
