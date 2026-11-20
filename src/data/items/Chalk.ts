import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Chalk: Item = {
  name: "Chalk",
  description: "A satchel of powder chalk to get a better grip.",
  singleUse: false,
  slots: 1,
  defaultCost: 1,
  itemType: ItemType.Tool,
};
