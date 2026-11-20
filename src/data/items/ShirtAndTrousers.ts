import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const ShirtAndTrousers: Item = {
  name: "Shirt and trousers",
  description: "A regular set of everyday cotton clothes.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
