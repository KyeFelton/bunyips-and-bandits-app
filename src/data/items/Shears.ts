import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Shears: Item = {
  name: "Shears",
  description: "A pair of steel shears for shearing wool.",
  singleUse: false,
  slots: 1,
  defaultCost: 2,
  itemType: ItemType.Tool,
};
