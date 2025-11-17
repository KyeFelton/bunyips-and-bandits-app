import { Item } from "../../models/items";

export const Steroid: Item = {
  name: "Steroid",
  description:
    "Grants the Steroid Boost condition until your next rest, providing +1 bonus to strength and agility checks. If you already have this condition and consume another, you also take 2 damage. At most three Steroid Boost conditions can be active at one time.",
  immediateEffect: {
    condition: "Steroid Boost",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 110,
};
