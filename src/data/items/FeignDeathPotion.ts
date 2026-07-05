import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FeignDeathPotion: Item = {
  name: "Feign death potion",
  consumedEffect: {
    custom:
      "For 1 hour, you are unconscious and appear dead. You cannot take actions, but you remain aware of your surroundings.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 800,
  itemType: ItemType.Concoction,
};
