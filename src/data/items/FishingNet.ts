import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FishingNet: Item = {
  name: "Fishing net",
  description: "A weighted cast net for catching fish or entangling small creatures. Can be thrown to restrain a target.",
  singleUse: false,
  slots: 2,
  itemType: ItemType.Gear,
};
