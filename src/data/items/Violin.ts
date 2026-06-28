import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Violin: Item = {
  name: "Violin",
  description: "A simple but well-made fiddle, worn smooth from years of playing.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Gear,
};
