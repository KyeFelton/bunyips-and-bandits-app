import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Tucker: Item = {
  name: "Tucker",
  description: "One day of food supply for one person.",
  singleUse: true,
  slots: 0.25,
  stackable: true,
  defaultCost: 5,
  itemType: ItemType.Food,
};
