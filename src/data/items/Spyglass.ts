import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Spyglass: Item = {
  name: "Spyglass",
  description: "A spyglass for observing from afar.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
