import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Pole: Item = {
  name: "Pole",
  description: "A 3m long wooden pole. Can be used to probe pits and reach distant objects.",
  singleUse: false,
  slots: 2,
  defaultCost: 1,
  itemType: ItemType.Tool,
};
