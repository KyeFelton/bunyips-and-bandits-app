import { Item } from "../../models/items";

export const Adrenaline: Item = {
  name: "Adrenaline",
  description:
    "Grants the Adrenaline Rush condition until your next rest, increasing maximum stamina by 5. If you already have this condition and consume another, you take 2 damage.",
  immediateEffect: {
    stamina: 5,
    condition: "Adrenaline Rush",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 125,
};
