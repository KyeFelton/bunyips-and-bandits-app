import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilSpear: Item = {
  name: "Mithril spear",
  description:
    "Your weapon attacks deal 6 slash damage when wielded. Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
  effects: [
    {
      weapon: {
        bonus: 6,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  weight: 1.5,
  defaultCost: 1000,
};
