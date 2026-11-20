import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const RidingHabit: Item = {
  name: "Riding habit",
  description: "A fitted riding jacket paired with sturdy boots and long riding pants or skirt, designed for horseback riding.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
