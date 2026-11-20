import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SpiceKit: Item = {
  name: "Spice kit",
  description: "A bag containing many fragrant spices.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
