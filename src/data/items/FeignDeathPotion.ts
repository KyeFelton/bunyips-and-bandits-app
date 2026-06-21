import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FeignDeathPotion: Item = {
  name: "Feign death potion",
  consumedEffect: {
    condition: "Feign Death",
    custom:
      "Lasts 1hr. You appear dead to others but remain aware of your surroundings. For each additional potion you take within the same day, you take 1d4 toxic damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 800,
  itemType: ItemType.Concoction,
};
