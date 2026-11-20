import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const MagnifyingGlass: Item = {
  name: "Magnifying glass",
  description: "A magnifying glass to help for close inspection.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
