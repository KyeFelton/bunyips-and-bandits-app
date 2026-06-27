import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Rope: Item = {
  name: "Rope (10m)",
  description: "Sturdy hemp rope for climbing, binding, or hauling.",
  singleUse: false,
  slots: 1,
  defaultCost: 10,
  itemType: ItemType.Gear,
};
