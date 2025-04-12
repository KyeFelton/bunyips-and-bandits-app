import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const AdamantineSpear: Item = {
  name: "Adamantine spear",
  description:
    "Your weapon attacks deal 7 slash damage when wielded. Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
  effects: [
    {
      weapon: {
        bonus: 7,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  weight: 1.2,
  defaultCost: 6000,
};
