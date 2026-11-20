import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Robes: Item = {
  name: "Robes",
  description: "Flowing garments worn over a shirt and trousers, typically used for ceremonies or religious devotion.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
