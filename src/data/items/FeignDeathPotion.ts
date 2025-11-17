import { Item } from "../../models/items";

export const FeignDeathPotion: Item = {
  name: "Feign death potion",
  description:
    "When consumed, grants the Feign Death condition for 1hr. You appear dead to others but remain aware of your surroundings. For each additional potion you take within the same day, you take 1d4 toxic damage.",
  immediateEffect: {
    condition: "Feign Death",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 800,
};
