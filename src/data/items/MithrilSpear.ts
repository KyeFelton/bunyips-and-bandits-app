import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilSpear: Item = {
  name: "Mithril spear",
  equippedEffects: [
    {
      weapon: {
        bonus: 4,
        damageType: DamageType.Slash,
      },
    },
    {
      custom:
        "Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 1000,
};
