import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Torch: Item = {
  name: "Torch",
  description: "Provides light for a near distance.",
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 2,
  itemType: ItemType.Gear,
};
