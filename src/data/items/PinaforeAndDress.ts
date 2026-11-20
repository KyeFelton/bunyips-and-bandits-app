import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const PinaforeAndDress: Item = {
  name: "Pinafore and dress",
  description: "A simple dress worn beneath a protective pinafore, commonly associated with domestic work.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
