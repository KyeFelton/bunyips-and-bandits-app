import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const BillyCan: Item = {
  name: "Billy can",
  description: "A metal pot for cooking.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
