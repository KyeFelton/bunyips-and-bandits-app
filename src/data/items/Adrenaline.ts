import { Item } from "../../models/items";

export const Adrenaline: Item = {
  name: "Adrenaline",
  description:
    "When consumed, you gain a boost of energy. Increase stamina by 5. If you have already consumed adrenaline since your last rest, you take 1d6 damage.",
  effects: [
    {
      stamina: {
        bonus: 5,
      },
    },
  ],
  singleUse: true,
  weight: 0.2,
  defaultCost: 125,
};
