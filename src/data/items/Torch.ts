import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Torch: Item = {
  name: "Torch",
  description: "When lit, provides light for a Near distance for 1 hour.",
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 2,
  itemType: ItemType.Tool,
};
