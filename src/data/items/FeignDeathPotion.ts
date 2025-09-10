import { Item } from "../../models/items";

export const FeignDeathPotion: Item = {
  name: "Feign death potion",
  description:
    "When consumed, you are knocked unconscious for 1hr. You show no signs of life and appear dead to others. For each additional potion you take within the same day, you take 1d4 toxic damage.",
  effects: [],
  singleUse: true,
  weight: 0.2,
  defaultCost: 800,
};
