import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Rations: Item = {
  name: "Rations",
  description: "One day of food and water supply for one person.",
  singleUse: true,
  slots: 0.25,
  stackable: true,
  defaultCost: 5,
  itemType: ItemType.Food,
};
