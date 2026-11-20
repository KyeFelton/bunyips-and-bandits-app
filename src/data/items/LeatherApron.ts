import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const LeatherApron: Item = {
  name: "Leather apron",
  description: "A leather apron to protect clothes.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
