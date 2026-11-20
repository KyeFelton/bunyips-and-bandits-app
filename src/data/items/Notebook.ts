import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Notebook: Item = {
  name: "Notebook",
  description: "A paper notebook with quill and ink.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
